/**
 * WordPress dependencies
 */
import { store, getContext } from "@wordpress/interactivity";

// view.js
interface TContext {
	postId: number;
	contextIsLiked: boolean;
	contextLikeCount: number;
}

interface TState {
	likeButtonNonce: string;
	ajaxUrl: string;
	userId: number;
	isLiked: boolean;
	likeCount: number;
	isLoading: boolean;
	likeData: {
		[postID: number]:
			| {
					likeCount: number;
					isLiked: boolean;
			  }
			| undefined;
	};
	loadingList: number[];
}

const { state } = store("ncmazfse-core/like-button", {
	state: {
		get isLiked() {
			const { contextIsLiked, postId } = getContext<TContext>();
			return state.likeData?.[postId]
				? state.likeData[postId].isLiked
				: contextIsLiked;
		},
		get likeCount() {
			const { contextLikeCount, postId } = getContext<TContext>();
			return state.likeData?.[postId]
				? state.likeData[postId].likeCount
				: contextLikeCount;
		},
		get isLoading() {
			const { postId } = getContext<TContext>();
			return state.loadingList.includes(postId);
		},
	} as TState,
	actions: {
		handleLike: () => {
			const context = getContext<TContext>();
			console.log("like actions -- handle like", context);
			const { postId } = context;

			try {
				// Update the state
				state.loadingList.push(postId);

				// Send the data to the server
				const formData = new FormData();
				formData.append("action", "handle_like");
				formData.append("_ajax_nonce", state.likeButtonNonce);
				formData.append("post_id", postId.toString());
				formData.append("user_id", state.userId.toString());
				formData.append("handle", state.isLiked ? "remove" : "add");

				fetch(state.ajaxUrl, {
					method: "POST",
					body: formData,
				})
					.then((response) => response.json())
					.then(({ data, success }) => {
						if (!success) {
							throw new Error("Server error");
						}
						const isLiked = Boolean(data.is_liked);
						let likeCount = 0;

						if (isLiked) {
							likeCount = context.contextLikeCount + 1;
						} else if (context.contextLikeCount > 0) {
							likeCount = context.contextLikeCount - 1;
						}

						// Update the local-context
						context.contextLikeCount = likeCount;
						context.contextIsLiked = isLiked;

						state.likeData = {
							...state.likeData,
							[postId]: {
								likeCount,
								isLiked,
							},
						};

						if (!state.userId) {
							// Update local storage
							const likedPosts = localStorage.getItem("likedPosts");
							const likedPostsArray = likedPosts ? JSON.parse(likedPosts) : [];
							if (isLiked) {
								likedPostsArray.push(postId);
							} else {
								const index = likedPostsArray.indexOf(postId);
								if (index > -1) {
									likedPostsArray.splice(index, 1);
								}
							}
							localStorage.setItem(
								"likedPosts",
								JSON.stringify(likedPostsArray),
							);
						}
					})
					.finally(() => {
						state.loadingList = state.loadingList.filter((id) => id !== postId);
					});
			} catch (e) {
				// Something went wrong!
				console.log("Error Server data!", e);
				state.loadingList = state.loadingList.filter((id) => id !== postId);
			}
		},
	},
	callbacks: {
		logHandleLikeInit: () => {
			const context = getContext<TContext>();

			console.log("like callbacks -- update local storage", {
				context,
				state,
			});
			// if user is not logged in
			if (!state.userId) {
				// check from local storage
				const likedPosts = localStorage.getItem("likedPosts");
				const likedPostsArray = likedPosts ? JSON.parse(likedPosts) : [];
				context.contextIsLiked = likedPostsArray.includes(context.postId);
			}
		},
	},
});

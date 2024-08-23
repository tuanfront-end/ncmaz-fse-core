/**
 * WordPress dependencies
 */
import { store, getContext } from "@wordpress/interactivity";

// view.js
interface TContext {
	isLiked: boolean;
	postId: number;
	postLikesCount: number;
	loading: boolean;
}

interface TState {
	likeButtonNonce: string;
	ajaxUrl: string;
	userId: number;
}

const { state } = store("ncmazfse-core", {
	state: {} as TState,
	actions: {
		handleLike: () => {
			const context = getContext<TContext>();

			try {
				// Update the state
				context.loading = true;

				// Send the data to the server
				const formData = new FormData();
				formData.append("action", "handle_like");
				formData.append("_ajax_nonce", state.likeButtonNonce);
				formData.append("post_id", context.postId.toString());
				formData.append("user_id", state.userId.toString());
				formData.append("handle", context.isLiked ? "remove" : "add");

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
						context.isLiked = isLiked;
						if (isLiked) {
							context.postLikesCount = context.postLikesCount + 1;
						} else if (context.postLikesCount > 0) {
							context.postLikesCount = context.postLikesCount - 1;
						}

						if (!state.userId) {
							// Update local storage
							const postId = context.postId;
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
						context.loading = false;
					});
			} catch (e) {
				// Something went wrong!
				console.log("Error Server data!", e);
				context.loading = false;
			}
		},
	},
	callbacks: {
		logHandleLikeInit: () => {
			const context = getContext<TContext>();
			console.log("like callbacks init");

			// if user is not logged in
			if (!state.userId) {
				// check from local storage
				const postId = context.postId;
				const likedPosts = localStorage.getItem("likedPosts");
				const likedPostsArray = likedPosts ? JSON.parse(likedPosts) : [];
				context.isLiked = likedPostsArray.includes(postId);
				console.log("like callbacks -- update local storage", context.isLiked);
			}
		},
	},
});

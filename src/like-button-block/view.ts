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
			const { postId } = context;

			try {
				// Update the state
				state.loadingList.push(postId);

				// Get the nonce
				const noneFormData = new FormData();
				noneFormData.append("action", "get_like_save_view_block_nonce");
				noneFormData.append("block_type", "like_button");

				// Send the data to the server
				const formData = new FormData();
				formData.append("action", "handle_like");
				formData.append("post_id", postId.toString());
				formData.append("user_id", state.userId.toString());
				formData.append("handle", state.isLiked ? "remove" : "add");

				fetch(state.ajaxUrl, {
					method: "POST",
					body: noneFormData,
				})
					.then((res1) => res1.json())
					.then((nonceData) => {
						if (!nonceData?.success) {
							throw new Error("Server error");
						}

						// add the nonce to the form data
						formData.append("_ajax_nonce", nonceData?.data?.nonce);

						fetch(state.ajaxUrl, {
							method: "POST",
							body: formData,
						})
							.then((res2) => res2.json())
							.then(({ data, success }) => {
								if (!success) {
									throw new Error("Server error");
								}

								const isLiked = Boolean(data.is_liked);
								let likeCount = data.like_count;

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
							})
							.finally(() => {
								state.loadingList = state.loadingList.filter(
									(id) => id !== postId,
								);
							});
					})
					.catch((e) => {
						console.log("Error Server data!", e);
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
		logHandleLikeInit: () => {},
	},
});

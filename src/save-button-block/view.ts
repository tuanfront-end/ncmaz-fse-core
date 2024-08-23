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
	nonce: string;
	ajaxUrl: string;
	userId: number;
}

const { state } = store("ncmazfse-core", {
	state: {} as TState,
	actions: {
		handleLike: () => {
			const context = getContext<TContext>();
			if (!state.userId) {
				console.log("User is not logged in!");
				return;
			}

			try {
				// Update the state
				context.loading = true;

				// Send the data to the server
				const formData = new FormData();
				formData.append("action", "handle_like");
				formData.append("_ajax_nonce", state.nonce);
				formData.append("post_id", context.postId.toString());
				formData.append("user_id", state.userId.toString());

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
		logHandleLike: () => {
			const { isLiked, postLikesCount } = getContext<TContext>();
			console.log("callbacks", { isLiked, postLikesCount, state });
		},
	},
});

/**
 * WordPress dependencies
 */
import { store, getContext } from "@wordpress/interactivity";

// view.js
interface TContext {
	isSaved: boolean;
	postId: number;
	postSavesCount: number;
	loading: boolean;
}

interface TState {
	saveButtonNonce: string;
	ajaxUrl: string;
	userId: number;
}

const { state } = store("ncmazfse-core", {
	state: {} as TState,
	actions: {
		handleSave: () => {
			const context = getContext<TContext>();

			try {
				// Update the state
				context.loading = true;

				// Send the data to the server
				const formData = new FormData();
				formData.append("action", "handle_save");
				formData.append("_ajax_nonce", state.saveButtonNonce);
				formData.append("post_id", context.postId.toString());
				formData.append("user_id", state.userId.toString());
				formData.append("handle", context.isSaved ? "remove" : "add");

				fetch(state.ajaxUrl, {
					method: "POST",
					body: formData,
				})
					.then((response) => response.json())
					.then(({ data, success }) => {
						if (!success) {
							throw new Error("Server error");
						}
						const isSaved = Boolean(data.is_saved);
						context.isSaved = isSaved;
						if (isSaved) {
							context.postSavesCount = context.postSavesCount + 1;
						} else if (context.postSavesCount > 0) {
							context.postSavesCount = context.postSavesCount - 1;
						}

						if (!state.userId) {
							// Update local storage
							const postId = context.postId;
							const savedPosts = localStorage.getItem("savedPosts");
							const savedPostsArray = savedPosts ? JSON.parse(savedPosts) : [];
							if (isSaved) {
								savedPostsArray.push(postId);
							} else {
								const index = savedPostsArray.indexOf(postId);
								if (index > -1) {
									savedPostsArray.splice(index, 1);
								}
							}
							localStorage.setItem(
								"savedPosts",
								JSON.stringify(savedPostsArray),
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
		logHandleSaveInit: () => {
			const context = getContext<TContext>();
			console.log("save callbacks init");

			// if user is not logged in
			if (!state.userId) {
				// check from local storage
				const postId = context.postId;
				const savedPosts = localStorage.getItem("savedPosts");
				const savedPostsArray = savedPosts ? JSON.parse(savedPosts) : [];
				context.isSaved = savedPostsArray.includes(postId);
				console.log("save callbacks -- update local storage", context.isSaved);
			}
		},
	},
});

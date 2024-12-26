/**
 * WordPress dependencies
 */
import { store, getContext } from "@wordpress/interactivity";

// view.js
interface TContext {
	postId: number;
	contextIsSaved: boolean;
	contextSaveCount: number;
}

interface TState {
	ajaxUrl: string;
	userId: number;
	saveCount: number;
	isSaved: boolean;
	isLoading: boolean;
	saveData: {
		[postID: number]:
			| {
					saveCount: number;
					isSaved: boolean;
			  }
			| undefined;
	};
	loadingList: number[];
}

const { state } = store("ncmfse/save-button-btn", {
	state: {
		get isSaved() {
			const { contextIsSaved, postId } = getContext<TContext>();
			return state.saveData?.[postId]
				? state.saveData[postId].isSaved
				: contextIsSaved;
		},
		get saveCount() {
			const { contextSaveCount, postId } = getContext<TContext>();
			return state.saveData?.[postId]
				? state.saveData[postId].saveCount
				: contextSaveCount;
		},
		get isLoading() {
			const { postId } = getContext<TContext>();
			return state.loadingList.includes(postId);
		},
	} as TState,
	actions: {
		handleSave: () => {
			const context = getContext<TContext>();
			const { postId } = context;

			try {
				// Update the state
				state.loadingList.push(postId);

				// Get the nonce
				const noneFormData = new FormData();
				noneFormData.append("action", "get_like_save_view_block_nonce");
				noneFormData.append("block_type", "save_button");

				// Send the data to the server
				const formData = new FormData();
				formData.append("action", "handle_save");
				formData.append("post_id", postId.toString());
				formData.append("user_id", state.userId.toString());
				formData.append("handle", state.isSaved ? "remove" : "add");

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
							.then((response) => response.json())
							.then(({ data, success }) => {
								if (!success) {
									throw new Error("Server error");
								}
								const isSaved = Boolean(data.is_saved);
								let saveCount = data.save_count;

								// Update the local-context
								context.contextSaveCount = saveCount;
								context.contextIsSaved = isSaved;

								state.saveData = {
									...state.saveData,
									[postId]: {
										isSaved,
										saveCount,
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
		logHandleSaveInit: () => {},
	},
});

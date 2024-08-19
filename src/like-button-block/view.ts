/**
 * WordPress dependencies
 */
import { store, getContext } from "@wordpress/interactivity";

// view.js
interface TContext {
	isOpen: boolean;
}

interface TState {
	nonce: string;
	ajaxUrl: string;
}

const { state } = store("ncmazfse-core", {
	state: {} as TState,
	actions: {
		toggle: () => {
			const context = getContext<TContext>();
			context.isOpen = !context.isOpen;
			console.log("actions", { state, context });
		},
		handleLike: () => {
			try {
				const formData = new FormData();
				formData.append("action", "handle_like");
				formData.append("_ajax_nonce", state.nonce);

				const data = fetch(state.ajaxUrl, {
					method: "POST",
					body: formData,
				})
					.then((response) => {
						console.log("Server data!", data);
						return response.json();
					})
					.catch((error) => {
						console.log("Error Server data!", error);
					});
			} catch (e) {
				// Something went wrong!
				console.log("Error Server data!", e);
			}
		},
	},
	callbacks: {
		logIsOpen: () => {
			const context = getContext<TContext>();
			console.log("callbacks", { state, context });
		},
	},
});

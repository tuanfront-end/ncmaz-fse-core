/**
 * WordPress dependencies
 */
import { store, getContext } from "@wordpress/interactivity";

// view.js
interface TContext {
	showSuccessMessage: boolean;
	loading: boolean;
	showError: boolean;
	errorMesssage: string;
	mailpoetListId: string;
}

interface TState {
	mailpoetFormNonce: string;
	ajaxUrl: string;
}

const { state } = store("ncmfse/mailpoet-subscription-form", {
	state: {} as TState,
	actions: {
		onSubmitForm: (e: React.SyntheticEvent) => {
			const context = getContext<TContext>();
			e.preventDefault();

			if (context.loading) {
				return;
			}

			context.loading = true;
			context.showError = false;
			context.showSuccessMessage = false;

			try {
				// Send the data to the server
				const formData = new FormData();
				formData.append("action", "add_subscriber_to_mailpoet_list");
				formData.append("_ajax_nonce", state.mailpoetFormNonce);
				formData.append("mailpoet_list_id", context.mailpoetListId);

				const target = e.target as typeof e.target & {
					name: { value: string };
					email: { value: string };
				};
				const email = target.email.value; // typechecks!
				const name = target.name.value; // typechecks!

				formData.append("name", name);
				formData.append("email", email);

				fetch(state.ajaxUrl, {
					method: "POST",
					body: formData,
				})
					.then((response) => response.json())
					.then(({ data, success }) => {
						if (!success) {
							context.showError = true;
							if (typeof data === "string") context.errorMesssage = data;
						} else {
							context.showSuccessMessage = true;
						}
					})
					.finally(() => {
						context.loading = false;
					});
			} catch (e) {
				console.log("Error Server data!", e);
				context.loading = false;
				context.showError = true;
				context.errorMesssage = "Error Server data!";
			}
		},
	},
	callbacks: {},
});

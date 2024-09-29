import { store, getContext } from "@wordpress/interactivity";

interface TContext {}

interface TState {
	progressText: string;
}

const { state } = store("ncmfse/reading-progress", {
	state: {
		get progressText() {
			const context = getContext<TContext>();
			return "xx0%";
		},
	} as TState,
	actions: {},
	callbacks: {
		handleInit: () => {
			const context = getContext<TContext>();
			console.log(1, context);
		},
	},
});

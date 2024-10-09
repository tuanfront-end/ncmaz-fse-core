import { store, getContext } from "@wordpress/interactivity";

interface TContext {
	queryId: string;
}

interface TState {}

const { state } = store("ncmfse/snap-scroll-arrow-next", {
	state: {} as TState,
	actions: {
		handleClick: () => {
			const context = getContext<TContext>();
			const { queryId } = context;

			// get selector element co attr data-ncmfse-snap-scroll-id = queryId
			const snapScrollEl = document.querySelector(
				`[data-ncmfse-snap-scroll-id="${queryId}"]`,
			);
			if (!snapScrollEl) {
				return;
			}

			// get snap scroll itemEl: first child of snapScrollEl
			const snapScrollItemEl = snapScrollEl.firstElementChild;
			if (!snapScrollItemEl) {
				return;
			}

			snapScrollEl.scrollBy({
				left: snapScrollItemEl.clientWidth,
				behavior: "smooth",
			});
		},
	},
	callbacks: {},
});

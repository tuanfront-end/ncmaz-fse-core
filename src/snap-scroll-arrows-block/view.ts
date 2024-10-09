import { store, getContext } from "@wordpress/interactivity";
import { debounce } from "../utils/utils";

interface TContext {
	queryId: string;
}

interface TState {}

const handleScroll = (queryId: string, snapScrollEl: Element) => {
	const snapScrollItemEl = snapScrollEl.firstElementChild;
	if (!snapScrollItemEl) {
		return;
	}

	const snapScrollElScrollLeft = snapScrollEl.scrollLeft;
	const snapScrollElScrollWidth = snapScrollEl.scrollWidth;

	// get snap scroll arrow previous element
	const snapScrollArrowPreviousEl = document.querySelector(
		`[data-ncmfse-snap-scroll-arrow-previous="${queryId}"]`,
	);

	// get snap scroll arrow next element
	const snapScrollArrowNextEl = document.querySelector(
		`[data-ncmfse-snap-scroll-arrow-next="${queryId}"]`,
	);

	if (!snapScrollArrowNextEl && !snapScrollArrowPreviousEl) {
		return;
	}

	if (snapScrollElScrollLeft <= 0) {
		snapScrollArrowPreviousEl?.classList.add("is-disabled");
		snapScrollArrowPreviousEl?.setAttribute("disabled", "");
	} else {
		snapScrollArrowPreviousEl?.classList.remove("is-disabled");
		snapScrollArrowPreviousEl?.removeAttribute("disabled");
	}

	if (
		snapScrollElScrollLeft + snapScrollEl.clientWidth >=
		snapScrollElScrollWidth
	) {
		snapScrollArrowNextEl?.classList.add("is-disabled");
		snapScrollArrowNextEl?.setAttribute("disabled", "");
	} else {
		snapScrollArrowNextEl?.classList.remove("is-disabled");
		snapScrollArrowNextEl?.removeAttribute("disabled");
	}
};

const { state } = store("ncmfse/snap-scroll-arrows", {
	state: {} as TState,
	actions: {},
	callbacks: {
		handleInit: () => {
			const { queryId } = getContext<TContext>();

			// get selector element co attr data-ncmfse-snap-scroll-id = queryId
			const snapScrollEl = document.querySelector(
				`[data-ncmfse-snap-scroll-id="${queryId}"]`,
			);
			if (!snapScrollEl) {
				return;
			}

			// add event listener for snapScrollEl
			snapScrollEl.addEventListener(
				"scroll",
				debounce(() => {
					handleScroll(queryId, snapScrollEl);
				}, 500),
			);
		},
	},
});

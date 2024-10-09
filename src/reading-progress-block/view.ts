import { store, getContext } from "@wordpress/interactivity";

interface TContext {
	selector: string;
	isShowScrollToTop: boolean;
	progressText: string;
}

interface TState {}

const { state } = store("ncmfse/reading-progress", {
	state: {} as TState,
	actions: {
		handleScrollToTop: () => {
			window.scrollTo({ top: 0, behavior: "smooth" });
		},
	},
	callbacks: {
		handleInit: () => {
			const context = getContext<TContext>();
			const selector = context.selector;

			const target = document.querySelector<HTMLDivElement>(selector);
			if (!selector || !target) {
				console.log("Selector not found!");
				return;
			}

			// --------------------
			const handleProgressIndicator = () => {
				const entryContent = target;
				const totalEntryH = entryContent.offsetTop + entryContent.offsetHeight;
				let winScroll =
					document.body.scrollTop || document.documentElement.scrollTop;

				let scrolled = totalEntryH ? (winScroll / totalEntryH) * 100 : 0;
				context.progressText = scrolled.toFixed(0) + "%";

				if (scrolled >= 100) {
					context.isShowScrollToTop = true;
				} else {
					context.isShowScrollToTop = false;
				}
			};

			//
			handleProgressIndicator();
			const handleProgressIndicatorHeadeEvent = () => {
				window?.requestAnimationFrame(handleProgressIndicator);
			};
			window?.addEventListener("scroll", handleProgressIndicatorHeadeEvent);
			// --------------------
		},
	},
});

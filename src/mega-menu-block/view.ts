import { store, getContext, getElement } from "@wordpress/interactivity";
import { debounce } from "../utils/utils";
interface TState {}

interface TContext {
	width: "full" | "wide" | "content";
}

const {} = store("outermost/mega-menu", {
	state: {} as TState,
	actions: {},
	callbacks: {
		initCallbacks() {
			const context = getContext<TContext>();
			const { width } = context;
			const { ref: menuRef } = getElement();

			// Do not update the position of the mega menu if the width is set to "content".
			// if break the layout of the menu, so we need to custom with css to fix it.
			if (width === "content") {
				return;
			}
			// Update the position of the mega menu to center the window. This is necessary for wide and full-width menus.
			setTimeout(() => {
				updatePositionMegaMenuToCenterWindow(menuRef);
			}, 100);
			window.addEventListener(
				"resize",
				debounce(() => {
					updatePositionMegaMenuToCenterWindow(menuRef);
				}, 500),
			);
		},
	},
});

const updatePositionMegaMenuToCenterWindow = (menuRef?: HTMLElement | null) => {
	const megaMenuRef = menuRef?.querySelector(
		".wp-block-outermost-mega-menu__menu-container",
	) as HTMLElement | null;
	const navRef = menuRef?.closest(".wp-block-navigation") as HTMLElement | null;
	if (!navRef || !megaMenuRef) {
		return;
	}

	const navRect = navRef.getBoundingClientRect();
	const megaMenuRect = megaMenuRef.getBoundingClientRect();

	const left = -navRect.left + (window.innerWidth - megaMenuRect.width) / 2;
	megaMenuRef.style.left = `${left}px`;
};

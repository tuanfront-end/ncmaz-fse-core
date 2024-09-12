/**
 * WordPress dependencies
 */
import { store, getContext, getElement } from "@wordpress/interactivity";
import { debounce } from "../utils/utils";
interface TState {
	get isMenuOpen(): boolean;
	get overflowStyle(): "hidden" | "visible";
	get positionStyle(): "relative" | "initial";
	get menuOpenedBy(): {
		click: boolean;
		focus: boolean;
	};
}

interface TContext {
	megaMenu: HTMLElement | null;
	previousFocus: HTMLElement | null;
	initMenuOpenedBy: {};
	width: "full" | "wide" | "content";
	// justifyMenu: "center" | "left" | "right";
}
const { state, actions } = store("outermost/mega-menu", {
	state: {
		get isMenuOpen() {
			// The menu is opened if either `click` or `focus` is true.
			return Object.values(state.menuOpenedBy).filter(Boolean).length > 0;
		},
		get overflowStyle() {
			// The menu is opened if either `click` or `focus` is true.
			return state.isMenuOpen ? "visible" : "hidden";
		},
		get positionStyle() {
			// The menu is opened if either `click` or `focus` is true.
			return state.isMenuOpen ? "initial" : "relative";
		},
		get menuOpenedBy() {
			const context = getContext<TContext>();
			return context.initMenuOpenedBy;
		},
	} as TState,
	actions: {
		toggleMenuOnClick() {
			const context = getContext<TContext>();
			const { ref } = getElement();
			// Safari won't send focus to the clicked element, so we need to manually place it: https://bugs.webkit.org/show_bug.cgi?id=22261
			if (window.document.activeElement !== ref) {
				ref?.focus();
			}
			if (state.menuOpenedBy.click || state.menuOpenedBy.focus) {
				actions.closeMenu("click");
				actions.closeMenu("focus");
			} else {
				context.previousFocus = ref;
				actions.openMenu("click");
			}
		},
		closeMenuOnClick() {
			actions.closeMenu("click");
			actions.closeMenu("focus");
		},
		handleMenuKeydown(event: KeyboardEvent) {
			if (state.menuOpenedBy.click) {
				// If Escape close the menu.
				if (event?.key === "Escape") {
					actions.closeMenu("click");
					actions.closeMenu("focus");
				}
			}
		},
		handleMenuFocusout(event: FocusEvent) {
			const context = getContext<TContext>();
			const menuContainer = context.megaMenu?.querySelector(
				".wp-block-outermost-mega-menu__menu-container",
			);
			// If focus is outside menu, and in the document, close menu
			// event.target === The element losing focus
			// event.relatedTarget === The element receiving focus (if any)
			// When focusout is outside the document,
			// `window.document.activeElement` doesn't change.

			// The event.relatedTarget is null when something outside the navigation menu is clicked. This is only necessary for Safari.
			// TODO: There is still an issue in Safari where clicking on the menu link closes the menu. We don't want this. The toggleMenuOnClick callback should handle this.
			if (
				event.relatedTarget === null ||
				(!menuContainer?.contains(event.relatedTarget) &&
					event.target !== window.document.activeElement)
			) {
				actions.closeMenu("click");
				actions.closeMenu("focus");
			}
		},
		openMenu(menuOpenedOn = "click" as "click" | "focus") {
			state.menuOpenedBy[menuOpenedOn] = true;
		},
		closeMenu(menuClosedOn = "click" as "click" | "focus") {
			const context = getContext<TContext>();
			state.menuOpenedBy[menuClosedOn] = false;

			// Reset the menu reference and button focus when closed.
			if (!state.isMenuOpen) {
				if (context.megaMenu?.contains(window.document.activeElement)) {
					context.previousFocus?.focus();
				}
				context.previousFocus = null;
				context.megaMenu = null;
			}
		},
	},
	callbacks: {
		initMenu() {
			const context = getContext<TContext>();
			const { ref } = getElement();
			// Set the menu reference when initialized.
			if (state.isMenuOpen) {
				context.megaMenu = ref;
			}
		},
		initAction() {
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
			}, 200);
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

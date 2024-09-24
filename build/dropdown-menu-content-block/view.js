var __webpack_exports__ = {};
/*!*************************************************!*\
  !*** ./src/dropdown-menu-content-block/view.ts ***!
  \*************************************************/
// import { store, getContext, getElement } from "@wordpress/interactivity";

// type TOpenBy = "click" | "focus";

// interface TContext {
// 	menuOpenedBy: {
// 		click: boolean;
// 		focus: boolean;
// 	};
// 	previousFocus: HTMLElement | null;
// 	dropdownMenu: HTMLElement | null;
// }

// interface TState {
// 	menuOpenedBy: TContext["menuOpenedBy"];
// 	isMenuOpen: boolean;
// }

// const { state, actions } = store("ncmfse/popover", {
// 	state: {
// 		get isMenuOpen() {
// 			// The menu is opened if either `click` or `focus` is true.
// 			return Object.values(state.menuOpenedBy).filter(Boolean).length > 0;
// 		},
// 		get menuOpenedBy() {
// 			const context = getContext<TContext>();
// 			return context.menuOpenedBy;
// 		},
// 	} as TState,
// 	actions: {
// 		toggleMenuOnClick() {
// 			const context = getContext<TContext>();
// 			const { ref } = getElement();

// 			// Safari won't send focus to the clicked element, so we need to manually place it: https://bugs.webkit.org/show_bug.cgi?id=22261
// 			if (window.document.activeElement !== ref) {
// 				ref?.focus();
// 			}

// 			if (state.menuOpenedBy.click || state.menuOpenedBy.focus) {
// 				actions.closeMenu("click");
// 				actions.closeMenu("focus");
// 			} else {
// 				context.previousFocus = ref;
// 				actions.openMenu("click");
// 			}
// 		},
// 		closeMenuOnClick() {
// 			actions.closeMenu("click");
// 			actions.closeMenu("focus");
// 		},
// 		handleMenuKeydown(event: KeyboardEvent) {
// 			if (state.menuOpenedBy.click) {
// 				// If Escape close the menu.
// 				if (event?.key === "Escape") {
// 					actions.closeMenu("click");
// 					actions.closeMenu("focus");
// 				}
// 			}
// 		},
// 		handleMenuFocusout(event: FocusEvent) {
// 			const context = getContext<TContext>();
// 			const menuContainer = context.dropdownMenu?.querySelector(
// 				".wp-block-ncmfse-current-user-avatar-dropdown",
// 			);
// 			// If focus is outside menu, and in the document, close menu
// 			// event.target === The element losing focus
// 			// event.relatedTarget === The element receiving focus (if any)
// 			// When focusout is outside the document,
// 			// `window.document.activeElement` doesn't change.

// 			// The event.relatedTarget is null when something outside the navigation menu is clicked. This is only necessary for Safari.
// 			// TODO: There is still an issue in Safari where clicking on the menu link closes the menu. We don't want this. The toggleMenuOnClick callback should handle this.
// 			if (
// 				event.relatedTarget === null ||
// 				(!menuContainer?.contains(event.relatedTarget) &&
// 					event.target !== window.document.activeElement)
// 			) {
// 				actions.closeMenu("click");
// 				actions.closeMenu("focus");
// 			}
// 		},
// 		openMenu(menuOpenedOn = "click") {
// 			state.menuOpenedBy[menuOpenedOn as TOpenBy] = true;
// 		},
// 		closeMenu(menuClosedOn = "click") {
// 			const context = getContext<TContext>();
// 			state.menuOpenedBy[menuClosedOn as TOpenBy] = false;

// 			// Reset the menu reference and button focus when closed.
// 			if (!state.isMenuOpen) {
// 				if (context.dropdownMenu?.contains(window.document.activeElement)) {
// 					context.previousFocus?.focus();
// 				}
// 				context.previousFocus = null;
// 				context.dropdownMenu = null;
// 			}
// 		},
// 	},
// 	callbacks: {
// 		onWatchMenu() {
// 			const context = getContext<TContext>();
// 			const { ref } = getElement();

// 			console.log("onWatchMenu", state.isMenuOpen);

// 			// Set the menu reference when initialized.
// 			if (state.isMenuOpen) {
// 				context.dropdownMenu = ref;
// 			}
// 		},
// 	},
// });

//# sourceMappingURL=view.js.map
/**
 * WordPress dependencies
 */
import { store } from "@wordpress/interactivity";

// view.js
interface TContext {}

interface TState {}

const { state } = store("ncmfse/toggle-dark-mode", {
	state: {} as TState,
	actions: {
		handleDarkModeToggle: () => {
			const htmlElement = document.documentElement;
			htmlElement.classList.toggle("dark");
			const isDarkMode = htmlElement.classList.contains("dark");
			localStorage.theme = isDarkMode ? "dark" : "light";

			// Update dom
			if (isDarkMode) {
				document
					.querySelectorAll(".wp-block-ncmfse-toggle-dark-mode__icon--dark")
					.forEach((el) => el.classList.add("activated"));
				document
					.querySelectorAll(".wp-block-ncmfse-toggle-dark-mode__icon--light")
					.forEach((el) => el.classList.remove("activated"));
			} else {
				document
					.querySelectorAll(".wp-block-ncmfse-toggle-dark-mode__icon--dark")
					.forEach((el) => el.classList.remove("activated"));
				document
					.querySelectorAll(".wp-block-ncmfse-toggle-dark-mode__icon--light")
					.forEach((el) => el.classList.add("activated"));
			}
		},
	},
	callbacks: {},
});

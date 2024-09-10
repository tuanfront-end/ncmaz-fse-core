// Make a debounce typescript function
export function debounce(func: Function, wait: number, immediate = false) {
	let timeout: any;
	return function (this: any) {
		const context = this;
		const args = arguments;
		const later = function () {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

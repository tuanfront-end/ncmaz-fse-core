import * as __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__ from "@wordpress/interactivity";
/******/ var __webpack_modules__ = ({

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debounce: () => (/* binding */ debounce)
/* harmony export */ });
// Make a debounce typescript function
function debounce(func, wait, immediate = false) {
  let timeout;
  return function () {
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

/***/ }),

/***/ "@wordpress/interactivity":
/*!*******************************************!*\
  !*** external "@wordpress/interactivity" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__;

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************************************!*\
  !*** ./src/snap-scroll-arrows-block/view.ts ***!
  \**********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/interactivity */ "@wordpress/interactivity");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");


const handleScroll = (queryId, snapScrollEl) => {
  const snapScrollItemEl = snapScrollEl.firstElementChild;
  if (!snapScrollItemEl) {
    return;
  }
  const snapScrollElScrollLeft = snapScrollEl.scrollLeft;
  const snapScrollElScrollWidth = snapScrollEl.scrollWidth;

  // get snap scroll arrow previous element
  const snapScrollArrowPreviousEl = document.querySelector(`[data-ncmfse-snap-scroll-arrow-previous="${queryId}"]`);

  // get snap scroll arrow next element
  const snapScrollArrowNextEl = document.querySelector(`[data-ncmfse-snap-scroll-arrow-next="${queryId}"]`);
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
  if (snapScrollElScrollLeft + snapScrollEl.clientWidth >= snapScrollElScrollWidth) {
    snapScrollArrowNextEl?.classList.add("is-disabled");
    snapScrollArrowNextEl?.setAttribute("disabled", "");
  } else {
    snapScrollArrowNextEl?.classList.remove("is-disabled");
    snapScrollArrowNextEl?.removeAttribute("disabled");
  }
};
const {
  state
} = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.store)("ncmfse/snap-scroll-arrows", {
  state: {},
  actions: {},
  callbacks: {
    handleInit: () => {
      const {
        queryId
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();

      // get selector element co attr data-ncmfse-snap-scroll-id = queryId
      const snapScrollEl = document.querySelector(`[data-ncmfse-snap-scroll-id="${queryId}"]`);
      if (!snapScrollEl) {
        return;
      }

      // add event listener for snapScrollEl
      snapScrollEl.addEventListener("scroll", (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.debounce)(() => {
        handleScroll(queryId, snapScrollEl);
      }, 500));
    }
  }
});

//# sourceMappingURL=view.js.map
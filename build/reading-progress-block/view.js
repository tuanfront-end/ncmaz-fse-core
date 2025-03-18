import * as __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__ from "@wordpress/interactivity";
/******/ var __webpack_modules__ = ({

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************************!*\
  !*** ./src/reading-progress-block/view.ts ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/interactivity */ "@wordpress/interactivity");

const {
  state
} = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.store)("ncmfse/reading-progress", {
  state: {},
  actions: {
    handleScrollToTop: () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  },
  callbacks: {
    handleInit: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      const selector = context.selector;
      const target = document.querySelector(selector);
      if (!selector || !target) {
        console.log("Selector not found!");
        return;
      }

      // --------------------
      const handleProgressIndicator = () => {
        const entryContent = target;
        const totalEntryH = entryContent.offsetTop + entryContent.offsetHeight;
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let scrolled = totalEntryH ? winScroll / totalEntryH * 100 : 0;
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
    }
  }
});
})();


//# sourceMappingURL=view.js.map
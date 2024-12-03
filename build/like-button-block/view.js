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
/*!***************************************!*\
  !*** ./src/like-button-block/view.ts ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/interactivity */ "@wordpress/interactivity");
/**
 * WordPress dependencies
 */


// view.js

const {
  state
} = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.store)("ncmazfse-core/like-button", {
  state: {
    get isLiked() {
      const {
        contextIsLiked,
        postId
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      return state.likeData?.[postId] ? state.likeData[postId].isLiked : contextIsLiked;
    },
    get likeCount() {
      const {
        contextLikeCount,
        postId
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      return state.likeData?.[postId] ? state.likeData[postId].likeCount : contextLikeCount;
    },
    get isLoading() {
      const {
        postId
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      return state.loadingList.includes(postId);
    }
  },
  actions: {
    handleLike: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      const {
        postId
      } = context;
      try {
        // Update the state
        state.loadingList.push(postId);

        // Send the data to the server
        const formData = new FormData();
        formData.append("action", "handle_like");
        formData.append("_ajax_nonce", state.likeButtonNonce);
        formData.append("post_id", postId.toString());
        formData.append("user_id", state.userId.toString());
        formData.append("handle", state.isLiked ? "remove" : "add");
        fetch(state.ajaxUrl, {
          method: "POST",
          body: formData
        }).then(response => response.json()).then(({
          data,
          success
        }) => {
          if (!success) {
            throw new Error("Server error");
          }
          const isLiked = Boolean(data.is_liked);
          let likeCount = data.like_count;

          // Update the local-context
          context.contextLikeCount = likeCount;
          context.contextIsLiked = isLiked;
          state.likeData = {
            ...state.likeData,
            [postId]: {
              likeCount,
              isLiked
            }
          };
        }).finally(() => {
          state.loadingList = state.loadingList.filter(id => id !== postId);
        });
      } catch (e) {
        // Something went wrong!
        console.log("Error Server data!", e);
        state.loadingList = state.loadingList.filter(id => id !== postId);
      }
    }
  },
  callbacks: {
    logHandleLikeInit: () => {}
  }
});
})();


//# sourceMappingURL=view.js.map
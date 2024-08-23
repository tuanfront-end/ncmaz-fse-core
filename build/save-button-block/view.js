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
/*!***************************************!*\
  !*** ./src/save-button-block/view.ts ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/interactivity */ "@wordpress/interactivity");
/**
 * WordPress dependencies
 */


// view.js

const {
  state
} = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.store)("ncmazfse-core", {
  state: {},
  actions: {
    handleSave: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      try {
        // Update the state
        context.loading = true;

        // Send the data to the server
        const formData = new FormData();
        formData.append("action", "handle_save");
        formData.append("_ajax_nonce", state.saveButtonNonce);
        formData.append("post_id", context.postId.toString());
        formData.append("user_id", state.userId.toString());
        formData.append("handle", context.isSaved ? "remove" : "add");
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
          const isSaved = Boolean(data.is_saved);
          context.isSaved = isSaved;
          if (isSaved) {
            context.postSavesCount = context.postSavesCount + 1;
          } else if (context.postSavesCount > 0) {
            context.postSavesCount = context.postSavesCount - 1;
          }
          if (!state.userId) {
            // Update local storage
            const postId = context.postId;
            const savedPosts = localStorage.getItem("savedPosts");
            const savedPostsArray = savedPosts ? JSON.parse(savedPosts) : [];
            if (isSaved) {
              savedPostsArray.push(postId);
            } else {
              const index = savedPostsArray.indexOf(postId);
              if (index > -1) {
                savedPostsArray.splice(index, 1);
              }
            }
            localStorage.setItem("savedPosts", JSON.stringify(savedPostsArray));
          }
        }).finally(() => {
          context.loading = false;
        });
      } catch (e) {
        // Something went wrong!
        console.log("Error Server data!", e);
        context.loading = false;
      }
    }
  },
  callbacks: {
    logHandleSaveInit: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      console.log("save callbacks init");

      // if user is not logged in
      if (!state.userId) {
        // check from local storage
        const postId = context.postId;
        const savedPosts = localStorage.getItem("savedPosts");
        const savedPostsArray = savedPosts ? JSON.parse(savedPosts) : [];
        context.isSaved = savedPostsArray.includes(postId);
        console.log("save callbacks -- update local storage", context.isSaved);
      }
    }
  }
});

//# sourceMappingURL=view.js.map
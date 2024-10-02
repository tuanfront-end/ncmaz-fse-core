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
/*!*******************************************************!*\
  !*** ./src/mailpoet-subscription-form-block/view.tsx ***!
  \*******************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/interactivity */ "@wordpress/interactivity");
/**
 * WordPress dependencies
 */


// view.js

const {
  state
} = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.store)("ncmfse/mailpoet-subscription-form", {
  state: {},
  actions: {
    onSubmitForm: e => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      e.preventDefault();
      if (context.loading) {
        return;
      }
      context.loading = true;
      context.showError = false;
      context.showSuccessMessage = false;
      try {
        // Send the data to the server
        const formData = new FormData();
        formData.append("action", "add_subscriber_to_mailpoet_list");
        formData.append("_ajax_nonce", state.mailpoetFormNonce);
        formData.append("mailpoet_list_id", context.mailpoetListId);
        const target = e.target;
        const email = target.email.value; // typechecks!
        const name = target.name.value; // typechecks!

        formData.append("name", name);
        formData.append("email", email);
        fetch(state.ajaxUrl, {
          method: "POST",
          body: formData
        }).then(response => response.json()).then(({
          data,
          success
        }) => {
          if (!success) {
            context.showError = true;
            if (typeof data === "string") context.errorMesssage = data;
          } else {
            context.showSuccessMessage = true;
          }
        }).finally(() => {
          context.loading = false;
        });
      } catch (e) {
        console.log("Error Server data!", e);
        context.loading = false;
        context.showError = true;
        context.errorMesssage = "Error Server data!";
      }
    }
  },
  callbacks: {}
});

//# sourceMappingURL=view.js.map
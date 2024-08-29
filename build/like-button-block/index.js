/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/star-filled.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/star-filled.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const starFilled = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M11.776 4.454a.25.25 0 01.448 0l2.069 4.192a.25.25 0 00.188.137l4.626.672a.25.25 0 01.139.426l-3.348 3.263a.25.25 0 00-.072.222l.79 4.607a.25.25 0 01-.362.263l-4.138-2.175a.25.25 0 00-.232 0l-4.138 2.175a.25.25 0 01-.363-.263l.79-4.607a.25.25 0 00-.071-.222L4.754 9.881a.25.25 0 01.139-.426l4.626-.672a.25.25 0 00.188-.137l2.069-4.192z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (starFilled);
//# sourceMappingURL=star-filled.js.map

/***/ }),

/***/ "./src/like-button-block/edit.tsx":
/*!****************************************!*\
  !*** ./src/like-button-block/edit.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/like-button-block/editor.scss");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);







// get type keyof Attributes with type value is type

function Edit(props) {
  const {
    clientId,
    attributes,
    setAttributes,
    context: {
      postId: postIdContext,
      commentId,
      postType
    },
    activeColor,
    activeBgColor,
    activeBorderColor,
    activeIconBgColor,
    setActiveColor,
    setActiveBgColor,
    setActiveBorderColor,
    setActiveIconBgColor
  } = props;
  const {
    customActiveBgColor,
    customActiveBorderColor,
    customActiveColor,
    customActiveIconBgColor,
    style,
    showCountText
  } = attributes;
  const currentUserId = window.wp.data.select("core").getCurrentUser()?.id || 0;

  // const [content] = useEntityProp("root", "comment", "content", commentId);
  let postId = postIdContext;
  if (!postType && !postIdContext && commentId) {
    postId = commentId;
  }

  // get the post likes count
  const {
    records
  } = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.useEntityRecords)("postType", "post_like", {
    post_status: "publish",
    per_page: -1,
    meta_key: "post_id",
    meta_value: postId || 0
  });
  const postLikesCount = postId ? records?.length || 0 : 99;

  // check if the current user liked the post
  const {
    records: isLikedRecords
  } = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.useEntityRecords)("postType", "post_like", {
    post_status: "publish",
    per_page: -1,
    meta_query: [{
      key: "user_id",
      value: currentUserId,
      compare: "="
    }, {
      key: "post_id",
      value: postId,
      compare: "="
    }]
  });
  const isLiked = (isLikedRecords?.length || 0) > 0;
  const gapCSSValue = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getSpacingPresetCssVar)(attributes.style?.spacing?.blockGap);

  //
  const colorGradientSettings = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalUseMultipleOriginColorsAndGradients)();
  const colorSettings = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Active Color", "ncmaz-fse-core"),
    value: activeColor.color || customActiveColor,
    onChange: value => {
      setActiveColor(value);
      setAttributes({
        customActiveColor: value
      });
    },
    resetAllFilter: () => {
      setActiveColor(undefined);
      setAttributes({
        customActiveColor: "#dc2626"
      });
    }
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Active Background Color", "ncmaz-fse-core"),
    value: activeBgColor.color || customActiveBgColor,
    onChange: value => {
      setActiveBgColor(value);
      setAttributes({
        customActiveBgColor: value
      });
    },
    resetAllFilter: () => {
      setActiveBgColor(undefined);
      setAttributes({
        customActiveBgColor: undefined
      });
    }
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Active Border Color", "ncmaz-fse-core"),
    value: activeBorderColor.color || customActiveBorderColor,
    onChange: value => {
      setActiveBorderColor(value);
      setAttributes({
        customActiveBorderColor: value
      });
    },
    resetAllFilter: () => {
      setActiveBorderColor(undefined);
      setAttributes({
        customActiveBorderColor: undefined
      });
    }
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Active Icon Background Color", "ncmaz-fse-core"),
    value: activeIconBgColor.color || customActiveIconBgColor,
    onChange: value => {
      setActiveIconBgColor(value);
      setAttributes({
        customActiveIconBgColor: value
      });
    },
    resetAllFilter: () => {
      setActiveIconBgColor(undefined);
      setAttributes({
        customActiveIconBgColor: "#fee2e2b5"
      });
    }
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Post Like Button", "ncmaz-fse-core")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show Count", "ncmaz-fse-core"),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show/Hide count number", "ncmaz-fse-core"),
    checked: showCountText,
    onChange: newValue => {
      setAttributes({
        showCountText: newValue
      });
    }
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    group: "color"
  }, colorSettings.map(({
    onChange,
    label,
    value,
    resetAllFilter
  }) =>
  // @ts-ignore
  (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalColorGradientSettingsDropdown, {
    __experimentalIsRenderedInSidebar: true,
    key: `like-btns-color-${label}`,
    settings: [{
      colorValue: value,
      label,
      onColorChange: onChange,
      isShownByDefault: true,
      resetAllFilter,
      enableAlpha: true
    }],
    panelId: clientId,
    ...colorGradientSettings
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "outermost-icon-block__color-settings__help"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Active: ", "ncmaz-fse-core")), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(" Set the color for the active state (liked/saved/hovering) of the button.", "ncmaz-fse-core"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
      className: "nc-post-reaction-button" + (isLiked ? " is-actived" : ""),
      style: {
        ...style,
        gap: gapCSSValue,
        "--active-color": activeColor.slug ? `var( --wp--preset--color--${activeColor.slug} )` : customActiveColor,
        "--active-background-color": activeBgColor.slug ? `var( --wp--preset--color--${activeBgColor.slug} )` : customActiveBgColor,
        "--active-border-color": activeBorderColor.slug ? `var( --wp--preset--color--${activeBorderColor.slug} )` : customActiveBorderColor,
        "--active-icon-background-color": activeIconBgColor.slug ? `var( --wp--preset--color--${activeIconBgColor.slug} )` : customActiveIconBgColor
      }
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, {
    allowedBlocks: ["outermost/icon-block"],
    template: [["outermost/icon-block", {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none"><path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" /></svg>',
      iconColorValue: "#334155",
      iconBackgroundColorValue: "#f3f4f6",
      itemsJustification: "center",
      width: "34px",
      hasNoIconFill: true,
      style: {
        border: {
          radius: "99px"
        },
        spacing: {
          padding: "8px"
        }
      }
    }]],
    templateLock: "insert"
  }), showCountText ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "nc__count"
  }, postLikesCount) : null));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.withColors)({
  activeColor: "active-color",
  activeBgColor: "active-background-color",
  activeBorderColor: "active-border-color",
  activeIconBgColor: "active-icon-background-color"
})(Edit));

/***/ }),

/***/ "./src/like-button-block/index.tsx":
/*!*****************************************!*\
  !*** ./src/like-button-block/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/like-button-block/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/like-button-block/edit.tsx");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/like-button-block/block.json");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/like-button-block/save.tsx");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/star-filled.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */





// @ts-ignore
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/like-button-block/save.tsx":
/*!****************************************!*\
  !*** ./src/like-button-block/save.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function save() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null);
}

/***/ }),

/***/ "./src/like-button-block/editor.scss":
/*!*******************************************!*\
  !*** ./src/like-button-block/editor.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/like-button-block/style.scss":
/*!******************************************!*\
  !*** ./src/like-button-block/style.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "./src/like-button-block/block.json":
/*!******************************************!*\
  !*** ./src/like-button-block/block.json ***!
  \******************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"ncmazfse-block/like-button-block","version":"0.1.0","title":"Like Button","category":"ncmazfse","ancestor":["core/comment-template","core/post-template"],"usesContext":["postId","postType","commentId"],"description":"Example block scaffolded with Create Block tool.","allowedBlocks":["outermost/icon-block"],"example":{},"attributes":{"showCountText":{"type":"boolean","default":true},"activeColor":{"type":"string"},"customActiveColor":{"type":"string","default":"#dc2626"},"activeBgColor":{"type":"string"},"customActiveBgColor":{"type":"string"},"activeIconBgColor":{"type":"string"},"customActiveIconBgColor":{"type":"string","default":"#fee2e2b5"},"activeBorderColor":{"type":"string"},"customActiveBorderColor":{"type":"string"}},"supports":{"anchor":false,"html":false,"color":{"gradients":true,"__experimentalDefaultControls":{"background":true,"text":true}},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalLetterSpacing":true,"__experimentalWritingMode":true,"__experimentalDefaultControls":{"fontSize":true}},"shadow":true,"spacing":{"padding":true,"margin":true,"blockGap":true,"__experimentalDefaultControls":{"padding":true,"blockGap":true}},"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true,"__experimentalDefaultControls":{"color":true,"radius":true,"style":true,"width":true}},"interactivity":true},"textdomain":"like-button-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","viewScriptModule":"file:./view.js"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"like-button-block/index": 0,
/******/ 			"like-button-block/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunktodo_list"] = globalThis["webpackChunktodo_list"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["like-button-block/style-index"], () => (__webpack_require__("./src/like-button-block/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map
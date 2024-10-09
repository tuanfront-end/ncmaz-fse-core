/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/loop.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/loop.js ***!
  \********************************************************************/
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

const loop = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18.1823 11.6392C18.1823 13.0804 17.0139 14.2487 15.5727 14.2487C14.3579 14.2487 13.335 13.4179 13.0453 12.2922L13.0377 12.2625L13.0278 12.2335L12.3985 10.377L12.3942 10.3785C11.8571 8.64997 10.246 7.39405 8.33961 7.39405C5.99509 7.39405 4.09448 9.29465 4.09448 11.6392C4.09448 13.9837 5.99509 15.8843 8.33961 15.8843C8.88499 15.8843 9.40822 15.781 9.88943 15.5923L9.29212 14.0697C8.99812 14.185 8.67729 14.2487 8.33961 14.2487C6.89838 14.2487 5.73003 13.0804 5.73003 11.6392C5.73003 10.1979 6.89838 9.02959 8.33961 9.02959C9.55444 9.02959 10.5773 9.86046 10.867 10.9862L10.8772 10.9836L11.4695 12.7311C11.9515 14.546 13.6048 15.8843 15.5727 15.8843C17.9172 15.8843 19.8178 13.9837 19.8178 11.6392C19.8178 9.29465 17.9172 7.39404 15.5727 7.39404C15.0287 7.39404 14.5066 7.4968 14.0264 7.6847L14.6223 9.20781C14.9158 9.093 15.2358 9.02959 15.5727 9.02959C17.0139 9.02959 18.1823 10.1979 18.1823 11.6392Z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loop);
//# sourceMappingURL=loop.js.map

/***/ }),

/***/ "./src/term-query-loop-block/edit/index.tsx":
/*!**************************************************!*\
  !*** ./src/term-query-loop-block/edit/index.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _query_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./query-content */ "./src/term-query-loop-block/edit/query-content.tsx");
/* harmony import */ var _query_placeholder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./query-placeholder */ "./src/term-query-loop-block/edit/query-placeholder.tsx");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../editor.scss */ "./src/term-query-loop-block/editor.scss");

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



const QueryEdit = props => {
  const {
    clientId
  } = props;
  const hasInnerBlocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => !!select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.store).getBlocks(clientId).length, [clientId]);
  const Component = hasInnerBlocks ? _query_content__WEBPACK_IMPORTED_MODULE_3__["default"] : _query_placeholder__WEBPACK_IMPORTED_MODULE_4__["default"];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, {
    ...props
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QueryEdit);

/***/ }),

/***/ "./src/term-query-loop-block/edit/inspector-controls/index.tsx":
/*!*********************************************************************!*\
  !*** ./src/term-query-loop-block/edit/inspector-controls/index.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QueryInspectorControls)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _order_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-control */ "./src/term-query-loop-block/edit/inspector-controls/order-control.tsx");
/* harmony import */ var _per_page_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./per-page-control */ "./src/term-query-loop-block/edit/inspector-controls/per-page-control.tsx");
/* harmony import */ var _page_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-control */ "./src/term-query-loop-block/edit/inspector-controls/page-control.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils */ "./src/term-query-loop-block/utils.ts");

/**
 * WordPress dependencies
 */








function QueryInspectorControls(props) {
  const {
    attributes,
    setQuery,
    setDisplayLayout,
    setAttributes,
    clientId
  } = props;
  const {
    myQuery,
    displayLayout
  } = attributes;
  const {
    perPage,
    isFilterByOrder,
    taxonomySlug,
    termIdList,
    inherit,
    excludeIdList,
    hideEmpty,
    order,
    orderBy,
    parentIdString,
    postType,
    page
  } = myQuery;
  const taxonomiesRecords = (0,_utils__WEBPACK_IMPORTED_MODULE_8__.useTaxonomies)(postType);
  const {
    records: termRecords
  } = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.useEntityRecords)("taxonomy", taxonomySlug, {
    per_page: -1,
    orderby: "name",
    order: "asc",
    _fields: "id,name,parent",
    context: "view"
  });
  const {
    postTypesTaxonomiesMap = {},
    postTypesSelectOptions
  } = (0,_utils__WEBPACK_IMPORTED_MODULE_8__.usePostTypes)();
  const taxonomies = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => {
    const data = taxonomiesRecords?.map(item => {
      if (!item?.visibility?.publicly_queryable) {
        return null;
      }
      return {
        value: item.slug,
        label: item.name
      };
    }) || [];
    return data.filter(item => item !== null);
  }, [taxonomiesRecords]);
  const termRecordsConvert = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => {
    const data = termRecords?.map(item => {
      let label = item.name;
      if (item.parent) {
        const parent = termRecords.find(term => term.id === item.parent);
        if (parent) {
          label = `${parent.name} > ${label}`;
        }
      }
      return {
        ...item,
        id: item.id.toString(),
        label,
        parent: item.parent
      };
    }) || [];
    return data;
  }, [termRecords]);
  const childTermRecords = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => {
    if (typeof parentIdString !== "string") {
      return termRecordsConvert;
    }
    return termRecordsConvert.filter(item => item.parent == parentIdString);
  }, [termRecordsConvert, parentIdString]);
  const onPostTypeChange = newValue => {
    let updateQuery = {
      postType: newValue
    };
    // We need to dynamically update the `taxQuery` property,
    // by removing any not supported taxonomy from the query.
    const supportedTaxonomies = postTypesTaxonomiesMap[newValue];
    setQuery({
      ...updateQuery,
      taxonomySlug: supportedTaxonomies[0],
      parent: null,
      termIdList: [],
      excludeIdList: []
    });
  };
  const termNameList = termRecordsConvert.map(item => item.label);
  const temChildNameList = childTermRecords.map(item => item.label);
  const getTermNameListFromIds = (ids = []) => {
    return termRecordsConvert.filter(item => ids.includes(item.id)).map(item => item.label);
  };
  const getTermIdsFromNames = (names = []) => {
    return termRecordsConvert.filter(item => names.includes(item.label)).map(item => item.id);
  };
  const postTypeControlHelp = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Limit results to taxonomies associated with a specific post type.");
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Settings")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    __nextHasNoMarginBottom: true,
    checked: inherit,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Inherit from the archive page."),
    onChange: value => {
      setQuery({
        inherit: value
      });
    },
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Limit results are set to terms assigned to the parent - current archive page. Note: This only works in archive pages.")
  }), !inherit && (postTypesSelectOptions.length > 2 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    __nextHasNoMarginBottom: true,
    __next40pxDefaultSize: true,
    options: postTypesSelectOptions,
    value: postType,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Post type"),
    onChange: onPostTypeChange,
    help: postTypeControlHelp
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToggleGroupControl, {
    __nextHasNoMarginBottom: true,
    __next40pxDefaultSize: true,
    isBlock: true,
    value: postType,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Post type"),
    onChange: value => {
      value ? onPostTypeChange(value?.toString() || "") : null;
    },
    help: postTypeControlHelp
  }, postTypesSelectOptions.map(option => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToggleGroupControlOption, {
    key: option.value,
    value: option.value,
    label: option.label
  })))), !inherit && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, taxonomies.length ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Taxonomy type"),
    value: taxonomySlug,
    options: taxonomies,
    onChange: value => {
      setQuery({
        taxonomySlug: value,
        parent: null,
        termIdList: [],
        excludeIdList: []
      });
    }
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Taxonomy type"),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("No taxonomy found, please try again with another post type.")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    __nextHasNoMarginBottom: true,
    checked: hideEmpty,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Hide empty terms."),
    onChange: value => {
      setQuery({
        hideEmpty: value
      });
    },
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Display a list of terms that have posts associated with them.")
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Query")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_order_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    order: order,
    orderBy: orderBy,
    onChange: setQuery
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_per_page_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    perPage: perPage,
    onChange: setQuery
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_page_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    page: page,
    onChange: setQuery
  })), !inherit && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Terms Settings"),
    initialOpen: false
  }, !!termNameList.length ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Limit result set to terms assigned to a specific parent. Data will return empty if the selected has no children. ")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FormTokenField, {
    __experimentalAutoSelectFirstMatch: true,
    __experimentalExpandOnFocus: true,
    __experimentalShowHowTo: false,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Parent"),
    onChange: value => {
      if (!Array.isArray(value)) {
        return;
      }
      // cần reverse để lấy id của parent cuối cùng trong mảng. VÌ chỉ chọn 1 parent
      const parentIds = getTermIdsFromNames([value.reverse()[0]]);
      setQuery({
        parentIdString: parentIds[0],
        termIdList: [],
        excludeIdList: []
      });
    },
    suggestions: termNameList,
    value: getTermNameListFromIds(typeof parentIdString === "string" ? [parentIdString] : []),
    maxLength: 1,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Select only one parent")
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Show a list of terms with related posts. Leave blank if you want to catch all.")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FormTokenField, {
    __experimentalAutoSelectFirstMatch: true,
    __experimentalExpandOnFocus: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Terms include"),
    onChange: value => {
      if (!Array.isArray(value)) {
        return;
      }
      setQuery({
        termIdList: getTermIdsFromNames(value)
      });
    },
    suggestions: temChildNameList,
    value: getTermNameListFromIds(termIdList)
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Exclude a list of terms with related posts.")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FormTokenField, {
    __experimentalAutoSelectFirstMatch: true,
    __experimentalExpandOnFocus: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Terms exclude"),
    onChange: value => {
      if (!Array.isArray(value)) {
        return;
      }
      setQuery({
        excludeIdList: getTermIdsFromNames(value)
      });
    },
    suggestions: temChildNameList,
    value: getTermNameListFromIds(excludeIdList)
  }))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Please select a taxonomy type to filter terms by parent, include, exclude. Or with your current query no results are found, please try again.")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null))));
}

/***/ }),

/***/ "./src/term-query-loop-block/edit/inspector-controls/order-control.tsx":
/*!*****************************************************************************!*\
  !*** ./src/term-query-loop-block/edit/inspector-controls/order-control.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);

/**
 * WordPress dependencies
 */


const orderOptions = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Include/desc"),
  value: "include/desc"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Include/asc"),
  value: "include/asc"
}, {
  /* translators: label for ordering posts by title in ascending order */
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("A → Z"),
  value: "name/asc"
}, {
  /* translators: label for ordering posts by title in descending order */
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Z → A"),
  value: "name/desc"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Count/asc"),
  value: "count/asc"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Count/desc"),
  value: "count/desc"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Term group/asc"),
  value: "term_group/asc"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Term group/desc"),
  value: "term_group/desc"
}];
function OrderControl({
  order,
  orderBy,
  onChange
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    __nextHasNoMarginBottom: true,
    __next40pxDefaultSize: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Order by"),
    value: `${orderBy}/${order}`,
    options: orderOptions,
    onChange: value => {
      const [newOrderBy, newOrder] = value.split("/");
      onChange({
        order: newOrder,
        orderBy: newOrderBy
      });
    }
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderControl);

/***/ }),

/***/ "./src/term-query-loop-block/edit/inspector-controls/page-control.tsx":
/*!****************************************************************************!*\
  !*** ./src/term-query-loop-block/edit/inspector-controls/page-control.tsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageControl: () => (/* binding */ PageControl),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);

/**
 * WordPress dependencies
 */


const PageControl = ({
  page,
  onChange
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalNumberControl, {
    __next40pxDefaultSize: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Page to show."),
    value: page,
    min: 0,
    onChange: value => {
      if (typeof value === "undefined") {
        return;
      }
      let newPage = 0;
      newPage = parseInt(value);
      if (isNaN(newPage) || newPage < 0) {
        return;
      }
      onChange({
        page: newPage
      });
    },
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Use this to specify the number of pages of the query to display. If you set it to 0 or leave it blank, it will display the first page of the query.")
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageControl);

/***/ }),

/***/ "./src/term-query-loop-block/edit/inspector-controls/per-page-control.tsx":
/*!********************************************************************************!*\
  !*** ./src/term-query-loop-block/edit/inspector-controls/per-page-control.tsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);

/**
 * WordPress dependencies
 */


const MIN_POSTS_PER_PAGE = 1;
const MAX_POSTS_PER_PAGE = 100;
const PerPageControl = ({
  perPage,
  onChange
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    __next40pxDefaultSize: true,
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Posts per page"),
    min: MIN_POSTS_PER_PAGE,
    max: MAX_POSTS_PER_PAGE,
    onChange: newPerPage => {
      if (typeof newPerPage === "undefined") {
        return;
      }
      if (isNaN(newPerPage) || newPerPage < MIN_POSTS_PER_PAGE || newPerPage > MAX_POSTS_PER_PAGE) {
        return;
      }
      onChange({
        perPage: newPerPage
      });
    }
    // @ts-ignore
    ,
    value: parseInt(perPage, 10)
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PerPageControl);

/***/ }),

/***/ "./src/term-query-loop-block/edit/query-content.tsx":
/*!**********************************************************!*\
  !*** ./src/term-query-loop-block/edit/query-content.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QueryContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _inspector_controls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inspector-controls */ "./src/term-query-loop-block/edit/inspector-controls/index.tsx");

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */

// export type TermQueryObT = TAttrs<typeof metadata.attributes.myQuery.default>;
// export type UpdateTermQueryFuncT = (newQuery: Record<string,any>) => void;

const TEMPLATE = [["ncmfse/term-template-block"]];
function QueryContent({
  attributes,
  setAttributes,
  name,
  clientId
}) {
  const {
    myQueryId: queryId,
    myQuery,
    displayLayout,
    tagName: TagName = "div"
  } = attributes;
  const {
    __unstableMarkNextChangeAsNotPersistent
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.store);
  const instanceId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.useInstanceId)(QueryContent);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)();
  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useInnerBlocksProps)(blockProps, {
    template: TEMPLATE
  });

  // There are some effects running where some initialization logic is
  // happening and setting some values to some attributes (ex. queryId).
  // These updates can cause an `undo trap` where undoing will result in
  // resetting again, so we need to mark these changes as not persistent
  // with `__unstableMarkNextChangeAsNotPersistent`.

  // Changes in query property (which is an object) need to be in the same callback,
  // because updates are batched after the render and changes in different query properties
  // would cause to override previous wanted changes.

  // We need this for multi-query block pagination.
  // Query parameters for each block are scoped to their ID.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (!Number.isFinite(queryId)) {
      __unstableMarkNextChangeAsNotPersistent();
      setAttributes({
        myQueryId: instanceId
      });
    }
  }, [queryId, instanceId]);
  const updateQuery = newQuery => {
    setAttributes({
      myQuery: {
        ...myQuery,
        ...newQuery
      }
    });
  };
  const updateDisplayLayout = newDisplayLayout => {
    setAttributes({
      displayLayout: {
        ...displayLayout,
        ...newDisplayLayout
      }
    });
  };
  const htmlElementMessages = {
    main: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("The <main> element should be used for the primary content of your document only."),
    section: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("The <section> element should represent a standalone portion of the document that can't be better represented by another element."),
    aside: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("The <aside> element should represent a portion of a document whose content is only indirectly related to the document's main content.")
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector_controls__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attributes: attributes,
    setQuery: updateQuery,
    setDisplayLayout: updateDisplayLayout,
    setAttributes: setAttributes,
    clientId: clientId
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, {
    group: "advanced"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    __nextHasNoMarginBottom: true,
    __next40pxDefaultSize: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("HTML element"),
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Default (<div>)"),
      value: "div"
    }, {
      label: "<main>",
      value: "main"
    }, {
      label: "<section>",
      value: "section"
    }, {
      label: "<aside>",
      value: "aside"
    }],
    value: TagName,
    onChange: value => setAttributes({
      tagName: value
    }),
    help: htmlElementMessages[TagName]
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TagName, {
    ...innerBlocksProps
  }));
}

/***/ }),

/***/ "./src/term-query-loop-block/edit/query-placeholder.tsx":
/*!**************************************************************!*\
  !*** ./src/term-query-loop-block/edit/query-placeholder.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QueryPlaceholder)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./src/term-query-loop-block/utils.ts");

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */

function QueryPlaceholder({
  attributes,
  clientId,
  name,
  openPatternSelectionModal
}) {
  const [isStartingBlank, setIsStartingBlank] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)();
  const blockNameForPatterns = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.useBlockNameForPatterns)(clientId, attributes);
  const {
    blockType,
    activeBlockVariation,
    hasPatterns
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const {
      getActiveBlockVariation,
      getBlockType
    } = select(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.store);
    const {
      getBlockRootClientId,
      getPatternsByBlockTypes
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.store);
    const rootClientId = getBlockRootClientId(clientId);
    return {
      blockType: getBlockType(name),
      activeBlockVariation: getActiveBlockVariation(name, attributes),
      hasPatterns: !!getPatternsByBlockTypes(blockNameForPatterns, rootClientId).length
    };
  }, [name, blockNameForPatterns, clientId, attributes]);
  const icon = activeBlockVariation?.icon?.src || activeBlockVariation?.icon || blockType?.icon?.src;
  const label = activeBlockVariation?.title || blockType?.title;
  if (isStartingBlank) {
    return (
      // @ts-ignore
      (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(QueryVariationPicker, {
        clientId: clientId,
        attributes: attributes,
        icon: icon,
        label: label
      })
    );
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Placeholder, {
    icon: icon,
    label: label,
    instructions: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Choose a pattern for the query loop or start blank.")
  }, !!hasPatterns && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button
  // TODO: Switch to `true` (40px size) if possible
  , {
    __next40pxDefaultSize: false,
    variant: "primary",
    onClick: openPatternSelectionModal
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Choose")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button
  // TODO: Switch to `true` (40px size) if possible
  , {
    __next40pxDefaultSize: false,
    variant: "secondary",
    onClick: () => {
      setIsStartingBlank(true);
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Start blank"))));
}
function QueryVariationPicker({
  clientId,
  attributes,
  icon,
  label
}) {
  const scopeVariations = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.useScopedBlockVariations)(attributes);
  const {
    replaceInnerBlocks
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.store);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.__experimentalBlockVariationPicker, {
    icon: icon,
    label: label,
    variations: scopeVariations,
    onSelect: variation => {
      if (variation.innerBlocks) {
        replaceInnerBlocks(clientId, (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.createBlocksFromInnerBlocksTemplate)(variation.innerBlocks), false);
      }
    }
  }));
}

/***/ }),

/***/ "./src/term-query-loop-block/icons.tsx":
/*!*********************************************!*\
  !*** ./src/term-query-loop-block/icons.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   imageDateTitle: () => (/* binding */ imageDateTitle),
/* harmony export */   titleDate: () => (/* binding */ titleDate),
/* harmony export */   titleDateExcerpt: () => (/* binding */ titleDateExcerpt),
/* harmony export */   titleExcerpt: () => (/* binding */ titleExcerpt)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const titleDate = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M41 9H7v3h34V9zm-22 5H7v1h12v-1zM7 26h12v1H7v-1zm34-5H7v3h34v-3zM7 38h12v1H7v-1zm34-5H7v3h34v-3z"
}));
const titleExcerpt = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M41 9H7v3h34V9zm-4 5H7v1h30v-1zm4 3H7v1h34v-1zM7 20h30v1H7v-1zm0 12h30v1H7v-1zm34 3H7v1h34v-1zM7 38h30v1H7v-1zm34-11H7v3h34v-3z"
}));
const titleDateExcerpt = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M41 9H7v3h34V9zm-22 5H7v1h12v-1zm22 3H7v1h34v-1zM7 20h34v1H7v-1zm0 12h12v1H7v-1zm34 3H7v1h34v-1zM7 38h34v1H7v-1zm34-11H7v3h34v-3z"
}));
const imageDateTitle = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M7 9h34v6H7V9zm12 8H7v1h12v-1zm18 3H7v1h30v-1zm0 18H7v1h30v-1zM7 35h12v1H7v-1zm34-8H7v6h34v-6z"
}));

/***/ }),

/***/ "./src/term-query-loop-block/index.tsx":
/*!*********************************************!*\
  !*** ./src/term-query-loop-block/index.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/loop.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/term-query-loop-block/style.scss");
/* harmony import */ var _edit_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit/index */ "./src/term-query-loop-block/edit/index.tsx");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/term-query-loop-block/save.tsx");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/term-query-loop-block/block.json");
/* harmony import */ var _variations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./variations */ "./src/term-query-loop-block/variations.ts");
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





/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"],
  /**
   * @see ./edit.js
   */
  edit: _edit_index__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"],
  variations: _variations__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./src/term-query-loop-block/save.tsx":
/*!********************************************!*\
  !*** ./src/term-query-loop-block/save.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

function save({
  attributes: {
    tagName: Tag = 'div'
  }
}) {
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save();
  const innerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps.save(blockProps);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tag, {
    ...innerBlocksProps
  });
}

/***/ }),

/***/ "./src/term-query-loop-block/utils.ts":
/*!********************************************!*\
  !*** ./src/term-query-loop-block/utils.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useBlockNameForPatterns: () => (/* binding */ useBlockNameForPatterns),
/* harmony export */   usePostTypes: () => (/* binding */ usePostTypes),
/* harmony export */   useScopedBlockVariations: () => (/* binding */ useScopedBlockVariations),
/* harmony export */   useTaxonomies: () => (/* binding */ useTaxonomies)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/**
 * WordPress dependencies
 */






/**
 * Hook that returns the taxonomies associated with a specific post type.
 *
 * @param {string} postType The post type from which to retrieve the associated taxonomies.
 * @return {Object[]} An array of the associated taxonomies.
 */
const useTaxonomies = postType => {
  const taxonomies = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    const {
      getTaxonomies,
      getPostType
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store);
    // Does the post type have taxonomies?
    // @ts-ignore
    if (getPostType(postType)?.taxonomies?.length > 0) {
      // @ts-ignore
      return getTaxonomies({
        type: postType,
        per_page: -1
      });
    }
    return [];
  }, [postType]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return taxonomies?.filter(({
      visibility
    }) => !!visibility?.publicly_queryable);
  }, [taxonomies]);
};

/**
 * Returns a helper object that contains:
 * 1. An `options` object from the available post types, to be passed to a `SelectControl`.
 * 2. A helper map with available taxonomies per post type.
 *
 * @return {Object} The helper object related to post types.
 */
const usePostTypes = () => {
  const postTypes = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    const {
      getPostTypes
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store);
    const excludedPostTypes = ["attachment"];
    // @ts-ignore
    const filteredPostTypes = getPostTypes({
      per_page: -1
    })?.filter(({
      viewable,
      slug
    }) => viewable && !excludedPostTypes.includes(slug));
    return filteredPostTypes;
  }, []);
  const postTypesTaxonomiesMap = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (!postTypes?.length) {
      return;
    }
    return postTypes.reduce((accumulator, type) => {
      accumulator[type.slug] = type.taxonomies;
      return accumulator;
    }, {});
  }, [postTypes]);
  const postTypesSelectOptions = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (postTypes || []).map(({
    labels,
    slug
  }) => ({
    label: labels.singular_name,
    value: slug
  })), [postTypes]);
  return {
    postTypesTaxonomiesMap,
    postTypesSelectOptions
  };
};

/**
 * Helper hook that determines if there is an active variation of the block
 * and if there are available specific patterns for this variation.
 * If there are, these patterns are going to be the only ones suggested to
 * the user in setup and replace flow, without including the default ones
 * for Query Loop.
 *
 * If there are no such patterns, the default ones for Query Loop are going
 * to be suggested.
 *
 * @param {string} clientId   The block's client ID.
 * @param {Object} attributes The block's attributes.
 * @return {string} The block name to be used in the patterns suggestions.
 */
function useBlockNameForPatterns(clientId, attributes) {
  const activeVariationName = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => select(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.store).getActiveBlockVariation("ncmfse/term-query-loop", attributes)?.name, [attributes]);
  const blockName = `ncmfse/term-query-loop/${activeVariationName}`;
  const hasActiveVariationPatterns = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    if (!activeVariationName) {
      return false;
    }
    const {
      getBlockRootClientId,
      getPatternsByBlockTypes
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.store);
    const rootClientId = getBlockRootClientId(clientId);
    const activePatterns = getPatternsByBlockTypes(blockName, rootClientId);
    return activePatterns.length > 0;
  }, [clientId, activeVariationName, blockName]);
  return hasActiveVariationPatterns ? blockName : "ncmfse/term-query-loop";
}

/**
 * Helper hook that determines if there is an active variation of the block
 * and if there are available specific scoped `block` variations connected with
 * this variation.
 *
 * If there are, these variations are going to be the only ones suggested
 * to the user in setup flow when clicking to `start blank`, without including
 * the default ones for Query Loop.
 *
 * If there are no such scoped `block` variations, the default ones for Query
 * Loop are going to be suggested.
 *
 * The way we determine such variations is with the convention that they have the `namespace`
 * attribute defined as an array. This array should contain the names(`name` property) of any
 * variations they want to be connected to.
 * For example, if we have a `Query Loop` scoped `inserter` variation with the name `products`,
 * we can connect a scoped `block` variation by setting its `namespace` attribute to `['products']`.
 * If the user selects this variation, the `namespace` attribute will be overridden by the
 * main `inserter` variation.
 *
 * @param {Object} attributes The block's attributes.
 * @return {WPBlockVariation[]} The block variations to be suggested in setup flow, when clicking to `start blank`.
 */
function useScopedBlockVariations(attributes) {
  const {
    activeVariationName,
    blockVariations
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    const {
      getActiveBlockVariation,
      getBlockVariations
    } = select(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.store);
    return {
      activeVariationName: getActiveBlockVariation("ncmfse/term-query-loop", attributes)?.name,
      blockVariations: getBlockVariations("ncmfse/term-query-loop", "block")
    };
  }, [attributes]);
  const variations = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    // Filter out the variations that have defined a `namespace` attribute,
    // which means they are 'connected' to specific variations of the block.
    const isNotConnected = variation => !variation.attributes?.namespace;
    if (!activeVariationName) {
      return blockVariations.filter(isNotConnected);
    }
    const connectedVariations = blockVariations.filter(variation => variation.attributes?.namespace?.includes(activeVariationName));
    if (!!connectedVariations.length) {
      return connectedVariations;
    }
    return blockVariations.filter(isNotConnected);
  }, [activeVariationName, blockVariations]);
  return variations;
}

/***/ }),

/***/ "./src/term-query-loop-block/variations.ts":
/*!*************************************************!*\
  !*** ./src/term-query-loop-block/variations.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ "./src/term-query-loop-block/icons.tsx");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

const variations = [{
  name: "title-date",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Title & Date"),
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.titleDate,
  attributes: {},
  innerBlocks: [["ncmfse/term-template", {}, [["core/group", {}, [["ncmfse/term-featured-img"], ["ncmfse/term-name"], ["ncmfse/term-description"], ["ncmfse/term-count"]]]]]],
  scope: ["block"]
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (variations);

/***/ }),

/***/ "./src/term-query-loop-block/editor.scss":
/*!***********************************************!*\
  !*** ./src/term-query-loop-block/editor.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/term-query-loop-block/style.scss":
/*!**********************************************!*\
  !*** ./src/term-query-loop-block/style.scss ***!
  \**********************************************/
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

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

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

/***/ "./src/term-query-loop-block/block.json":
/*!**********************************************!*\
  !*** ./src/term-query-loop-block/block.json ***!
  \**********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"ncmfse/term-query-loop","title":"Ncmaz Terms Query Loop","category":"ncmfse","description":"An advanced block that allows displaying post types based on different query parameters and visual configurations.","textdomain":"default","attributes":{"myQueryId":{"type":"number","myType":0},"myQuery":{"type":"object","default":{"perPage":8,"isFilterByOrder":true,"taxonomySlug":"category","termIdList":[],"inherit":false,"postType":"post","orderBy":"name","order":"desc","parentIdString":null,"hideEmpty":true,"excludeIdList":[],"page":1}},"tagName":{"type":"string","default":"div"},"namespace":{"type":"string"},"enhancedPagination":{"type":"boolean","default":false},"displayLayout":{"type":"object","myType":{}}},"providesContext":{"ncmazfse_termQueryId":"myQueryId","ncmazfse_termQuery":"myQuery","displayLayout":"displayLayout","enhancedPagination":"enhancedPagination"},"supports":{"align":["wide","full"],"html":false,"layout":true,"interactivity":true},"editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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
/******/ 			"term-query-loop-block/index": 0,
/******/ 			"term-query-loop-block/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["term-query-loop-block/style-index"], () => (__webpack_require__("./src/term-query-loop-block/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map
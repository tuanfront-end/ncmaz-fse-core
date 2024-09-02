/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/category.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/category.js ***!
  \************************************************************************/
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

const category = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M6 5.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM4 6a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm11-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM13 6a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2V6zm5 8.5h-3a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zM15 13a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2v-3a2 2 0 00-2-2h-3zm-9 1.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zM4 15a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (category);
//# sourceMappingURL=category.js.map

/***/ }),

/***/ "./src/terms-query/edit/index.tsx":
/*!****************************************!*\
  !*** ./src/terms-query/edit/index.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _query_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./query-content */ "./src/terms-query/edit/query-content.tsx");
/* harmony import */ var _query_placeholder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./query-placeholder */ "./src/terms-query/edit/query-placeholder.tsx");

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


const QueryEdit = props => {
  const {
    clientId,
    attributes
  } = props;
  const [isPatternSelectionModalOpen, setIsPatternSelectionModalOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const hasInnerBlocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => !!select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.store).getBlocks(clientId).length, [clientId]);
  const Component = hasInnerBlocks ? _query_content__WEBPACK_IMPORTED_MODULE_4__["default"] : _query_placeholder__WEBPACK_IMPORTED_MODULE_5__["default"];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, {
    ...props,
    openPatternSelectionModal: () => setIsPatternSelectionModalOpen(true)
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QueryEdit);

/***/ }),

/***/ "./src/terms-query/edit/inspector-controls/index.tsx":
/*!***********************************************************!*\
  !*** ./src/terms-query/edit/inspector-controls/index.tsx ***!
  \***********************************************************/
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
    query,
    displayLayout,
    enhancedPagination
  } = attributes;
  const {
    order,
    orderBy,
    perPage,
    isFilterByOrder,
    taxonomySlug,
    termIdList
  } = query;
  const {
    records: taxonomiesRecords
  } = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.useEntityRecords)("root", "taxonomy", {
    per_page: -1,
    orderby: "name",
    order: "asc"
  });
  const {
    records: termRecords
  } = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.useEntityRecords)("taxonomy", taxonomySlug, {
    per_page: -1,
    orderby: "name",
    order: "asc",
    _fields: "id,name,parent",
    context: "view"
  });
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
        label
      };
    }) || [];
    return data;
  }, [termRecords]);
  const termNameList = termRecordsConvert.map(item => item.label);
  const getTermNameListFromIds = (ids = []) => {
    return termRecordsConvert.filter(item => ids.includes(item.id)).map(item => item.label);
  };
  const getTermIdsFromNames = (names = []) => {
    return termRecordsConvert.filter(item => names.includes(item.label)).map(item => item.id);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Settings")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Taxonomy type"),
    value: taxonomySlug,
    options: taxonomies,
    onChange: value => setQuery({
      taxonomySlug: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    __nextHasNoMarginBottom: true,
    checked: isFilterByOrder,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Filter by order."),
    onChange: value => {
      setQuery({
        isFilterByOrder: value
      });
    },
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Display a list of terms in a sort order-by or in a specific terms selected.")
  })), !isFilterByOrder && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Terms")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FormTokenField, {
    __experimentalAutoSelectFirstMatch: true,
    __experimentalExpandOnFocus: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Terms"),
    onChange: value => {
      if (!Array.isArray(value)) {
        return;
      }
      const newIds = getTermIdsFromNames(value);
      setQuery({
        termIdList: newIds
      });
    },
    suggestions: termNameList,
    value: getTermNameListFromIds(termIdList)
  })), !!isFilterByOrder && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Query")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.QueryControls, {
    numberOfItems: perPage,
    onNumberOfItemsChange: value => {
      setQuery({
        perPage: value
      });
    },
    onOrderByChange: value => {
      setQuery({
        orderBy: value
      });
    },
    onOrderChange: value => {
      setQuery({
        order: value
      });
    },
    order: order,
    orderBy: orderBy
  })));
}

/***/ }),

/***/ "./src/terms-query/edit/query-content.tsx":
/*!************************************************!*\
  !*** ./src/terms-query/edit/query-content.tsx ***!
  \************************************************/
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
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _query_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./query-toolbar */ "./src/terms-query/edit/query-toolbar.tsx");
/* harmony import */ var _inspector_controls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./inspector-controls */ "./src/terms-query/edit/inspector-controls/index.tsx");

/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */


const DEFAULTS_POSTS_PER_PAGE = 3;
const TEMPLATE = [["core/post-template"]];
function QueryContent({
  attributes,
  setAttributes,
  openPatternSelectionModal,
  name,
  clientId
}) {
  const {
    queryId,
    query,
    displayLayout,
    tagName: TagName = "div",
    query: {
      inherit
    } = {}
  } = attributes;
  const {
    __unstableMarkNextChangeAsNotPersistent
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.store);
  const instanceId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.useInstanceId)(QueryContent);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)();
  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useInnerBlocksProps)(blockProps, {
    template: TEMPLATE
  });
  const {
    postsPerPage
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const {
      getSettings
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.store);
    const {
      getEntityRecord,
      getEntityRecordEdits,
      canUser
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__.store);
    const settingPerPage = canUser("read", {
      kind: "root",
      name: "site"
    }) ? +getEntityRecord("root", "site")?.posts_per_page : +getSettings().postsPerPage;

    // Gets changes made via the template area posts per page setting. These won't be saved
    // until the page is saved, but we should reflect this setting within the query loops
    // that inherit it.
    const editedSettingPerPage = +getEntityRecordEdits("root", "site")?.posts_per_page;
    return {
      postsPerPage: editedSettingPerPage || settingPerPage || DEFAULTS_POSTS_PER_PAGE
    };
  }, []);
  // There are some effects running where some initialization logic is
  // happening and setting some values to some attributes (ex. queryId).
  // These updates can cause an `undo trap` where undoing will result in
  // resetting again, so we need to mark these changes as not persistent
  // with `__unstableMarkNextChangeAsNotPersistent`.

  // Changes in query property (which is an object) need to be in the same callback,
  // because updates are batched after the render and changes in different query properties
  // would cause to override previous wanted changes.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    const newQuery = {};
    // When we inherit from global query always need to set the `perPage`
    // based on the reading settings.
    if (inherit && query.perPage !== postsPerPage) {
      newQuery.perPage = postsPerPage;
    } else if (!query.perPage && postsPerPage) {
      newQuery.perPage = postsPerPage;
    }
    if (!!Object.keys(newQuery).length) {
      __unstableMarkNextChangeAsNotPersistent();
      updateQuery(newQuery);
    }
  }, [query.perPage, postsPerPage, inherit]);
  // We need this for multi-query block pagination.
  // Query parameters for each block are scoped to their ID.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (!Number.isFinite(queryId)) {
      __unstableMarkNextChangeAsNotPersistent();
      setAttributes({
        queryId: instanceId
      });
    }
  }, [queryId, instanceId]);
  const updateQuery = newQuery => setAttributes({
    query: {
      ...query,
      ...newQuery
    }
  });
  const updateDisplayLayout = newDisplayLayout => setAttributes({
    displayLayout: {
      ...displayLayout,
      ...newDisplayLayout
    }
  });
  const htmlElementMessages = {
    main: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("The <main> element should be used for the primary content of your document only."),
    section: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("The <section> element should represent a standalone portion of the document that can't be better represented by another element."),
    aside: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("The <aside> element should represent a portion of a document whose content is only indirectly related to the document's main content.")
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector_controls__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attributes: attributes,
    setQuery: updateQuery,
    setDisplayLayout: updateDisplayLayout,
    setAttributes: setAttributes,
    clientId: clientId
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_query_toolbar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: name,
    clientId: clientId,
    attributes: attributes,
    setQuery: updateQuery,
    openPatternSelectionModal: openPatternSelectionModal
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

/***/ "./src/terms-query/edit/query-placeholder.tsx":
/*!****************************************************!*\
  !*** ./src/terms-query/edit/query-placeholder.tsx ***!
  \****************************************************/
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./src/terms-query/utils.ts");

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
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(QueryVariationPicker, {
      clientId: clientId,
      attributes: attributes,
      icon: icon,
      label: label
    });
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

/***/ "./src/terms-query/edit/query-toolbar.tsx":
/*!************************************************!*\
  !*** ./src/terms-query/edit/query-toolbar.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QueryToolbar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/terms-query/utils.ts");

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */

function QueryToolbar({
  openPatternSelectionModal,
  name,
  clientId
}) {
  const hasPatterns = !!(0,_utils__WEBPACK_IMPORTED_MODULE_3__.usePatterns)(clientId, name).length;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, hasPatterns && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarGroup, {
    className: "wp-block-template-part__block-control-group"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarButton, {
    onClick: openPatternSelectionModal
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Replace"))));
}

/***/ }),

/***/ "./src/terms-query/icons.tsx":
/*!***********************************!*\
  !*** ./src/terms-query/icons.tsx ***!
  \***********************************/
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

/***/ "./src/terms-query/index.tsx":
/*!***********************************!*\
  !*** ./src/terms-query/index.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/category.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/terms-query/style.scss");
/* harmony import */ var _edit_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit/index */ "./src/terms-query/edit/index.tsx");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/terms-query/save.tsx");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/terms-query/block.json");
/* harmony import */ var _variations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./variations */ "./src/terms-query/variations.ts");
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

/***/ "./src/terms-query/save.tsx":
/*!**********************************!*\
  !*** ./src/terms-query/save.tsx ***!
  \**********************************/
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

/***/ "./src/terms-query/utils.ts":
/*!**********************************!*\
  !*** ./src/terms-query/utils.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEntitiesInfo: () => (/* binding */ getEntitiesInfo),
/* harmony export */   getTransformedBlocksFromPattern: () => (/* binding */ getTransformedBlocksFromPattern),
/* harmony export */   getValueFromObjectPath: () => (/* binding */ getValueFromObjectPath),
/* harmony export */   isControlAllowed: () => (/* binding */ isControlAllowed),
/* harmony export */   mapToIHasNameAndId: () => (/* binding */ mapToIHasNameAndId),
/* harmony export */   useAllowedControls: () => (/* binding */ useAllowedControls),
/* harmony export */   useBlockNameForPatterns: () => (/* binding */ useBlockNameForPatterns),
/* harmony export */   useIsPostTypeHierarchical: () => (/* binding */ useIsPostTypeHierarchical),
/* harmony export */   usePatterns: () => (/* binding */ usePatterns),
/* harmony export */   usePostTypes: () => (/* binding */ usePostTypes),
/* harmony export */   useScopedBlockVariations: () => (/* binding */ useScopedBlockVariations),
/* harmony export */   useTaxonomies: () => (/* binding */ useTaxonomies),
/* harmony export */   useUnsupportedBlocks: () => (/* binding */ useUnsupportedBlocks)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__);
/**
 * WordPress dependencies
 */







/** @typedef {import('@wordpress/blocks').WPBlockVariation} WPBlockVariation */

/**
 * @typedef IHasNameAndId
 * @property {string|number} id   The entity's id.
 * @property {string}        name The entity's name.
 */

/**
 * The object used in Query block that contains info and helper mappings
 * from an array of IHasNameAndId objects.
 *
 * @typedef {Object} QueryEntitiesInfo
 * @property {IHasNameAndId[]}               entities  The array of entities.
 * @property {Object<string, IHasNameAndId>} mapById   Object mapping with the id as key and the entity as value.
 * @property {Object<string, IHasNameAndId>} mapByName Object mapping with the name as key and the entity as value.
 * @property {string[]}                      names     Array with the entities' names.
 */

/**
 * Returns a helper object with mapping from Objects that implement
 * the `IHasNameAndId` interface. The returned object is used for
 * integration with `FormTokenField` component.
 *
 * @param {IHasNameAndId[]} entities The entities to extract of helper object.
 * @return {QueryEntitiesInfo} The object with the entities information.
 */
const getEntitiesInfo = entities => {
  const mapping = entities?.reduce((accumulator, entity) => {
    const {
      mapById,
      mapByName,
      names
    } = accumulator;
    mapById[entity.id] = entity;
    mapByName[entity.name] = entity;
    names.push(entity.name);
    return accumulator;
  }, {
    mapById: {},
    mapByName: {},
    names: []
  });
  return {
    entities,
    ...mapping
  };
};

/**
 * Helper util to return a value from a certain path of the object.
 * Path is specified as a string of properties, separated by dots,
 * for example: "parent.child".
 *
 * @param {Object} object Input object.
 * @param {string} path   Path to the object property.
 * @return {*} Value of the object property at the specified path.
 */
const getValueFromObjectPath = (object, path) => {
  const normalizedPath = path.split(".");
  let value = object;
  normalizedPath.forEach(fieldName => {
    value = value?.[fieldName];
  });
  return value;
};

/**
 * Helper util to map records to add a `name` prop from a
 * provided path, in order to handle all entities in the same
 * fashion(implementing`IHasNameAndId` interface).
 *
 * @param {Object[]} entities The array of entities.
 * @param {string}   path     The path to map a `name` property from the entity.
 * @return {IHasNameAndId[]} An array of enitities that now implement the `IHasNameAndId` interface.
 */
const mapToIHasNameAndId = (entities, path) => {
  return (entities || []).map(entity => ({
    ...entity,
    name: (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4__.decodeEntities)(getValueFromObjectPath(entity, path))
  }));
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
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store);
    const excludedPostTypes = ["attachment"];
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
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store);
    // Does the post type have taxonomies?
    if (getPostType(postType)?.taxonomies?.length > 0) {
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
 * Hook that returns whether a specific post type is hierarchical.
 *
 * @param {string} postType The post type to check.
 * @return {boolean} Whether a specific post type is hierarchical.
 */
function useIsPostTypeHierarchical(postType) {
  return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    const type = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).getPostType(postType);
    return type?.viewable && type?.hierarchical;
  }, [postType]);
}

/**
 * Hook that returns the query properties' names defined by the active
 * block variation, to determine which block's filters to show.
 *
 * @param {Object} attributes Block attributes.
 * @return {string[]} An array of the query attributes.
 */
function useAllowedControls(attributes) {
  return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => select(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__.store).getActiveBlockVariation("ncmazfse-block/terms-query", attributes)?.allowedControls, [attributes]);
}
function isControlAllowed(allowedControls, key) {
  // Every controls is allowed if the list is not defined.
  if (!allowedControls) {
    return true;
  }
  return allowedControls.includes(key);
}

/**
 * Clones a pattern's blocks and then recurses over that list of blocks,
 * transforming them to retain some `query` attribute properties.
 * For now we retain the `postType` and `inherit` properties as they are
 * fundamental for the expected functionality of the block and don't affect
 * its design and presentation.
 *
 * Returns the cloned/transformed blocks and array of existing Query Loop
 * client ids for further manipulation, in order to avoid multiple recursions.
 *
 * @param {WPBlock[]}        blocks               The list of blocks to look through and transform(mutate).
 * @param {Record<string,*>} queryBlockAttributes The existing Query Loop's attributes.
 * @return {{ newBlocks: WPBlock[], queryClientIds: string[] }} An object with the cloned/transformed blocks and all the Query Loop clients from these blocks.
 */
const getTransformedBlocksFromPattern = (blocks, queryBlockAttributes) => {
  const {
    query: {
      postType,
      inherit
    },
    namespace
  } = queryBlockAttributes;
  const clonedBlocks = blocks.map(block => (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__.cloneBlock)(block));
  const queryClientIds = [];
  const blocksQueue = [...clonedBlocks];
  while (blocksQueue.length > 0) {
    const block = blocksQueue.shift();
    if (block.name === "core/query") {
      block.attributes.query = {
        ...block.attributes.query,
        postType,
        inherit
      };
      if (namespace) {
        block.attributes.namespace = namespace;
      }
      queryClientIds.push(block.clientId);
    }
    block.innerBlocks?.forEach(innerBlock => {
      blocksQueue.push(innerBlock);
    });
  }
  return {
    newBlocks: clonedBlocks,
    queryClientIds
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
  const activeVariationName = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => select(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__.store).getActiveBlockVariation("core/query", attributes)?.name, [attributes]);
  const blockName = `core/query/${activeVariationName}`;
  const hasActiveVariationPatterns = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    if (!activeVariationName) {
      return false;
    }
    const {
      getBlockRootClientId,
      getPatternsByBlockTypes
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.store);
    const rootClientId = getBlockRootClientId(clientId);
    const activePatterns = getPatternsByBlockTypes(blockName, rootClientId);
    return activePatterns.length > 0;
  }, [clientId, activeVariationName, blockName]);
  return hasActiveVariationPatterns ? blockName : "core/query";
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
    } = select(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__.store);
    return {
      activeVariationName: getActiveBlockVariation("ncmazfse-block/terms-query", attributes)?.name,
      blockVariations: getBlockVariations("ncmazfse-block/terms-query", "block")
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

/**
 * Hook that returns the block patterns for a specific block type.
 *
 * @param {string} clientId The block's client ID.
 * @param {string} name     The block type name.
 * @return {Object[]} An array of valid block patterns.
 */
const usePatterns = (clientId, name) => {
  return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    const {
      getBlockRootClientId,
      getPatternsByBlockTypes
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.store);
    const rootClientId = getBlockRootClientId(clientId);
    return getPatternsByBlockTypes(name, rootClientId);
  }, [name, clientId]);
};

/**
 * The object returned by useUnsupportedBlocks with info about the type of
 * unsupported blocks present inside the Query block.
 *
 * @typedef  {Object}  UnsupportedBlocksInfo
 * @property {boolean} hasBlocksFromPlugins True if blocks from plugins are present.
 * @property {boolean} hasPostContentBlock  True if a 'core/post-content' block is present.
 * @property {boolean} hasUnsupportedBlocks True if there are any unsupported blocks.
 */

/**
 * Hook that returns an object with information about the unsupported blocks
 * present inside a Query Loop with the given `clientId`. The returned object
 * contains props that are true when a certain type of unsupported block is
 * present.
 *
 * @param {string} clientId The block's client ID.
 * @return {UnsupportedBlocksInfo} The object containing the information.
 */
const useUnsupportedBlocks = clientId => {
  return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    const {
      getClientIdsOfDescendants,
      getBlockName
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.store);
    const blocks = {};
    getClientIdsOfDescendants(clientId).forEach(descendantClientId => {
      const blockName = getBlockName(descendantClientId);
      /*
       * Client side navigation can be true in two states:
       *  - supports.interactivity = true;
       *  - supports.interactivity.clientNavigation = true;
       */
      const blockSupportsInteractivity = Object.is((0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__.getBlockSupport)(blockName, "interactivity"), true);
      const blockSupportsInteractivityClientNavigation = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__.getBlockSupport)(blockName, "interactivity.clientNavigation");
      const blockInteractivity = blockSupportsInteractivity || blockSupportsInteractivityClientNavigation;
      if (!blockInteractivity) {
        blocks.hasBlocksFromPlugins = true;
      } else if (blockName === "core/post-content") {
        blocks.hasPostContentBlock = true;
      }
    });
    blocks.hasUnsupportedBlocks = blocks.hasBlocksFromPlugins || blocks.hasPostContentBlock;
    return blocks;
  }, [clientId]);
};

/***/ }),

/***/ "./src/terms-query/variations.ts":
/*!***************************************!*\
  !*** ./src/terms-query/variations.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ "./src/terms-query/icons.tsx");
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
  innerBlocks: [["core/post-template", {}, [["core/post-title"], ["core/post-date"]]]],
  scope: ["block"]
}, {
  name: "title-excerpt",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Title & Excerpt"),
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.titleExcerpt,
  attributes: {},
  innerBlocks: [["core/post-template", {}, [["core/post-title"], ["core/post-excerpt"]]]],
  scope: ["block"]
}, {
  name: "title-date-excerpt",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Title, Date, & Excerpt"),
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.titleDateExcerpt,
  attributes: {},
  innerBlocks: [["core/post-template", {}, [["core/post-title"], ["core/post-date"], ["core/post-excerpt"]]]],
  scope: ["block"]
}, {
  name: "image-date-title",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Image, Date, & Title"),
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.imageDateTitle,
  attributes: {},
  innerBlocks: [["core/post-template", {}, [["core/post-featured-image"], ["core/post-date"], ["core/post-title"]]]],
  scope: ["block"]
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (variations);

/***/ }),

/***/ "./src/terms-query/style.scss":
/*!************************************!*\
  !*** ./src/terms-query/style.scss ***!
  \************************************/
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

/***/ "@wordpress/html-entities":
/*!**************************************!*\
  !*** external ["wp","htmlEntities"] ***!
  \**************************************/
/***/ ((module) => {

module.exports = window["wp"]["htmlEntities"];

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

/***/ "./src/terms-query/block.json":
/*!************************************!*\
  !*** ./src/terms-query/block.json ***!
  \************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"ncmazfse-block/terms-query","title":"Terms Query Loop","category":"ncmazfse","description":"An advanced block that allows displaying post types based on different query parameters and visual configurations.","textdomain":"default","attributes":{"queryId":{"type":"number"},"query":{"type":"object","default":{"perPage":null,"postType":"post","order":"desc","orderBy":"date","exclude":[],"isFilterByOrder":true,"taxonomySlug":"category","termIdList":[]}},"tagName":{"type":"string","default":"div"},"namespace":{"type":"string"},"enhancedPagination":{"type":"boolean","default":false}},"providesContext":{"queryId":"queryId","query":"query","displayLayout":"displayLayout","enhancedPagination":"enhancedPagination"},"supports":{"align":["wide","full"],"html":false,"layout":true,"interactivity":true},"editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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
/******/ 			"terms-query/index": 0,
/******/ 			"terms-query/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["terms-query/style-index"], () => (__webpack_require__("./src/terms-query/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map
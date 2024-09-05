/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/term-description.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/term-description.js ***!
  \********************************************************************************/
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

const tag = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M6.08 10.103h2.914L9.657 12h1.417L8.23 4H6.846L4 12h1.417l.663-1.897Zm1.463-4.137.994 2.857h-2l1.006-2.857ZM11 16H4v-1.5h7V16Zm1 0h8v-1.5h-8V16Zm-4 4H4v-1.5h4V20Zm7-1.5V20H9v-1.5h6Z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tag);
//# sourceMappingURL=term-description.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/upload.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/upload.js ***!
  \**********************************************************************/
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

const upload = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18.5 15v3.5H13V6.7l4.5 4.1 1-1.1-6.2-5.8-5.8 5.8 1 1.1 4-4v11.7h-6V15H4v5h16v-5z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (upload);
//# sourceMappingURL=upload.js.map

/***/ }),

/***/ "./src/term-featured-image-block/dimension-controls.tsx":
/*!**************************************************************!*\
  !*** ./src/term-featured-image-block/dimension-controls.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);

/**
 * WordPress dependencies
 */




const SCALE_OPTIONS = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToggleGroupControlOption, {
  value: "cover",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)("Cover", "Scale option for Image dimension control")
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToggleGroupControlOption, {
  value: "contain",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)("Contain", "Scale option for Image dimension control")
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToggleGroupControlOption, {
  value: "fill",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)("Fill", "Scale option for Image dimension control")
}));
const DEFAULT_SCALE = "cover";
const DEFAULT_SIZE = "full";
const scaleHelp = {
  cover: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Image is scaled and cropped to fill the entire space without being distorted."),
  contain: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Image is scaled to fill the space without clipping nor distorting."),
  fill: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Image will be stretched and distorted to completely fill the space.")
};
const DimensionControls = ({
  clientId,
  attributes: {
    aspectRatio,
    width,
    height,
    scale,
    sizeSlug
  },
  setAttributes,
  media
}) => {
  const [availableUnits, defaultRatios, themeRatios, showDefaultRatios] = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useSettings)("spacing.units", "dimensions.aspectRatios.default", "dimensions.aspectRatios.theme", "dimensions.defaultAspectRatios");
  const units = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUseCustomUnits)({
    availableUnits: availableUnits || ["px", "%", "vw", "em", "rem"]
  });
  const imageSizes = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.store).getSettings().imageSizes, []);
  const imageSizeOptions = imageSizes.filter(({
    slug
  }) => {
    return media?.media_details?.sizes?.[slug]?.source_url;
  }).map(({
    name,
    slug
  }) => ({
    value: slug,
    label: name
  }));
  const onDimensionChange = (dimension, nextValue) => {
    const parsedValue = parseFloat(nextValue);
    /**
     * If we have no value set and we change the unit,
     * we don't want to set the attribute, as it would
     * end up having the unit as value without any number.
     */
    if (isNaN(parsedValue) && nextValue) {
      return;
    }
    setAttributes({
      [dimension]: parsedValue < 0 ? "0" : nextValue
    });
  };
  const scaleLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)("Scale", "Image scaling options");
  const showScaleControl = height || aspectRatio && aspectRatio !== "auto";
  const themeOptions = themeRatios?.map(({
    name,
    ratio
  }) => ({
    label: name,
    value: ratio
  }));
  const defaultOptions = defaultRatios?.map(({
    name,
    ratio
  }) => ({
    label: name,
    value: ratio
  }));
  const aspectRatioOptions = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)("Original", "Aspect ratio option for dimensions control"),
    value: "auto"
  }, ...(showDefaultRatios ? defaultOptions : []), ...(themeOptions ? themeOptions : [])];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToolsPanelItem, {
    hasValue: () => !!aspectRatio,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Aspect ratio"),
    onDeselect: () => setAttributes({
      aspectRatio: undefined
    }),
    resetAllFilter: () => ({
      aspectRatio: undefined
    }),
    isShownByDefault: true,
    panelId: clientId
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    __next40pxDefaultSize: true,
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Aspect ratio"),
    value: aspectRatio,
    options: aspectRatioOptions,
    onChange: nextAspectRatio => setAttributes({
      aspectRatio: nextAspectRatio
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToolsPanelItem, {
    className: "single-column",
    hasValue: () => !!height,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Height"),
    onDeselect: () => setAttributes({
      height: undefined
    }),
    resetAllFilter: () => ({
      height: undefined
    }),
    isShownByDefault: true,
    panelId: clientId
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
    __next40pxDefaultSize: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Height"),
    labelPosition: "top",
    value: height || "",
    min: 0,
    onChange: nextHeight => onDimensionChange("height", nextHeight),
    units: units
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToolsPanelItem, {
    className: "single-column",
    hasValue: () => !!width,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Width"),
    onDeselect: () => setAttributes({
      width: undefined
    }),
    resetAllFilter: () => ({
      width: undefined
    }),
    isShownByDefault: true,
    panelId: clientId
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
    __next40pxDefaultSize: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Width"),
    labelPosition: "top",
    value: width || "",
    min: 0,
    onChange: nextWidth => onDimensionChange("width", nextWidth),
    units: units
  })), showScaleControl && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToolsPanelItem, {
    hasValue: () => !!scale && scale !== DEFAULT_SCALE,
    label: scaleLabel,
    onDeselect: () => setAttributes({
      scale: DEFAULT_SCALE
    }),
    resetAllFilter: () => ({
      scale: DEFAULT_SCALE
    }),
    isShownByDefault: true,
    panelId: clientId
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToggleGroupControl, {
    __next40pxDefaultSize: true,
    __nextHasNoMarginBottom: true,
    label: scaleLabel,
    value: scale,
    help: scaleHelp[scale],
    onChange: value => setAttributes({
      scale: value
    }),
    isBlock: true
  }, SCALE_OPTIONS)), !!imageSizeOptions.length && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToolsPanelItem, {
    hasValue: () => !!sizeSlug,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Resolution"),
    onDeselect: () => setAttributes({
      sizeSlug: undefined
    }),
    resetAllFilter: () => ({
      sizeSlug: undefined
    }),
    isShownByDefault: false,
    panelId: clientId
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    __next40pxDefaultSize: true,
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Resolution"),
    value: sizeSlug || DEFAULT_SIZE,
    options: imageSizeOptions,
    onChange: nextSizeSlug => setAttributes({
      sizeSlug: nextSizeSlug
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select the size of the source image.")
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DimensionControls);

/***/ }),

/***/ "./src/term-featured-image-block/edit.tsx":
/*!************************************************!*\
  !*** ./src/term-featured-image-block/edit.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostFeaturedImageEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blob */ "@wordpress/blob");
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blob__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/upload.js");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _dimension_controls__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dimension-controls */ "./src/term-featured-image-block/dimension-controls.tsx");
/* harmony import */ var _overlay_controls__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./overlay-controls */ "./src/term-featured-image-block/overlay-controls.tsx");
/* harmony import */ var _overlay__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./overlay */ "./src/term-featured-image-block/overlay.tsx");

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */










/**
 * Internal dependencies
 */



const ALLOWED_MEDIA_TYPES = ["image"];
function getMediaSourceUrlBySizeSlug(media, slug) {
  return media?.media_details?.sizes?.[slug]?.source_url || media?.source_url;
}
const disabledClickProps = {
  onClick: event => event.preventDefault(),
  "aria-disabled": true
};
function PostFeaturedImageEdit({
  clientId,
  attributes,
  setAttributes,
  context: {
    postId,
    postType: postTypeSlug,
    queryId
  }
}) {
  const isDescendentOfQueryLoop = Number.isFinite(queryId);
  const {
    isLink,
    aspectRatio,
    height,
    width,
    scale,
    sizeSlug,
    rel,
    linkTarget,
    useFirstImageFromPost
  } = attributes;
  const [temporaryURL, setTemporaryURL] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_7__.useState)();
  const [storedFeaturedImage, setFeaturedImage] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.useEntityProp)("postType", postTypeSlug, "featured_media", postId);

  // Fallback to post content if no featured image is set.
  // This is needed for the "Use first image from post" option.
  const [postContent] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.useEntityProp)("postType", postTypeSlug, "content", postId);
  const featuredImage = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_7__.useMemo)(() => {
    if (storedFeaturedImage) {
      return storedFeaturedImage;
    }
    if (!useFirstImageFromPost) {
      return;
    }
    const imageOpener = /<!--\s+wp:(?:core\/)?image\s+(?<attrs>{(?:(?:[^}]+|}+(?=})|(?!}\s+\/?-->).)*)?}\s+)?-->/.exec(postContent);
    const imageId = imageOpener?.groups?.attrs && JSON.parse(imageOpener.groups.attrs)?.id;
    return imageId;
  }, [storedFeaturedImage, useFirstImageFromPost, postContent]);
  const {
    media,
    postType,
    postPermalink
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const {
      getMedia,
      getPostType,
      getEditedEntityRecord
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.store);
    return {
      media: featuredImage && getMedia(featuredImage, {
        context: "view"
      }),
      postType: postTypeSlug && getPostType(postTypeSlug),
      postPermalink: getEditedEntityRecord("postType", postTypeSlug, postId)?.link
    };
  }, [featuredImage, postTypeSlug, postId]);
  const mediaUrl = getMediaSourceUrlBySizeSlug(media, sizeSlug);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.useBlockProps)({
    style: {
      width,
      height,
      aspectRatio
    },
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])({
      "is-transient": temporaryURL
    })
  });
  const borderProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.__experimentalUseBorderProps)(attributes);
  const shadowProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.__experimentalGetShadowClassesAndStyles)(attributes);
  const blockEditingMode = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.useBlockEditingMode)();
  const placeholder = content => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Placeholder, {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("block-editor-media-placeholder", borderProps.className),
      withIllustration: true,
      style: {
        height: !!aspectRatio && "100%",
        width: !!aspectRatio && "100%",
        ...borderProps.style,
        ...shadowProps.style
      }
    }, content);
  };
  const onSelectImage = value => {
    if (value?.id) {
      setFeaturedImage(value.id);
    }
    if (value?.url && (0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_2__.isBlobURL)(value.url)) {
      setTemporaryURL(value.url);
    }
  };

  // Reset temporary url when media is available.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
    if (mediaUrl && temporaryURL) {
      setTemporaryURL();
    }
  }, [mediaUrl, temporaryURL]);
  const {
    createErrorNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_9__.store);
  const onUploadError = message => {
    createErrorNotice(message, {
      type: "snackbar"
    });
    setTemporaryURL();
  };
  const controls = blockEditingMode === "default" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.InspectorControls, {
    group: "color"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_overlay_controls__WEBPACK_IMPORTED_MODULE_11__["default"], {
    attributes: attributes,
    setAttributes: setAttributes,
    clientId: clientId
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.InspectorControls, {
    group: "dimensions"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_dimension_controls__WEBPACK_IMPORTED_MODULE_10__["default"], {
    clientId: clientId,
    attributes: attributes,
    setAttributes: setAttributes,
    media: media
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Settings")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    __nextHasNoMarginBottom: true,
    label: postType?.labels.singular_name ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.sprintf)(
    // translators: %s: Name of the post type e.g: "Page".
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Link to %s"), postType.labels.singular_name) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Link to post"),
    onChange: () => setAttributes({
      isLink: !isLink
    }),
    checked: isLink
  }), isLink && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Open in new tab"),
    onChange: value => setAttributes({
      linkTarget: value ? "_blank" : "_self"
    }),
    checked: linkTarget === "_blank"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    __next40pxDefaultSize: true,
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Link rel"),
    value: rel,
    onChange: newRel => setAttributes({
      rel: newRel
    })
  })))));
  let image;

  /**
   * A Post Featured Image block should not have image replacement
   * or upload options in the following cases:
   * - Is placed in a Query Loop. This is a conscious decision to
   * prevent content editing of different posts in Query Loop, and
   * this could change in the future.
   * - Is in a context where it does not have a postId (for example
   * in a template or template part).
   */
  if (!featuredImage && (isDescendentOfQueryLoop || !postId)) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, controls, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, !!isLink ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: postPermalink,
      target: linkTarget,
      ...disabledClickProps
    }, placeholder()) : placeholder(), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_overlay__WEBPACK_IMPORTED_MODULE_12__["default"], {
      attributes: attributes,
      setAttributes: setAttributes,
      clientId: clientId
    })));
  }
  const label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Add a featured image");
  const imageStyles = {
    ...borderProps.style,
    ...shadowProps.style,
    height: aspectRatio ? "100%" : height,
    width: !!aspectRatio && "100%",
    objectFit: !!(height || aspectRatio) && scale
  };

  /**
   * When the post featured image block is placed in a context where:
   * - It has a postId (for example in a single post)
   * - It is not inside a query loop
   * - It has no image assigned yet
   * Then display the placeholder with the image upload option.
   */
  if (!featuredImage && !temporaryURL) {
    image = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.MediaPlaceholder, {
      onSelect: onSelectImage,
      accept: "image/*",
      allowedTypes: ALLOWED_MEDIA_TYPES,
      onError: onUploadError,
      placeholder: placeholder,
      mediaLibraryButton: ({
        open
      }) => {
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button
        // TODO: Switch to `true` (40px size) if possible
        , {
          __next40pxDefaultSize: false,
          icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_13__["default"],
          variant: "primary",
          label: label,
          showTooltip: true,
          tooltipPosition: "top center",
          onClick: () => {
            open();
          }
        });
      }
    });
  } else {
    // We have a Featured image so show a Placeholder if is loading.
    image = !media && !temporaryURL ? placeholder() : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: borderProps.className,
      src: temporaryURL || mediaUrl,
      alt: media && media?.alt_text ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.sprintf)(
      // translators: %s: The image's alt text.
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Featured image: %s"), media.alt_text) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Featured image"),
      style: imageStyles
    }), temporaryURL && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Spinner, null));
  }

  /**
   * When the post featured image block:
   * - Has an image assigned
   * - Is not inside a query loop
   * Then display the image and the image replacement option.
   */
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !temporaryURL && controls, !!media && !isDescendentOfQueryLoop && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.BlockControls, {
    group: "other"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.MediaReplaceFlow, {
    mediaId: featuredImage,
    mediaURL: mediaUrl,
    allowedTypes: ALLOWED_MEDIA_TYPES,
    accept: "image/*",
    onSelect: onSelectImage,
    onError: onUploadError,
    onReset: () => setFeaturedImage(0)
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
    ...blockProps
  }, !!isLink ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: postPermalink,
    target: linkTarget,
    ...disabledClickProps
  }, image) : image, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_overlay__WEBPACK_IMPORTED_MODULE_12__["default"], {
    attributes: attributes,
    setAttributes: setAttributes,
    clientId: clientId
  })));
}

/***/ }),

/***/ "./src/term-featured-image-block/index.tsx":
/*!*************************************************!*\
  !*** ./src/term-featured-image-block/index.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/term-description.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/term-featured-image-block/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/term-featured-image-block/edit.tsx");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/term-featured-image-block/block.json");
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
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"],
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/term-featured-image-block/overlay-controls.tsx":
/*!************************************************************!*\
  !*** ./src/term-featured-image-block/overlay-controls.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);

/**
 * WordPress dependencies
 */




const Overlay = ({
  clientId,
  attributes,
  setAttributes,
  overlayColor,
  setOverlayColor
}) => {
  const {
    dimRatio
  } = attributes;
  const {
    gradientValue,
    setGradient
  } = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalUseGradient)();
  const colorGradientSettings = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalUseMultipleOriginColorsAndGradients)();
  if (!colorGradientSettings.hasColorsOrGradients) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalColorGradientSettingsDropdown, {
    __experimentalIsRenderedInSidebar: true,
    settings: [{
      colorValue: overlayColor.color,
      gradientValue,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Overlay"),
      onColorChange: setOverlayColor,
      onGradientChange: setGradient,
      isShownByDefault: true,
      resetAllFilter: () => ({
        overlayColor: undefined,
        customOverlayColor: undefined,
        gradient: undefined,
        customGradient: undefined
      })
    }],
    panelId: clientId,
    ...colorGradientSettings
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToolsPanelItem, {
    hasValue: () => dimRatio !== undefined,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Overlay opacity"),
    onDeselect: () => setAttributes({
      dimRatio: 0
    }),
    resetAllFilter: () => ({
      dimRatio: 0
    }),
    isShownByDefault: true,
    panelId: clientId
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Overlay opacity"),
    value: dimRatio,
    onChange: newDimRatio => setAttributes({
      dimRatio: newDimRatio
    }),
    min: 0,
    max: 100,
    step: 10,
    required: true,
    __next40pxDefaultSize: true
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.compose)([(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.withColors)({
  overlayColor: "background-color"
})])(Overlay));

/***/ }),

/***/ "./src/term-featured-image-block/overlay.tsx":
/*!***************************************************!*\
  !*** ./src/term-featured-image-block/overlay.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/term-featured-image-block/utils.ts");

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */

const Overlay = ({
  attributes,
  overlayColor
}) => {
  const {
    dimRatio
  } = attributes;
  const {
    gradientClass,
    gradientValue
  } = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalUseGradient)();
  const colorGradientSettings = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalUseMultipleOriginColorsAndGradients)();
  const borderProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalUseBorderProps)(attributes);
  const overlayStyles = {
    backgroundColor: overlayColor.color,
    backgroundImage: gradientValue,
    ...borderProps.style
  };
  if (!colorGradientSettings.hasColorsOrGradients || !dimRatio) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "aria-hidden": "true",
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("wp-block-post-featured-image__overlay", (0,_utils__WEBPACK_IMPORTED_MODULE_4__.dimRatioToClass)(dimRatio), {
      [overlayColor.class]: overlayColor.class,
      "has-background-dim": dimRatio !== undefined,
      "has-background-gradient": gradientValue,
      [gradientClass]: gradientClass
    }, borderProps.className),
    style: overlayStyles
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.compose)([(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.withColors)({
  overlayColor: "background-color"
})])(Overlay));

/***/ }),

/***/ "./src/term-featured-image-block/utils.ts":
/*!************************************************!*\
  !*** ./src/term-featured-image-block/utils.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dimRatioToClass: () => (/* binding */ dimRatioToClass)
/* harmony export */ });
/**
 * Generates the opacity/dim class based on given number.
 *
 * @param {number} ratio Dim/opacity number.
 *
 * @return {string} Generated class.
 */
function dimRatioToClass(ratio) {
  return ratio === undefined ? null : "has-background-dim-" + 10 * Math.round(ratio / 10);
}

/***/ }),

/***/ "./src/term-featured-image-block/style.scss":
/*!**************************************************!*\
  !*** ./src/term-featured-image-block/style.scss ***!
  \**************************************************/
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

/***/ "@wordpress/blob":
/*!******************************!*\
  !*** external ["wp","blob"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["blob"];

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

/***/ "@wordpress/notices":
/*!*********************************!*\
  !*** external ["wp","notices"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["notices"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "./node_modules/clsx/dist/clsx.mjs":
/*!*****************************************!*\
  !*** ./node_modules/clsx/dist/clsx.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clsx: () => (/* binding */ clsx),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

/***/ }),

/***/ "./src/term-featured-image-block/block.json":
/*!**************************************************!*\
  !*** ./src/term-featured-image-block/block.json ***!
  \**************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"ncmazfse-block/term-featured-image","title":"Ncmaz Term Featured Image","category":"ncmazfse","description":"Display a term\'s featured image.","textdomain":"default","attributes":{"isLink":{"type":"boolean","default":false},"aspectRatio":{"type":"string"},"width":{"type":"string"},"height":{"type":"string"},"scale":{"type":"string","default":"cover"},"sizeSlug":{"type":"string"},"rel":{"type":"string","attribute":"rel","default":""},"linkTarget":{"type":"string","default":"_self"},"overlayColor":{"type":"string"},"customOverlayColor":{"type":"string"},"dimRatio":{"type":"number","default":0},"gradient":{"type":"string"},"customGradient":{"type":"string"},"useFirstImageFromPost":{"type":"boolean","default":false}},"usesContext":["termId","termTaxonomy","ncmazfse_termQueryId"],"example":{"viewportWidth":350},"supports":{"align":["left","right","center","wide","full"],"color":{"text":false,"background":false},"__experimentalBorder":{"color":true,"radius":true,"width":true,"__experimentalSkipSerialization":true,"__experimentalDefaultControls":{"color":true,"radius":true,"width":true}},"filter":{"duotone":true},"shadow":{"__experimentalSkipSerialization":true},"html":false,"spacing":{"margin":true,"padding":true},"interactivity":{"clientNavigation":true}},"selectors":{"border":".wp-block-post-featured-image img, .wp-block-post-featured-image .block-editor-media-placeholder, .wp-block-post-featured-image .wp-block-post-featured-image__overlay","shadow":".wp-block-post-featured-image img, .wp-block-post-featured-image .components-placeholder","filter":{"duotone":".wp-block-post-featured-image img, .wp-block-post-featured-image .wp-block-post-featured-image__placeholder, .wp-block-post-featured-image .components-placeholder__illustration, .wp-block-post-featured-image .components-placeholder::before"}},"editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php"}');

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
/******/ 			"term-featured-image-block/index": 0,
/******/ 			"term-featured-image-block/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["term-featured-image-block/style-index"], () => (__webpack_require__("./src/term-featured-image-block/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map
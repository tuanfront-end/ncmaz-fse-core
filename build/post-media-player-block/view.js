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
/*!*********************************************!*\
  !*** ./src/post-media-player-block/view.ts ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/interactivity */ "@wordpress/interactivity");
/**
 * WordPress dependencies
 */


// view.js

const {
  state,
  actions
} = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.store)("ncmfse/post-media-player-block", {
  state: {
    get playedWidth() {
      return `calc(${state.currentTime / state.duration * 100}% -  0.25rem)`;
    },
    get thumbLeft() {
      return `calc(${state.currentTime / state.duration * 100}%)`;
    },
    get currentTimeHuman() {
      return formatTime(parseTime(state.currentTime), parseTime(state.duration));
    },
    get durationHuman() {
      return formatTime(parseTime(state.duration));
    },
    get isPlaybackRate1x() {
      return state.playbackRate === 1;
    },
    get isPlaybackRate1_5x() {
      return state.playbackRate === 1.5;
    },
    get isPlaybackRate2x() {
      return state.playbackRate === 2;
    }
  },
  actions: {
    // dispatchers
    dispatchPlay() {
      state.playing = true;
    },
    dispatchPause() {
      state.playing = false;
    },
    dispatchDurationChange() {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      const {
        playerRef
      } = context;
      state.duration = Math.floor(playerRef?.duration || 0);
    },
    dispatchCurrentTimeChange() {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      const {
        playerRef
      } = context;
      state.currentTime = Math.floor(playerRef?.currentTime || 0);
    },
    // actions
    play() {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      const {
        playerRef
      } = context;
      const {
        episode
      } = state;
      if (episode) {
        state.playing = true;
        if (playerRef && playerRef.currentSrc !== episode.audio.src) {
          let playbackRate = playerRef.playbackRate;
          playerRef.src = episode.audio.src;
          playerRef.load();
          playerRef.pause();
          playerRef.playbackRate = playbackRate;
          playerRef.currentTime = 0;
        }
      }
      playerRef?.play();
    },
    pause() {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      const {
        playerRef
      } = context;
      playerRef?.pause();
    },
    toggle() {
      actions.isPlaying() ? actions.pause() : actions.play();
    },
    toggleMute() {
      state.muted = !state.muted;
    },
    isPlaying() {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      const {
        playerRef
      } = context;
      const {
        episode
      } = state;
      return episode ? state.playing && playerRef?.currentSrc === episode.audio.src : state.playing;
    },
    rewind10s() {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      const {
        playerRef
      } = context;
      if (!playerRef) return;
      playerRef.currentTime += -10;
    },
    forward10s() {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      const {
        playerRef
      } = context;
      if (!playerRef) return;
      playerRef.currentTime += 10;
    },
    togglePlaybackRate() {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      const {
        playerRef
      } = context;
      if (!playerRef) return;
      if (state.playbackRate === 1) {
        state.playbackRate = 1.5;
      } else if (state.playbackRate === 1.5) {
        state.playbackRate = 2;
      } else {
        state.playbackRate = 1;
      }
      playerRef.playbackRate = state.playbackRate;
    },
    // Slider
    handleSeekMouseDown() {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      const {
        playerRef
      } = context;
      playerRef?.pause();
    },
    handleSeekChange() {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      const {
        playerRef,
        sliderRef
      } = context;
      if (!playerRef?.currentSrc || !sliderRef) return;
      const currentTime = playerRef.duration * parseFloat(sliderRef.value);
      // update the state current time
      state.currentTime = Math.floor(currentTime);
      // Update the player's current time
      playerRef.currentTime = Math.floor(currentTime);
    },
    handleSeekMouseUp() {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      const {
        playerRef
      } = context;
      playerRef?.play();
    }
  },
  callbacks: {
    onInit: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      const {
        ref
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getElement)();
      context.playerRef = ref?.querySelector("audio.post-media-player__audio");
      context.sliderRef = ref?.querySelector("input.post-media-player__slider-input");
    }
  }
});
function parseTime(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds - hours * 3600) / 60);
  seconds = seconds - hours * 3600 - minutes * 60;
  return [hours, minutes, seconds];
}
function formatTime(seconds, totalSeconds = seconds) {
  let totalWithoutLeadingZeroes = totalSeconds.slice(totalSeconds.findIndex(x => x !== 0));
  return seconds.slice(seconds.length - totalWithoutLeadingZeroes.length).map(x => x.toString().padStart(2, "0")).join(":");
}
})();


//# sourceMappingURL=view.js.map
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
    // audio player dispatchers
    dispatchPlay() {
      state.playing = true;
    },
    dispatchPause() {
      state.playing = false;
    },
    dispatchDurationChange() {
      const {
        playerRef
      } = state;
      state.duration = Math.floor(playerRef?.duration || 0);
    },
    dispatchCurrentTimeChange() {
      const {
        playerRef
      } = state;
      state.currentTime = Math.floor(playerRef?.currentTime || 0);
    },
    // Audio player actions
    play() {
      const {
        episode,
        playerRef
      } = state;
      if (episode) {
        state.playing = true;
        if (playerRef && playerRef.currentSrc !== episode.media?.src) {
          let playbackRate = playerRef.playbackRate;
          playerRef.src = episode.media?.src || "";
          playerRef.load();
          playerRef.pause();
          playerRef.playbackRate = playbackRate;
          playerRef.currentTime = 0;
        }
      }
      state.isShowPlayer = true;
      playerRef?.play();
    },
    pause() {
      const {
        playerRef
      } = state;
      playerRef?.pause();
    },
    toggle() {
      actions.isPlaying() ? actions.pause() : actions.play();
    },
    toggleMute() {
      state.muted = !state.muted;
    },
    isPlaying() {
      const {
        playerRef
      } = state;
      const {
        episode
      } = state;
      return episode ? state.playing && playerRef?.currentSrc === episode.media?.src : state.playing;
    },
    rewind10s() {
      const {
        playerRef
      } = state;
      if (!playerRef) return;
      playerRef.currentTime += -10;
    },
    forward10s() {
      const {
        playerRef
      } = state;
      if (!playerRef) return;
      playerRef.currentTime += 10;
    },
    togglePlaybackRate() {
      const {
        playerRef
      } = state;
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
    ended() {
      const {
        playerRef
      } = state;
      if (!playerRef) return;
      playerRef.currentTime = 0;
      playerRef.pause();
      state.playing = false;
    },
    // Audio player - slider
    handleSeekMouseDown() {
      const {
        playerRef
      } = state;
      playerRef?.pause();
    },
    handleSeekChange() {
      const {
        playerRef,
        sliderRef
      } = state;
      if (!playerRef?.currentSrc || !sliderRef) return;
      const currentTime = playerRef.duration * parseFloat(sliderRef.value);
      // update the state current time
      state.currentTime = Math.floor(currentTime);
      // Update the player's current time
      playerRef.currentTime = Math.floor(currentTime);
    },
    handleSeekMouseUp() {
      const {
        playerRef
      } = state;
      playerRef?.play();
    },
    // other player actions ---
    handleClosePlayer() {
      state.isShowPlayer = false;
      actions.ended();
    },
    handleClickPostMediaPlayBtn() {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      if (context.episodeContext?.media?.src && context.episodeContext?.media?.type === "AUDIO") {
        state.episode = context.episodeContext;
        actions.play();
      }
    }
  },
  callbacks: {
    onInit: () => {
      const {
        ref
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getElement)();
      state.playerRef = ref?.querySelector("audio.post-media-player__audio");
      state.sliderRef = ref?.querySelector("input.post-media-player__slider-input");
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
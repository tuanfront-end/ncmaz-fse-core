import * as __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__ from "@wordpress/interactivity";
/******/ var __webpack_modules__ = ({

/***/ "./src/post-media-player-block/utils.ts":
/*!**********************************************!*\
  !*** ./src/post-media-player-block/utils.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatTime: () => (/* binding */ formatTime),
/* harmony export */   parseTime: () => (/* binding */ parseTime)
/* harmony export */ });
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

/***/ }),

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
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/post-media-player-block/utils.ts");
/**
 * WordPress dependencies
 */



// view.js

const {
  state,
  actions
} = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.store)("ncmfse/post-media-player-block", {
  state: {
    get audioEpisode() {
      if (state.initEpisode?.media?.type !== "AUDIO") {
        return null;
      }
      return state.initEpisode;
    },
    get videoEpisode() {
      if (state.initEpisode?.media?.type !== "VIDEO") {
        return null;
      }
      return state.initEpisode;
    },
    get iframeEpisode() {
      if (state.initEpisode?.media?.type !== "IFRAME") {
        return null;
      }
      return state.initEpisode;
    },
    // Media type
    get mediaIsIframe() {
      return state.initEpisode?.media?.type === "IFRAME";
    },
    get mediaIsVideo() {
      return state.initEpisode?.media?.type === "VIDEO";
    },
    get mediaIsAudio() {
      return state.initEpisode?.media?.type === "AUDIO";
    },
    // Audio player state
    get playedWidth() {
      return `calc(${state.currentTime / state.duration * 100}% -  0.25rem)`;
    },
    get thumbLeft() {
      return `calc(${state.currentTime / state.duration * 100}%)`;
    },
    get currentTimeHuman() {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.formatTime)((0,_utils__WEBPACK_IMPORTED_MODULE_1__.parseTime)(state.currentTime), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.parseTime)(state.duration));
    },
    get durationHuman() {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.formatTime)((0,_utils__WEBPACK_IMPORTED_MODULE_1__.parseTime)(state.duration));
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
        audioEpisode,
        playerRef,
        currentPlayingId
      } = state;
      if (audioEpisode) {
        state.playing = true;
        if (playerRef && currentPlayingId !== audioEpisode?.id) {
          let playbackRate = playerRef.playbackRate;
          playerRef.load();
          playerRef.pause();
          playerRef.playbackRate = playbackRate;
          playerRef.currentTime = 0;
        }
      }
      state.isShowAudioPlayer = true;
      state.isShowVideoPlayer = false;
      playerRef?.play();
      // add currentPlayingId
      state.currentPlayingId = audioEpisode?.id || null;
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
        playerRef,
        audioEpisode,
        currentPlayingId
      } = state;
      return audioEpisode ? state.playing && playerRef?.currentSrc && currentPlayingId === audioEpisode?.id : state.playing;
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
    forceEnd() {
      const {
        playerRef
      } = state;
      state.initEpisode = null;
      state.playing = false;
      if (!playerRef) return;
      playerRef.currentTime = 0;
      playerRef.pause();
      state.currentPlayingId = null;
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
    // Video <video> player actions
    videoPlay() {
      const {
        videoEpisode,
        videoPlayerRef,
        currentPlayingId
      } = state;
      if (videoEpisode) {
        if (videoPlayerRef && currentPlayingId !== videoEpisode?.id) {
          let playbackRate = videoPlayerRef.playbackRate;
          videoPlayerRef.load();
          videoPlayerRef.pause();
          videoPlayerRef.playbackRate = playbackRate;
          videoPlayerRef.currentTime = 0;
        }
      }
      state.isShowVideoPlayer = true;
      state.isShowAudioPlayer = false;
      videoPlayerRef?.play();
      // add currentPlayingId
      state.currentPlayingId = videoEpisode?.id || null;
    },
    videoPause() {
      const {
        videoPlayerRef
      } = state;
      videoPlayerRef?.pause();
    },
    videoToggle() {
      actions.isVideoPlaying() ? actions.videoPause() : actions.videoPlay();
    },
    isVideoPlaying() {
      const {
        videoPlayerRef,
        videoEpisode,
        currentPlayingId
      } = state;
      return videoEpisode ? !videoPlayerRef?.paused && videoPlayerRef?.currentSrc && currentPlayingId === videoEpisode?.id : !videoPlayerRef?.paused;
    },
    forceVideoEnd() {
      state.initEpisode = null;
      if (state.videoPlayerRef) {
        state.videoPlayerRef.currentTime = 0;
        state.videoPlayerRef.pause();
        state.currentPlayingId = null;
      }
    },
    // Video Iframe <iframe> player actions
    videoIframePlay() {
      state.isShowAudioPlayer = false;
      state.isShowVideoPlayer = true;
    },
    forceVideoIframeEnd() {
      state.initEpisode = null;
    },
    // other player actions ---
    handleClickPostMediaPlayBtn() {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      console.log("click - episodeContext", context.episodeContext);

      // check if urls is empty
      if (Object.values(context.episodeContext?.media?.urls || {}).every(x => !x)) {
        console.log("urls is empty");
        return;
      }
      if (context.episodeContext?.id === state.initEpisode?.id) {
        // if the same episode, toggle the player
        if (state.mediaIsVideo) {
          actions.videoToggle();
        } else if (state.mediaIsIframe) {
          actions.videoIframePlay();
        } else if (state.mediaIsAudio) {
          actions.toggle();
        }
        return;
      }

      //
      actions.forceEnd();
      actions.forceVideoEnd();
      actions.forceVideoIframeEnd();
      //
      state.initEpisode = context.episodeContext || null;
      //
      const mediaType = context.episodeContext?.media?.type;

      // play audio <audio>
      if (mediaType === "AUDIO") {
        actions.play();
        return;
      }

      // play video <video>
      if (mediaType === "VIDEO") {
        actions.videoPlay();
        return;
      }

      // play video Iframe <iframe>
      if (mediaType === "IFRAME") {
        actions.videoIframePlay();
        return;
      }
    },
    handleCloseAllPlayer() {
      state.isShowAudioPlayer = false;
      state.isShowVideoPlayer = false;
      actions.forceEnd();
      actions.forceVideoEnd();
      actions.forceVideoIframeEnd();
      // reset state
      state.initEpisode = null;
      state.currentPlayingId = null;
      state.duration = 0;
      state.currentTime = 0;
      state.playing = false;
      state.muted = false;
      state.playbackRate = 1;
    }

    //
  },
  callbacks: {
    onInit: () => {
      const {
        ref
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getElement)();
      state.playerRef = ref?.querySelector("audio#ncmazfse-media-player-audio");
      state.sliderRef = ref?.querySelector("input#ncmazfse-media-player-audio-slider-input");
      state.videoPlayerRef = ref?.querySelector("video#ncmazfse-media-player-video");

      // update state from the local storage
      const localStorageState = JSON.parse(localStorage.getItem("ncmazfse_media_player_current_state") || "");
      if (localStorageState?.initEpisode?.id) {
        state.initEpisode = localStorageState.initEpisode;
        state.isShowAudioPlayer = localStorageState.isShowAudioPlayer;
        state.isShowVideoPlayer = localStorageState.isShowVideoPlayer;

        // update audio player state
        if (localStorageState.initEpisode?.media?.type === "AUDIO" && state.playerRef) {
          state.muted = localStorageState.muted;
          state.duration = localStorageState.duration;
          state.currentTime = localStorageState.currentTime;
          state.playbackRate = localStorageState.playbackRate;
          state.currentPlayingId = localStorageState.currentPlayingId;
          // load and seek the audio player to the last time
          state.playerRef.load();
          state.playerRef.currentTime = localStorageState.currentTime;
          state.playerRef.playbackRate = localStorageState.playbackRate;
          state.playerRef.muted = localStorageState.muted;
        } else if (localStorageState.initEpisode?.media?.type === "VIDEO" && state.videoPlayerRef) {
          // load video player
          state.videoPlayerRef.load();
        }
      }

      // catch when window is beforeunload to save the current state
      window.addEventListener("beforeunload", () => {
        // save the current state to the local storage
        localStorage.setItem("ncmazfse_media_player_current_state", JSON.stringify(state));
      });
    }
  }
});
})();


//# sourceMappingURL=view.js.map
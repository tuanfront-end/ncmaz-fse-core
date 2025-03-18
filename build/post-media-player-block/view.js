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
    get isShowIframeInvalidUrl() {
      return state.initEpisode?.media?.type === "IFRAME" && state.initEpisode?.media?.urls?.media_url_iframe === "iframe_url_invalid";
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
    },
    //
    get isCurrentPostPlaying() {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      if (context.episodeContext?.id === state.currentPlayingId) {
        if (state.initEpisode?.media?.type === "AUDIO") {
          return state.playing;
        }
        if (state.initEpisode?.media?.type === "VIDEO") {
          return state.videoPlaying;
        }
        if (state.initEpisode?.media?.type === "IFRAME") {
          return state.iframePlaying;
        }
      }
      return false;
    },
    get isVideoVerticalRatio() {
      // if the video ratio is 9-16 or the video is an iframe youtube short video
      return state.videoRatio === "9-16" || state.videoRatio === "auto" && state.initEpisode?.iframe_init_url?.includes("youtube.com/shorts");
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
    dispatchAudioError(event) {
      // @ts-ignore
      if (!event?.target?.getAttribute("src")) {
        return;
      }
      state.audioHasError = true;
      state.audioErrorMess = "An error occurred while loading the audio.";
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
      const playPromise = playerRef?.play();
      if (playPromise !== undefined) {
        playPromise.then(function () {
          // Automatic playback started!
          state.audioHasError = false;
          state.audioErrorMess = "";
        }).catch(function (error) {
          // Automatic playback failed.
          state.audioErrorMess = error.message;
          state.audioHasError = true;
        });
      }

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
      return audioEpisode ? state.playing && playerRef?.currentSrc && currentPlayingId === audioEpisode?.id : false;
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
      state.currentPlayingId = null;
      state.initEpisode = null;
      state.playing = false;
      state.audioErrorMess = "";
      state.audioHasError = false;
      if (playerRef) {
        playerRef.currentTime = 0;
        playerRef.pause();
      }
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
    dispatchVideoPlay() {
      state.videoPlaying = true;
    },
    dispatchVideoPause() {
      state.videoPlaying = false;
    },
    dispatchVideoCurrentTimeChange() {
      const {
        videoPlayerRef
      } = state;
      state.videoCurrentTime = Math.floor(videoPlayerRef?.currentTime || 0);
    },
    dispatchVideoVolumeChange() {
      const {
        videoPlayerRef
      } = state;
      state.videoMuted = videoPlayerRef?.muted;
      state.videoVolume = videoPlayerRef?.volume;
    },
    dispatchVideoPlaybackRateChange() {
      const {
        videoPlayerRef
      } = state;
      state.videoPlaybackRate = videoPlayerRef?.playbackRate;
    },
    videoPlay() {
      const {
        videoEpisode,
        videoPlayerRef,
        currentPlayingId
      } = state;
      if (videoEpisode) {
        if (videoPlayerRef && currentPlayingId !== videoEpisode?.id) {
          videoPlayerRef.load();
          videoPlayerRef.pause();
          videoPlayerRef.playbackRate = 1;
          videoPlayerRef.currentTime = 0;
          videoPlayerRef.volume = 1;
          videoPlayerRef.muted = false;
        }
      }
      state.videoPlaying = true;
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
      return videoEpisode ? state.videoPlaying && videoPlayerRef?.currentSrc && currentPlayingId === videoEpisode?.id : false;
    },
    forceVideoEnd() {
      state.initEpisode = null;
      state.videoPlaying = false;
      state.currentPlayingId = null;
      if (state.videoPlayerRef) {
        state.videoPlayerRef.currentTime = 0;
        state.videoPlayerRef.pause();
      }
    },
    // Video Iframe <iframe> player actions
    videoIframePlay() {
      state.isShowAudioPlayer = false;
      state.isShowVideoPlayer = true;
      state.iframePlaying = true;
      state.currentPlayingId = state.initEpisode?.id || null;
    },
    forceVideoIframeEnd() {
      state.initEpisode = null;
      state.iframePlaying = false;
      state.currentPlayingId = null;
    },
    // other player actions ---
    handleClickPostMediaPlayBtn() {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      // console.log("click - episodeContext", context.episodeContext);

      // check if urls is empty
      if (Object.values(context.episodeContext?.media?.urls || {}).every(x => !x)) {
        console.log("urls is empty");
        return;
      }
      if (context.episodeContext?.id === state.currentPlayingId) {
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
      actions.forceEnd();
      actions.forceVideoEnd();
      actions.forceVideoIframeEnd();
      //
      state.isShowAudioPlayer = false;
      state.isShowVideoPlayer = false;

      // reset the audio player state
      state.duration = 0;
      state.currentTime = 0;
      state.muted = false;
      state.playbackRate = 1;
      // reset the video player state
      state.videoCurrentTime = 0;
      state.videoMuted = false;
      state.videoVolume = 1;
      state.videoPlaybackRate = 1;
    }
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
      const localStorageState = JSON.parse(localStorage.getItem("ncmazfse_media_player_current_state") || "{}");
      if (localStorageState?.initEpisode?.id) {
        state.initEpisode = localStorageState.initEpisode;
        state.isShowAudioPlayer = !!localStorageState.isShowAudioPlayer;
        state.isShowVideoPlayer = !!localStorageState.isShowVideoPlayer;
        state.currentPlayingId = localStorageState.currentPlayingId || null;

        // update audio player state
        if (localStorageState.initEpisode?.media?.type === "AUDIO" && state.playerRef) {
          state.muted = !!localStorageState.muted;
          // state.duration = localStorageState.duration;
          // state.currentTime = localStorageState.currentTime;
          state.playbackRate = localStorageState.playbackRate || 1;
          // load and seek the audio player to the last time
          state.playerRef.load();
          state.playerRef.currentTime = localStorageState.currentTime || 0;
          state.playerRef.playbackRate = localStorageState.playbackRate || 1;
          state.playerRef.muted = !!localStorageState.muted;
        } else if (localStorageState.initEpisode?.media?.type === "VIDEO" && state.videoPlayerRef) {
          // load video player and seek to the last time
          state.videoPlayerRef.load();
          state.videoPlayerRef.currentTime = localStorageState.videoCurrentTime || 0;
          state.videoPlayerRef.playbackRate = localStorageState.videoPlaybackRate || 1;
          state.videoPlayerRef.muted = !!localStorageState.videoMuted;
          state.videoPlayerRef.volume = localStorageState.videoVolume || 1;
        }
      }

      // catch when window is beforeunload to save the current state
      window.addEventListener("beforeunload", () => {
        const stateToSave = {
          initEpisode: state.initEpisode,
          muted: state.muted,
          duration: state.duration,
          currentTime: state.currentTime,
          playbackRate: state.playbackRate,
          videoCurrentTime: state.videoCurrentTime,
          videoMuted: state.videoMuted,
          videoVolume: state.videoVolume,
          videoPlaybackRate: state.videoPlaybackRate,
          isShowAudioPlayer: state.isShowAudioPlayer,
          isShowVideoPlayer: state.isShowVideoPlayer,
          currentPlayingId: state.currentPlayingId
        };
        if (state.initEpisode?.media?.type === "IFRAME") {
          stateToSave.currentPlayingId = null;
          if (state.initEpisode?.media?.urls?.media_url_iframe) {
            // remove the autoplay=1 and auto_play=1 from the url
            const newUrl = new URL(state.initEpisode?.media?.urls?.media_url_iframe);
            newUrl.searchParams.delete("autoplay");
            newUrl.searchParams.delete("auto_play");
            stateToSave.initEpisode = {
              ...state.initEpisode,
              media: {
                ...state.initEpisode.media,
                urls: {
                  ...(state.initEpisode.media.urls || {}),
                  media_url_iframe: newUrl.toString()
                }
              }
            };
          }
        }
        localStorage.setItem("ncmazfse_media_player_current_state", JSON.stringify(stateToSave));
      });
    }
  }
});
})();


//# sourceMappingURL=view.js.map
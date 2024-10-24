/**
 * WordPress dependencies
 */
import { store, getContext, getElement } from "@wordpress/interactivity";
import { formatTime, parseTime } from "./utils";

interface TPost {
	id: number;
	title: string;
	href: string;
	media?: {
		// src?: string;
		urls?: {
			// iframe
			media_url_iframe: string;
			// Audio
			audio_url_mp3: string;
			audio_url_ogg: string;
			audio_url_wav: string;
			audio_url_aac: string;
			audio_url_webm: string;
			// Video
			video_url_mp4: string;
			video_url_webm: string;
			video_url_ogv: string;
		};
		type?: string;
	};
	author?: {
		name: string;
		href: string;
	};
}

// view.js
interface TContext {
	episodeContext?: null | TPost;
}

interface TState {
	playerRef: HTMLAudioElement | null;
	sliderRef: HTMLInputElement | null;
	currentPlayingId: null | number;
	//  Audio player state
	playing: boolean;
	muted: boolean;
	duration: number;
	currentTime: number;
	initEpisode: null | TPost;
	audioEpisode: null | TPost;
	videoEpisode: null | TPost;
	iframeEpisode: null | TPost;
	playbackRate: number;
	isPlaybackRate1x: boolean;
	isPlaybackRate1_5x: boolean;
	isPlaybackRate2x: boolean;
	// Audio player - slider
	playedWidth: string;
	thumbLeft: string;
	currentTimeHuman: string;
	durationHuman: string;
	// other player state
	videoPlaying: boolean;
	videoMuted?: boolean;
	videoVolume?: number;
	videoCurrentTime?: number;
	videoPlaybackRate?: number;
	//
	iframePlaying: boolean;
	// other player state
	videoPlayerRef: HTMLVideoElement | null;
	isShowAudioPlayer: boolean;
	isShowVideoPlayer: boolean;
	//
	mediaIsVideo: boolean;
	mediaIsIframe: boolean;
	mediaIsAudio: boolean;
	//
	isCurrentPostPlaying: boolean;
}

type TStateLocalStorage = Pick<
	TState,
	| "initEpisode"
	| "muted"
	| "duration"
	| "currentTime"
	| "playbackRate"
	| "isShowAudioPlayer"
	| "isShowVideoPlayer"
	| "currentPlayingId"
	| "videoCurrentTime"
	| "videoPlaybackRate"
	| "videoVolume"
	| "videoMuted"
>;

const { state, actions } = store("ncmfse/post-media-player-block", {
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
			return `calc(${(state.currentTime / state.duration) * 100}% -  0.25rem)`;
		},
		get thumbLeft() {
			return `calc(${(state.currentTime / state.duration) * 100}%)`;
		},
		get currentTimeHuman() {
			return formatTime(
				parseTime(state.currentTime),
				parseTime(state.duration),
			);
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
		},
		//
		get isCurrentPostPlaying() {
			const context = getContext<TContext>();
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
	} as TState,
	actions: {
		// audio player dispatchers
		dispatchPlay() {
			state.playing = true;
		},
		dispatchPause() {
			state.playing = false;
		},
		dispatchDurationChange() {
			const { playerRef } = state;
			state.duration = Math.floor(playerRef?.duration || 0);
		},
		dispatchCurrentTimeChange() {
			const { playerRef } = state;
			state.currentTime = Math.floor(playerRef?.currentTime || 0);
		},

		// Audio player actions
		play() {
			const { audioEpisode, playerRef, currentPlayingId } = state;

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
			const { playerRef } = state;
			playerRef?.pause();
		},
		toggle() {
			actions.isPlaying() ? actions.pause() : actions.play();
		},
		toggleMute() {
			state.muted = !state.muted;
		},
		isPlaying() {
			const { playerRef, audioEpisode, currentPlayingId } = state;
			return audioEpisode
				? state.playing &&
						playerRef?.currentSrc &&
						currentPlayingId === audioEpisode?.id
				: false;
		},
		rewind10s() {
			const { playerRef } = state;
			if (!playerRef) return;
			playerRef.currentTime += -10;
		},
		forward10s() {
			const { playerRef } = state;
			if (!playerRef) return;
			playerRef.currentTime += 10;
		},
		togglePlaybackRate() {
			const { playerRef } = state;
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
			const { playerRef } = state;
			state.currentPlayingId = null;
			state.initEpisode = null;
			state.playing = false;

			if (playerRef) {
				playerRef.currentTime = 0;
				playerRef.pause();
			}
		},

		// Audio player - slider
		handleSeekMouseDown() {
			const { playerRef } = state;
			playerRef?.pause();
		},
		handleSeekChange() {
			const { playerRef, sliderRef } = state;
			if (!playerRef?.currentSrc || !sliderRef) return;
			const currentTime = playerRef.duration * parseFloat(sliderRef.value);
			// update the state current time
			state.currentTime = Math.floor(currentTime);
			// Update the player's current time
			playerRef.currentTime = Math.floor(currentTime);
		},
		handleSeekMouseUp() {
			const { playerRef } = state;
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
			const { videoPlayerRef } = state;
			state.videoCurrentTime = Math.floor(videoPlayerRef?.currentTime || 0);
		},
		dispatchVideoVolumeChange() {
			const { videoPlayerRef } = state;
			state.videoMuted = videoPlayerRef?.muted;
			state.videoVolume = videoPlayerRef?.volume;
		},
		dispatchVideoPlaybackRateChange() {
			const { videoPlayerRef } = state;
			state.videoPlaybackRate = videoPlayerRef?.playbackRate;
		},

		videoPlay() {
			const { videoEpisode, videoPlayerRef, currentPlayingId } = state;
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
			const { videoPlayerRef } = state;
			videoPlayerRef?.pause();
		},
		videoToggle() {
			actions.isVideoPlaying() ? actions.videoPause() : actions.videoPlay();
		},
		isVideoPlaying() {
			const { videoPlayerRef, videoEpisode, currentPlayingId } = state;
			return videoEpisode
				? state.videoPlaying &&
						videoPlayerRef?.currentSrc &&
						currentPlayingId === videoEpisode?.id
				: false;
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
			const context = getContext<TContext>();
			// console.log("click - episodeContext", context.episodeContext);

			// check if urls is empty
			if (
				Object.values(context.episodeContext?.media?.urls || {}).every(
					(x) => !x,
				)
			) {
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
			//
		},
	},
	callbacks: {
		onInit: () => {
			const { ref } = getElement();
			state.playerRef = ref?.querySelector(
				"audio#ncmazfse-media-player-audio",
			) as HTMLAudioElement;
			state.sliderRef = ref?.querySelector(
				"input#ncmazfse-media-player-audio-slider-input",
			) as HTMLInputElement;
			state.videoPlayerRef = ref?.querySelector(
				"video#ncmazfse-media-player-video",
			) as HTMLVideoElement;

			// update state from the local storage
			const localStorageState = JSON.parse(
				localStorage.getItem("ncmazfse_media_player_current_state") || "",
			) as TStateLocalStorage;

			if (localStorageState?.initEpisode?.id) {
				state.initEpisode = localStorageState.initEpisode;
				state.isShowAudioPlayer = localStorageState.isShowAudioPlayer;
				state.isShowVideoPlayer = localStorageState.isShowVideoPlayer;
				state.currentPlayingId = localStorageState.currentPlayingId;

				// update audio player state
				if (
					localStorageState.initEpisode?.media?.type === "AUDIO" &&
					state.playerRef
				) {
					state.muted = localStorageState.muted;
					// state.duration = localStorageState.duration;
					// state.currentTime = localStorageState.currentTime;
					state.playbackRate = localStorageState.playbackRate;
					// load and seek the audio player to the last time
					state.playerRef.load();
					state.playerRef.currentTime = localStorageState.currentTime;
					state.playerRef.playbackRate = localStorageState.playbackRate;
					state.playerRef.muted = localStorageState.muted;
				} else if (
					localStorageState.initEpisode?.media?.type === "VIDEO" &&
					state.videoPlayerRef
				) {
					// load video player and seek to the last time
					state.videoPlayerRef.load();
					state.videoPlayerRef.currentTime =
						localStorageState.videoCurrentTime || 0;
					state.videoPlayerRef.playbackRate =
						localStorageState.videoPlaybackRate || 1;
					state.videoPlayerRef.muted = !!localStorageState.videoMuted;
					state.videoPlayerRef.volume = localStorageState.videoVolume || 1;
				}
			}

			// catch when window is beforeunload to save the current state
			window.addEventListener("beforeunload", () => {
				const stateToSave: TStateLocalStorage = {
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
					currentPlayingId: state.currentPlayingId,
				};

				if (state.initEpisode?.media?.type === "IFRAME") {
					stateToSave.currentPlayingId = null;
					if (state.initEpisode?.media?.urls?.media_url_iframe) {
						// remove the autoplay=1 and auto_play=1 from the url
						const newUrl = new URL(
							state.initEpisode?.media?.urls?.media_url_iframe,
						);
						newUrl.searchParams.delete("autoplay");
						newUrl.searchParams.delete("auto_play");

						stateToSave.initEpisode = {
							...state.initEpisode,
							media: {
								...state.initEpisode.media,
								urls: {
									...(state.initEpisode.media.urls || {}),
									media_url_iframe: newUrl.toString(),
								},
							},
						};
					}
				}

				localStorage.setItem(
					"ncmazfse_media_player_current_state",
					JSON.stringify(stateToSave),
				);
			});
		},
	},
});

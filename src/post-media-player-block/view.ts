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
	videoPlayerRef: HTMLVideoElement | null;
	isShowAudioPlayer: boolean;
	isShowVideoPlayer: boolean;
	//
	mediaIsVideo: boolean;
	mediaIsIframe: boolean;
	mediaIsAudio: boolean;
}

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
			const { audioEpisode, playerRef } = state;

			if (audioEpisode) {
				state.playing = true;

				if (
					playerRef &&
					playerRef.getAttribute("current-play") !== audioEpisode?.id.toString()
				) {
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
			// add a attribute to the player
			playerRef?.setAttribute(
				"current-play",
				audioEpisode?.id.toString() || "",
			);
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
			const { playerRef, audioEpisode } = state;
			return audioEpisode
				? state.playing &&
						playerRef?.currentSrc &&
						playerRef.getAttribute("current-play") ===
							audioEpisode?.id.toString()
				: state.playing;
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
			state.initEpisode = null;
			state.playing = false;
			if (!playerRef) return;
			playerRef.currentTime = 0;
			playerRef.pause();
			playerRef.setAttribute("current-play", "");
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
		videoPlay() {
			const { videoEpisode, videoPlayerRef } = state;
			if (videoEpisode) {
				console.log(111, videoPlayerRef?.currentSrc, videoEpisode.media);
				if (
					videoPlayerRef &&
					videoPlayerRef.getAttribute("current-play") !==
						videoEpisode?.id.toString()
				) {
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
			// add a attribute to the player
			videoPlayerRef?.setAttribute(
				"current-play",
				videoEpisode?.id.toString() || "",
			);
		},
		videoPause() {
			const { videoPlayerRef } = state;
			videoPlayerRef?.pause();
		},
		videoToggle() {
			actions.isVideoPlaying() ? actions.videoPause() : actions.videoPlay();
		},
		isVideoPlaying() {
			const { videoPlayerRef, videoEpisode } = state;
			return videoEpisode
				? !videoPlayerRef?.paused &&
						videoPlayerRef?.currentSrc &&
						videoPlayerRef.getAttribute("current-play") ===
							videoEpisode?.id.toString()
				: !videoPlayerRef?.paused;
		},
		forceVideoEnd() {
			state.initEpisode = null;

			if (state.videoPlayerRef) {
				state.videoPlayerRef.currentTime = 0;
				state.videoPlayerRef.pause();
				state.videoPlayerRef.setAttribute("current-play", "");
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
			const context = getContext<TContext>();
			console.log("click - episodeContext", context.episodeContext);

			// check if urls is empty
			if (
				Object.values(context.episodeContext?.media?.urls || {}).every(
					(x) => !x,
				)
			) {
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
		},
	},
});

/**
 * WordPress dependencies
 */
import { store, getContext, getElement } from "@wordpress/interactivity";

interface TPost {
	id: number;
	title: string;
	href: string;
	media?: {
		src?: string;
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
	//
	videoPlayerRef: HTMLVideoElement | null;
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
	isShowAudioPlayer: boolean;
	isShowVideoPlayer: boolean;
	//
	mediaIsVideo: boolean;
	mediaIsYoutube: boolean;
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
			if (state.initEpisode?.media?.type !== "YOUTUBE") {
				return null;
			}
			return state.initEpisode;
		},

		get mediaIsYoutube() {
			return state.initEpisode?.media?.type === "YOUTUBE";
		},
		get mediaIsVideo() {
			return state.initEpisode?.media?.type === "VIDEO";
		},

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
				if (playerRef && playerRef.currentSrc !== audioEpisode.media?.src) {
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
				? state.playing && playerRef?.currentSrc === audioEpisode.media?.src
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
		ended() {
			const { playerRef } = state;
			state.initEpisode = null;
			state.playing = false;
			if (!playerRef) return;
			playerRef.currentTime = 0;
			playerRef.pause();
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
		handleCloseAudioPlayer() {
			state.isShowAudioPlayer = false;
			actions.ended();
		},

		// Video player actions
		videoPlay() {
			const { videoEpisode, videoPlayerRef } = state;
			if (videoEpisode) {
				if (
					videoPlayerRef &&
					videoPlayerRef.currentSrc !== videoEpisode.media?.src
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
						videoPlayerRef?.currentSrc === videoEpisode.media?.src
				: !videoPlayerRef?.paused;
		},
		videoEnded() {
			state.initEpisode = null;

			if (state.videoPlayerRef) {
				state.videoPlayerRef.currentTime = 0;
				state.videoPlayerRef.pause();
			}
		},

		// Video Iframe
		videoIframePlay() {
			state.isShowAudioPlayer = false;
			state.isShowVideoPlayer = true;
		},

		// other player actions ---
		handleCloseVideoPlayer() {
			actions.videoEnded();
			state.isShowVideoPlayer = false;
		},
		handleClickPostMediaPlayBtn() {
			const context = getContext<TContext>();
			if (!context.episodeContext?.media?.src) {
				return;
			}
			//
			actions.ended();
			actions.videoEnded();
			state.initEpisode = context.episodeContext;

			// play audio
			if (context.episodeContext?.media?.type === "AUDIO") {
				actions.play();
			}

			// play video
			if (context.episodeContext?.media?.type === "VIDEO") {
				actions.videoPlay();
			}

			// play video youtube
			if (context.episodeContext?.media?.type === "YOUTUBE") {
				actions.videoIframePlay();
			}
		},
	},
	callbacks: {
		onInit: () => {
			const { ref } = getElement();

			state.playerRef = ref?.querySelector(
				"audio.post-media-player__audio",
			) as HTMLAudioElement;

			state.sliderRef = ref?.querySelector(
				"input.post-media-player__slider-input",
			) as HTMLInputElement;

			state.videoPlayerRef = ref?.querySelector(
				"video.post-media-player__video",
			) as HTMLVideoElement;
		},
	},
});

function parseTime(seconds: number) {
	let hours = Math.floor(seconds / 3600);
	let minutes = Math.floor((seconds - hours * 3600) / 60);
	seconds = seconds - hours * 3600 - minutes * 60;
	return [hours, minutes, seconds];
}

function formatTime(seconds: Array<number>, totalSeconds = seconds) {
	let totalWithoutLeadingZeroes = totalSeconds.slice(
		totalSeconds.findIndex((x) => x !== 0),
	);
	return seconds
		.slice(seconds.length - totalWithoutLeadingZeroes.length)
		.map((x) => x.toString().padStart(2, "0"))
		.join(":");
}

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
	episode: null | TPost;
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
	isShowPlayer: boolean;
}

const { state, actions } = store("ncmfse/post-media-player-block", {
	state: {
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
			const { episode, playerRef } = state;
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
			const { playerRef } = state;
			const { episode } = state;
			return episode
				? state.playing && playerRef?.currentSrc === episode.media?.src
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
			if (!playerRef) return;
			playerRef.currentTime = 0;
			playerRef.pause();
			state.playing = false;
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

		// other player actions ---
		handleClosePlayer() {
			state.isShowPlayer = false;
			actions.ended();
		},
		handleClickPostMediaPlayBtn() {
			const context = getContext<TContext>();
			if (
				context.episodeContext?.media?.src &&
				context.episodeContext?.media?.type === "AUDIO"
			) {
				state.episode = context.episodeContext;
				actions.play();
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

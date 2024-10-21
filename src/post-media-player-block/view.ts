/**
 * WordPress dependencies
 */
import { store, getContext, getElement } from "@wordpress/interactivity";

interface TPost {
	id: number;
	title: string;
	href: string;
	audio: {
		src: string;
	};
}

// view.js
interface TContext {
	playerRef: HTMLAudioElement | null;
	sliderRef: HTMLInputElement | null;
}

interface TState {
	playing: boolean;
	muted: boolean;
	duration: number;
	currentTime: number;
	episode: null | TPost;
	playbackRate: number;
	isPlaybackRate1x: boolean;
	isPlaybackRate1_5x: boolean;
	isPlaybackRate2x: boolean;
	//
	playedWidth: string;
	thumbLeft: string;
	currentTimeHuman: string;
	durationHuman: string;
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
		// dispatchers
		dispatchPlay() {
			state.playing = true;
		},
		dispatchPause() {
			state.playing = false;
		},
		dispatchDurationChange() {
			const context = getContext<TContext>();
			const { playerRef } = context;
			state.duration = Math.floor(playerRef?.duration || 0);
		},
		dispatchCurrentTimeChange() {
			const context = getContext<TContext>();
			const { playerRef } = context;
			state.currentTime = Math.floor(playerRef?.currentTime || 0);
		},

		// actions
		play() {
			const context = getContext<TContext>();
			const { playerRef } = context;
			const { episode } = state;
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
			const context = getContext<TContext>();
			const { playerRef } = context;
			playerRef?.pause();
		},
		toggle() {
			actions.isPlaying() ? actions.pause() : actions.play();
		},
		toggleMute() {
			state.muted = !state.muted;
		},
		isPlaying() {
			const context = getContext<TContext>();
			const { playerRef } = context;
			const { episode } = state;
			return episode
				? state.playing && playerRef?.currentSrc === episode.audio.src
				: state.playing;
		},
		rewind10s() {
			const context = getContext<TContext>();
			const { playerRef } = context;
			if (!playerRef) return;
			playerRef.currentTime += -10;
		},
		forward10s() {
			const context = getContext<TContext>();
			const { playerRef } = context;
			if (!playerRef) return;
			playerRef.currentTime += 10;
		},
		togglePlaybackRate() {
			const context = getContext<TContext>();
			const { playerRef } = context;
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
			const context = getContext<TContext>();
			const { playerRef } = context;
			playerRef?.pause();
		},
		handleSeekChange() {
			const context = getContext<TContext>();
			const { playerRef, sliderRef } = context;
			if (!playerRef?.currentSrc || !sliderRef) return;
			const currentTime = playerRef.duration * parseFloat(sliderRef.value);
			// update the state current time
			state.currentTime = Math.floor(currentTime);
			// Update the player's current time
			playerRef.currentTime = Math.floor(currentTime);
		},
		handleSeekMouseUp() {
			const context = getContext<TContext>();
			const { playerRef } = context;
			playerRef?.play();
		},
	},
	callbacks: {
		onInit: () => {
			const context = getContext<TContext>();
			const { ref } = getElement();

			context.playerRef = ref?.querySelector(
				"audio.post-media-player__audio",
			) as HTMLAudioElement;

			context.sliderRef = ref?.querySelector(
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

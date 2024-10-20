/**
 * WordPress dependencies
 */
import { store, getContext } from "@wordpress/interactivity";

const ActionKind = {
	SET_META: "SET_META",
	PLAY: "PLAY",
	PAUSE: "PAUSE",
	TOGGLE_MUTE: "TOGGLE_MUTE",
	SET_CURRENT_TIME: "SET_CURRENT_TIME",
	SET_DURATION: "SET_DURATION",
};

// view.js
interface TContext {}

interface TState {}

const { state } = store("ncmfse/post-media-player-block", {
	state: {} as TState,
	actions: {},
	callbacks: {
		onInit: () => {},
	},
});

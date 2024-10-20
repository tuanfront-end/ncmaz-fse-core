export function parseTime(seconds) {
	let hours = Math.floor(seconds / 3600);
	let minutes = Math.floor((seconds - hours * 3600) / 60);
	seconds = seconds - hours * 3600 - minutes * 60;
	return [hours, minutes, seconds];
}

export function formatTime(seconds, totalSeconds = seconds) {
	let totalWithoutLeadingZeroes = totalSeconds.slice(
		totalSeconds.findIndex((x) => x !== 0),
	);
	return seconds
		.slice(seconds.length - totalWithoutLeadingZeroes.length)
		.map((x) => x.toString().padStart(2, "0"))
		.join(":");
}

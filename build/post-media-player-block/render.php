<?php

/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

// add scrip to header 
if (defined('IS_NCMFSE_POST_MEDIA_PLAYER_BLOCK_INSERTED')) {
	return '';
}

// Set the interactivity state.
wp_interactivity_state(
	'ncmfse/post-media-player-block',
	[
		"playing" 		=> false,
		"muted" 		=> false,
		"duration" 		=> 0,
		"currentTime" 	=> 0,
		"playbackRate" 			=> 1,
		"isPlaybackRate1x" 		=> true,
		"isPlaybackRate1_5x" 	=> false,
		"isPlaybackRate2x" 		=> false,
		'episode'				=> [
			'title'	=> '5: Bill Lumbergh',
			'url'	=> '/5',
			'audio'	=> [
				'src'	=> 'https://their-side-feed.vercel.app/episode-004.mp3',
				'type'	=> 'audio/mpeg',
			],
		],
		'thumbLeft' => '0%',
		'playedWidth'	=> '0%',
		'currentTimeHuman' => '00:00',
		'durationHuman' => '00:00',
	]
);

$pausedIcon = '<svg viewBox="0 0 36 36" aria-hidden="true" class="h-5 w-5 fill-white group-active:fill-white/80 md:h-7 md:w-7">
	<path d="M33.75 16.701C34.75 17.2783 34.75 18.7217 33.75 19.299L11.25 32.2894C10.25 32.8668 9 32.1451 9 30.9904L9 5.00962C9 3.85491 10.25 3.13323 11.25 3.71058L33.75 16.701Z"></path>
</svg>';
$playingIcon = '<svg viewBox="0 0 36 36" aria-hidden="true" class="h-5 w-5 fill-white group-active:fill-white/80 md:h-7 md:w-7">
	<path d="M8.5 4C7.67157 4 7 4.67157 7 5.5V30.5C7 31.3284 7.67157 32 8.5 32H11.5C12.3284 32 13 31.3284 13 30.5V5.5C13 4.67157 12.3284 4 11.5 4H8.5ZM24.5 4C23.6716 4 23 4.67157 23 5.5V30.5C23 31.3284 23.6716 32 24.5 32H27.5C28.3284 32 29 31.3284 29 30.5V5.5C29 4.67157 28.3284 4 27.5 4H24.5Z"></path>
</svg>';

$isMutedIcon = '<svg aria-hidden="true" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 fill-slate-500 stroke-slate-500 group-hover:fill-slate-700 group-hover:stroke-slate-700"><path d="M12 6L8 10H6C5.44772 10 5 10.4477 5 11V13C5 13.5523 5.44772 14 6 14H8L12 18V6Z"></path><path d="M16 10L19 13" fill="none"></path><path d="M19 10L16 13" fill="none"></path></svg>';
$isNotMutedIcon = '<svg aria-hidden="true" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 fill-slate-500 stroke-slate-500 group-hover:fill-slate-700 group-hover:stroke-slate-700"><path d="M12 6L8 10H6C5.44772 10 5 10.4477 5 11V13C5 13.5523 5.44772 14 6 14H8L12 18V6Z"></path><path d="M17 7C17 7 19 9 19 12C19 15 17 17 17 17" fill="none"></path><path d="M15.5 10.5C15.5 10.5 16 10.9998 16 11.9999C16 13 15.5 13.5 15.5 13.5" fill="none"></path></svg>';

$rateIcon1x = '<svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="M13 1H3C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15H13C14.1046 15 15 14.1046 15 13V3C15 1.89543 14.1046 1 13 1Z" fill="currentColor" stroke="currentColor" stroke-width="2"></path><path d="M3.75 7.25L5.25 5.77539V11.25"></path><path d="M8.75 7.75L11.25 10.25"></path><path d="M11.25 7.75L8.75 10.25"></path></svg>';
$rateIcon1_5x = '<svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="M13 1H3C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15H13C14.1046 15 15 14.1046 15 13V3C15 1.89543 14.1046 1 13 1Z" fill="currentColor" stroke="currentColor" stroke-width="2"></path><path d="M2.75 7.25L4.25 5.77539V11.25"></path><path d="M7.5 11C7.5 11.2761 7.27614 11.5 7 11.5C6.72386 11.5 6.5 11.2761 6.5 11C6.5 10.7239 6.72386 10.5 7 10.5C7.27614 10.5 7.5 10.7239 7.5 11Z" stroke-width="1"></path><path d="M12.25 5.75H9.75V8.25H10.75C11.5784 8.25 12.25 8.92157 12.25 9.75V9.75C12.25 10.5784 11.5784 11.25 10.75 11.25H9.75"></path></svg>';
$rateIcon2x = '<svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="M13 1H3C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15H13C14.1046 15 15 14.1046 15 13V3C15 1.89543 14.1046 1 13 1Z" fill="currentColor" stroke="currentColor" stroke-width="2"></path><path d="M9.75 8.75L12.25 11.25"></path><path d="M12.25 8.75L9.75 11.25"></path><path d="M3.75 7.25C3.75 7.25 3.90144 5.75 5.63462 5.75C6.1633 5.75 6.5448 5.95936 6.81973 6.25035C7.67157 7.15197 6.97033 8.47328 6.0238 9.28942L3.75 11.25H7.25"></path></svg>';

?>

<div
	<?php echo wp_kses_data(get_block_wrapper_attributes([])); ?>
	data-wp-interactive="ncmfse/post-media-player-block"
	<?php echo wp_kses_data(wp_interactivity_data_wp_context([])); ?>
	data-wp-init="callbacks.onInit">

	<audio
		class="post-media-player__audio"
		controls
		data-wp-on-async--play="actions.dispatchPlay"
		data-wp-on-async--pause="actions.dispatchPause"
		data-wp-on-async--durationchange="actions.dispatchDurationChange"
		data-wp-on-async--timeupdate="actions.dispatchCurrentTimeChange"
		data-wp-bind--muted="state.muted"></audio>

	<div class="fixed inset-x-0 bottom-0 z-20">
		<div class="flex items-center gap-6 bg-white/90 px-4 py-4 shadow shadow-slate-200/80 ring-1 ring-slate-900/5 backdrop-blur-sm md:px-6">
			<div class="hidden md:block">

				<!-- Play button on desktop-->
				<button type="button" class="group relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-700 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-offset-2 md:h-14 md:w-14" aria-label="Play"
					data-wp-on-async--click="actions.toggle">
					<div class="absolute -inset-3 md:hidden"></div>
					<span data-wp-bind--hidden="state.playing">
						<?php echo $pausedIcon; ?>
					</span>
					<span data-wp-bind--hidden="!state.playing">
						<?php echo $playingIcon; ?>
					</span>
				</button>
			</div>
			<div class="mb-[env(safe-area-inset-bottom)] flex flex-1 flex-col gap-3 overflow-hidden p-1">
				<a class="truncate text-center text-sm font-bold leading-6 md:text-left" title="5: Bill Lumbergh" href="/5">5: Bill Lumbergh</a>
				<div class="flex justify-between gap-6">
					<div class="flex items-center md:hidden">

						<!-- Muted button on mobile -->
						<button type="button" class="group relative rounded-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 md:order-none" aria-label="Mute"
							data-wp-on-async--click="actions.toggleMute">
							<div class="absolute -inset-4 md:hidden"></div>
							<span data-wp-bind--hidden="!state.muted">
								<?php echo $isMutedIcon; ?>
							</span>
							<span data-wp-bind--hidden="state.muted">
								<?php echo $isNotMutedIcon; ?>
							</span>

						</button>
					</div>
					<div class="flex flex-none items-center gap-4">

						<!-- Rewind button -->
						<button type="button" class="group relative rounded-full focus:outline-none" aria-label="Rewind 10 seconds"
							data-wp-on-async--click="actions.rewind10s">
							<div class="absolute -inset-4 -right-2 md:hidden"></div>
							<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 stroke-slate-500 group-hover:stroke-slate-700">
								<path d="M8 5L5 8M5 8L8 11M5 8H13.5C16.5376 8 19 10.4624 19 13.5C19 15.4826 18.148 17.2202 17 18.188"></path>
								<path d="M5 15V19"></path>
								<path d="M8 18V16C8 15.4477 8.44772 15 9 15H10C10.5523 15 11 15.4477 11 16V18C11 18.5523 10.5523 19 10 19H9C8.44772 19 8 18.5523 8 18Z"></path>
							</svg>
						</button>

						<!-- Play button on mobile -->
						<div class="md:hidden">
							<button type="button" class="group relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-700 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-offset-2 md:h-14 md:w-14" aria-label="Play"
								data-wp-on-async--click="actions.toggle">
								<div class="absolute -inset-3 md:hidden"></div>
								<span data-wp-bind--hidden="state.playing">
									<?php echo $pausedIcon; ?>
								</span>
								<span data-wp-bind--hidden="!state.playing">
									<?php echo $playingIcon; ?>
								</span>
							</button>
						</div>

						<!-- Forward button -->
						<button type="button" class="group relative rounded-full focus:outline-none" aria-label="Fast-forward 10 seconds"
							data-wp-on-async--click="actions.forward10s">
							<div class="absolute -inset-4 -left-2 md:hidden"></div>
							<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" class="h-6 w-6 stroke-slate-500 group-hover:stroke-slate-700">
								<path d="M16 5L19 8M19 8L16 11M19 8H10.5C7.46243 8 5 10.4624 5 13.5C5 15.4826 5.85204 17.2202 7 18.188" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
								<path d="M13 15V19" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
								<path d="M16 18V16C16 15.4477 16.4477 15 17 15H18C18.5523 15 19 15.4477 19 16V18C19 18.5523 18.5523 19 18 19H17C16.4477 19 16 18.5523 16 18Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
							</svg>
						</button>
					</div>


					<div role="group" id="react-aria1697384229-:r0:" aria-labelledby="react-aria1697384229-:r1:" class="absolute inset-x-0 bottom-full flex flex-auto touch-none items-center gap-6 md:relative">
						<label class="sr-only" id="react-aria1697384229-:r1:">Current time</label>

						<!-- Slider -->
						<div class="post-media-player__slider relative w-full bg-slate-100 md:rounded-full" style="position: relative; touch-action: none;">
							<div class="post-media-player__slider-width h-2 md:rounded-l-xl md:rounded-r-md bg-slate-700"
								data-wp-style--width="state.playedWidth"></div>

							<input class="post-media-player__slider-input absolute inset-0" tabindex="0"
								aria-labelledby="react-aria1697384229-:r1:"
								type="range"
								min="0"
								max="0.9999999999999999"
								step="any"
								data-wp-on-async--mousedown="actions.handleSeekMouseDown"
								data-wp-on-async--touchstart="actions.handleSeekMouseDown"
								data-wp-on-async--change="actions.handleSeekChange"
								data-wp-on-async--input="actions.handleSeekChange"
								data-wp-on-async--mouseup="actions.handleSeekMouseUp"
								data-wp-on-async--touchend="actions.handleSeekMouseUp"
								aria-orientation="horizontal">

							<div class="post-media-player__slider-thumb absolute top-1/2 -translate-x-1/2" data-wp-style--left="state.thumbLeft">
								<div class="h-4 rounded-full w-1 bg-slate-700" style="position: absolute; transform: translate(-50%, -50%); touch-action: none; left: 10%;">
									<div style="border: 0px; clip: rect(0px, 0px, 0px, 0px); clip-path: inset(50%); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; width: 1px; white-space: nowrap;">
									</div>
								</div>
							</div>
						</div>

						<div class="hidden items-center gap-2 md:flex">
							<output for="react-aria1697384229-:r1:-0" aria-live="off" class="hidden rounded-md px-1 py-0.5 font-mono text-sm leading-6 md:block text-slate-500" data-wp-text="state.currentTimeHuman"></output>
							<span class="text-sm leading-6 text-slate-300" aria-hidden="true">/</span>
							<span class="hidden rounded-md px-1 py-0.5 font-mono text-sm leading-6 text-slate-500 md:block" data-wp-text="state.durationHuman"></span>
						</div>
					</div>


					<div class="flex items-center gap-4">
						<div class="flex items-center">

							<!-- Playback rate button -->
							<button type="button" class="relative flex h-6 w-6 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2" aria-label="Playback rate"
								data-wp-on-async--click="actions.togglePlaybackRate">
								<div class="absolute -inset-4 md:hidden"></div>
								<span data-wp-bind--hidden="!state.isPlaybackRate1x">
									<?php echo $rateIcon1x; ?>
								</span>
								<span data-wp-bind--hidden="!state.isPlaybackRate1_5x">
									<?php echo $rateIcon1_5x; ?>
								</span>
								<span data-wp-bind--hidden="!state.isPlaybackRate2x">
									<?php echo $rateIcon2x; ?>
								</span>
							</button>
						</div>
						<div class="hidden items-center md:flex">

							<!-- Muted button -->
							<button type="button" class="group relative rounded-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 md:order-none" aria-label="Mute"
								data-wp-on-async--click="actions.toggleMute">
								<div class="absolute -inset-4 md:hidden"></div>
								<span data-wp-bind--hidden="!state.muted">
									<?php echo $isMutedIcon; ?>
								</span>
								<span data-wp-bind--hidden="state.muted">
									<?php echo $isNotMutedIcon; ?>
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</div>

<?php
define('IS_NCMFSE_POST_MEDIA_PLAYER_BLOCK_INSERTED', true);
?>
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

if (! isset($block->context['postId'])) {
	return '';
}

// Generate unique id for aria-controls.
$post_id =  $block->context['postId'] ?? 0;

// Get post format.
$post_format = get_post_format($post_id);

if (!in_array($post_format, ['audio', 'video'])) {
	return null;
}

// DASH / HLS - must be supported by the browser. or use a polyfill. or use a service like https://www.videojs.com/

$icon = '';
$media_type = '';
$media_urls = (object)[];

if ($post_format === 'audio' && function_exists('get_field')) {
	$audio_type = get_field('media_type', $post_id);
	if ($audio_type === 'html') {
		// MP3, Ogg, WAV, AAC and WebM audio formats are supported.
		$media_type = 'AUDIO';
		$media_urls = [
			'audio_url_mp3' => get_field('audio_url_mp3', $post_id),
			'audio_url_ogg' => get_field('audio_url_ogg', $post_id),
			'audio_url_wav' => get_field('audio_url_wav', $post_id),
			'audio_url_aac' => get_field('audio_url_aac', $post_id),
			'audio_url_webm' => get_field('audio_url_webm', $post_id),
		];
	} else if ($audio_type === 'iframe') {
		$media_type = 'IFRAME';
		$audio_url_iframe = get_field('audio_url_iframe', $post_id);
		$iframe  = '';
		if (!empty($audio_url_iframe)) {
			$iframe  = wp_oembed_get($audio_url_iframe);
		}

		// get iframe src
		if (!empty($iframe)) {
			$audio_url_iframe = ncmazfse_core_get_src_using_DOM($iframe);
			// add autoplay to iframe
			$audio_url_iframe = add_query_arg(['autoplay' => '1', 'auto_play' => '1'], $audio_url_iframe);
		} else {
			$audio_url_iframe = 'iframe_url_invalid';
		}

		$media_urls = [
			'media_url_iframe' =>  $audio_url_iframe,
		];
	}
}
if ($post_format === 'video' && function_exists('get_field')) {
	$video_type = get_field('media_type', $post_id);
	if ($video_type === 'html') {
		// MP4, Ogv and WebM video formats are supported.
		$media_type = 'VIDEO';
		$media_urls = [
			'video_url_mp4' =>  get_field('video_url_mp4', $post_id),
			'video_url_ogv' => get_field('video_url_ogv', $post_id),
			'video_url_webm' =>  get_field('video_url_webm', $post_id),

		];
	} else if ($video_type === 'iframe') {
		$media_type = 'IFRAME';
		$video_url_iframe = get_field('video_url_iframe', $post_id);
		$iframe  = '';

		if (!empty($video_url_iframe)) {
			$iframe  = wp_oembed_get($video_url_iframe);
		}
		// get iframe src
		if (!empty($iframe)) {
			$video_url_iframe = ncmazfse_core_get_src_using_DOM($iframe);
			// add autoplay to iframe
			$video_url_iframe = add_query_arg(['autoplay' => '1', 'auto_play' => '1'], $video_url_iframe);
		} else {
			$video_url_iframe = 'iframe_url_invalid';
		}

		$media_urls = [
			'media_url_iframe' => $video_url_iframe,
		];
	}
}

$icons = [
	2 => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
			<path d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
		</svg>',
	3 => '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
		<path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
		</svg>',
	4 => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
			<path d="M11 7.13678V17M11 7.13678C12.8928 8.81698 14.5706 10.0042 16.0063 10.6818C16.6937 11.0062 17.3165 11.0682 18.0198 10.7552C19.7751 9.97419 21 8.20629 21 6.15045C19.0715 7.50911 16.6876 6.77163 14.6847 5.50548C13.0454 4.46918 12.2258 3.95102 11.8569 4.00364C11.5781 4.0434 11.4283 4.1242 11.244 4.33421C11 4.61216 11 5.4537 11 7.13678Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M11 17C11 19.2091 9.20914 21 7 21C4.79086 21 3 19.2091 3 17C3 14.7909 4.79086 13 7 13C9.20914 13 11 14.7909 11 17Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		</svg>',
];
$icon = $icons[$attributes['iconType']] ?? '<svg viewBox="0 0 36 36" aria-hidden="true" class="size-6"><path d="M33.75 16.701C34.75 17.2783 34.75 18.7217 33.75 19.299L11.25 32.2894C10.25 32.8668 9 32.1451 9 30.9904L9 5.00962C9 3.85491 10.25 3.13323 11.25 3.71058L33.75 16.701Z"></path></svg>';
$paused_icon = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
</svg>
';
?>

<div
	role="button"
	tabindex="0"
	<?php echo wp_kses_data(get_block_wrapper_attributes()); ?>
	data-wp-interactive="ncmfse/post-media-player-block"
	<?php echo wp_kses_data(wp_interactivity_data_wp_context([
		"episodeContext" => [
			'id' => $post_id,
			'title' =>  get_the_title($post_id),
			'href' => get_permalink($post_id),
			'format' => $post_format,
			'media' => [
				'urls' => $media_urls,
				'type' => $media_type,
			],
			'author' => [
				'name' => get_the_author_meta('display_name', get_post_field('post_author', $post_id)),
				'href' => get_author_posts_url(get_post_field('post_author', $post_id)),
			]
		]
	])); ?>
	data-wp-on-async--click="actions.handleClickPostMediaPlayBtn">

	<span data-wp-bind--hidden="state.isCurrentPostPlaying">
		<?php echo wp_kses($icon, ncmazfse_core_get_allowed_tags_with_svg()); ?>
	</span>
	<span data-wp-bind--hidden="!state.isCurrentPostPlaying">
		<?php echo wp_kses($paused_icon, ncmazfse_core_get_allowed_tags_with_svg()); ?>
	</span>

</div>
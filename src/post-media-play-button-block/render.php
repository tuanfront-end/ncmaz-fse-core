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


if ($post_format === 'audio') {
	$icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M11 7.13678V17M11 7.13678C12.8928 8.81698 14.5706 10.0042 16.0063 10.6818C16.6937 11.0062 17.3165 11.0682 18.0198 10.7552C19.7751 9.97419 21 8.20629 21 6.15045C19.0715 7.50911 16.6876 6.77163 14.6847 5.50548C13.0454 4.46918 12.2258 3.95102 11.8569 4.00364C11.5781 4.0434 11.4283 4.1242 11.244 4.33421C11 4.61216 11 5.4537 11 7.13678Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M11 17C11 19.2091 9.20914 21 7 21C4.79086 21 3 19.2091 3 17C3 14.7909 4.79086 13 7 13C9.20914 13 11 14.7909 11 17Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>';
	if (function_exists('get_field')) {
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
}
if ($post_format === 'video') {
	$icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M17.7001 21.3351C16.5281 21.4998 14.9996 21.4998 12.9501 21.4998H11.0501C7.01955 21.4998 5.0043 21.4998 3.75218 20.2476C2.50006 18.9955 2.50006 16.9803 2.50006 12.9498V11.0498C2.50006 7.01925 2.50006 5.00399 3.75218 3.75187C5.0043 2.49976 7.01955 2.49976 11.0501 2.49976H12.9501C16.9806 2.49976 18.9958 2.49976 20.2479 3.75187C21.5001 5.00399 21.5001 7.01925 21.5001 11.0498V12.9498C21.5001 14.158 21.5001 15.1851 21.4663 16.0648C21.4393 16.7699 21.4258 17.1224 21.1588 17.2541C20.8918 17.3859 20.5932 17.1746 19.9958 16.752L18.6501 15.7998" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M14.9453 12.3948C14.7686 13.0215 13.9333 13.4644 12.2629 14.3502C10.648 15.2064 9.8406 15.6346 9.18992 15.4625C8.9209 15.3913 8.6758 15.2562 8.47812 15.07C8 14.6198 8 13.7465 8 12C8 10.2535 8 9.38018 8.47812 8.92995C8.6758 8.74381 8.9209 8.60868 9.18992 8.53753C9.8406 8.36544 10.648 8.79357 12.2629 9.64983C13.9333 10.5356 14.7686 10.9785 14.9453 11.6052C15.0182 11.8639 15.0182 12.1361 14.9453 12.3948Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
</svg>';
	if (function_exists('get_field')) {
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
}

// Set the interactivity state.
wp_interactivity_state(
	'ncmfse/post-media-player-block',
	[]
);
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

	<?php echo wp_kses($icon, ncmazfse_core_get_allowed_tags_with_svg()); ?>

</div>
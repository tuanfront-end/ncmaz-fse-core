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
$is_video = get_post_format($post_id) === 'video';

if ((!$is_video || !function_exists('get_field'))) {
	return '';
}

$media_type = '';
$media_url = '';
$video_type = get_field('media_type', $post_id);

if ($video_type === 'html') {
	// MP4, Ogv and WebM video formats are supported.
	$media_type = 'VIDEO';
	$urls = [
		'video_url_mp4' =>  get_field('video_url_mp4', $post_id),
		'video_url_ogv' => get_field('video_url_ogv', $post_id),
		'video_url_webm' =>  get_field('video_url_webm', $post_id),
	];

	// get the first video url that is not empty
	foreach ($urls as $key => $value) {
		if (!empty($value)) {
			$media_url = $value;
			break;
		}
	}
} else if ($video_type === 'iframe') {
	$media_type = 'IFRAME';
	$video_url_iframe = get_field('video_url_iframe', $post_id);
	$media_url = $video_url_iframe;
}

// if media url is empty, return empty string
if (empty($media_url)) {
	return '';
}
?>

<div
	<?php echo wp_kses_data(get_block_wrapper_attributes([])); ?>>

	<?php if ($media_type === "IFRAME") {
		echo (do_blocks('<!-- wp:embed {"url":"' . esc_url($media_url) . '","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio","style":{"layout":{"selfStretch":"fill","flexSize":null}}} -->
		<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio">
			<div class="wp-block-embed__wrapper">
			' . wp_oembed_get(esc_url($media_url)) . '
			</div>
		</figure>
		<!-- /wp:embed -->'));
	}; ?>

	<?php if ($media_type === "VIDEO") {
		echo do_blocks('<!-- wp:video {"metadata":{}} -->
		<figure class="wp-block-video"><video controls src="' . esc_url($media_url) . '">
			</video></figure>
		<!-- /wp:video -->');
	}; ?>

</div>
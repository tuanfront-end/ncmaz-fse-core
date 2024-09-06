<?php

/**
 * @param array    $attributes Block attributes.
 * @param string   $content    Block default content.
 * @param WP_Block $block      Block instance.
 * @return string Returns the filtered post excerpt for the current post wrapped inside "p" tags.
 */

$termId = $block->context['termId'] ?? '';
if (! $termId && !is_tax()) {
	return '';
}
if ($termId) {
	$term = get_term($termId, $block->context['termTaxonomy']); //for example uncategorized category
} else {
	$term = get_queried_object();
}

// get the term id if current on a term archive page
$termId = $termId ? $termId : get_queried_object_id();
//  ---------------------------------  //


/**
 *
 * @param array    $attributes Block attributes.
 * @param string   $content    Block default content.
 * @param WP_Block $block      Block instance.
 * @return string Returns the featured image for the current post.
 */

(function ($attributes, $content, $block, $term) {
	if (! $term) {
		return '';
	}
	$term_taxonomy_id = $term->term_taxonomy_id;
	$featured_image = get_term_meta($term_taxonomy_id, 'featured_image', true);
	if (! $featured_image) {
		return '';
	}

	$is_link        = isset($attributes['isLink']) && $attributes['isLink'];
	$size_slug      = isset($attributes['sizeSlug']) ? $attributes['sizeSlug'] : 'post-thumbnail';
	$attr           = ncmazfse_get_block_term_featured_img_border_attributes($attributes);
	$overlay_markup = ncmazfse_get_block_term_featured_img_overlay_element_markup($attributes);

	if ($is_link) {
		$attr['alt'] = $term->name;
	}

	$extra_styles = '';

	// Aspect ratio with a height set needs to override the default width/height.
	if (! empty($attributes['aspectRatio'])) {
		$extra_styles .= 'width:100%;height:100%;';
	} elseif (! empty($attributes['height'])) {
		$extra_styles .= "height:{$attributes['height']};";
	}

	if (! empty($attributes['scale'])) {
		$extra_styles .= "object-fit:{$attributes['scale']};";
	}
	if (! empty($attributes['style']['shadow'])) {
		$shadow_styles = wp_style_engine_get_styles(array('shadow' => $attributes['style']['shadow']));

		if (! empty($shadow_styles['css'])) {
			$extra_styles .= $shadow_styles['css'];
		}
	}

	if (! empty($extra_styles)) {
		$attr['style'] = empty($attr['style']) ? $extra_styles : $attr['style'] . $extra_styles;
	}

	$featured_image = wp_get_attachment_image($featured_image, $size_slug, false, $attr);
	if (! $featured_image) {
		return '';
	}

	if ($is_link) {
		$link_target    = $attributes['linkTarget'];
		$rel            = ! empty($attributes['rel']) ? 'rel="' . esc_attr($attributes['rel']) . '"' : '';
		$height         = ! empty($attributes['height']) ? 'style="' . esc_attr(safecss_filter_attr('height:' . $attributes['height'])) . '"' : '';
		$featured_image = sprintf(
			'<a href="%1$s" target="%2$s" %3$s %4$s>%5$s%6$s</a>',
			get_term_link($term_taxonomy_id),
			esc_attr($link_target),
			$rel,
			$height,
			$featured_image,
			$overlay_markup
		);
	} else {
		$featured_image = $featured_image . $overlay_markup;
	}

	$aspect_ratio = ! empty($attributes['aspectRatio'])
		? esc_attr(safecss_filter_attr('aspect-ratio:' . $attributes['aspectRatio'])) . ';'
		: '';
	$width        = ! empty($attributes['width'])
		? esc_attr(safecss_filter_attr('width:' . $attributes['width'])) . ';'
		: '';
	$height       = ! empty($attributes['height'])
		? esc_attr(safecss_filter_attr('height:' . $attributes['height'])) . ';'
		: '';
	if (! $height && ! $width && ! $aspect_ratio) {
		$wrapper_attributes = get_block_wrapper_attributes();
	} else {
		$wrapper_attributes = get_block_wrapper_attributes(array('style' => $aspect_ratio . $width . $height));
	}

	echo "<figure {$wrapper_attributes}>{$featured_image}</figure>";
})($attributes, $content, $block, $term);

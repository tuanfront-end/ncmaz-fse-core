<?php

/**
 * @param array    $attributes Block attributes.
 * @param string   $content    Block default content.
 * @param WP_Block $block      Block instance.
 * @return string Returns the filtered post excerpt for the current post wrapped inside "p" tags.
 */

$term = ncmazfse_get_term_from_termIdContext_or_archivePage($block->context['termId'] ?? '', $block->context['termTaxonomy'] ?? '');
if (! $term && ! is_author()) {
	return '';
}
if ($term) {
	$count = $term->count;
} else if (is_author()) {
	$count = count_user_posts(get_queried_object_id());
} else {
	$count = 0;
}

$classes = array();
if (isset($attributes['textAlign'])) {
	$classes[] = 'has-text-align-' . $attributes['textAlign'];
}
$wrapper_attributes = get_block_wrapper_attributes(array('class' => implode(' ', $classes)));
?>

<div <?php echo wp_kses_data($wrapper_attributes); ?>>
	<p class="wp-block-ncmfse-term-count__count">
		<?php echo esc_html($count); ?>
	</p>
</div>
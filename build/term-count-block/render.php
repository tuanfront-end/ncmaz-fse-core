<?php

/**
 * @param array    $attributes Block attributes.
 * @param string   $content    Block default content.
 * @param WP_Block $block      Block instance.
 * @return string Returns the filtered post excerpt for the current post wrapped inside "p" tags.
 */

$term = ncmazfse_get_term_from_termIdContext_or_archivePage($block->context['termId'] ?? '', $block->context['termTaxonomy'] ?? '');
if (! $term) {
	return '';
}
$termId = $term->term_taxonomy_id;

$classes = array();
if (isset($attributes['textAlign'])) {
	$classes[] = 'has-text-align-' . $attributes['textAlign'];
}

$wrapper_attributes = get_block_wrapper_attributes(array('class' => implode(' ', $classes)));
$content               = '<p class="wp-block-ncmfse-term-count__count">' . $term->count . '</p>';
?>

<div <?php echo wp_kses_data($wrapper_attributes); ?>>
	<?php echo ($content); ?>
</div>
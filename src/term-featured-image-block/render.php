<?php

/**
 * @param array    $attributes Block attributes.
 * @param string   $content    Block default content.
 * @param WP_Block $block      Block instance.
 * @return string Returns the filtered post excerpt for the current post wrapped inside "p" tags.
 */

if (! isset($block->context['termId'])) {
	return '';
}

$term = get_term($block->context['termId'], $block->context['termTaxonomy']); //for example uncategorized category

$classes = array();
if (isset($attributes['textAlign'])) {
	$classes[] = 'has-text-align-' . $attributes['textAlign'];
}

$wrapper_attributes = get_block_wrapper_attributes(array('class' => implode(' ', $classes)));
$content               = '<p class="wp-block-ncmazfse-block-term-count__count">' . $term->count . '</p>';
?>

<div <?php echo  $wrapper_attributes; ?>>
	<?php echo $content; ?>
</div>
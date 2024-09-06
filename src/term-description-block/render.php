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

/*
	* The purpose of the description length setting is to limit the length of both
	* automatically generated and user-created descriptions.
	* Because the description_length filter only applies to auto generated descriptions,
	* wp_trim_words is used instead.
	*/
$description_length = $attributes['descriptionLength'];
$term_description    =  $term->description;

if (isset($term_description)) {
	$description = wp_trim_words($term_description, $description_length);
}

$classes = array();
if (isset($attributes['textAlign'])) {
	$classes[] = 'has-text-align-' . $attributes['textAlign'];
}

$wrapper_attributes = get_block_wrapper_attributes(array('class' => implode(' ', $classes)));
$content               = '<p class="wp-block-ncmfse-term-description__description">' . $description . '</p>';
?>

<div <?php echo  $wrapper_attributes; ?>>
	<?php echo $content; ?>
</div>
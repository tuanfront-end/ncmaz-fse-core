<?php

/**
 * Renders the `core/post-title` block on the server.
 *
 * @since 6.3.0 Omitting the $post argument from the `get_the_title`.
 *
 * @param array    $attributes Block attributes.
 * @param string   $content    Block default content.
 * @param WP_Block $block      Block instance.
 *
 * @return string Returns the filtered post title for the current post wrapped inside "h1" tags.
 */


$term = ncmazfse_get_term_from_termIdContext_or_archivePage($block->context['termId'] ?? '', $block->context['termTaxonomy'] ?? '');
if (! $term) {
	return '';
}
$title = $term->name;
$termId = $term->term_taxonomy_id;

$tag_name = 'h2';
if (isset($attributes['level'])) {
	$tag_name = 0 === $attributes['level'] ? 'p' : 'h' . (int) $attributes['level'];
}

if (isset($attributes['isLink']) && $attributes['isLink']) {
	$rel   = ! empty($attributes['rel']) ? 'rel="' . esc_attr($attributes['rel']) . '"' : '';
	$title = sprintf('<a href="%1$s" target="%2$s" %3$s>%4$s</a>', esc_url(get_term_link($termId)), esc_attr($attributes['linkTarget']), $rel, $title);
}

$classes = array();
if (isset($attributes['textAlign'])) {
	$classes[] = 'has-text-align-' . $attributes['textAlign'];
}

$wrapper_attributes = get_block_wrapper_attributes(array('class' => implode(' ', $classes)));
?>

<<?php esc_html_e($tag_name); ?> <?php echo wp_kses_data($wrapper_attributes); ?>>
	<?php echo wp_kses_post($title); ?>
</<?php esc_html_e($tag_name); ?>>
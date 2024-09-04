<?php

/**
 * Server-side rendering of the `core/post-title` block.
 *
 * @package WordPress
 */

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

if (! isset($block->context['termId'])) {
	return '';
}
/**
 * The `$post` argument is intentionally omitted so that changes are reflected when previewing a post.
 * See: https://github.com/WordPress/gutenberg/pull/37622#issuecomment-1000932816.
 */
$title = get_term_by('id', $block->context['termId'], $block->context['termTaxonomy'])->name;

if (! $title) {
	return '';
}

$tag_name = 'h2';
if (isset($attributes['level'])) {
	$tag_name = 0 === $attributes['level'] ? 'p' : 'h' . (int) $attributes['level'];
}

if (isset($attributes['isLink']) && $attributes['isLink']) {
	$rel   = ! empty($attributes['rel']) ? 'rel="' . esc_attr($attributes['rel']) . '"' : '';
	$title = sprintf('<a href="%1$s" target="%2$s" %3$s>%4$s</a>', esc_url(get_term_link($block->context['termId'])), esc_attr($attributes['linkTarget']), $rel, $title);
}

$classes = array();
if (isset($attributes['textAlign'])) {
	$classes[] = 'has-text-align-' . $attributes['textAlign'];
}
if (isset($attributes['style']['elements']['link']['color']['text'])) {
	$classes[] = 'has-link-color';
}
$wrapper_attributes = get_block_wrapper_attributes(array('class' => implode(' ', $classes)));
?>

<<?php echo $tag_name; ?> <?php echo ($wrapper_attributes); ?>>
	<?php echo $title; ?>
</<?php echo $tag_name ?>>
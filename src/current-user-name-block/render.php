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

if (!is_user_logged_in()) {
	return;
}
$author_id  = get_current_user_id();
$author_name = get_the_author_meta('display_name', $author_id);
if (isset($attributes['isLink']) && $attributes['isLink']) {
	$author_name = sprintf('<a href="%1$s" target="%2$s" class="wp-block-post-author-name__link">%3$s</a>', get_author_posts_url($author_id), esc_attr($attributes['linkTarget']), $author_name);
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

<div <?php echo wp_kses_data($wrapper_attributes); ?>>
	<?php echo wp_kses_post($author_name); ?>
</div>
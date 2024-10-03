<?php

$page_key            = isset($block->context['queryId']) ? 'query-' . $block->context['queryId'] . '-page' : 'query-page';
$enhanced_pagination = isset($block->context['enhancedPagination']) && $block->context['enhancedPagination'];
$page                = empty($_GET[$page_key]) ? 1 : (int) $_GET[$page_key];

// Use global query if needed.
$query_args = [
	'paged'          => $page,
	'posts_per_page' => $attributes['postsToShow'] ?? 11,
	'post_status'    => 'publish',

];
$query      = new WP_Query($query_args);


if (! $query->have_posts()) {
	return '';
}

if (block_core_post_template_uses_featured_image($block->inner_blocks)) {
	update_post_thumbnail_cache($query);
}

$classnames = '';
if (isset($block->context['displayLayout']) && isset($block->context['query'])) {
	if (isset($block->context['displayLayout']['type']) && 'flex' === $block->context['displayLayout']['type']) {
		$classnames = "is-flex-container columns-{$block->context['displayLayout']['columns']}";
	}
}
if (isset($attributes['style']['elements']['link']['color']['text'])) {
	$classnames .= ' has-link-color';
}

// Ensure backwards compatibility by flagging the number of columns via classname when using grid layout.
if (isset($attributes['layout']['type']) && 'grid' === $attributes['layout']['type'] && ! empty($attributes['layout']['columnCount'])) {
	$classnames .= ' ' . sanitize_title('columns-' . $attributes['layout']['columnCount']);
}

$wrapper_attributes = get_block_wrapper_attributes(array('class' => trim($classnames)));

$content = '';
while ($query->have_posts()) {
	$query->the_post();

	// Get an instance of the current Post Template block.
	$block_instance = $block->parsed_block;

	// Set the block name to one that does not correspond to an existing registered block.
	// This ensures that for the inner instances of the Post Template block, we do not render any block supports.
	$block_instance['blockName'] = 'core/null';

	$post_id              = get_the_ID();
	$post_type            = get_post_type();
	$filter_block_context = static function ($context) use ($post_id, $post_type) {
		$context['postType'] = $post_type;
		$context['postId']   = $post_id;
		return $context;
	};

	// Use an early priority to so that other 'render_block_context' filters have access to the values.
	add_filter('render_block_context', $filter_block_context, 1);
	// Render the inner blocks of the Post Template block with `dynamic` set to `false` to prevent calling
	// `render_callback` and ensure that no wrapper markup is included.
	$block_content = (new WP_Block($block_instance))->render(array('dynamic' => false));
	remove_filter('render_block_context', $filter_block_context, 1);

	// Wrap the render inner blocks in a `li` element with the appropriate post classes.
	$post_classes = implode(' ', get_post_class('wp-block-post'));

	$inner_block_directives = $enhanced_pagination ? ' data-wp-key="post-template-item-' . $post_id . '"' : '';

	$content .= '<li' . $inner_block_directives . ' class="' . esc_attr($post_classes) . '">' . $block_content . '</li>';
}

/*
	 * Use this function to restore the context of the template tags
	 * from a secondary query loop back to the main query loop.
	 * Since we use two custom loops, it's safest to always restore.
	*/
wp_reset_postdata();
?>

<ul <?php wp_kses_data($wrapper_attributes); ?>>
	<?php echo ($content); ?>
</ul>
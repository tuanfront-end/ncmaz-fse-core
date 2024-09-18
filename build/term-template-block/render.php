<?php

// THIS FOLLOWING CODE IS FROM THE RENDER FUNCTION OF THE CORE/POST-TEMPLATE BLOCK
// https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/post-template/index.php

/**
 * @param array    $attributes Block attributes.
 * @param string   $content    Block default content.
 * @param WP_Block $block      Block instance.
 *
 * @return string Returns the output of the query, structured using the layout defined by the block's inner blocks.
 */

// $page_key            = isset($block->context['ncmazfse_termQueryId']) ? 'query-' . $block->context['ncmazfse_termQueryId'] . '-page' : 'query-page';
// $enhanced_pagination = isset($block->context['enhancedPagination']) && $block->context['enhancedPagination'];
// $page                = empty($_GET[$page_key]) ? 1 : (int) $_GET[$page_key];

$contextQuery   = $block->context['ncmazfse_termQuery'] ?? array();
$contextQueryId = $block->context['ncmazfse_termQueryId'];

// Use global query if needed.
$inherit_query = (isset($block->context['ncmazfse_termQuery']['inherit']) && $block->context['ncmazfse_termQuery']['inherit']);
$term_query    = array(
	'taxonomy' => 'category',
	'orderby ' => $contextQuery['orderby'] ?? 'name',
	'order'    => $contextQuery['order'] ?? 'ASC',
);

if ($inherit_query) {
	$queried_object = get_queried_object();
	// check if it's a term
	if (isset($queried_object->term_id)) {
		$term_query['taxonomy'] = $queried_object->taxonomy;
		$term_query['parent']   = $queried_object->term_id;
	}
} else {

	$term_query['taxonomy'] = $contextQuery['taxonomySlug'] ?? 'category';

	if ($contextQuery['parentIdString']) {
		$term_query['parent'] = $contextQuery['parentIdString'];
	}

	if ($contextQuery['perPage']) {
		$term_query['number'] = $contextQuery['perPage'];
	}

	if (! empty($contextQuery['termIdList'])) {
		$term_query['include'] = array_map('intval', $contextQuery['termIdList']);
	}

	if (! empty($contextQuery['excludeIdList'])) {
		$term_query['exclude'] = array_map('intval', $contextQuery['excludeIdList']);
	}

	if (! empty($contextQuery['page']) && intval($contextQuery['page']) > 1) {
		$term_query['offset'] = intval($contextQuery['page']) * intval($term_query['number']);
	}

	if (isset($contextQuery['hideEmpty'])) {
		$term_query['hide_empty'] = boolval($contextQuery['hideEmpty']);
	}
}

$query = get_terms($term_query);

if (is_wp_error($query)) {
	return  esc_html_e('No terms found.', 'ncmaz-fse');
}

if (empty($query)) {
	return  esc_html_e('No terms found.', 'ncmaz-fse');
}


$classnames = '';
if (isset($block->context['displayLayout']) && isset($block->context['ncmazfse_termQuery'])) {
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
// Loop through the query and render the inner blocks.
foreach ($query as $term) {
	// Get an instance of the current Post Template block.
	$block_instance = $block->parsed_block;

	// Set the block name to one that does not correspond to an existing registered block.
	// This ensures that for the inner instances of the Post Template block, we do not render any block supports.
	$block_instance['blockName'] = 'core/null';
	$term_id                     = $term->term_id;
	$term_taxonomy               = $term->taxonomy;
	$filter_block_context        = static function ($context) use ($term_id, $term_taxonomy, $contextQueryId) {
		$context['termId']               = $term_id;
		$context['termTaxonomy']         = $term_taxonomy;
		$context['ncmazfse_termQueryId'] = $contextQueryId;
		return $context;
	};

	// Use an early priority to so that other 'render_block_context' filters have access to the values.
	add_filter('render_block_context', $filter_block_context, 1);
	// Render the inner blocks of the Post Template block with `dynamic` set to `false` to prevent calling
	// `render_callback` and ensure that no wrapper markup is included.
	$block_content = (new WP_Block($block_instance))->render(array('dynamic' => false));
	remove_filter('render_block_context', $filter_block_context, 1);

	// Wrap the render inner blocks in a `li` element with the appropriate post classes.
	// $post_classes = implode(' ', get_post_class('wp-block-post'));
	$term_classes = 'ncmfse-term-item';

	// $inner_block_directives = $enhanced_pagination ? ' data-wp-key="term-template-item-' . $term_id . '"' : '';
	$inner_block_directives = '';

	$content .= '<li' . $inner_block_directives . ' class="' . esc_attr($term_classes) . '">' . $block_content . '</li>';
}
?>

<ul <?php echo wp_kses_data($wrapper_attributes); ?>>
	<?php echo ($content); ?>
</ul>
<?php

/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

if (!defined('ABSPATH')) {
	exit;
}

// get all tags
$tags = get_terms([
	'taxonomy' => 'post_tag',
	'hide_empty' => false,
]);
$result_tags = [];
foreach ($tags as $tag) {
	$result_tags[] = [
		'id'   => $tag->term_id,
		'slug' => $tag->slug,
		'name' => $tag->name,
	];
}

// get all categories
$categories = get_terms([
	'taxonomy' => 'category',
	'hide_empty' => false,
]);
$result_categories = [];
foreach ($categories as $category) {
	$result_categories[] = [
		'id'   => $category->term_id,
		'slug' => $category->slug,
		'name' => $category->name,
	];
}

// get all post types
$post_types = get_post_types([
	'public'   => true,
], 'objects');
$result_post_types = [];
foreach ($post_types as $post_type) {
	if ($post_type->name === 'attachment' || $post_type->name === 'revision' || $post_type->name === 'nav_menu_item') {
		continue; // Skip attachments, revisions, and nav_menu_item
	}
	$result_post_types[$post_type->name] = $post_type->labels->singular_name;
}

// get all post-format
$post_formats = get_theme_support('post-formats');
$result_post_formats = [];
if ($post_formats && is_array($post_formats[0])) {
	$result_post_formats = $post_formats[0];
	// check 'standard' not in $result_post_formats
	if (!in_array('standard', $result_post_formats)) {
		$result_post_formats[] = 'standard';
	}
}


wp_register_script('fe-editor-block-php-to-js', '');
wp_enqueue_script('fe-editor-block-php-to-js');
wp_localize_script('fe-editor-block-php-to-js', 'feEditorBlockData', [
	'ajaxUrl' => admin_url('admin-ajax.php'),
	'blockAttributes' => $attributes,
	'postTypes' => $result_post_types,
	'categories' => $result_categories,
	'tags' => $result_tags,
	'postFormats' => $result_post_formats,
]);

?>

<div
	<?php echo wp_kses_data(get_block_wrapper_attributes([
		'id' => 'ncmfse-editor-block-root',
	])); ?>>
</div>
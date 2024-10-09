<?php


// Add meta-data post-(like, view, save) to the REST API response for posts
add_filter(
	'rest_post_like_query',
	function ($args, $request) {
		$args += array(
			'meta_key'   => $request['meta_key'],
			'meta_value' => $request['meta_value'],
			'meta_query' => $request['meta_query'],
		);

		return $args;
	},
	99,
	2
);
add_filter(
	'rest_post_save_query',
	function ($args, $request) {
		$args += array(
			'meta_key'   => $request['meta_key'],
			'meta_value' => $request['meta_value'],
			'meta_query' => $request['meta_query'],
		);

		return $args;
	},
	99,
	2
);
add_filter(
	'rest_post_view_query',
	function ($args, $request) {
		$args += array(
			'meta_key'   => $request['meta_key'],
			'meta_value' => $request['meta_value'],
			'meta_query' => $request['meta_query'],
		);

		return $args;
	},
	99,
	2
);


// Adding a new (custom) block category and show that category at the top
add_filter('block_categories_all', 'ncmaz_fse_core_block_category', 10, 2);
function ncmaz_fse_core_block_category($categories, $post)
{
	array_unshift(
		$categories,
		array(
			'slug'  => 'ncmfse',
			'title' => 'Ncmaz',
		)
	);
	return $categories;
}


// Increase the view count number of posts  when the post is viewed
add_action(
	'template_redirect',
	function () {
		if (is_single() || is_page()) {
			ncmazfse_core__update_post_view(get_the_ID());
		}
	}
);

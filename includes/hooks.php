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
			ncmazfse_core__handle_client_like_save_view_post(get_the_ID(), get_current_user_id(), 'view', 'add');
		}
	}
);


// sort main-query by like/save/view count - to sort posts by custom field view_count/like_count/save_count
add_action(
	'pre_get_posts',
	function ($query) {
		if ($query->is_main_query() && !is_admin()) {
			$orderby = sanitize_text_field(wp_unslash($_GET['orderby'] ?? ""));
			$a_by = array('most_liked', 'most_viewed', 'most_saved', 'most_like', 'most_view', 'most_save');

			if (!in_array($orderby, $a_by)) {
				return;
			}

			if ($orderby === 'most_liked' || $orderby === 'most_like') {
				$query->set('meta_key', 'like_count');
			} else if ($orderby === 'most_viewed' || $orderby === 'most_view') {
				$query->set('meta_key', 'view_count');
			} else if ($orderby === 'most_saved' || $orderby === 'most_save') {
				$query->set('meta_key', 'save_count');
			}

			$query->set('orderby', 'meta_value_num');
		}
	}
);

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
			ncmazfse_core__update_post_view(get_the_ID(), get_current_user_id(), 'add');
		}
	}
);

// Upate main query to show posts with the most views, likes, or saves when the query-string parameter is set
function ncmaz_fse_core_sort_posts_by_likes_views_saves($clauses, $query)
{
	global $wpdb;

	if (is_admin() || !$query->is_main_query() || !(is_archive() || is_search() || is_home())) {
		return $clauses;
	}

	$orderby = sanitize_text_field(wp_unslash($_GET['orderby'] ?? ""));
	if ($orderby !== 'most_liked' && $orderby !== 'most_viewed' && $orderby !== 'most_saved') {
		return $clauses;
	}

	$posts_table = $wpdb->posts;
	$postmeta_table = $wpdb->postmeta;

	if ($orderby === 'most_liked') {
		// Thêm subquery đếm số likes của mỗi bài viết
		$clauses['fields'] .= ",
            (SELECT COUNT(*) 
             FROM {$posts_table} AS my_plikes 
             WHERE my_plikes.post_type = 'post_like' 
             AND my_plikes.post_title = {$posts_table}.ID
            ) AS like_count";

		// Sắp xếp bài viết dựa trên số lượt like
		$clauses['orderby'] = "like_count DESC, " . $clauses['orderby'];
		return $clauses;
	}

	if ($orderby === 'most_viewed') {
		// Bảng với prefix
		$clauses['join'] .= "
			LEFT JOIN {$posts_table} AS my_pviews 
			ON (my_pviews.post_type = 'post_view' AND my_pviews.post_title = {$posts_table}.ID) 
			LEFT JOIN {$postmeta_table} AS my_view_meta 
			ON (my_pviews.ID = my_view_meta.post_id AND my_view_meta.meta_key = 'view_count')
		";

		// Sắp xếp bài viết dựa trên số lượt view
		$clauses['orderby'] = "my_view_meta.meta_value DESC, " . $clauses['orderby'];
		return $clauses;
	}

	if ($orderby === 'most_saved') {
		// Thêm subquery đếm số saves của mỗi bài viết
		$clauses['fields'] .= ",
			(SELECT COUNT(*) 
			 FROM {$posts_table} AS my_psaves 
			 WHERE my_psaves.post_type = 'post_save' 
			 AND my_psaves.post_title = {$posts_table}.ID
			) AS save_count";

		// Sắp xếp bài viết dựa trên số lượt save
		$clauses['orderby'] = "save_count DESC, " . $clauses['orderby'];
		return $clauses;
	}

	return $clauses;
}
add_filter('posts_clauses', 'ncmaz_fse_core_sort_posts_by_likes_views_saves', 10, 2);

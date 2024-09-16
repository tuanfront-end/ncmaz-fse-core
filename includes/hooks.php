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


// Hiển thị danh sách list của MailPoet trong trang Editor. Phục vụ cho block Ncmaz MailPoet Form
add_action('admin_footer', 'ncmaz_fse_core_mailpoet_list_to_window');
function ncmaz_fse_core_mailpoet_list_to_window()
{
	// Kiểm tra xem MailPoet đã được cài đặt và kích hoạt chưa
	if (! class_exists(\MailPoet\API\API::class)) {
		return;
	}

	// Khởi tạo MailPoet API
	$mailpoet_api = \MailPoet\API\API::MP('v1');

	try {
		// Lấy tất cả các list
		$lists = $mailpoet_api->getLists();

		// thêm vào biến window
		echo '<script>window.mailpoetLists = ' . wp_json_encode($lists) . ';</script>';
	} catch (\Exception $e) {
		return;
	}
}

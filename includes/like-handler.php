<?php

function ncmazfse_core__handle_like()
{
	// Kiểm tra nonce để đảm bảo an toàn
	check_ajax_referer('like_button_nonce', 'security');
	$handle  = sanitize_text_field(wp_unslash($_POST['handle'] ?? "")); // remove or add
	$post_id = sanitize_text_field(wp_unslash($_POST['post_id'] ?? ""));
	$user_id = sanitize_text_field(wp_unslash($_POST['user_id'] ?? ""));

	if (! $user_id) {
		$user_id = '_anonymous';
	}

	if (! $post_id || ! $user_id) {
		wp_send_json_error('Invalid post ID or user ID');
	} else {
		// Cập nhật thông tin lượt like
		$liked = ncmazfse_core__update_post_like($post_id, $user_id, $handle);
		// Trả về phản hồi (có thể là số lượt like mới, thông báo thành công, ...)
		wp_send_json_success(
			array(
				'is_liked' => $liked,
				'user_id'  => $user_id,
				'post_id'  => $post_id,
				'post_type' => get_post_type($post_id),
			)
		);
	}

	// Luôn kết thúc bằng wp_die() khi xử lý AJAX
	wp_die();
}
add_action('wp_ajax_handle_like', 'ncmazfse_core__handle_like'); // Đăng ký action cho người dùng đã đăng nhập
add_action('wp_ajax_nopriv_handle_like', 'ncmazfse_core__handle_like'); // Đăng ký action cho người dùng chưa đăng nhập


function ncmazfse_core__update_post_like($post_id, $user_id, $handle)
{
	// Lấy danh sách lượt like là danh sách post-type "post like", có author là user_id, và title là post_id
	$post_likes = get_posts(
		array(
			'post_type'   => 'post_like',
			'numberposts' => 1,
			'title'       => $post_id,
			'meta_query'  => array(
				array(
					'key'   => 'user_id',
					'value' => $user_id,
				),
				array(
					'key'   => 'post_id',
					'value' => $post_id,
				),
			),
		)
	);

	// User chưa đăng nhập
	if ($user_id === '_anonymous') {
		// Nếu đã like, thì bỏ like
		if ($handle === 'remove') {
			wp_delete_post($post_likes[0]->ID, true);
			// remove from cookie
			ncmazfse_core__update_liked_posts_cookie($post_id, 'remove');
			return false;
		} elseif ($handle === 'add') {
			// Nếu chưa save, thì thêm save
			wp_insert_post(
				array(
					'post_type'   => 'post_like',
					'post_title'  => $post_id,
					'post_status' => 'publish',
					'meta_input'  => array(
						'user_id' => $user_id,
						'post_id' => $post_id,
						'post_type' => get_post_type($post_id),
					),
				)
			);
			// add to cookie
			ncmazfse_core__update_liked_posts_cookie($post_id, 'add');
			return true;
		}

		return false;
	}

	// Nếu đã like, thì bỏ like
	if ($post_likes) {
		wp_delete_post($post_likes[0]->ID, true);
		return false;
	} else {
		// Nếu chưa like, thì thêm like
		wp_insert_post(
			array(
				'post_type'   => 'post_like',
				'post_title'  => $post_id,
				'post_status' => 'publish',
				'meta_input'  => array(
					'user_id' => $user_id,
					'post_id' => $post_id,
					'post_type' => get_post_type($post_id),
				),
			)
		);
		return true;
	}
}

function ncmazfse_core__check_user_like($post_id, $user_id)
{
	if (! $post_id) {
		return false;
	}

	if (! $user_id) {
		$user_id = '_anonymous';
		// check cookie
		$liked_posts = ncmazfse_core__get_liked_posts_from_cookie();
		if (in_array($post_id, $liked_posts)) {
			return true;
		} else {
			return false;
		}
	}

	$post_likes = get_posts(
		array(
			'post_type'   => 'post_like',
			'numberposts' => 1,
			'title'       => $post_id,
			'meta_query'  => array(
				array(
					'key'   => 'user_id',
					'value' => $user_id,
				),
				array(
					'key'   => 'post_id',
					'value' => $post_id,
				),
			),
		)
	);

	if ($post_likes) {
		return true;
	} else {
		return false;
	}
}

function ncmazfse_core__get_post_likes($post_id)
{
	if (! $post_id) {
		return array();
	}
	$post_likes = get_posts(
		array(
			'post_type'   => 'post_like',
			'numberposts' => -1,
			'title'       => $post_id,
		)
	);

	return $post_likes;
}

function ncmazfse_core__get_post_likes_count($post_id)
{
	return count(ncmazfse_core__get_post_likes($post_id));
}


function ncmazfse_core_get_all_post_liked_post_id_by_user($user_id)
{
	$post_likes = get_posts(
		array(
			'post_type'   => 'post_like',
			'numberposts' => -1,
			'meta_query'  => array(
				array(
					'key'   => 'user_id',
					'value' => $user_id,
				),
			),
		)
	);

	$post_ids = array();
	foreach ($post_likes as $post_like) {
		$post_ids[] = $post_like->post_title;
	}

	return $post_ids;
}


function ncmazfse_core__update_liked_posts_cookie($post_id, $handle)
{
	$liked_posts = ncmazfse_core__get_liked_posts_from_cookie();

	if ($handle === 'remove') {
		$liked_posts = array_diff($liked_posts, array($post_id));
	} elseif ($handle === 'add') {
		$liked_posts[] = $post_id;
	}
	setcookie('liked_posts', json_encode($liked_posts), time() + 3600 * 24 * 30, '/');
}

function ncmazfse_core__get_liked_posts_from_cookie()
{
	return json_decode(stripslashes($_COOKIE['liked_posts'] ?? '[]'));
}

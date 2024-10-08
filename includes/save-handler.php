<?php

function ncmazfse_core__handle_save()
{
	// Kiểm tra nonce để đảm bảo an toàn
	check_ajax_referer('save_button_nonce', 'security');
	$handle  = sanitize_text_field(wp_unslash($_POST['handle'] ?? "")); // remove or add
	$post_id = sanitize_text_field(wp_unslash($_POST['post_id'] ?? ""));
	$user_id = sanitize_text_field(wp_unslash($_POST['user_id'] ?? ""));

	if (! $user_id) {
		$user_id = '_anonymous';
	}

	if (! $post_id || ! $user_id) {
		wp_send_json_error(__('Invalid post ID or user ID', 'ncmaz-fse-core'));
	} else {
		// Cập nhật thông tin lượt like
		$saved = ncmazfse_core__update_post_save($post_id, $user_id, $handle);
		// Trả về phản hồi (có thể là số lượt save mới, thông báo thành công, ...)
		wp_send_json_success(
			array(
				'is_saved' => $saved,
				'user_id'  => $user_id,
				'post_id'  => $post_id,
				'post_type' => get_post_type($post_id),
			)
		);
	}

	// Luôn kết thúc bằng wp_die() khi xử lý AJAX
	wp_die();
}
add_action('wp_ajax_handle_save', 'ncmazfse_core__handle_save'); // Đăng ký action cho người dùng đã đăng nhập
add_action('wp_ajax_nopriv_handle_save', 'ncmazfse_core__handle_save'); // Đăng ký action cho người dùng chưa đăng nhập


function ncmazfse_core__update_post_save($post_id, $user_id, $handle)
{

	$post_saves = get_posts(
		array(
			'post_type'   => 'post_save',
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
		// Nếu đã save, thì bỏ save
		if ($handle === 'remove') {
			wp_delete_post($post_saves[0]->ID, true);
			// remove from cookie
			ncmazfse_core__update_saved_posts_cookie($post_id, 'remove');

			return false;
		} elseif ($handle === 'add') {
			// Nếu chưa save, thì thêm save
			wp_insert_post(
				array(
					'post_type'   => 'post_save',
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
			ncmazfse_core__update_saved_posts_cookie($post_id, 'add');

			return true;
		} else {
			return false;
		}
	}

	// User đã đăng nhập
	// Nếu đã save, thì bỏ save
	if ($post_saves) {
		wp_delete_post($post_saves[0]->ID, true);
		return false;
	} else {
		// Nếu chưa save, thì thêm save
		wp_insert_post(
			array(
				'post_type'   => 'post_save',
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

function ncmazfse_core__check_user_save($post_id, $user_id)
{
	if (! $post_id) {
		return false;
	}

	if (! $user_id) {
		$user_id = '_anonymous';
		// check cookie
		$saved_posts = ncmazfse_core__get_saved_posts_from_cookie();
		if (in_array($post_id, $saved_posts)) {
			return true;
		} else {
			return false;
		}
	}

	$post_saves = get_posts(
		array(
			'post_type'   => 'post_save',
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

	if ($post_saves) {
		return true;
	} else {
		return false;
	}
}

function ncmazfse_core__get_post_saves($post_id)
{
	if (! $post_id) {
		return array();
	}
	$post_saves = get_posts(
		array(
			'post_type'   => 'post_save',
			'numberposts' => -1,
			'title'       => $post_id,
		)
	);

	return $post_saves;
}

function ncmazfse_core__get_post_save_count($post_id)
{
	return count(ncmazfse_core__get_post_saves($post_id));
}

function ncmazfse_core_get_all_post_saved_post_id_by_user($user_id)
{
	if (! $user_id) {
		return array();
	}
	$post_saves = get_posts(
		array(
			'post_type'   => 'post_save',
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
	foreach ($post_saves as $post_save) {
		$post_ids[] = $post_save->post_title;
	}
	return $post_ids;
}


function ncmazfse_core__update_saved_posts_cookie($post_id, $handle)
{
	$saved_posts = ncmazfse_core__get_saved_posts_from_cookie();
	if ($handle === 'remove') {
		// remove from cookie
		$saved_posts = array_diff($saved_posts, array($post_id));
	} elseif ($handle === 'add') {
		// add to cookie
		$saved_posts[] = $post_id;
	}
	setcookie('saved_posts', json_encode($saved_posts), time() + 3600 * 24 * 30, '/');
}

function ncmazfse_core__get_saved_posts_from_cookie()
{
	return json_decode(stripslashes($_COOKIE['saved_posts'] ?? '[]'));
}

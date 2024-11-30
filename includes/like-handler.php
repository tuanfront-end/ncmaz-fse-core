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
		wp_send_json_error(__('Invalid post ID or user ID', 'ncmaz-fse-core'));
	} else {
		// Cập nhật thông tin lượt like
		$aLike = ncmazfse_core__update_post_like($post_id, $user_id, $handle);
		// Trả về phản hồi (có thể là số lượt like mới, thông báo thành công, ...)
		wp_send_json_success(
			array(
				'is_liked' 		=> $aLike['is_liked'],
				'like_count' 	=> $aLike['like_count'],
				'user_id'  		=> $user_id,
				'post_id'  		=> $post_id,
				'post_type' 	=> get_post_type($post_id),
			)
		);
	}

	// Luôn kết thúc bằng wp_die() khi xử lý AJAX
	wp_die();
}
add_action('wp_ajax_handle_like', 'ncmazfse_core__handle_like'); // Đăng ký action cho người dùng đã đăng nhập
add_action('wp_ajax_nopriv_handle_like', 'ncmazfse_core__handle_like'); // Đăng ký action cho người dùng chưa đăng nhập


/**
 * 
 * @param int $post_id
 * @param string $user_id  // _anonymous or user_id
 * @param string $handle // remove or add
 * @return array( 'is_liked' => bool,'like_count' => int)
 * */

function ncmazfse_core__update_post_like($post_id, $user_id, $handle)
{
	$new_count = ncmazfse_core__update_post_meta_like_save_view_count($post_id, 'like_count', $handle);

	if ($user_id && $user_id !== "_anonymous") {
		ncmazfse_core__update_user_meta_like_save_view($user_id, $post_id, 'liked_posts', $handle);
	} else {
		ncmazfse_core__update_like_save_view_posts_cookie($post_id, $handle, 'liked_posts');
	}

	return [
		'is_liked' => ncmazfse_core__check_user_like($post_id, $user_id),
		'like_count' => $new_count
	];
}


/**
 * 
 * @param int $post_id
 * @param string $user_id // _anonymous or user_id
 * @return bool
 * */
function ncmazfse_core__check_user_like($post_id, $user_id)
{
	if (! $post_id) {
		return false;
	}

	// for user not logged in  _anonymous
	if (! $user_id || $user_id === '_anonymous') {
		// check cookie
		$ids = ncmazfse_core__get_like_save_view_posts_from_cookie('liked_posts');
		if (in_array($post_id, $ids)) {
			return true;
		} else {
			return false;
		}
	}

	//  for user logged in
	return ncmazfse_core__check_user_is_like_save_view($user_id, $post_id, 'liked_posts');
}

/**
 * 
 * @param int $post_id
 * @return int // count
 * */
function ncmazfse_core__get_post_likes_count($post_id)
{
	ncmazfse_core__get_post_like_count($post_id);
}


/**
 * 
 * @param int $post_id
 * @return int // count
 * */
function ncmazfse_core__get_post_like_count($post_id)
{
	$count = get_post_meta($post_id, 'like_count', true);
	if (! $count) {
		return 0;
	}
	return intval($count);
}

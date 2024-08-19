<?php

function ncmazfse_core__handle_like()
{
    // Kiểm tra nonce để đảm bảo an toàn
    check_ajax_referer('like_button_nonce', 'security');

    // Lấy ID bài viết từ dữ liệu gửi lên
    $post_id = intval($_POST['post_id']);

    // ... Logic xử lý like của bạn (ví dụ: cập nhật database)

    // Trả về phản hồi (có thể là số lượt like mới, thông báo thành công, ...)
    wp_send_json_success('Đã like bài viết!');

    // Luôn kết thúc bằng wp_die() khi xử lý AJAX
    wp_die();
}
add_action('wp_ajax_handle_like', 'ncmazfse_core__handle_like'); // Đăng ký action cho người dùng đã đăng nhập
add_action('wp_ajax_nopriv_handle_like', 'ncmazfse_core__handle_like'); // Đăng ký action cho người dùng chưa đăng nhập


// 
function update_post_likes($post_id, $user_id)
{
    $likes = get_post_meta($post_id, 'post_likes', true);

    if (! is_array($likes)) {
        $likes = array();
    }

    if (! in_array($user_id, $likes)) {
        $likes[] = $user_id;
        update_post_meta($post_id, 'post_likes', $likes);
    }
}

function get_post_likes($post_id)
{
    $likes = get_post_meta($post_id, 'post_likes', true);

    if (is_array($likes)) {
        // Lấy thông tin người dùng từ cơ sở dữ liệu dựa trên $likes
        // ...
        return $likes; // Hoặc trả về thông tin người dùng đã xử lý
    } else {
        return array();
    }
}

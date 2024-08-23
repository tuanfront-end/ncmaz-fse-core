<?php

function ncmazfse_core__handle_save()
{
    // Kiểm tra nonce để đảm bảo an toàn
    check_ajax_referer('save_button_nonce', 'security');
    $post_id = $_POST['post_id'];
    $user_id = $_POST['user_id'];

    if (!$post_id || !$user_id) {
        wp_send_json_error('Invalid post ID or user ID');
    } else {
        // Cập nhật thông tin lượt like
        $liked = ncmazfse_core__update_post_like($post_id, $user_id);
        // Trả về phản hồi (có thể là số lượt like mới, thông báo thành công, ...)
        wp_send_json_success(array(
            'is_liked' => $liked,
            'user_id' => $user_id,
            'post_id' => $post_id
        ));
    }

    // Luôn kết thúc bằng wp_die() khi xử lý AJAX
    wp_die();
}
add_action('wp_ajax_handle_like', 'ncmazfse_core__handle_save'); // Đăng ký action cho người dùng đã đăng nhập
add_action('wp_ajax_nopriv_handle_like', 'ncmazfse_core__handle_save'); // Đăng ký action cho người dùng chưa đăng nhập


// 
function ncmazfse_core__update_post_save($post_id, $user_id)
{
    // Lấy danh sách lượt like là danh sách post-type "post like", có author là user_id, và title là post_id
    $post_likes = get_posts([
        'post_type' => 'post_like',
        'numberposts' => 1,
        'title' =>  $post_id,
        "meta_query" => [
            [
                'key' => 'user_id',
                'value' => $user_id,
            ],
        ]
    ]);

    // Nếu đã like, thì bỏ like
    if ($post_likes) {
        wp_delete_post($post_likes[0]->ID, true);
        return false;
    } else {
        // Nếu chưa like, thì thêm like
        wp_insert_post([
            'post_type' => 'post_like',
            'post_title' => $post_id,
            'post_status' => 'publish',
            'meta_input' => [
                'user_id' => $user_id,
                'post_id' => $post_id
            ]
        ]);

        return true;
    }
}

// 
function ncmazfse_core__check_user_save($post_id, $user_id)
{
    if (!$user_id || !$post_id) {
        return false;
    }

    $post_likes = get_posts([
        'post_type' => 'post_like',
        'numberposts' => 1,
        'title' =>  $post_id,
        "meta_query" => [
            [
                'key' => 'user_id',
                'value' => $user_id,
            ],
        ]
    ]);

    if ($post_likes) {
        return true;
    } else {
        return false;
    }
}

function ncmazfse_core__get_post_saves($post_id)
{
    $post_likes = get_posts([
        'post_type' => 'post_like',
        'numberposts' => -1,
        'title' =>  $post_id,
    ]);

    return $post_likes;
}

function ncmazfse_core__get_post_likes_save($post_id)
{
    return count(ncmazfse_core__get_post_saves($post_id));
}

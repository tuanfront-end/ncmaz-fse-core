<?php

function ncmazfse_core__handle_views()
{
    // Kiểm tra nonce để đảm bảo an toàn
    check_ajax_referer('handle_view_nonce', 'security');
    $post_id = $_POST['post_id'];


    if (!$post_id) {
        wp_send_json_error('Invalid post ID or user ID');
    } else {
        // Cập nhật thông tin lượt view
        $view_count = ncmazfse_core__update_post_view($post_id,);
        // Trả về phản hồi (có thể là số lượt save mới, thông báo thành công, ...)
        wp_send_json_success(array(
            'view_count' => $view_count,
            'post_id' => $post_id,
        ));
    }

    // Luôn kết thúc bằng wp_die() khi xử lý AJAX
    wp_die();
}
add_action('wp_ajax_handle_view', 'ncmazfse_core__handle_views'); // Đăng ký action cho người dùng đã đăng nhập
add_action('wp_ajax_nopriv_handle_view', 'ncmazfse_core__handle_views'); // Đăng ký action cho người dùng chưa đăng nhập


// @param $post_id: ID của post
// @return: số lượt view của post
function ncmazfse_core__update_post_view($post_id)
{

    $post_views = get_posts([
        'post_type' => 'post_view',
        'numberposts' => 1,
        'title' =>  $post_id,
        "meta_query" => [
            ['key' => 'post_id', 'value' => $post_id,],
        ]
    ]);

    if ($post_views) {
        //  tăng lượt view count của post 
        $view_count = get_post_meta($post_views[0]->ID, 'view_count', true);
        $view_count = ($view_count ?? 0) + 1;
        update_post_meta($post_views[0]->ID, 'view_count', $view_count);

        return $view_count;
    } else {
        // Nếu chưa co, thì thêm post view mới
        wp_insert_post([
            'post_type' => 'post_view',
            'post_title' => $post_id,
            'post_status' => 'publish',
            'meta_input' => [
                'post_id' => $post_id,
                'view_count' => 1
            ]
        ]);

        return 1;
    }
}


function ncmazfse_core__get_post_view_count($post_id)
{
    return  get_post_meta($post_id, 'view_count', true);
}

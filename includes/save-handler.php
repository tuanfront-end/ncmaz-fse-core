<?php

function ncmazfse_core__handle_save()
{
    // Kiểm tra nonce để đảm bảo an toàn
    check_ajax_referer('save_button_nonce', 'security');
    $handle = $_POST['handle']; // remove or add
    $post_id = $_POST['post_id'];
    $user_id = $_POST['user_id'];
    if (!$user_id) {
        $user_id =  "_anonymous";
    }

    if (!$post_id || !$user_id) {
        wp_send_json_error('Invalid post ID or user ID');
    } else {
        // Cập nhật thông tin lượt like
        $saved = ncmazfse_core__update_post_save($post_id, $user_id, $handle);
        // Trả về phản hồi (có thể là số lượt save mới, thông báo thành công, ...)
        wp_send_json_success(array(
            'is_saved' => $saved,
            'user_id' => $user_id,
            'post_id' => $post_id
        ));
    }

    // Luôn kết thúc bằng wp_die() khi xử lý AJAX
    wp_die();
}
add_action('wp_ajax_handle_save', 'ncmazfse_core__handle_save'); // Đăng ký action cho người dùng đã đăng nhập
add_action('wp_ajax_nopriv_handle_save', 'ncmazfse_core__handle_save'); // Đăng ký action cho người dùng chưa đăng nhập


// 
function ncmazfse_core__update_post_save($post_id, $user_id, $handle)
{

    $post_saves = get_posts([
        'post_type' => 'post_save',
        'numberposts' => 1,
        'title' =>  $post_id,
        "meta_query" => [
            ['key' => 'user_id', 'value' => $user_id,],
            ['key' => 'post_id', 'value' => $post_id,],
        ]
    ]);

    // User chưa đăng nhập
    if ($user_id === "_anonymous") {
        // Nếu đã save, thì bỏ save
        if ($handle === "remove") {
            wp_delete_post($post_saves[0]->ID, true);
            return false;
        } else if ($handle === "add") {
            // Nếu chưa save, thì thêm save
            wp_insert_post([
                'post_type' => 'post_save',
                'post_title' => $post_id,
                'post_status' => 'publish',
                'meta_input' => [
                    'user_id' => $user_id,
                    'post_id' => $post_id
                ]
            ]);
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
        wp_insert_post([
            'post_type' => 'post_save',
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

    $post_saves = get_posts([
        'post_type' => 'post_save',
        'numberposts' => 1,
        'title' =>  $post_id,
        "meta_query" => [
            ['key' => 'user_id', 'value' => $user_id,],
            ['key' => 'post_id', 'value' => $post_id,],
        ]
    ]);

    if ($post_saves) {
        return true;
    } else {
        return false;
    }
}

function ncmazfse_core__get_post_saves($post_id)
{
    $post_saves = get_posts([
        'post_type' => 'post_save',
        'numberposts' => -1,
        'title' =>  $post_id,
    ]);

    return $post_saves;
}

function ncmazfse_core__get_post_save_count($post_id)
{
    return count(ncmazfse_core__get_post_saves($post_id));
}

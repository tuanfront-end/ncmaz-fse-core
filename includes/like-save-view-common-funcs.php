<?php

/**
 * 
 * @param int $post_id
 * @param string $meta_key // like_count / view_count / save_count
 * @param string $handle // remove or add
 * @return int // new meta count
 * */

function ncmazfse_core__update_post_meta_like_save_view_count($post_id, $meta_key, $handle)
{

    // Kiểm tra xem post_id có hợp lệ không
    if (!$post_id) {
        return 0;
    }

    // Kiểm tra xem meta_key có hợp lệ không
    if ($meta_key !== 'like_count' && $meta_key !== 'view_count' && $meta_key !== 'save_count') {
        return 0;
    }

    // Lấy thông tin lượt like hiện tại
    $meta_count = get_post_meta($post_id, $meta_key, true);

    // Nếu meta_count không phải là số, hoặc không tồn tại, thì gán bằng 0
    if (!is_numeric($meta_count)) {
        $meta_count = 0;
    } else {
        $meta_count =  intval($meta_count);
    }

    // Nếu $handle là 'add', thì tăng lượt like lên 1
    if ($handle === 'add') {
        $meta_count++;
    } elseif ($handle === 'remove') {
        // Nếu $handle là 'remove', thì giảm lượt like đi 1
        $meta_count--;
    }

    // Cập nhật lượt like mới
    update_post_meta($post_id, $meta_key, $meta_count);

    // Trả về lượt like mới
    return $meta_count;
}

/**
 * 
 * @param int $user_id
 * @param string $user_meta_key // liked_posts / viewed_posts / saved_posts
 * @return array //array post_id
 * */
function ncmazfse_core__get_posts_like_save_view_by_user($user_id, $user_meta_key)
{
    // Lấy thông tin lượt like hiện tại của user meta: 1,3,22,33...
    $string_meta_ids = get_user_meta($user_id, $user_meta_key, true);

    // Nếu string_meta_ids không tồn tại hoặc không phải là chuỗi, thì gán bằng chuỗi rỗng
    if (!$string_meta_ids || !is_string($string_meta_ids)) {
        $string_meta_ids = '';
    }
    // convert to array
    $array_meta_ids = explode(',', $string_meta_ids);

    // check $array_meta_ids is array or not
    if (!is_array($array_meta_ids)) {
        $array_meta_ids = [];
    }

    return $array_meta_ids;
}


/**
 * 
 * @param int $user_id
 * @param int $post_id
 * @param string $user_meta_key // liked_posts / viewed_posts / saved_posts
 * @param string $handle // remove or add
 * @return array( 'is_meta_changed' => bool,'user_meta_count' => int)
 * */
function ncmazfse_core__update_user_meta_like_save_view($user_id, $post_id, $user_meta_key, $handle)
{
    $is_meta_changed = false;

    // Kiểm tra xem user_id và post_id có hợp lệ không
    if (!$user_id || !$post_id) {
        return [
            'is_meta_changed' => $is_meta_changed,
            'user_meta_count' => 0
        ];
    }

    // Kiểm tra xem user_meta_key có hợp lệ không    
    if ($user_meta_key !== 'liked_posts' && $user_meta_key !== 'viewed_posts' && $user_meta_key !== 'saved_posts') {
        return [
            'is_meta_changed' => $is_meta_changed,
            'user_meta_count' => 0
        ];
    }

    $array_meta_ids = ncmazfse_core__get_posts_like_save_view_by_user($user_id, $user_meta_key);

    // Nếu $handle là 'add', thì thêm post_id vào mảng
    if ($handle === 'add') {
        if (!in_array($post_id, $array_meta_ids)) {
            $array_meta_ids[] = $post_id;
            $is_meta_changed = true;
        }
    } elseif ($handle === 'remove') {
        // Nếu $handle là 'remove', thì xóa post_id khỏi mảng
        if (($key = array_search($post_id, $array_meta_ids)) !== false) {
            unset($array_meta_ids[$key]);
            $is_meta_changed = true;
        }
    }

    if ($is_meta_changed) {
        update_user_meta($user_id, $user_meta_key, implode(',', $array_meta_ids));
    }

    return [
        'is_meta_changed' => $is_meta_changed,
        'user_meta_count' => count($array_meta_ids)
    ];
}


/**
 * 
 * @param int $user_id 
 * @param int $post_id
 * @param string $user_meta_key // liked_posts / viewed_posts / saved_posts
 * @return bool
 * */
function ncmazfse_core__check_user_is_like_save_view($user_id, $post_id, $user_meta_key)
{

    // Kiểm tra xem user_id và post_id có hợp lệ không
    if (!$user_id || !$post_id) {
        return false;
    }

    // Kiểm tra xem user_meta_key có hợp lệ không
    if ($user_meta_key !== 'liked_posts' && $user_meta_key !== 'viewed_posts' && $user_meta_key !== 'saved_posts') {
        return false;
    }

    // Lấy thông tin lượt like hiện tại của user meta: 1,3,22,33...
    $string_meta_ids = get_user_meta($user_id, $user_meta_key, true);

    // Nếu string_meta_ids không tồn tại hoặc không phải là chuỗi, thì gán bằng chuỗi rỗng
    if (!$string_meta_ids || !is_string($string_meta_ids)) {
        $string_meta_ids = '';
    }
    // convert to array
    $array_meta_ids = explode(',', $string_meta_ids);

    // check $array_meta_ids is array or not
    if (!is_array($array_meta_ids)) {
        $array_meta_ids = [];
    }

    // Nếu post_id có trong mảng, thì trả về true
    return in_array($post_id, $array_meta_ids);
}


/**
 *  
 * @param string $cookie_key // saved_posts / liked_posts / viewed_posts
 * @return array //array string - post_id
 * */
function ncmazfse_core__get_like_save_view_posts_from_cookie($cookie_key)
{
    $ids = json_decode(sanitize_text_field(wp_unslash($_COOKIE[$cookie_key] ?? '[]')));
    if (! $ids || ! is_array($ids)) {
        return [];
    }
    return $ids;
}


/**
 * 
 * @param int|string $post_id
 * @param string $cookie_key // saved_posts / liked_posts / viewed_posts
 * @param string $handle // remove or add
 * @return array( 'is_cookie_changed' => bool,'user_cookie_count' => int)
 * */
function ncmazfse_core__update_like_save_view_posts_cookie($post_id, $cookie_key, $handle)
{
    $ids = ncmazfse_core__get_like_save_view_posts_from_cookie($cookie_key);
    $is_cookie_changed = false;

    if ($handle === 'remove') {
        // check $post_id in_array or not
        if (($key = array_search($post_id, $ids)) !== false) {
            unset($ids[$key]);
            $is_cookie_changed = true;
        }
    } elseif ($handle === 'add') {
        if (!in_array($post_id, $ids)) {
            $ids[] = strval($post_id);
            $is_cookie_changed = true;
        }
    }

    if ($is_cookie_changed) {
        setcookie($cookie_key, wp_json_encode($ids), time() + 3600 * 24 * 30, '/');
    }

    return [
        'is_cookie_changed' => $is_cookie_changed,
        'user_cookie_count' => count($ids)
    ];
}


/**
 * Update post like, save, view by client (user or _anonymous) when user click like, save, view button. 
 * @param int $post_id
 * @param string $user_id  // _anonymous or user_id
 * @param string $reaction // like / save / view
 * @param string $handle // remove / add. Note: if reaction is view, then handle must be add.
 * @return array( 'is_ok' => bool, 'count' => int, 'update_result' => array )
 * */
function ncmazfse_core__handle_client_like_save_view_post($post_id, $user_id, $reaction, $handle)
{
    // check  $reaction is valid or not
    if ($reaction !== 'like' && $reaction !== 'save' && $reaction !== 'view') {
        return [
            'is_ok'         => false,
            'count'         => 0,
            'update_result' => []
        ];
    }

    // check  $handle is valid or not
    if ($handle !== 'add' && $handle !== 'remove') {
        return [
            'is_ok'         => false,
            'count'         => 0,
            'update_result' => []
        ];
    }

    // check  $post_id is valid or not
    if (!$post_id) {
        return [
            'is_ok'         => false,
            'count'         => 0,
            'update_result' => []
        ];
    }

    $update_result = [];
    $new_count = 0;


    // Update user_meta or user_cookie -------------------------------------
    if (!empty($user_id) && $user_id !== "_anonymous") { // for user logged in
        if ($reaction === 'like') {
            $update_result = ncmazfse_core__update_user_meta_like_save_view($user_id, $post_id, 'liked_posts', $handle);
        } elseif ($reaction === 'save') {
            $update_result = ncmazfse_core__update_user_meta_like_save_view($user_id, $post_id, 'saved_posts', $handle);
        } else {
            $update_result = ncmazfse_core__update_user_meta_like_save_view($user_id, $post_id, 'viewed_posts', $handle);
        }
    } else { // for user not logged in  _anonymous
        if ($reaction === 'like') {
            $update_result = ncmazfse_core__update_like_save_view_posts_cookie($post_id, 'liked_posts', $handle);
        } elseif ($reaction === 'save') {
            $update_result = ncmazfse_core__update_like_save_view_posts_cookie($post_id, 'saved_posts', $handle);
        } else {
            $update_result = ncmazfse_core__update_like_save_view_posts_cookie($post_id, 'viewed_posts', $handle);
        }
    }

    // Update post meta / or Not update ---------------------------------------------------
    if ($update_result['is_meta_changed'] || $update_result['is_cookie_changed']) { // if user_meta or cookie changed
        if ($reaction === 'like') {
            $new_count = ncmazfse_core__update_post_meta_like_save_view_count($post_id, 'like_count', $handle);
        } elseif ($reaction === 'save') {
            $new_count = ncmazfse_core__update_post_meta_like_save_view_count($post_id, 'save_count', $handle);
        } else {
            $new_count = ncmazfse_core__update_post_meta_like_save_view_count($post_id, 'view_count', $handle);
        }
    } else {
        // no change in user meta. ex: user already liked/saved/viewed the post, so no need to update post meta...
        if ($reaction === 'like') {
            $new_count = ncmazfse_core__get_post_like_count($post_id);
        } elseif ($reaction === 'save') {
            $new_count = ncmazfse_core__get_post_save_count($post_id);
        } else {
            // view count need to update always
            $new_count = ncmazfse_core__update_post_meta_like_save_view_count($post_id, 'view_count', $handle);
        }
    }

    return [
        'is_ok'         => $handle === 'add',
        'count'         => $new_count,
        'update_result' => $update_result
    ];
}

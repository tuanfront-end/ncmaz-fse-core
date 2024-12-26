<?php

/**
 *  Get nonce for like, save, view block
 *  @return json
 */
function ncmazfse_core__get_block_like_save_view_nonce_callback()
{
    $block_type  = sanitize_text_field(wp_unslash($_POST['block_type'] ?? "")); // like / view / save
    $nonce = '';

    if ($block_type === 'like_button') {
        $nonce = wp_create_nonce('like_button_nonce');
    } else if ($block_type === 'save_button') {
        $nonce = wp_create_nonce('save_button_nonce');
    } else if ($block_type === 'view') {
        $nonce = wp_create_nonce('handle_view_nonce');
    }

    wp_send_json_success(array('nonce' => $nonce));
    wp_die();
}
add_action('wp_ajax_get_like_save_view_block_nonce', 'ncmazfse_core__get_block_like_save_view_nonce_callback');
add_action('wp_ajax_nopriv_get_like_save_view_block_nonce', 'ncmazfse_core__get_block_like_save_view_nonce_callback');


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

    // Check if user_meta or cookie changed or not -------------------------------------
    $update_result['is_meta_changed'] = $update_result['is_meta_changed'] ?? false;
    $update_result['is_cookie_changed'] = $update_result['is_cookie_changed'] ?? false;

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




// ==================== For version 1.4 above - Sync user meta view_count/like_count/save_count when update plugin. ====================
// ==================== For version 1.4 above - Sync user meta view_count/like_count/save_count when update plugin. ====================
// Will delete this code in the couple next version...

// Sync post like -------------------
add_action(
    'admin_init',
    function () {
        // check form 
        if (($_POST['ncmaz_fse_core_1_4_async_post_like'] ?? "") !== 'yes_ok') {
            return;
        }

        // check option exists
        if (get_option('ncmazfse_core_1_4_async_post_like_to_post_meta')) {
            return;
        }
        update_option('ncmazfse_core_1_4_async_post_like_to_post_meta', true);

        // get all post like
        $post_likes = get_posts(array(
            'post_type' => 'post_like',
            'numberposts' => -1,
            'post_status' => 'publish',
        ));
        if (empty($post_likes)) {
            return;
        }

        // update post meta from post_like. Post_like title is post_id of post
        foreach ($post_likes as $post_like) {
            $post_id = $post_like->post_title;
            $like_count = get_post_meta($post_id, 'like_count', true);
            $like_count = empty($like_count) ? 0 : intval($like_count);
            update_post_meta($post_id, 'like_count', $like_count + 1);
        }
    }
);

// Sync post save -------------------
add_action(
    'admin_init',
    function () {
        // check form 
        if (($_POST['ncmaz_fse_core_1_4_async_post_save'] ?? "") !== 'yes_ok') {
            return;
        }

        // check option exists
        if (get_option('ncmazfse_core_1_4_async_post_save_to_post_meta')) {
            return;
        }
        update_option('ncmazfse_core_1_4_async_post_save_to_post_meta', true);


        // get all post save
        $post_saves = get_posts(array(
            'post_type' => 'post_save',
            'numberposts' => -1,
            'post_status' => 'publish',
        ));
        if (empty($post_saves)) {
            return;
        }

        // update post meta from post_save. Post_save title is post_id of post
        foreach ($post_saves as $post_save) {
            $post_id = $post_save->post_title;
            $save_count = get_post_meta($post_id, 'save_count', true);
            $save_count = empty($save_count) ? 0 : intval($save_count);
            update_post_meta($post_id, 'save_count', $save_count + 1);
        }
    }
);

// Sync post view -------------------
add_action(
    'admin_init',
    function () {
        // check form 
        if (($_POST['ncmaz_fse_core_1_4_async_post_view'] ?? "") !== 'yes_ok') {
            return;
        }

        // check option exists
        if (get_option('ncmazfse_core_1_4_async_post_view_to_post_meta')) {
            return;
        }
        update_option('ncmazfse_core_1_4_async_post_view_to_post_meta', true);

        // get all post view
        $post_views = get_posts(array(
            'post_type' => 'post_view',
            'numberposts' => -1,
            'post_status' => 'publish',
        ));
        if (empty($post_views)) {
            return;
        }

        // update post meta from post_view. Post_view title is post_id of post
        foreach ($post_views as $post_view) {
            $post_id = $post_view->post_title;
            $view_count = get_post_meta($post_id, 'view_count', true);
            $view_count = empty($view_count) ? 0 : intval($view_count);
            update_post_meta($post_id, 'view_count', $view_count + 1);
        }
    }
);

// Sync user meta -------------------
add_action('admin_init', function () {
    // check form 
    if (($_POST['ncmaz_fse_core_1_4_async_user_meta'] ?? "") !== 'yes_ok') {
        return;
    }

    // check option exists
    if (get_option('ncmazfse_core_1_4_async_user_meta')) {
        return;
    }
    update_option('ncmazfse_core_1_4_async_user_meta', true);

    // get all user
    $users = get_users();

    // each post like/save have post meta user_id is user_id of user and post_id is id of post. Now, create a user meta liked_posts/saved_posts to store all post_id that user liked/saved.
    foreach ($users as $user) {
        $user_id = $user->ID;
        $liked_posts = [];
        $saved_posts = [];

        // check if user have liked_posts/saved_posts meta. Don't update if exists
        $old_liked_posts = get_user_meta($user_id, 'liked_posts', true);
        $old_saved_posts = get_user_meta($user_id, 'saved_posts', true);

        if (empty($old_liked_posts)) {
            // get all post like of user
            $post_likes = get_posts(array(
                'fields'     => 'ids',
                'post_type' => 'post_like',
                'numberposts' => -1,
                'post_status' => 'publish',
                'meta_key' => 'user_id',
                'meta_value' => $user_id,
            ));
            // update user meta liked_posts and saved_posts
            foreach ($post_likes as $post_id) {
                $liked_posts[] = $post_id;
            }
            update_user_meta($user_id, 'liked_posts', $liked_posts);
        }

        if (empty($old_saved_posts)) {
            // get all post save of user
            $post_saves = get_posts(array(
                'fields'     => 'ids',
                'post_type' => 'post_save',
                'numberposts' => -1,
                'post_status' => 'publish',
                'meta_key' => 'user_id',
                'meta_value' => $user_id,
            ));
            // update user meta liked_posts and saved_posts
            foreach ($post_saves as $post_id) {
                $saved_posts[] = $post_id;
            }
            update_user_meta($user_id, 'saved_posts', $saved_posts);
        }
    }
});

// Show admin notice to sync data
function ncmaz_fse_core__sample_admin_notice__error()
{
    $async_post_like_opt = get_option('ncmazfse_core_1_4_async_post_like_to_post_meta');
    $async_post_save_opt = get_option('ncmazfse_core_1_4_async_post_save_to_post_meta');
    $async_post_view_opt = get_option('ncmazfse_core_1_4_async_post_view_to_post_meta');
    $async_user_meta_opt = get_option('ncmazfse_core_1_4_async_user_meta');
    // check if all data is synced
    if ($async_post_like_opt && $async_post_save_opt && $async_post_view_opt && $async_user_meta_opt) {
        return;
    }

    $post_save = get_posts(array(
        'fields' => 'ids',
        'post_type' => 'post_save',
        'numberposts' => 1,
        'post_status' => 'publish',
    ));
    $post_like = get_posts(array(
        'fields' => 'ids',
        'post_type' => 'post_like',
        'numberposts' => 1,
        'post_status' => 'publish',
    ));
    $post_view = get_posts(array(
        'fields' => 'ids',
        'post_type' => 'post_view',
        'numberposts' => 1,
        'post_status' => 'publish',
    ));

    // check is new user
    if (empty($post_save) && empty($post_like) && empty($post_view)) {
        return;
    }

    $class = 'notice notice-warning is-dismissible';
    $message = __('You have upgraded the Ncmaz FSE core plugin to version 1.4.0. To sync data about your Like/Save/View posts please click the sync button below.', 'ncmaz-fse-core');
    $form_like = '<form method="post" action="#">
        <input type="hidden" name="ncmaz_fse_core_1_4_async_post_like" value="yes_ok">
        <input type="submit" value="1. Sync liked posts" class="button ">
    </form>';
    if ($async_post_like_opt || empty($post_like)) {
        $form_like = '<button class="button" disabled>1. Sync liked posts</button>';
    }
    $form_save = '<form method="post" action="#">
        <input type="hidden" name="ncmaz_fse_core_1_4_async_post_save" value="yes_ok">
        <input type="submit" value="2. Sync saved posts" class="button ">
    </form>';
    if ($async_post_save_opt || empty($post_save)) {
        $form_save = '<button class="button" disabled>2. Sync saved posts</button>';
    }
    $form_view = '<form method="post" action="#">
        <input type="hidden" name="ncmaz_fse_core_1_4_async_post_view" value="yes_ok">
        <input type="submit" value="3. Sync viewed posts" class="button ">
    </form>';
    if ($async_post_view_opt || empty($post_view)) {
        $form_view = '<button class="button" disabled>3. Sync viewed posts</button>';
    }
    $form_user = '<form method="post" action="#">
        <input type="hidden" name="ncmaz_fse_core_1_4_async_user_meta" value="yes_ok">
        <input type="submit" value="4. Sync user meta" class="button action">
    </form>';
    if ($async_user_meta_opt) {
        $form_user = '<button class="button" disabled>4. Sync user meta</button>';
    }

    printf('<div class="%1$s"><p>%2$s</p><p>Please read the <a href="https://nghiaxchis.gitbook.io/ncmaz-blog-magazine-full-site-editing-wordpress/basics/changelog" target="_blank" rel="noopener noreferrer">Changelog</a> for more details.</p>
	<div style="display: flex; gap: 4px; padding-bottom: 0.5rem;">
	%3$s %4$s %5$s %6$s </div></div>', esc_attr($class), esc_html($message), $form_like, $form_save, $form_view, $form_user);
}
add_action('admin_notices', 'ncmaz_fse_core__sample_admin_notice__error');

// ==================== End sync user meta view_count/like_count/save_count when update plugin. ====================
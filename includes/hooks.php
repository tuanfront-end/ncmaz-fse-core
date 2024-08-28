<?php


// Add some post meta
function ncmaz_fse_core_register_review_rating_post_meta()
{
    $post_meta = array(
        '_rating'      => array('type' => 'integer'),
        '_ratingStyle' => array('type' => 'string'),
    );

    foreach ($post_meta as $meta_key => $args) {
        register_post_meta(
            'post',
            $meta_key,
            array(
                'description'    => 'A meta key associated with a string meta value.',
                'show_in_rest'  =>  true,
                'single'        => true,
                'type'          => $args['type'],
                'auth_callback' => function () {
                    return current_user_can('edit_posts');
                }
            )
        );
    }
}
// add_action('init', 'ncmaz_fse_core_register_review_rating_post_meta');



// Tạo 1 cookies để lưu ID người dùng hiện tại. Nếu người dùng chưa đăng nhập, sẽ lưu 1 cookie với giá trị là duy nhất uniqid
function ncmaz_fse_core_set_user_cookie()
{
    if (!is_user_logged_in()) {
        $user_id_cookie = $_COOKIE['user_id_cookie'];

        if ($user_id_cookie) {
            return;
        }

        $user_id = uniqid();
        setcookie('user_id_cookie', $user_id, time() + 60 * 60 * 24 * 14, '/');
    } else {
        // Nếu người dùng đã đăng nhập, xoá cookie user_id
        setcookie('user_id_cookie', '', time() - 3600, '/');
    }
}
// add_action('init', 'ncmaz_fse_core_set_user_cookie');

// Add meta-data post-(like, view, save) to the REST API response for posts
add_filter('rest_post_like_query', function ($args, $request) {
    $args += [
        'meta_key' => $request['meta_key'],
        'meta_value' => $request['meta_value'],
        'meta_query' => $request['meta_query'],
    ];

    return $args;
}, 99, 2);
add_filter('rest_post_save_query', function ($args, $request) {
    $args += [
        'meta_key' => $request['meta_key'],
        'meta_value' => $request['meta_value'],
        'meta_query' => $request['meta_query'],
    ];

    return $args;
}, 99, 2);
add_filter('rest_post_view_query', function ($args, $request) {
    $args += [
        'meta_key' => $request['meta_key'],
        'meta_value' => $request['meta_value'],
        'meta_query' => $request['meta_query'],
    ];

    return $args;
}, 99, 2);


// Adding a new (custom) block category and show that category at the top
add_filter('block_categories_all', 'ncmaz_fse_core_block_category', 10, 2);
function ncmaz_fse_core_block_category($categories, $post)
{
    array_unshift($categories, array(
        'slug'    => 'ncmazfse',
        'title' => 'Ncmaz'
    ));
    return $categories;
}


// Increase the view count number of posts  when the post is viewed
add_action('wp_head', function () {
    global $post;
    ncmazfse_core__update_post_view($post->ID);
});

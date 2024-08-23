<?php


// POST LIKE ACF --------------------------
add_action('init', function () {
    register_post_type('post_like', array(
        'labels' => array(
            'name' => 'Post Likes',
            'singular_name' => 'Post Like',
            'menu_name' => 'Post Likes',
            'all_items' => 'All Post Likes',
            'edit_item' => 'Edit Post Like',
            'view_item' => 'View Post Like',
            'view_items' => 'View Post Likes',
            'add_new_item' => 'Add New Post Like',
            'add_new' => 'Add New Post Like',
            'new_item' => 'New Post Like',
            'parent_item_colon' => 'Parent Post Like:',
            'search_items' => 'Search Post Likes',
            'not_found' => 'No post likes found',
            'not_found_in_trash' => 'No post likes found in Trash',
            'archives' => 'Post Like Archives',
            'attributes' => 'Post Like Attributes',
            'insert_into_item' => 'Insert into post like',
            'uploaded_to_this_item' => 'Uploaded to this post like',
            'filter_items_list' => 'Filter post likes list',
            'filter_by_date' => 'Filter post likes by date',
            'items_list_navigation' => 'Post Likes list navigation',
            'items_list' => 'Post Likes list',
            'item_published' => 'Post Like published.',
            'item_published_privately' => 'Post Like published privately.',
            'item_reverted_to_draft' => 'Post Like reverted to draft.',
            'item_scheduled' => 'Post Like scheduled.',
            'item_updated' => 'Post Like updated.',
            'item_link' => 'Post Like Link',
            'item_link_description' => 'A link to a post like.',
        ),
        'public' => true,
        'exclude_from_search' => true,
        'show_in_rest' => true,
        'menu_icon' => 'dashicons-admin-post',
        'supports' => array(
            0 => 'title',
            2 => 'excerpt',
            4 => 'custom-fields',
        ),
        'delete_with_user' => false,
    ));
});

add_action('acf/include_fields', function () {
    if (! function_exists('acf_add_local_field_group')) {
        return;
    }

    acf_add_local_field_group(array(
        'key' => 'group_66c5afd45f60d',
        'title' => 'Post Like fields',
        'fields' => array(
            array(
                'key' => 'field_66c5afd437c7f',
                'label' => 'User ID',
                'name' => 'user_id',
                'aria-label' => '',
                'type' => 'text',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'default_value' => '',
                'maxlength' => '',
                'placeholder' => '',
                'prepend' => '',
                'append' => '',
            ),
            array(
                'key' => 'field_66c5b03aea7e6',
                'label' => 'Post ID',
                'name' => 'post_id',
                'aria-label' => '',
                'type' => 'text',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'default_value' => '',
                'maxlength' => '',
                'placeholder' => '',
                'prepend' => '',
                'append' => '',
            ),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'post_like',
                ),
            ),
        ),
        'menu_order' => 0,
        'position' => 'normal',
        'style' => 'default',
        'label_placement' => 'top',
        'instruction_placement' => 'label',
        'hide_on_screen' => '',
        'active' => true,
        'description' => '',
        'show_in_rest' => 1,
    ));
});


// POST SAVE ACF --------------------------
add_action('acf/include_fields', function () {
    if (! function_exists('acf_add_local_field_group')) {
        return;
    }

    acf_add_local_field_group(array(
        'key' => 'group_66c8013d657d8',
        'title' => 'Post save fields',
        'fields' => array(
            array(
                'key' => 'field_66c8013d7b78a',
                'label' => 'Post ID',
                'name' => 'post_id',
                'aria-label' => '',
                'type' => 'text',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'default_value' => '',
                'maxlength' => '',
                'placeholder' => '',
                'prepend' => '',
                'append' => '',
            ),
            array(
                'key' => 'field_66c8014d7b78b',
                'label' => 'User ID',
                'name' => 'user_id',
                'aria-label' => '',
                'type' => 'text',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'default_value' => '',
                'maxlength' => '',
                'placeholder' => '',
                'prepend' => '',
                'append' => '',
            ),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'post_save',
                ),
            ),
        ),
        'menu_order' => 0,
        'position' => 'normal',
        'style' => 'default',
        'label_placement' => 'top',
        'instruction_placement' => 'label',
        'hide_on_screen' => '',
        'active' => true,
        'description' => '',
        'show_in_rest' => 1,
    ));
});

add_action('init', function () {
    register_post_type('post_save', array(
        'labels' => array(
            'name' => 'Post saves',
            'singular_name' => 'Post save',
            'menu_name' => 'Post save',
            'all_items' => 'All Post save',
            'edit_item' => 'Edit Post save',
            'view_item' => 'View Post save',
            'view_items' => 'View Post save',
            'add_new_item' => 'Add New Post save',
            'add_new' => 'Add New Post save',
            'new_item' => 'New Post save',
            'parent_item_colon' => 'Parent Post save:',
            'search_items' => 'Search Post save',
            'not_found' => 'No post save found',
            'not_found_in_trash' => 'No post save found in Trash',
            'archives' => 'Post save Archives',
            'attributes' => 'Post save Attributes',
            'insert_into_item' => 'Insert into post save',
            'uploaded_to_this_item' => 'Uploaded to this post save',
            'filter_items_list' => 'Filter post save list',
            'filter_by_date' => 'Filter post save by date',
            'items_list_navigation' => 'Post save list navigation',
            'items_list' => 'Post save list',
            'item_published' => 'Post save published.',
            'item_published_privately' => 'Post save published privately.',
            'item_reverted_to_draft' => 'Post save reverted to draft.',
            'item_scheduled' => 'Post save scheduled.',
            'item_updated' => 'Post save updated.',
            'item_link' => 'Post save Link',
            'item_link_description' => 'A link to a post save.',
        ),
        'public' => true,
        'show_in_rest' => true,
        'menu_icon' => 'dashicons-admin-post',
        'supports' => array(
            0 => 'title',
            2 => 'excerpt',
            4 => 'custom-fields',
        ),
        'delete_with_user' => false,
    ));
});

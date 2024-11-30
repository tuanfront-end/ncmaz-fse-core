<?php

// POST LIKE ACF --------------------------
add_action(
	'init',
	function () {
		register_post_type(
			'post_like',
			array(
				'labels'              => array(
					'name'                     => 'Post Likes',
					'singular_name'            => 'Post Like',
					'menu_name'                => 'Post Likes',
					'all_items'                => 'All Post Likes',
					'edit_item'                => 'Edit Post Like',
					'view_item'                => 'View Post Like',
					'view_items'               => 'View Post Likes',
					'add_new_item'             => 'Add New Post Like',
					'add_new'                  => 'Add New Post Like',
					'new_item'                 => 'New Post Like',
					'parent_item_colon'        => 'Parent Post Like:',
					'search_items'             => 'Search Post Likes',
					'not_found'                => 'No post likes found',
					'not_found_in_trash'       => 'No post likes found in Trash',
					'archives'                 => 'Post Like Archives',
					'attributes'               => 'Post Like Attributes',
					'insert_into_item'         => 'Insert into post like',
					'uploaded_to_this_item'    => 'Uploaded to this post like',
					'filter_items_list'        => 'Filter post likes list',
					'filter_by_date'           => 'Filter post likes by date',
					'items_list_navigation'    => 'Post Likes list navigation',
					'items_list'               => 'Post Likes list',
					'item_published'           => 'Post Like published.',
					'item_published_privately' => 'Post Like published privately.',
					'item_reverted_to_draft'   => 'Post Like reverted to draft.',
					'item_scheduled'           => 'Post Like scheduled.',
					'item_updated'             => 'Post Like updated.',
					'item_link'                => 'Post Like Link',
					'item_link_description'    => 'A link to a post like.',
				),
				'public'              => false,
				'publicly_queryable'  => true,
				'show_ui'             => false,
				'show_in_nav_menus'   => false,
				"show_in_menu" => false, // hide from menu
				'exclude_from_search' => true,
				'show_in_rest'        => true,
				'menu_icon'           => 'dashicons-admin-post',
				'supports'            => array(
					0 => 'title',
					2 => 'excerpt',
					4 => 'custom-fields',
				),
				'delete_with_user'    => false,
			)
		);
	}
);

add_action(
	'acf/include_fields',
	function () {
		if (! function_exists('acf_add_local_field_group')) {
			return;
		}

		acf_add_local_field_group(
			array(
				'key'                   => 'group_66c5afd45f60d',
				'title'                 => 'Post Like fields',
				'fields'                => array(
					array(
						'key'               => 'field_66c5afd437c7f',
						'label'             => 'User ID',
						'name'              => 'user_id',
						'aria-label'        => '',
						'type'              => 'text',
						'instructions'      => '',
						'required'          => 0,
						'conditional_logic' => 0,
						'wrapper'           => array(
							'width' => '',
							'class' => '',
							'id'    => '',
						),
						'default_value'     => '',
						'maxlength'         => '',
						'placeholder'       => '',
						'prepend'           => '',
						'append'            => '',
					),
					array(
						'key'               => 'field_66c5b03aea7e6',
						'label'             => 'Post ID',
						'name'              => 'post_id',
						'aria-label'        => '',
						'type'              => 'text',
						'instructions'      => '',
						'required'          => 0,
						'conditional_logic' => 0,
						'wrapper'           => array(
							'width' => '',
							'class' => '',
							'id'    => '',
						),
						'default_value'     => '',
						'maxlength'         => '',
						'placeholder'       => '',
						'prepend'           => '',
						'append'            => '',
					),
					array(
						'key'               => 'field_66c5b03aea7e7',
						'label'             => 'Post Type',
						'name'              => 'post_type',
						'aria-label'        => '',
						'type'              => 'text',
						'instructions'      => '',
						'required'          => 0,
						'conditional_logic' => 0,
						'wrapper'           => array(
							'width' => '',
							'class' => '',
							'id'    => '',
						),
						'default_value'     => '',
						'maxlength'         => '',
						'placeholder'       => '',
						'prepend'           => '',
						'append'            => '',
					),
				),
				'location'              => array(
					array(
						array(
							'param'    => 'post_type',
							'operator' => '==',
							'value'    => 'post_like',
						),
					),
				),
				'menu_order'            => 0,
				'position'              => 'normal',
				'style'                 => 'default',
				'label_placement'       => 'top',
				'instruction_placement' => 'label',
				'hide_on_screen'        => '',
				'active'                => true,
				'description'           => '',
				'show_in_rest'          => 1,
			)
		);
	}
);


// POST SAVE ACF --------------------------
add_action(
	'acf/include_fields',
	function () {
		if (! function_exists('acf_add_local_field_group')) {
			return;
		}

		acf_add_local_field_group(
			array(
				'key'                   => 'group_66c8013d657d8',
				'title'                 => 'Post save fields',
				'fields'                => array(
					array(
						'key'               => 'field_66c8013d7b78a',
						'label'             => 'Post ID',
						'name'              => 'post_id',
						'aria-label'        => '',
						'type'              => 'text',
						'instructions'      => '',
						'required'          => 0,
						'conditional_logic' => 0,
						'wrapper'           => array(
							'width' => '',
							'class' => '',
							'id'    => '',
						),
						'default_value'     => '',
						'maxlength'         => '',
						'placeholder'       => '',
						'prepend'           => '',
						'append'            => '',
					),
					array(
						'key'               => 'field_66c8014d7b78b',
						'label'             => 'User ID',
						'name'              => 'user_id',
						'aria-label'        => '',
						'type'              => 'text',
						'instructions'      => '',
						'required'          => 0,
						'conditional_logic' => 0,
						'wrapper'           => array(
							'width' => '',
							'class' => '',
							'id'    => '',
						),
						'default_value'     => '',
						'maxlength'         => '',
						'placeholder'       => '',
						'prepend'           => '',
						'append'            => '',
					),
					array(
						'key'               => 'field_66c8014d7b79b',
						'label'             => 'Post Type',
						'name'              => 'post_type',
						'aria-label'        => '',
						'type'              => 'text',
						'instructions'      => '',
						'required'          => 0,
						'conditional_logic' => 0,
						'wrapper'           => array(
							'width' => '',
							'class' => '',
							'id'    => '',
						),
						'default_value'     => '',
						'maxlength'         => '',
						'placeholder'       => '',
						'prepend'           => '',
						'append'            => '',
					),
				),
				'location'              => array(
					array(
						array(
							'param'    => 'post_type',
							'operator' => '==',
							'value'    => 'post_save',
						),
					),
				),
				'menu_order'            => 0,
				'position'              => 'normal',
				'style'                 => 'default',
				'label_placement'       => 'top',
				'instruction_placement' => 'label',
				'hide_on_screen'        => '',
				'active'                => true,
				'description'           => '',
				'show_in_rest'          => 1,
			)
		);
	}
);

add_action(
	'init',
	function () {
		register_post_type(
			'post_save',
			array(
				'labels'              => array(
					'name'                     => 'Post Saves',
					'singular_name'            => 'Post save',
					'menu_name'                => 'Post Saves',
					'all_items'                => 'All Post Save',
					'edit_item'                => 'Edit Post Save',
					'view_item'                => 'View Post Save',
					'view_items'               => 'View Post Save',
					'add_new_item'             => 'Add New Post Save',
					'add_new'                  => 'Add New Post Save',
					'new_item'                 => 'New Post Save',
					'parent_item_colon'        => 'Parent Post save:',
					'search_items'             => 'Search Post save',
					'not_found'                => 'No post save found',
					'not_found_in_trash'       => 'No post save found in Trash',
					'archives'                 => 'Post save Archives',
					'attributes'               => 'Post save Attributes',
					'insert_into_item'         => 'Insert into post save',
					'uploaded_to_this_item'    => 'Uploaded to this post save',
					'filter_items_list'        => 'Filter post save list',
					'filter_by_date'           => 'Filter post save by date',
					'items_list_navigation'    => 'Post save list navigation',
					'items_list'               => 'Post save list',
					'item_published'           => 'Post save published.',
					'item_published_privately' => 'Post save published privately.',
					'item_reverted_to_draft'   => 'Post save reverted to draft.',
					'item_scheduled'           => 'Post save scheduled.',
					'item_updated'             => 'Post save updated.',
					'item_link'                => 'Post save Link',
					'item_link_description'    => 'A link to a post save.',
				),
				'public'              => false,
				'publicly_queryable'  => true,
				'show_ui'             => false,
				'show_in_nav_menus'   => false,
				"show_in_menu" => false, // hide from menu
				'show_in_rest'        => true,
				'exclude_from_search' => true,
				'menu_icon'           => 'dashicons-admin-post',
				'supports'            => array(
					0 => 'title',
					2 => 'excerpt',
					4 => 'custom-fields',
				),
				'delete_with_user'    => false,
			)
		);
	}
);


// POST VIEW ACF --------------------------
add_action(
	'acf/include_fields',
	function () {
		if (! function_exists('acf_add_local_field_group')) {
			return;
		}

		acf_add_local_field_group(
			array(
				'key'                   => 'group_66cda91316295',
				'title'                 => 'Post View fields',
				'fields'                => array(
					array(
						'key'               => 'field_66cdab58f9681',
						'label'             => 'Post Id',
						'name'              => 'post_id',
						'aria-label'        => '',
						'type'              => 'text',
						'instructions'      => '',
						'required'          => 0,
						'conditional_logic' => 0,
						'wrapper'           => array(
							'width' => '',
							'class' => '',
							'id'    => '',
						),
						'default_value'     => '',
						'maxlength'         => '',
						'placeholder'       => '',
						'prepend'           => '',
						'append'            => '',
					),
					array(
						'key'               => 'field_66cda913711cd',
						'label'             => 'View Count',
						'name'              => 'view_count',
						'aria-label'        => '',
						'type'              => 'text',
						'instructions'      => '',
						'required'          => 0,
						'conditional_logic' => 0,
						'wrapper'           => array(
							'width' => '',
							'class' => '',
							'id'    => '',
						),
						'default_value'     => '',
						'maxlength'         => '',
						'placeholder'       => '',
						'prepend'           => '',
						'append'            => '',
					),
					array(
						'key'               => 'field_66cda913712cd',
						'label'             => 'Post Type',
						'name'              => 'post_type',
						'aria-label'        => '',
						'type'              => 'text',
						'instructions'      => '',
						'required'          => 0,
						'conditional_logic' => 0,
						'wrapper'           => array(
							'width' => '',
							'class' => '',
							'id'    => '',
						),
						'default_value'     => '',
						'maxlength'         => '',
						'placeholder'       => '',
						'prepend'           => '',
						'append'            => '',
					),
				),
				'location'              => array(
					array(
						array(
							'param'    => 'post_type',
							'operator' => '==',
							'value'    => 'post_view',
						),
					),
				),
				'menu_order'            => 0,
				'position'              => 'normal',
				'style'                 => 'default',
				'label_placement'       => 'top',
				'instruction_placement' => 'label',
				'hide_on_screen'        => '',
				'active'                => true,
				'description'           => '',
				'show_in_rest'          => 1,
			)
		);
	}
);

add_action(
	'init',
	function () {
		register_post_type(
			'post_view',
			array(
				'labels'              => array(
					'name'                     => 'Post Views',
					'singular_name'            => 'Post View',
					'menu_name'                => 'Post Views',
					'all_items'                => 'All Post Views',
					'edit_item'                => 'Edit Post View',
					'view_item'                => 'View Post View',
					'view_items'               => 'View Post Views',
					'add_new_item'             => 'Add New Post View',
					'add_new'                  => 'Add New Post View',
					'new_item'                 => 'New Post View',
					'parent_item_colon'        => 'Parent Post View:',
					'search_items'             => 'Search Post Views',
					'not_found'                => 'No post views found',
					'not_found_in_trash'       => 'No post views found in Trash',
					'archives'                 => 'Post View Archives',
					'attributes'               => 'Post View Attributes',
					'insert_into_item'         => 'Insert into post view',
					'uploaded_to_this_item'    => 'Uploaded to this post view',
					'filter_items_list'        => 'Filter post views list',
					'filter_by_date'           => 'Filter post views by date',
					'items_list_navigation'    => 'Post Views list navigation',
					'items_list'               => 'Post Views list',
					'item_published'           => 'Post View published.',
					'item_published_privately' => 'Post View published privately.',
					'item_reverted_to_draft'   => 'Post View reverted to draft.',
					'item_scheduled'           => 'Post View scheduled.',
					'item_updated'             => 'Post View updated.',
					'item_link'                => 'Post View Link',
					'item_link_description'    => 'A link to a post view.',
				),
				'public'              => false,
				'publicly_queryable'  => true,
				'show_ui'             => false,
				'show_in_nav_menus'   => false,
				"show_in_menu" => false, // hide from menu
				'exclude_from_search' => true,
				'show_in_rest'        => true,
				'menu_icon'           => 'dashicons-admin-post',
				'supports'            => array(
					0 => 'title',
					1 => 'custom-fields',
				),
				'delete_with_user'    => false,
			)
		);
	}
);


// TAXONOMY FIELDS --------------------------
add_action('acf/include_fields', function () {
	if (! function_exists('acf_add_local_field_group')) {
		return;
	}

	acf_add_local_field_group(array(
		'key' => 'group_66d97cc798252',
		'title' => 'Taxanomy fields',
		'fields' => array(
			array(
				'key' => 'field_66d97cc7ea3e9',
				'label' => 'Featured Image',
				'name' => 'featured_image',
				'aria-label' => '',
				'type' => 'image',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'return_format' => 'id',
				'library' => 'all',
				'min_width' => '',
				'min_height' => '',
				'min_size' => '',
				'max_width' => '',
				'max_height' => '',
				'max_size' => '',
				'mime_types' => '',
				'preview_size' => 'medium',
			),

		),
		'location' => array(
			array(
				array(
					'param' => 'taxonomy',
					'operator' => '==',
					'value' => 'all',
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


// POST AUDIO/VIDEO FIELDS --------------------------
add_action('acf/include_fields', function () {
	if (! function_exists('acf_add_local_field_group')) {
		return;
	}

	acf_add_local_field_group(array(
		'key' => 'group_67185ab0364bd',
		'title' => 'Post Audio fields',
		'fields' => array(
			array(
				'key' => 'field_67185ab06e576',
				'label' => 'Media type',
				'name' => 'media_type',
				'aria-label' => '',
				'type' => 'button_group',
				'instructions' => 'HTML: Offering more different sources for the media; this allows the media to be loaded regardless of which media codecs are supported by the browser. IFRAME: You can enter URLs from 3rd parties and they will be embedded.',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'choices' => array(
					'html' => 'HTML(Mp3, Mp4, WebM,...)',
					'iframe' => 'Iframe(Youtube, Vimeo, SoundCloud,...)',
				),
				'default_value' => 'html',
				'return_format' => 'value',
				'allow_null' => 0,
				'allow_in_bindings' => 1,
				'layout' => 'horizontal',
			),
			array(
				'key' => 'field_67185af36e577',
				'label' => 'Audio URL Iframe',
				'name' => 'audio_url_iframe',
				'aria-label' => '',
				'type' => 'url',
				'instructions' => 'Enter the URL to embed.',
				'required' => 0,
				'conditional_logic' => array(
					array(
						array(
							'field' => 'field_67185ab06e576',
							'operator' => '==',
							'value' => 'iframe',
						),
					),
				),
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'default_value' => '',
				'allow_in_bindings' => 1,
				'placeholder' => 'Youtube url, Vimeo url, SoundCloud url,...',
			),
			array(
				'key' => 'field_67185b786e578',
				'label' => 'Audio URL .MP3',
				'name' => 'audio_url_mp3',
				'aria-label' => '',
				'type' => 'url',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => array(
					array(
						array(
							'field' => 'field_67185ab06e576',
							'operator' => '==',
							'value' => 'html',
						),
					),
				),
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'default_value' => '',
				'allow_in_bindings' => 1,
				'placeholder' => 'https://your_audio_url.mp3',
			),
			array(
				'key' => 'field_67185beb6e57a',
				'label' => 'Audio URL .WebM',
				'name' => 'audio_url_webm',
				'aria-label' => '',
				'type' => 'url',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => array(
					array(
						array(
							'field' => 'field_67185ab06e576',
							'operator' => '==',
							'value' => 'html',
						),
					),
				),
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'default_value' => '',
				'allow_in_bindings' => 1,
				'placeholder' => 'https://your_audio_url.webm',
			),
			array(
				'key' => 'field_67185bae6e579',
				'label' => 'Audio URL .OGG',
				'name' => 'audio_url_ogg',
				'aria-label' => '',
				'type' => 'url',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => array(
					array(
						array(
							'field' => 'field_67185ab06e576',
							'operator' => '==',
							'value' => 'html',
						),
					),
				),
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'default_value' => '',
				'allow_in_bindings' => 1,
				'placeholder' => 'https://your_audio_url.ogg',
			),
			array(
				'key' => 'field_67185c326e57b',
				'label' => 'Audio URL .AAC',
				'name' => 'audio_url_aac',
				'aria-label' => '',
				'type' => 'url',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => array(
					array(
						array(
							'field' => 'field_67185ab06e576',
							'operator' => '==',
							'value' => 'html',
						),
					),
				),
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'default_value' => '',
				'allow_in_bindings' => 1,
				'placeholder' => 'https://your_audio_url.aac',
			),
			array(
				'key' => 'field_67185c6f6e57c',
				'label' => 'Audio URL .WAV',
				'name' => 'audio_url_wav',
				'aria-label' => '',
				'type' => 'url',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => array(
					array(
						array(
							'field' => 'field_67185ab06e576',
							'operator' => '==',
							'value' => 'html',
						),
					),
				),
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'default_value' => '',
				'allow_in_bindings' => 1,
				'placeholder' => 'https://your_audio_url.wav',
			),
		),
		'location' => array(
			array(
				array(
					'param' => 'post_format',
					'operator' => '==',
					'value' => 'audio',
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
		'show_in_rest' => 0,
	));

	acf_add_local_field_group(array(
		'key' => 'group_6718536e11790',
		'title' => 'Post Video fields',
		'fields' => array(
			array(
				'key' => 'field_6718536ec8031',
				'label' => 'Media type',
				'name' => 'media_type',
				'aria-label' => '',
				'type' => 'button_group',
				'instructions' => 'HTML: Offering more different sources for the media; this allows the video to be watched regardless of which video codecs are supported by the browser. IFRAME: You can enter URLs from 3rd parties and they will be embedded.',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'choices' => array(
					'html' => 'HTML(Mp3, Mp4, WebM,...)',
					'iframe' => 'Iframe(Youtube, Vimeo, SoundCloud,...)',
				),
				'default_value' => 'html',
				'return_format' => 'value',
				'allow_null' => 0,
				'allow_in_bindings' => 1,
				'layout' => 'horizontal',
			),
			array(
				'key' => 'field_6718558f5c711',
				'label' => 'Video URL Iframe',
				'name' => 'video_url_iframe',
				'aria-label' => '',
				'type' => 'url',
				'instructions' => 'Enter the URL to embed.',
				'required' => 0,
				'conditional_logic' => array(
					array(
						array(
							'field' => 'field_6718536ec8031',
							'operator' => '==',
							'value' => 'iframe',
						),
					),
				),
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'default_value' => '',
				'allow_in_bindings' => 1,
				'placeholder' => 'Youtube url, Vimeo url, SoundCloud url,...',
			),
			array(
				'key' => 'field_671857d0a7e80',
				'label' => 'Video URL .MP4',
				'name' => 'video_url_mp4',
				'aria-label' => '',
				'type' => 'url',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => array(
					array(
						array(
							'field' => 'field_6718536ec8031',
							'operator' => '==',
							'value' => 'html',
						),
					),
				),
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'default_value' => '',
				'allow_in_bindings' => 1,
				'placeholder' => 'https://your_video_url.mp4',
			),
			array(
				'key' => 'field_6718583ea7e81',
				'label' => 'Video URL .WebM',
				'name' => 'video_url_webm',
				'aria-label' => '',
				'type' => 'url',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => array(
					array(
						array(
							'field' => 'field_6718536ec8031',
							'operator' => '==',
							'value' => 'html',
						),
					),
				),
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'default_value' => '',
				'allow_in_bindings' => 1,
				'placeholder' => 'https://your_video_url.webm',
			),
			array(
				'key' => 'field_6718585ca7e82',
				'label' => 'Video URL .ogv',
				'name' => 'video_url_ogv',
				'aria-label' => '',
				'type' => 'url',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => array(
					array(
						array(
							'field' => 'field_6718536ec8031',
							'operator' => '==',
							'value' => 'html',
						),
					),
				),
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'default_value' => '',
				'allow_in_bindings' => 1,
				'placeholder' => 'https://your_video_url.ogv',
			),
		),
		'location' => array(
			array(
				array(
					'param' => 'post_format',
					'operator' => '==',
					'value' => 'video',
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



//  USER FIELDS --------------------------
add_action('acf/include_fields', function () {
	if (! function_exists('acf_add_local_field_group')) {
		return;
	}

	acf_add_local_field_group(array(
		'key' => 'group_6746dfa35ad8af',
		'title' => 'User reaction fields',
		'fields' => array(
			array(
				'key' => 'field_6746dfa31c7da2',
				'label' => 'Liked posts',
				'name' => 'liked_posts',
				'aria-label' => '',
				'type' => 'textarea',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '0',
					'class' => 'hidden acf-hidden',
					'id' => '',
				),
				'default_value' => '',
				'maxlength' => '',
				'allow_in_bindings' => 1,
				'rows' => '',
				'placeholder' => '',
				'new_lines' => '',
				'show_in_graphql' => 1,
				'graphql_description' => '',
				'graphql_field_name' => 'likedPosts',
				'graphql_non_null' => 0,
			),
			array(
				'key' => 'field_6746ed0961c7a3',
				'label' => 'Saved posts',
				'name' => 'saved_posts',
				'aria-label' => '',
				'type' => 'textarea',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '0',
					'class' => 'hidden acf-hidden',
					'id' => '',
				),
				'default_value' => '',
				'maxlength' => '',
				'allow_in_bindings' => 1,
				'rows' => '',
				'placeholder' => '',
				'new_lines' => '',
				'show_in_graphql' => 1,
				'graphql_description' => '',
				'graphql_field_name' => 'savedPosts',
				'graphql_non_null' => 0,
			),
			array(
				'key' => 'field_6746e0db31c7a4',
				'label' => 'Viewed posts',
				'name' => 'viewed_posts',
				'aria-label' => '',
				'type' => 'textarea',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '0',
					'class' => 'hidden acf-hidden',
					'id' => '',
				),
				'default_value' => '',
				'maxlength' => '',
				'allow_in_bindings' => 1,
				'rows' => '',
				'placeholder' => '',
				'new_lines' => '',
				'show_in_graphql' => 1,
				'graphql_description' => '',
				'graphql_field_name' => 'viewedPosts',
				'graphql_non_null' => 0,
			),

		),
		'location' => array(
			array(
				array(
					'param' => 'user_role',
					'operator' => '==',
					'value' => 'all',
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
		'show_in_graphql' => 1,
		'graphql_field_name' => 'userReactionFields',
		'map_graphql_types_from_location_rules' => 0,
		'graphql_types' => '',
	));
});


//  POST REACTION FIELDS --------------------------
add_action('acf/include_fields', function () {
	if (! function_exists('acf_add_local_field_group')) {
		return;
	}

	acf_add_local_field_group(array(
		'key' => 'group_674acacfb4fd0',
		'title' => 'Post Reaction fields',
		'fields' => array(
			array(
				'key' => 'field_674acacf6f820',
				'label' => 'Like count',
				'name' => 'like_count',
				'aria-label' => '',
				'type' => 'number',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'default_value' => 0,
				'min' => '',
				'max' => '',
				'allow_in_bindings' => 1,
				'placeholder' => '',
				'step' => '',
				'prepend' => '',
				'append' => '',
			),
			array(
				'key' => 'field_674acb086f821',
				'label' => 'Save count',
				'name' => 'save_count',
				'aria-label' => '',
				'type' => 'number',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'default_value' => 0,
				'min' => '',
				'max' => '',
				'allow_in_bindings' => 1,
				'placeholder' => '',
				'step' => '',
				'prepend' => '',
				'append' => '',
			),
			array(
				'key' => 'field_674acb306f822',
				'label' => 'View count',
				'name' => 'view_count',
				'aria-label' => '',
				'type' => 'number',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'default_value' => 0,
				'min' => '',
				'max' => '',
				'allow_in_bindings' => 1,
				'placeholder' => '',
				'step' => '',
				'prepend' => '',
				'append' => '',
			),
		),
		'location' => array(
			array(
				array(
					'param' => 'post_status',
					'operator' => '!=',
					'value' => 'spam',
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
		'description' => 'For all custom post type',
		'show_in_rest' => 1,
	));
});

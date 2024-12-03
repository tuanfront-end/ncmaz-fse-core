<?php

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

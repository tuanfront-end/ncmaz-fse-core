<?php

static $block_id = 0;
++$block_id;

$args = array(
	'echo'         => false,
	'hierarchical' => ! empty($attributes['showHierarchy']),
	'orderby'      => 'name',
	'show_count'   => ! empty($attributes['showPostCounts']),
	'title_li'     => '',
	'hide_empty'   => empty($attributes['showEmpty']),
);
if (! empty($attributes['showOnlyTopLevel']) && $attributes['showOnlyTopLevel']) {
	$args['parent'] = 0;
}

if (! empty($attributes['displayAsDropdown'])) {
	$id                       = 'wp-block-categories-' . $block_id;
	$args['id']               = $id;
	$args['show_option_none'] = __('Select Category');
	$show_label               = empty($attributes['showLabel']) ? ' screen-reader-text' : '';
	$default_label            = __('Categories');
	$label_text               = ! empty($attributes['label']) ? $attributes['label'] : $default_label;
	$wrapper_markup           = '<div %1$s><label class="wp-block-categories__label' . $show_label . '" for="' . esc_attr($id) . '">' . $label_text . '</label>%2$s</div>';
	$items_markup             = wp_dropdown_categories($args);
	$type                     = 'dropdown';

	if (! is_admin()) {
		// Inject the dropdown script immediately after the select dropdown.
		$items_markup = preg_replace(
			'#(?<=</select>)#',
			build_dropdown_script_block_core_categories($id),
			$items_markup,
			1
		);
	}
} else {
	$wrapper_markup = '<ul %1$s>%2$s</ul>';
	$items_markup   = wp_list_categories($args);
	$type           = 'list';
}

$wrapper_attributes = get_block_wrapper_attributes(array('class' => "wp-block-categories-{$type}"));

return sprintf(
	$wrapper_markup,
	$wrapper_attributes,
	$items_markup
);

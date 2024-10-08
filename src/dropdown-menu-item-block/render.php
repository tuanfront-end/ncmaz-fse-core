<?php
$classes = array();
if (isset($attributes['textAlign'])) {
	$classes[] = 'has-text-align-' . $attributes['textAlign'];
}
if (isset($attributes['style']['elements']['link']['color']['text'])) {
	$classes[] = 'has-link-color';
}

$tag = 'div';
$atts = array(
	'class' => implode(' ', $classes),
	'tabindex' => '0',
);


if (!empty($attributes['href'] ?? "")) {
	$tag = 'a';
	$atts['href'] = $attributes['href'];
	$atts['target'] = $attributes['linkTarget'] ?? '_self';
	$href_query = wp_parse_url($atts['href'], PHP_URL_QUERY) ?? '';

	// if linkWithCurrentSearch is true, merge the current search params with the href
	if ($attributes['linkWithCurrentSearch'] ?? false) {
		$href_params =  [];
		parse_str($href_query, $href_params);

		// Sanitize $_GET data
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		$sanitized_get = array_map('sanitize_text_field', $_GET);
		$atts['href'] = add_query_arg(array_merge($sanitized_get, $href_params), $atts['href']);
	}

	// check href include the text {CURRENT_URL} or not, if yes, replace it with the current url
	if (strpos($atts['href'], '{CURRENT_URL}') !== false) {
		$REQUEST_URI = sanitize_text_field(wp_unslash($_SERVER['REQUEST_URI'] ?? ''));
		$atts['href'] = str_replace(
			'{CURRENT_URL}',
			home_url($REQUEST_URI),
			$atts['href']
		);
	}

	// check Menu type from block-Context
	if (($block->context['menuType'] ?? "") !== 'popover') {
		// --- KIEM TRA XEM ITEM CO ACTIVE HAY KHONG
		$is_active = ncmfse_core_check_href_is_active_with_current_url($atts['href']);
		if ($is_active) {
			$atts['class'] = $atts['class'] . ' is-active';
		}
	}
} else {
	$atts['role'] = 'button';
}

?>

<<?php echo wp_kses_post($tag); ?>
	<?php echo wp_kses_data(get_block_wrapper_attributes($atts)); ?>
	data-wp-interactive="ncmfse/dropdown-menu"
	data-wp-on--click="actions.toggleMenuOnClick">
	<?php // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	echo $content; ?>
</<?php echo wp_kses_post($tag); ?>>
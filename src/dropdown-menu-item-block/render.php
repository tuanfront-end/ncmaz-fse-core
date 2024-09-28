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
	$href_query = parse_url($atts['href'], PHP_URL_QUERY) ?? '';

	// if linkWithCurrentSearch is true, merge the current search params with the href
	if ($attributes['linkWithCurrentSearch'] ?? false) {
		$href_params =  [];
		parse_str($href_query, $href_params);
		$merged_params =  array_merge($_GET, $href_params);
		$atts['href'] = add_query_arg($merged_params, $atts['href']);
	}

	// --- KIEM TRA XEM ITEM CO ACTIVE HAY KHONG

	// Again with new href
	$href_query = parse_url($atts['href'], PHP_URL_QUERY) ?? '';
	$href_path = parse_url($atts['href'], PHP_URL_PATH) ?? '';
	$href_host = parse_url($atts['href'], PHP_URL_HOST) ?? false;

	// truong hop href la 1 external link, thi bo qua
	// truong hop href la 1 internal link, thi kiem tra xem href co cung host voi server hay khong
	if (!$href_host || $href_host === $_SERVER['HTTP_HOST']) {
		// [---TẠI SAO KHÔNG KIỂM TRA $atts['href'] LUÔN TỪ ĐÂY -> VÌ NGƯỜI DÙNG CÓ THỂ NHẬP $atts['href'] CÓ THỂ FULL-URL HOẶC CHỈ LÀ PATH HOẶC QUERY STRING---]

		// truong hop href bao gom path, thi phai so sanh path cua href va path cua server
		if ($href_path && $href_path !== '/') {
			// remove / at the end of href
			$href_path_trimed = rtrim($href_path, '/');
			$server_path_trimed = rtrim(str_replace('?' . $_SERVER['QUERY_STRING'], "", $_SERVER['REQUEST_URI']), '/');

			// check same query string or not
			if ($href_path_trimed === $server_path_trimed && $href_query === $_SERVER['QUERY_STRING']) {
				$atts['class'] = $atts['class'] . ' is-active';
			}
		} else {
			// truong hop href chi la query string, thi phai so sanh query string cua href va query string cua server
			if ($href_query === $_SERVER['QUERY_STRING']) {
				$atts['class'] = $atts['class'] . ' is-active';
			}
		}
	}
} else {
	$atts['role'] = 'button';
}

?>

<<?php echo $tag; ?>
	<?php echo wp_kses_data(get_block_wrapper_attributes($atts)); ?>
	data-wp-interactive="ncmfse/dropdown-menu"
	data-wp-on--click="actions.toggleMenuOnClick">
	<?php echo $content; ?>
</<?php echo $tag; ?>>
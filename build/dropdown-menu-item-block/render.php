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
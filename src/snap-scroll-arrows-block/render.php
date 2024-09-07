<?php
global $post;
$queryId = $block->context["ncmazfse_termQueryId"] ?? $block->context["queryId"] ?? "";


my_var_export($attributes);

wp_interactivity_state(
	'ncmfse/snap-scroll-arrows',
	array(),
);

// Get the block attributes colors.
$colorCssVars = [
	"--active-color" => ($attributes["activeColor"] ?? null)
		? 'var( --wp--preset--color--' . $attributes["activeColor"] . ' )'
		: $attributes["customActiveColor"] ?? null,
	"--active-background-color" => ($attributes['activeBgColor'] ?? null)
		? 'var( --wp--preset--color--' . $attributes['activeBgColor'] . ' )'
		: $attributes['customActiveBgColor'] ?? null,
	"--active-border-color" => ($attributes['activeBorderColor'] ?? null)
		? 'var( --wp--preset--color--' . $attributes['activeBorderColor'] . ' )'
		: $attributes['customActiveBorderColor'] ?? null,
	"--active-icon-background-color" => ($attributes['activeIconBgColor'] ?? null)
		? 'var( --wp--preset--color--' . $attributes['activeIconBgColor'] . ' )'
		: $attributes['customActiveIconBgColor'] ?? null,
];
// convert the colorCssVars array to style string.
$colorStyle = '';
foreach ($colorCssVars as $key => $value) {
	$colorStyle .= $key . ':' . $value . ';';
};
?>

<div
	<?php echo get_block_wrapper_attributes([
		'class' => '',
		'style' => $colorStyle,
	]); ?>

	data-wp-interactive="ncmfse/snap-scroll-arrows"
	<?php echo wp_interactivity_data_wp_context([
		"queryId" => $queryId,
	]); ?>
	data-wp-init="callbacks.handleInit">

	<?php echo $content; ?>

</div>
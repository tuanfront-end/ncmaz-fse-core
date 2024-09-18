<?php
global $post;
$queryId = $block->context["ncmazfse_termQueryId"] ?? $block->context["queryId"] ?? "";
wp_interactivity_state(
	'ncmfse/snap-scroll-arrows',
	array(),
);
?>

<div
	<?php echo wp_kses_data(get_block_wrapper_attributes([
		'class' => !isset($attributes['style']['spacing']['blockGap']) ? 'gap-2' : ''
	])); ?>
	data-wp-interactive="ncmfse/snap-scroll-arrows"
	<?php echo wp_kses_data(wp_interactivity_data_wp_context([
		"queryId" => $queryId,
	])); ?>
	data-wp-init="callbacks.handleInit">

	<?php echo ($content); ?>

</div>
<?php
$queryId = $block->context["ncmazfse_termQueryId"] ?? $block->context["queryId"] ?? "";
?>

<a role="button" tabindex="0"
	<?php echo wp_kses_data(get_block_wrapper_attributes([
		'class' => '',
		'data-ncmfse-snap-scroll-arrow-previous' => $queryId,
	])); ?>
	data-wp-interactive="ncmfse/snap-scroll-arrow-previous"
	<?php echo wp_kses_data(wp_interactivity_data_wp_context([
		"queryId" => $queryId,
	])); ?>
	data-wp-on--click="actions.handleClick">

	<?php // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	echo $content; ?>

</a>
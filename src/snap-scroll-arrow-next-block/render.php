<?php

/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
$queryId = $block->context["ncmazfse_termQueryId"] ?? $block->context["queryId"] ?? "";
?>

<a role="button" tabindex="0"
	<?php echo wp_kses_data(get_block_wrapper_attributes([
		'class' => '',
		'data-ncmfse-snap-scroll-arrow-next' => $queryId,
	])); ?>
	data-wp-interactive="ncmfse/snap-scroll-arrow-next"
	<?php echo wp_kses_data(wp_interactivity_data_wp_context([
		"queryId" => $queryId,
	])); ?>
	data-wp-on--click="actions.handleClick">
	<?php // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	echo $content; ?>
</a>
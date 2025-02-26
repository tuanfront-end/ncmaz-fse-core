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

// Set the interactivity state.
wp_interactivity_state(
	'ncmfse/init-demo',
	[]
);
?>

<div
	<?php echo wp_kses_data(get_block_wrapper_attributes([])); ?>
	data-wp-interactive="ncmfse/init-demo"
	<?php echo wp_kses_data(wp_interactivity_data_wp_context([])); ?>
	data-wp-init="callbacks.logHandleInit">

	<?php // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	echo $content; ?>

</div>
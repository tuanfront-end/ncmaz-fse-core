<?php
?>

<div
	<?php echo wp_kses_data(get_block_wrapper_attributes()); ?>
	data-wp-interactive="ncmfse/dropdown-menu"
	<?php echo wp_kses_data(wp_interactivity_data_wp_context([
		"menuOpenedBy" => [],
	])); ?>

	data-wp-on--focusout="actions.handleMenuFocusout"
	data-wp-on--keydown="actions.handleMenuKeydown"
	data-wp-watch="callbacks.onWatchMenu"
	data-wp-class--is-selected="state.isMenuOpen">

	<?php // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	echo $content; ?>
</div>
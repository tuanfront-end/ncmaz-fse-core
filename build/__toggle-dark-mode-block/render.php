<?php

// Set the interactivity state.
wp_interactivity_state(
	'ncmfse/toggle-dark-mode',
	[]
);
?>

<div
	<?php echo wp_kses_data(get_block_wrapper_attributes([])); ?>
	data-wp-interactive="ncmfse/toggle-dark-mode"
	<?php echo wp_kses_data(wp_interactivity_data_wp_context([])); ?>
	data-wp-init="callbacks.handleInit"
	data-wp-on--click="actions.handleDarkModeToggle">

	<?php // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	echo $content; ?>

	Dark mode

</div>
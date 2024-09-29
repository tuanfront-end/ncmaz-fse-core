<?php
// Set the interactivity state.
wp_interactivity_state(
	'ncmfse/reading-progress',
	[
		'progressText' => "999%",
	]
);
?>

<div
	<?php echo wp_kses_data(get_block_wrapper_attributes([])); ?>
	data-wp-interactive="ncmfse/reading-progress"
	<?php echo wp_kses_data(wp_interactivity_data_wp_context([])); ?>
	data-wp-init="callbacks.handleInit">
	<span class="wp-block-ncmfse-reading-progress__number"
		data-wp-text="state.progressText"></span>
</div>
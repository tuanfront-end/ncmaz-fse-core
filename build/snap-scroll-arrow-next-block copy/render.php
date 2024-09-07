<?php ?>

<button type="button"
	<?php echo get_block_wrapper_attributes([
		'class' => '',
		'data-ncmfse-snap-scroll-arrow-next' => $queryId,
	]); ?>
	data-wp-interactive="ncmfse/snap-scroll-arrows"
	<?php echo wp_interactivity_data_wp_context([
		"queryId" => $queryId,
	]); ?>
	data-wp-on--click="actions.handleClick">

	<?php echo $content; ?>

</button>
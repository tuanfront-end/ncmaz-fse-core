<?php
?>

<div
	<?php echo wp_kses_data(get_block_wrapper_attributes()); ?>
	data-wp-interactive="ncmfse/dropdown-menu"
	data-wp-on--click="actions.toggleMenuOnClick"
	tabindex="0"
	role="button">
	<?php echo $content; ?>
</div>
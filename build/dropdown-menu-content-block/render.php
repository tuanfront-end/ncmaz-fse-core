<?php
?>

<div
	<?php echo wp_kses_data(get_block_wrapper_attributes()); ?>
	data-wp-interactive="ncmfse/dropdown-menu"
	data-wp-on-async--focus="actions.openMenuOnFocus"
	tabindex="-1">
	<?php echo $content; ?>
</div>
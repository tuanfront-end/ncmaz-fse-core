<?php

/**
 * Dropdown Menu Content Block
 *
 * @package NCMaz_FSE
 */
$min_width = empty($attributes['minWidth']) ? '180px' : $attributes['minWidth'];
?>

<div
	<?php echo wp_kses_data(get_block_wrapper_attributes([
		'style' => "min-width: {$min_width};",
	])); ?>
	data-wp-interactive="ncmfse/dropdown-menu"
	data-wp-on-async--focus="actions.openMenuOnFocus"
	tabindex="-1">
	<?php // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	echo $content; ?>
</div>
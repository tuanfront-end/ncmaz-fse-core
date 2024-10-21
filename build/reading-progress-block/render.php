<?php
// Set the interactivity state.
wp_interactivity_state(
	'ncmfse/reading-progress',
	[]
);
?>

<a
	<?php echo wp_kses_data(get_block_wrapper_attributes([
		"role" => "button",
		"tabindex" => "0",
	])); ?>
	data-wp-interactive="ncmfse/reading-progress"
	<?php echo wp_kses_data(wp_interactivity_data_wp_context([
		'progressText' => '0%',
		'isShowScrollToTop' => false,
		'selector' => $attributes['selector'],
	])); ?>
	data-wp-init="callbacks.handleInit"
	data-wp-on--click="actions.handleScrollToTop">

	<span class="wp-block-ncmfse-reading-progress__number"
		data-wp-bind--hidden="context.isShowScrollToTop"
		data-wp-class--hidden="context.isShowScrollToTop"
		data-wp-text="context.progressText"></span>

	<span
		class="wp-block-ncmfse-reading-progress__totopicon" data-wp-class--hidden="!context.isShowScrollToTop" data-wp-bind--hidden="!context.isShowScrollToTop">
		<svg
			xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none">
			<path d="M12 4L12 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M16.9998 8.99996C16.9998 8.99996 13.3174 4.00001 11.9998 4C10.6822 3.99999 6.99982 9 6.99982 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
	</span>

</a>
<?php
?>


<!-- data-wp-on--focusout="actions.handleMenuFocusout"
	data-wp-on--keydown="actions.handleMenuKeydown"
	data-wp-watch="callbacks.onWatchMenu" -->

<div
	<?php echo wp_kses_data(get_block_wrapper_attributes()); ?>

	<?php echo wp_kses_data(wp_interactivity_data_wp_context([])); ?>

	data-wp-class--is-selected="state.isMenuOpen">

	<?php echo $content; ?>
	<!-- <button
		class="ncmfse-current-user-avatar__button"
		data-wp-on--click="actions.toggleMenuOnClick"
		data-wp-bind--aria-expanded="state.isMenuOpen">
		Trigger
	</button> -->


</div>
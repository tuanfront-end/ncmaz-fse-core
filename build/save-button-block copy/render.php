<?php
global $post;

// Generate unique id for aria-controls.
$unique_id = wp_unique_id('p-');
$current_post_id = get_the_ID();
$user_id = get_current_user_id();

// Set the interactivity state.
wp_interactivity_state(
	'ncmazfse-core',
	[
		'ajaxUrl' => admin_url('admin-ajax.php'),
		'saveButtonNonce'   => wp_create_nonce('save_button_nonce'),
		"userId" => $user_id,
	]
);

// Get the post likes.
$postSavesCount = ncmazfse_core__get_post_save_count($current_post_id);
$isSaved = ncmazfse_core__check_user_save($current_post_id, $user_id);
?>


<div
	<?php echo get_block_wrapper_attributes(); ?>
	data-wp-interactive="ncmazfse-core"
	<?php echo wp_interactivity_data_wp_context([
		"postId" => get_the_ID(),
		"isSaved" => $isSaved,
		"postSavesCount" => $postSavesCount,
		"loading" => false,
	]); ?>
	data-wp-init="callbacks.logHandleSaveInit">
	<div
		data-wp-on--click="actions.handleSave"
		data-wp-class--is-saved="context.isSaved"
		data-wp-class--is-loading="context.loading"
		data-wp-bind--disabled="context.loading"
		class="nc-post-save-button">

		<div class="nc-post-save-button__icon">
			<?php if ($attributes['iconStyle'] === 'bookmarkIcon1'): ?>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none">
					<path d="M4 17.9808V9.70753C4 6.07416 4 4.25748 5.17157 3.12874C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.12874C20 4.25748 20 6.07416 20 9.70753V17.9808C20 20.2867 20 21.4396 19.2272 21.8523C17.7305 22.6514 14.9232 19.9852 13.59 19.1824C12.8168 18.7168 12.4302 18.484 12 18.484C11.5698 18.484 11.1832 18.7168 10.41 19.1824C9.0768 19.9852 6.26947 22.6514 4.77285 21.8523C4 21.4396 4 20.2867 4 17.9808Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			<?php endif; ?>

			<?php if ($attributes['iconStyle'] === 'bookmarkIcon2'): ?>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none">
					<path d="M3 17.9808V12.7075C3 9.07416 3 7.25748 4.09835 6.12874C5.1967 5 6.96447 5 10.5 5C14.0355 5 15.8033 5 16.9017 6.12874C18 7.25748 18 9.07416 18 12.7075V17.9808C18 20.2867 18 21.4396 17.2755 21.8523C15.8724 22.6514 13.2405 19.9852 11.9906 19.1824C11.2657 18.7168 10.9033 18.484 10.5 18.484C10.0967 18.484 9.73425 18.7168 9.00938 19.1824C7.7595 19.9852 5.12763 22.6514 3.72454 21.8523C3 21.4396 3 20.2867 3 17.9808Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M9 2H11C15.714 2 18.0711 2 19.5355 3.46447C21 4.92893 21 7.28595 21 12V18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			<?php endif; ?>


		</div>

		<span class="nc-post-save-button__count" data-wp-text="context.postSavesCount"></span>
	</div>

</div>
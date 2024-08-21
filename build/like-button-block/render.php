<?php
global $post;

// Generate unique id for aria-controls.
$_nonce = wp_create_nonce('like_button_nonce');
$unique_id = wp_unique_id('p-');
$current_post_id = get_the_ID();
$user_id = get_current_user_id();
if (!$user_id) {
	// Get user_id_cookie
	$user_id =  $_COOKIE['user_id_cookie'];
}

// Set the interactivity state.
wp_interactivity_state(
	'ncmazfse-core',
	[
		'ajaxUrl' => admin_url('admin-ajax.php'),
		'nonce'   => $_nonce,
		"userId" => $user_id,
	]
);

// Get the post likes.
$postLikesCount = ncmazfse_core__get_post_likes_count($current_post_id);
$isLiked = ncmazfse_core__check_user_like($current_post_id, $user_id);
?>


<div
	<?php echo get_block_wrapper_attributes(); ?>
	data-wp-interactive="ncmazfse-core"
	<?php echo wp_interactivity_data_wp_context([
		"postId" => get_the_ID(),
		"isLiked" => $isLiked,
		"postLikesCount" => $postLikesCount,
		"loading" => false,
	]); ?>
	data-wp-watch="callbacks.logHandleLike">

	<?php echo $user_id; ?>

	<button
		data-wp-on--click="actions.handleLike"
		data-wp-class--is-liked="context.isLiked"
		class="nc-post-like-button">

		<span>
			<svg xmlns="http://www.w3.org/2000/svg" style="width: 20px; height: 20px;" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none">
				<path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
			</svg>
		</span>

		<span data-wp-text="context.postLikesCount"></span>

	</button>

</div>
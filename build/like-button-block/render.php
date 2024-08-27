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
		'likeButtonNonce'   => wp_create_nonce('like_button_nonce'),
		"userId" => $user_id,
	]
);

// Get the post likes.
$postLikesCount = ncmazfse_core__get_post_likes_count($current_post_id);
$isLiked = ncmazfse_core__check_user_like($current_post_id, $user_id);

// Get the block attributes colors.
$colorCssVars = [
	"--active-color" => ($attributes["activeColor"] ?? null)
		? 'var( --wp--preset--color--' . $attributes["activeColor"] . ' )'
		: $attributes["customActiveColor"],
	"--active-background-color" => ($attributes['activeBgColor'] ?? null)
		? 'var( --wp--preset--color--' . $attributes['activeBgColor'] . ' )'
		: $attributes['customActiveBgColor'],
	"--active-border-color" => ($attributes['activeBorderColor'] ?? null)
		? 'var( --wp--preset--color--' . $attributes['activeBorderColor'] . ' )'
		: $attributes['customActiveBorderColor'],
	"--active-icon-background-color" => ($attributes['activeIconBgColor'] ?? null)
		? 'var( --wp--preset--color--' . $attributes['activeIconBgColor'] . ' )'
		: $attributes['customActiveIconBgColor'],
];
// convert the colorCssVars array to style string.
$colorStyle = '';
foreach ($colorCssVars as $key => $value) {
	$colorStyle .= $key . ':' . $value . ';';
};
?>


<div
	<?php echo get_block_wrapper_attributes([
		'class' => 'nc-post-reaction-button',
		'style' => $colorStyle,
	]); ?>
	data-wp-interactive="ncmazfse-core"
	<?php echo wp_interactivity_data_wp_context([
		"postId" => get_the_ID(),
		"isLiked" => $isLiked,
		"postLikesCount" => $postLikesCount,
		"loading" => false,
	]); ?>
	data-wp-init="callbacks.logHandleLikeInit"
	data-wp-on--click="actions.handleLike"
	data-wp-class--is-actived="context.isLiked"
	data-wp-class--is-loading="context.loading"
	data-wp-bind--disabled="context.loading">

	<?php echo $content; ?>

	<?php if ($attributes["showCountText"]): ?>
		<span class="nc__count" data-wp-text="context.postLikesCount"></span>
	<?php endif; ?>

</div>
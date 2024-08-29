<?php
global $post;

// Generate unique id for aria-controls. 
$current_post_id = $block->context['postId'] ?? null;
$comment_id = $block->context['commentId'] ?? null;
$user_id = get_current_user_id();

if ($comment_id && !$current_post_id) {
	$current_post_id = $comment_id;
}

$isLiked = ncmazfse_core__check_user_like($current_post_id, $user_id);
$likeCount = ncmazfse_core__get_post_likes_count($current_post_id);

// Set the interactivity state.
wp_interactivity_state(
	'ncmazfse-core/like-button',
	[
		'ajaxUrl' 			=> admin_url('admin-ajax.php'),
		'likeButtonNonce'   => wp_create_nonce('like_button_nonce'),
		'userId' 			=> $user_id,
		'likeCount' => function () {
			$context = wp_interactivity_get_context();
			return $context['contextLikeCount'];
		},
		'isLiked' => function () {
			$context = wp_interactivity_get_context();
			return $context['contextIsLiked'];
		},
		'isLoading' => function () {
			return false;
		},
		'likeData' => function () {
			return [];
		},
		'loadingList' => [],
	]
);

// Get the block attributes colors.
$colorCssVars = [
	"--active-color" => ($attributes["activeColor"] ?? null)
		? 'var( --wp--preset--color--' . $attributes["activeColor"] . ' )'
		: $attributes["customActiveColor"] ?? null,
	"--active-background-color" => ($attributes['activeBgColor'] ?? null)
		? 'var( --wp--preset--color--' . $attributes['activeBgColor'] . ' )'
		: $attributes['customActiveBgColor'] ?? null,
	"--active-border-color" => ($attributes['activeBorderColor'] ?? null)
		? 'var( --wp--preset--color--' . $attributes['activeBorderColor'] . ' )'
		: $attributes['customActiveBorderColor'] ?? null,
	"--active-icon-background-color" => ($attributes['activeIconBgColor'] ?? null)
		? 'var( --wp--preset--color--' . $attributes['activeIconBgColor'] . ' )'
		: $attributes['customActiveIconBgColor'] ?? null,
];
// convert the colorCssVars array to style string.
$colorStyle = '';
foreach ($colorCssVars as $key => $value) {
	$colorStyle .= $key . ':' . $value . ';';
};
?>


<button
	<?php echo get_block_wrapper_attributes([
		'class' => 'nc-post-reaction-button',
		'style' => $colorStyle,
	]); ?>
	data-wp-interactive="ncmazfse-core/like-button"
	<?php echo wp_interactivity_data_wp_context([
		"postId" 			=> $current_post_id,
		'contextIsLiked' 	=> $isLiked,
		'contextLikeCount' 	=> $likeCount,
	]); ?>
	data-wp-init="callbacks.logHandleLikeInit"
	data-wp-on--click="actions.handleLike"
	data-wp-class--is-actived="state.isLiked"
	data-wp-class--is-loading="state.isLoading"
	data-wp-bind--disabled="state.isLoading">

	<?php echo $content; ?>

	<?php if ($attributes["showCountText"]): ?>
		<span class="nc__count" data-wp-text="state.likeCount"></span>
	<?php endif; ?>

</button>
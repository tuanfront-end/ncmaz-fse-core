<?php
global $post;

// Generate unique id for aria-controls. 
$current_post_id = $block->context['postId'] ?? null;
$comment_id = $block->context['commentId'] ?? null;
$user_id = get_current_user_id();


// If the block is used in the comments section, set the current post id to the comment id.
if ($comment_id) {
	$current_post_id = $comment_id;
}

$isLiked = ncmazfse_core__check_client_is_liked($current_post_id, $user_id);
$likeCount = ncmazfse_core__get_post_like_count($current_post_id);

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
];
// remove null values from the array.
$colorCssVars =  array_filter($colorCssVars);
// convert the colorCssVars array to style string.
$colorStyle = '';
foreach ($colorCssVars as $key => $value) {
	$colorStyle .= $key . ':' . $value . ';';
};
?>


<a role="button" tabindex="0"
	<?php echo wp_kses_data(get_block_wrapper_attributes([
		'class' => 'nc-post-reaction-button ' . (!isset($attributes['style']['spacing']['blockGap']) ? 'gap-1.5' : ''),
		'style' => $colorStyle,
	])); ?>
	data-wp-interactive="ncmazfse-core/like-button"
	<?php echo wp_kses_data(wp_interactivity_data_wp_context([
		"postId" 			=> $current_post_id,
		'contextIsLiked' 	=> $isLiked,
		'contextLikeCount' 	=> $likeCount,
	])); ?>
	data-wp-init="callbacks.logHandleLikeInit"
	data-wp-on--click="actions.handleLike"
	data-wp-class--is-actived="state.isLiked"
	data-wp-class--is-loading="state.isLoading"
	data-wp-bind--disabled="state.isLoading">

	<?php // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	echo $content; ?>

	<?php if ($attributes["showCountText"]): ?>
		<span class="nc__count" data-wp-text="state.likeCount"></span>
	<?php endif; ?>

</a>
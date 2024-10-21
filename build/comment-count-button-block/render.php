<?php
global $post;

// Generate unique id for aria-controls.
$current_post_id =  $block->context['postId'] ?? 0;

// get comment count of the post 
$comment_count = get_comments_number($current_post_id);
// get link to the post comment form 
$comment_link = get_comments_link($current_post_id);


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

<a
	href="<?php echo esc_url($comment_link); ?>"
	<?php echo wp_kses_data(get_block_wrapper_attributes([
		'class' => 'nc-post-reaction-button ' . (!isset($attributes['style']['spacing']['blockGap']) ? 'gap-1.5' : ''),
		'style' => $colorStyle,
	])); ?>>

	<?php // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	echo $content; ?>
	<?php if ($attributes["showCountText"]): ?>
		<span class="nc__count">
			<?php echo esc_html($comment_count); ?>
		</span>
	<?php endif; ?>

</a>
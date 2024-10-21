<?php
global $post;

// Generate unique id for aria-controls.
$current_post_id = $block->context['postId'] ?? 0;
$user_id = get_current_user_id();

// Set the interactivity state.
wp_interactivity_state(
	'ncmfse/save-button-btn',
	[
		'ajaxUrl' => admin_url('admin-ajax.php'),
		'saveButtonNonce'   => wp_create_nonce('save_button_nonce'),
		"userId" => $user_id,
		'saveCount' => function () {
			$context = wp_interactivity_get_context();
			return $context['contextSaveCount'];
		},
		'isSaved' => function () {
			$context = wp_interactivity_get_context();
			return $context['contextIsSaved'];
		},
		'isLoading' => function () {
			return false;
		},
		'saveData' => function () {
			return [];
		},
		'loadingList' => [],
	]
);

// Get the post likes.
$saveCount = ncmazfse_core__get_post_save_count($current_post_id);
$isSaved = ncmazfse_core__check_user_save($current_post_id, $user_id);

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
	data-wp-interactive="ncmfse/save-button-btn"
	<?php echo wp_kses_data(wp_interactivity_data_wp_context([
		"postId" => $current_post_id,
		'contextIsSaved' 	=> $isSaved,
		'contextSaveCount' 	=> $saveCount,
	])); ?>
	data-wp-init="callbacks.logHandleSaveInit"
	data-wp-on--click="actions.handleSave"
	data-wp-class--is-actived="state.isSaved"
	data-wp-class--is-loading="state.isLoading"
	data-wp-bind--disabled="state.isLoading">

	<?php // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	echo $content; ?>
	<?php if ($attributes["showCountText"]): ?>
		<span class="nc__count" data-wp-text="state.saveCount"></span>
	<?php endif; ?>

</a>
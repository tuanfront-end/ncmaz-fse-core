<?php

/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

// Set the interactivity state.
wp_interactivity_state(
	'ncmfse/mailpoet-subscription-form',
	[
		'ajaxUrl' 			=> admin_url('admin-ajax.php'),
		'mailpoetFormNonce'   => wp_create_nonce('nc_mailpoet_form_nonce'),
	]
);
?>

<form
	<?php echo wp_kses_data(get_block_wrapper_attributes([
		"style"  => "--input-radius:" . $attributes['inputRadius'] . "px;--input-padding:" . $attributes['inputPadding'] . "px;",
	])); ?>
	data-wp-interactive="ncmfse/mailpoet-subscription-form"
	<?php echo wp_kses_data(wp_interactivity_data_wp_context([
		'showSuccessMessage' => false,
		"showError" => false,
		"loading" => false,
		"errorMesssage" => "",
		"mailpoetListId" => $attributes['mailpoetListId'],
	])); ?>
	data-wp-on--submit="actions.onSubmitForm">

	<?php if ($attributes['showNameField']): ?>
		<div class="form-item__name">
			<?php if ($attributes['showLabel']): ?>
				<label htmlFor="name">
					<?php esc_html_e($attributes['nameLabel']); ?>
				</label>
			<?php endif; ?>
			<input type="text" autocomplete="name" name="name" placeholder="<?php esc_attr_e($attributes['namePlaceholder']); ?>" />
		</div>
	<?php endif; ?>

	<div class="form-item__email">
		<?php if ($attributes['showLabel']): ?>
			<label htmlFor="email">
				<?php esc_html_e($attributes['emailLabel']); ?>
			</label>
		<?php endif; ?>

		<div class="form-item__email-content">
			<input type="email" name="email"
				required
				autocomplete="email"
				placeholder="<?php esc_attr_e($attributes['emailPlaceholder']); ?>" />

			<?php if ($attributes['submitButtonStyle'] === "inline-email-input"): ?>
				<button type="submit">
					<?php echo ($content); ?>
				</button>
			<?php endif; ?>

		</div>
	</div>

	<?php if ($attributes['submitButtonStyle'] === "default"): ?>
		<div>
			<?php echo ($content); ?>
			<p class="success-message" data-wp-bind--hidden="!context.showSuccessMessage">
				<?php esc_html_e($attributes['successMessage']); ?>
			</p>
			<p class="error-message" data-wp-bind--hidden="!context.showError" data-wp-text="context.errorMesssage">
			</p>
			<p class="loading" data-wp-bind--hidden="!context.loading">
				<?php esc_html_e("Loading...", "ncmfse"); ?>
			</p>
		</div>
	<?php else: ?>
		<p class="success-message" data-wp-bind--hidden="!context.showSuccessMessage">
			<?php esc_html_e($attributes['successMessage']); ?>
		</p>
		<p class="error-message" data-wp-bind--hidden="!context.showError" data-wp-text="context.errorMesssage">
		</p>
		<p class="loading" data-wp-bind--hidden="!context.loading">
			<?php esc_html_e("Loading...", "ncmfse"); ?>
		</p>
	<?php endif; ?>


</form>
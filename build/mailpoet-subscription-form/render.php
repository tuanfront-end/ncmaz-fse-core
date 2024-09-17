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

// Generate unique id for aria-controls.
$unique_id = wp_unique_id('p-');
// my_var_export($attributes);
?>

<form
	<?php echo get_block_wrapper_attributes([
		"style"  => "--input-radius:" . $attributes['inputRadius'] . "px;--input-padding:" . $attributes['inputPadding'] . "px;",
	]); ?>
	data-wp-interactive="create-block"
	<?php echo wp_interactivity_data_wp_context(array('isOpen' => false)); ?>
	data-wp-watch="callbacks.logIsOpen">

	<?php if ($attributes['showNameField']): ?>
		<div class="form-item__name">
			<?php if ($attributes['showLabel']): ?>
				<label htmlFor="name">
					<?php echo $attributes['nameLabel']; ?>
				</label>
			<?php endif; ?>
			<input type="text" name="name" placeholder="<?php esc_attr_e($attributes['namePlaceholder']); ?>" />
		</div>
	<?php endif; ?>

	<div class="form-item__email">

		<?php if ($attributes['showLabel']): ?>
			<label htmlFor="email">
				<?php echo $attributes['emailLabel']; ?>
			</label>
		<?php endif; ?>

		<div class="form-item__email-content">
			<input type="email" name="email" placeholder="<?php esc_attr_e($attributes['emailPlaceholder']); ?>" />

			<?php if ($attributes['submitButtonStyle'] === "inline-email-input"): ?>
				<button type="submit">
					<?php echo $content; ?>
				</button>
			<?php endif; ?>

		</div>
	</div>


	<?php if ($attributes['submitButtonStyle'] === "default"): ?>
		<?php echo $content; ?>
	<?php endif; ?>


</form>
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

use function SocialSharingLink\get_url;

// Generate unique id for aria-controls.
$unique_id = wp_unique_id('p-');
wp_interactivity_state(
	'ncmazfse-core',
	array(
		'ajaxUrl' => admin_url('admin-ajax.php'),
		'nonce'   => wp_create_nonce('like_button_nonce'),
	),
);
?>

<div
	<?php echo get_block_wrapper_attributes(); ?>
	data-wp-interactive="ncmazfse-core"
	<?php echo wp_interactivity_data_wp_context([
		'isOpen' => false
	]); ?>
	data-wp-watch="callbacks.logIsOpen">
	<button
		data-wp-on--click="actions.toggle"
		data-wp-bind--aria-expanded="context.isOpen"
		aria-controls="<?php echo esc_attr($unique_id); ?>">
		<?php esc_html_e('Toggle', 'ncmaz-fse-core'); ?>
	</button>
	<button
		data-wp-on--click="actions.handleLike">
		<?php esc_html_e('Like', 'ncmaz-fse-core'); ?>
	</button>

	<p
		id="<?php echo esc_attr($unique_id); ?>"
		data-wp-bind--hidden="!context.isOpen">
		<?php
		esc_html_e('My First Interactive Block - hello from an interactive block!', 'ncmaz-fse-core');
		?>
	</p>
</div>
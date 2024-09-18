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

$disable_when_collapsed = $attributes['disableWhenCollapsed'] ?? false;
$label                  = esc_html($attributes['label'] ?? '');
$menu_slug              = esc_attr($attributes['menuSlug'] ?? '');
$collapsed_url          = esc_url($attributes['collapsedUrl'] ?? '');
$justify_menu           = esc_attr($attributes['justifyMenu'] ?? 'center');
$menu_width             = esc_attr($attributes['width'] ?? 'full');

// Don't display the mega menu link if there is no label or no menu slug.
if (! $label || ! $menu_slug) {
	return null;
}

$classes  = $disable_when_collapsed ? 'disable-menu-when-collapsed ' : '';
$classes .= $collapsed_url ? 'has-collapsed-link ' : '';

$wrapper_attributes = get_block_wrapper_attributes(
	array('class' => $classes)
);

$menu_classes  = 'wp-block-outermost-mega-menu__menu-container';
$menu_classes .= ' menu-width-' . $menu_width;
$menu_classes .= $justify_menu ? ' menu-justified-' . $justify_menu : '';
?>

<li
	<?php echo wp_kses_data($wrapper_attributes); ?>
	data-wp-interactive='{ "namespace": "outermost/mega-menu" }'
	<?php echo wp_kses_data(wp_interactivity_data_wp_context([
		'width' => $menu_width,
	])); ?>
	data-wp-init="callbacks.initCallbacks">
	<div
		class="wp-block-outermost-mega-menu__toggle">
		<?php esc_html_e($label); ?><span class="wp-block-outermost-mega-menu__toggle-icon">
			<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
				<path d="M1.50002 4L6.00002 8L10.5 4" stroke-width="1.5"></path>
			</svg>
		</span>
	</div>

	<div
		class="<?php esc_attr_e($menu_classes); ?>"
		tabindex="-1">
		<?php echo block_template_part($menu_slug); ?>
	</div>

	<?php if ($disable_when_collapsed && $collapsed_url) { ?>
		<a class="wp-block-outermost-mega-menu__collapsed-link wp-block-navigation-item__content" href="<?php esc_url($collapsed_url); ?>">
			<span class="wp-block-navigation-item__label"><?php esc_html_e($label); ?></span>
		</a>
	<?php } ?>
</li>
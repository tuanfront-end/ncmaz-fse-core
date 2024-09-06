<?php

/**
 * Plugin Name:       Ncmaz Fse Core
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ncmaz-fse-core
 *
 * @package CreateBlock
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}


define('NCMAZ_FSE_CORE_VERSION', '0.1.0');
define('NCMAZ_FSE_CORE_PLUGIN_URL', plugin_dir_url(__FILE__));
define('NCMAZ_FSE_CORE_PLUGIN_BASE', plugin_basename(__FILE__));
define('NCMAZ_FSE_CORE_PLUGIN_FILE', __FILE__);
define('NCMAZ_FSE_CORE_PLUGIN_ASSETS', NCMAZ_FSE_CORE_PLUGIN_URL . 'assets/');
define('NCMAZ_FSE_CORE_PLUGIN_BUILD', NCMAZ_FSE_CORE_PLUGIN_URL . 'build/');
define('NCMAZ_FSE_CORE_PLUGIN_SRC', NCMAZ_FSE_CORE_PLUGIN_URL . 'src/');
define('NCMAZ_FSE_CORE_PLUGIN_INCLUDES', NCMAZ_FSE_CORE_PLUGIN_URL . 'includes/');
define('NCMAZ_FSE_CORE_TEXT_DOMAIN',  'ncmaz-fse-core');
define('NCMAZ_FSE_CORE_STORE',  'ncmazfse-core');

function ncmaz_fse_core_register_blocks_init()
{
	register_block_type(__DIR__ . '/build/common-css-block');
	register_block_type(__DIR__ . '/build/like-button-block');
	register_block_type(__DIR__ . '/build/save-button-block');
	register_block_type(__DIR__ . '/build/comment-count-button-block');
	register_block_type(__DIR__ . '/build/reading-time-block');
	register_block_type(__DIR__ . '/build/view-count-button-block');
	register_block_type(__DIR__ . '/build/term-query-loop-block');
	register_block_type(__DIR__ . '/build/term-template-block');
	register_block_type(__DIR__ . '/build/term-name-block');
	register_block_type(__DIR__ . '/build/term-description-block');
	register_block_type(__DIR__ . '/build/term-count-block');
	register_block_type(__DIR__ . '/build/term-featured-image-block');

	//  SOME CUSTOM BLOCKS
	register_block_type(__DIR__ . '/build/enable-linked-groups');
	register_block_type(__DIR__ . '/build/enable-snapping-templates');
	// END SOME CUSTOM BLOCKS
}
add_action('init', 'ncmaz_fse_core_register_blocks_init');



//  Import file utils.php
require_once plugin_dir_path(__FILE__) . 'includes/hooks.php';
require_once plugin_dir_path(__FILE__) . 'includes/utils.php';
require_once plugin_dir_path(__FILE__) . 'includes/acf.php';
require_once plugin_dir_path(__FILE__) . 'includes/like-handler.php';
require_once plugin_dir_path(__FILE__) . 'includes/save-handler.php';
require_once plugin_dir_path(__FILE__) . 'includes/view-handler.php';
require_once plugin_dir_path(__FILE__) . 'includes/term-blocks-funcs.php';

// enqueue scripts
require_once plugin_dir_path(__FILE__) . 'includes/enqueue-scripts.php';


/**
 * PluginName:         Enable Linked Groups
 * PluginURI:          https://www.nickdiego.com/
 * Description:         Easily add links to Group blocks.
 *
 * @package enable-linked-groups
 */


/**
 * Enqueue block styles 
 * (Applies to both frontend and Editor)
 * 
 * @since 0.1.0
 */
function ncmazfse_enable_linked_groups_block_styles()
{
	wp_enqueue_block_style(
		'core/group',
		array(
			'handle' => 'enable-linked-groups-block-styles',
			'src'    => plugin_dir_url(__FILE__) . 'build/enable-linked-groups/style-index.css',
			'ver'    => wp_get_theme()->get('Version'),
			'path'   => plugin_dir_path(__FILE__) . 'build/enable-linked-groups/style-index.css',
		)
	);
}
add_action('init', 'ncmazfse_enable_linked_groups_block_styles');

function ncmazfse_enable_linked_groups_render_block_button($block_content, $block, $instance)
{
	if (! isset($block['attrs']['href']) && ! isset($block['attrs']['linkDestination'])) {
		return $block_content;
	}

	$href             = $block['attrs']['href'] ?? '';
	$link_destination = $block['attrs']['linkDestination'] ?? '';
	$link_target      = $block['attrs']['linkTarget'] ?? '_self';
	$link_rel         = '_blank' === $link_target ? 'noopener noreferrer' : 'follow';
	$termId 		= $instance->context['termId'] ?? '';

	$link = '';

	if ('custom' === $link_destination && $href) {
		$link = $href;
	} elseif ('post' === $link_destination) {
		if ($termId) {
			$link =  get_term_link($termId);
		} else {
			$link = get_permalink();
		}
	}

	if (! $link) {
		return $block_content;
	}

	// Add the is-linked class to the group block.
	$p = new WP_HTML_Tag_Processor($block_content);
	if ($p->next_tag()) {
		$p->add_class('is-linked');
	}
	$block_content = $p->get_updated_html();

	$link_markup = sprintf(
		'<a class="wp-block-group__link" href="%1$s" target="%2$s" rel="%3$s" aria-hidden="true" tabindex="-1">&nbsp;</a>',
		esc_url($link),
		esc_attr($link_target),
		esc_attr($link_rel)
	);

	// Insert the link markup after the opening tag.
	$block_content = preg_replace(
		'/^\s*<(\w+)([^>]*)>/m',
		'<$1$2>' . $link_markup,
		$block_content,
		1
	);

	return $block_content;
}
add_filter('render_block_core/group', 'ncmazfse_enable_linked_groups_render_block_button', 10, 3);



/**
 * Enqueue block styles 
 * (Applies to both frontend and Editor)
 * 
 * @since 0.1.0
 */
function ncmazfse_enable_snapping_templates_block_styles()
{
	wp_enqueue_block_style(
		'ncmfse/term-template',
		array(
			'handle' => 'ncmfse-enable-snapping-templates-block-styles',
			'src'    => plugin_dir_url(__FILE__) . 'build/enable-snapping-templates/style-index.css',
			'ver'    => wp_get_theme()->get('Version'),
			'path'   => plugin_dir_path(__FILE__) . 'build/enable-snapping-templates/style-index.css',
		)
	);
	wp_enqueue_block_style(
		'core/post-template',
		array(
			'handle' => 'ncmfse-enable-snapping-templates-block-styles',
			'src'    => plugin_dir_url(__FILE__) . 'build/enable-snapping-templates/style-index.css',
			'ver'    => wp_get_theme()->get('Version'),
			'path'   => plugin_dir_path(__FILE__) . 'build/enable-snapping-templates/style-index.css',
		)
	);
}
add_action('init', 'ncmazfse_enable_snapping_templates_block_styles');

function ncmazfse_enable_snapping_templates_render_block_button($block_content, $block, $instance)
{
	if (! ($block['attrs']['isHorizontalScrollSnapping'] ?? "")) {
		return $block_content;
	}

	$childWidth             = $block['attrs']['childWidth'] ?? '';
	$showScrollbar          = $block['attrs']['showScrollbar'] ?? '';

	// Add the is-linked class to the group block.
	$p = new WP_HTML_Tag_Processor($block_content);
	if ($p->next_tag()) {
		$p->add_class('is-h-scroll-snapping');
		$p->add_class($showScrollbar ? '' : 'hidden-scrollbar');
		$p->set_attribute('style', '--child-width: ' . $childWidth . '; ' . $p->get_attribute('style'));
	}
	$block_content = $p->get_updated_html();

	return $block_content;
}
add_filter('render_block_ncmfse/term-template', 'ncmazfse_enable_snapping_templates_render_block_button', 10, 3);
add_filter('render_block_core/post-template', 'ncmazfse_enable_snapping_templates_render_block_button', 10, 3);

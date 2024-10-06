<?php

/**
 * Plugin Name:       Ncmaz Fse Core
 * Description:       Ncmaz Fse Core is a plugin that provides some custom blocks for Full Site Editing.
 * Requires at least: 6.5
 * Requires PHP:      7.4
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
define('NCMAZ_FSE_CORE_TEXT_DOMAIN',  'ncmfse');
define('NCMAZ_FSE_CORE_STORE',  'ncmfse');

function ncmaz_fse_core_register_blocks_init()
{
	$ncmfse_blocks = [
		'common-css-block',
		'like-button-block',
		'save-button-block',
		'comment-count-button-block',
		'reading-time-block',
		'view-count-button-block',
		'term-query-loop-block',
		'term-template-block',
		'term-name-block',
		'term-description-block',
		'term-count-block',
		'term-featured-image-block',
		'snap-scroll-arrows-block',
		'snap-scroll-arrow-next-block',
		'snap-scroll-arrow-previous-block',
		'mega-menu-block',
		'mailpoet-subscription-form-block',
		'dropdown-menu-block',
		'dropdown-menu-trigger-block',
		'dropdown-menu-content-block',
		'dropdown-menu-item-block',
		'current-user-name-block',
		'reading-progress-block',
		'post-format-icon-block',
		//  SOME CUSTOM BLOCKS
		'enable-linked-groups',
		'enable-snapping-templates',
		'enable-logged-user-avatar',
		'enable-saved-liked-post-query-loop',
	];
	foreach ($ncmfse_blocks as $block) {
		register_block_type(__DIR__ . '/build/' . $block);
	}
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
require_once plugin_dir_path(__FILE__) . 'includes/nc-mailpoet-form-handler.php';

// enqueue scripts
require_once plugin_dir_path(__FILE__) . 'includes/enqueue-scripts.php';

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

function ncmazfse_enable_linked_groups_render_block($block_content, $block, $instance)
{
	if (! isset($block['attrs']['href']) && ! isset($block['attrs']['linkDestination'])) {
		return $block_content;
	}

	$href             = $block['attrs']['href'] ?? '';
	$link_destination = $block['attrs']['linkDestination'] ?? '';
	$link_target      = $block['attrs']['linkTarget'] ?? '_self';
	$link_rel         = '_blank' === $link_target ? 'noopener noreferrer' : 'follow';
	$termId 		 = $instance->context['termId'] ?? '';

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

	if ($block['attrs']['linkWithCurrentSearch'] ?? '') {
		$_query = parse_url($link, PHP_URL_QUERY) ?? '';
		$_params =  [];
		parse_str($_query, $_params);
		$merged_params =  array_merge($_GET, $_params);
		$link = add_query_arg($merged_params, $link);
	}


	// Add the is-linked class to the group block.
	$p = new WP_HTML_Tag_Processor($block_content);
	if ($p->next_tag()) {
		$p->add_class('is-linked');

		// $is_active = ncmfse_core_check_href_is_active_with_current_url($link);
		// if ($is_active) {
		// 	$p->add_class('is-active');
		// }
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
add_filter('render_block_core/group', 'ncmazfse_enable_linked_groups_render_block', 10, 3);


/**
 * Enable border for paragraph.
 *
 * @param array  $args       The block arguments for the registered block type.
 * @param string $block_type The block type name, including namespace.
 * @return array             The modified block arguments.
 */
function ncmazfse_enable_border_to_paragraph_blocks($args, $block_type)
{

	// Only add the filter to Media & Text blocks.
	if ('core/paragraph' === $block_type) {
		$args['supports'] ??= [];
		$args['supports']['__experimentalBorder'] ??= [];
		$args['supports']['__experimentalBorder']['color'] = true;
		$args['supports']['__experimentalBorder']['radius'] = true;
		$args['supports']['__experimentalBorder']['width'] = true;
		$args['supports']['shadow'] = true;
	}

	return $args;
}
add_filter('register_block_type_args', 'ncmazfse_enable_border_to_paragraph_blocks', 10, 2);


/**
 * Enable border for paragraph.
 *
 * @param array  $args       The block arguments for the registered block type.
 * @param string $block_type The block type name, including namespace.
 * @return array             The modified block arguments.
 */
function ncmazfse_core_enable_typography_to_navigation_submenu_blocks($args, $block_type)
{
	if ('core/navigation-submenu' === $block_type) {
		$args['supports'] ??= [];
		$args['supports']['typography'] ??= [];
		$args['supports']['typography']['fontSize'] = true;
		$args['supports']['typography']['lineHeight'] = true;
		$args['supports']['typography']['__experimentalFontWeight'] = true;
	}
	return $args;
}
add_filter('register_block_type_args', 'ncmazfse_core_enable_typography_to_navigation_submenu_blocks', 10, 2);



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

function ncmazfse_enable_snapping_templates_render_block($block_content, $block, $instance)
{
	if (! ($block['attrs']['isHorizontalScrollSnapping'] ?? "")) {
		return $block_content;
	}

	$queryId = $instance->context['queryId'] ?? $instance->context['ncmazfse_termQueryId'] ?? "";

	$childWidth             = $block['attrs']['childWidth'] ?? '';
	$showScrollbar          = $block['attrs']['showScrollbar'] ?? '';

	// Add the is-linked class to the group block.
	$p = new WP_HTML_Tag_Processor($block_content);
	if ($p->next_tag()) {
		$p->add_class('is-h-scroll-snapping relative');
		$p->set_attribute('data-ncmfse-snap-scroll-id', $queryId);
		$p->add_class($showScrollbar ? '' : 'hidden-scrollbar');
		$p->set_attribute('style', '--child-width: ' . $childWidth . '; ' . $p->get_attribute('style'));
	}
	$block_content = $p->get_updated_html();

	return $block_content;
}
add_filter('render_block_ncmfse/term-template', 'ncmazfse_enable_snapping_templates_render_block', 10, 3);
add_filter('render_block_core/post-template', 'ncmazfse_enable_snapping_templates_render_block', 10, 3);


/**
 * Adds a custom template part area for mega menus to the list of template part areas.
 *
 * This function introduces a new area specifically for menu templates, allowing
 * the creation of sections within a mega menu. The new area is appended to the 
 * existing list of template part areas.
 * 
 * @see https://developer.wordpress.org/reference/hooks/default_wp_template_part_areas/
 *
 * @param array $areas Existing array of template part areas.
 * @return array Modified array of template part areas including the new mega menu area.
 */
function ncmfse_mega_menu_template_part_areas(array $areas)
{

	$areas[] = array(
		'area'        => 'menu',
		'area_tag'    => 'div',
		'description' => __('Menu templates are used to create sections of a mega menu.', 'ncmfse'),
		'icon' 		  => 'layout',
		'label'       => __('Menu', 'ncmfse'),
	);

	return $areas;
}
add_filter('default_wp_template_part_areas', 'ncmfse_mega_menu_template_part_areas');


/**
 * Enable shadow for Group blocks.
 */
function ncmazfse_core_enable_shadow_to_group_blocks($args, $block_type)
{
	// Only apply the filter to Media & Text blocks.
	if ('core/group' !== $block_type) {
		return $args;
	}

	$args['supports'] ??= [];
	$args['supports']['shadow']  = true;

	return $args;
}
add_filter('register_block_type_args', 'ncmazfse_core_enable_shadow_to_group_blocks', 10, 2);


/**
 * Enable spacing for core/query-pagination blocks.
 */
function ncmazfse_core_enable_spacing_to_loop_pagination_blocks($args, $block_type)
{
	// Only apply the filter to core/query-pagination.
	if ('core/query-pagination' !== $block_type) {
		return $args;
	}
	$args['supports'] ??= [];
	$args['supports']['spacing'] ??= [];
	$args['supports']['spacing']['padding'] = true;
	$args['supports']['spacing']['margin'] = true;
	$args['supports']['spacing']['blockGap'] = true;
	return $args;
}
add_filter('register_block_type_args', 'ncmazfse_core_enable_spacing_to_loop_pagination_blocks', 10, 2);


/**
 * Enable Typo for outermost/social-sharing blocks.
 */
function ncmazfse_core_enable_typo_to_outermost_social_sharing_blocks($args, $block_type)
{
	// Only apply the filter to outermost/social-sharing.
	if ('outermost/social-sharing' !== $block_type) {
		return $args;
	}
	$args['supports'] ??= [];
	$args['supports']['typography'] ??= [];
	$args['supports']['typography']['fontSize'] = true;
	$args['supports']['typography']['lineHeight'] = true;
	$args['supports']['typography']['__experimentalFontWeight'] = true;
	return $args;
}
add_filter('register_block_type_args', 'ncmazfse_core_enable_typo_to_outermost_social_sharing_blocks', 10, 2);


/**
 * Enable Logged in User Avatar
 */
function ncmazfse_enable_logged_in_user_avatar_render_block($block_content, $block, $instance)
{
	if (! ($block['attrs']['isCurrentLogged'] ?? false) || isset($block->context['commentId']) || !is_user_logged_in()) {
		return $block_content;
	}

	$attributes = $block['attrs'];
	$block['attrs']['userId'] = get_current_user_id();
	$author_id = $block['attrs']['userId'];

	$size  = isset($attributes['size']) ? $attributes['size'] : 96;
	$avatar_url = get_avatar_url(
		$author_id,
		['size' => $size],
	);
	$avatar_url_2x = get_avatar_url(
		$author_id,
		['size' => $size * 2],
	);

	// Modify the img attributes using the HTML API.
	$processor = new WP_HTML_Tag_Processor($block_content);
	if ($processor->next_tag(array('tag_name' => 'img', 'class_name' => 'wp-block-avatar__image'))) {
		$processor->set_attribute('src', $avatar_url);
		$processor->set_attribute('srcset', $avatar_url . ' 1x, ' . $avatar_url_2x . ' 2x');
		$block_content = $processor->get_updated_html();
	}

	return $block_content;
}
add_filter('render_block_core/avatar', 'ncmazfse_enable_logged_in_user_avatar_render_block', 10, 3);


/**
 *  Enable Saved Liked Post Query Loop
 *  Change context query args and query vars for query blocks
 */
function ncmaz_fse_core_register_more_context_to_all_query_blocks($args, $block_type)
{
	// add providesContext to only core/query block
	if ($block_type === 'core/query') {
		$args['attributes']['showUserSavedPosts'] = [
			'type' => 'boolean',
			'default' => false,
		];
		$args['attributes']['showUserLikedPosts'] = [
			'type' => 'boolean',
			'default' => false,
		];
		$args['provides_context']['showUserSavedPosts'] = 'showUserSavedPosts';
		$args['provides_context']['showUserLikedPosts'] = 'showUserLikedPosts';
		return $args;
	}

	// check $block_type is not in $all_query_blocks
	$all_query_blocks = ['core/post-template', 'core/query-pagination', 'core/query-pagination-next', 'core/query-pagination-numbers', 'core/query-no-results'];
	// Not to need to modify with 'core/query-pagination-previous'. Because it is use query.
	if (!in_array($block_type, $all_query_blocks)) {
		return $args;
	}

	if (! isset($args['uses_context'])) {
		$args['uses_context'] = array();
	}
	$args['uses_context'][] = "showUserLikedPosts";
	$args['uses_context'][] = "showUserSavedPosts";

	return $args;
}
add_filter('register_block_type_args', 'ncmaz_fse_core_register_more_context_to_all_query_blocks', 10, 2);


function ncmaz_fse_core_modify_query_vars_for_query_blocks(array $query, WP_Block $block)
{
	$all_query_blocks = ['core/post-template', 'core/query-pagination', 'core/query-pagination-next', 'core/query-pagination-numbers', 'core/query-no-results'];
	// Not to need to modify with 'core/query-pagination-previous'. Because it is use query.
	if (!in_array($block->name, $all_query_blocks)) {
		return $query;
	}

	$context = $block->context;
	if (!($context['showUserLikedPosts'] ?? false) && !($context['showUserSavedPosts'] ?? false)) {
		return $query;
	}

	// Get user ids
	$user_ids = [];
	if (!empty($context['query']['author'] ?? '')) {
		$user_ids = explode(',', $context['query']['author']);
	} else if (is_user_logged_in()) {
		$user_ids = [get_current_user_id()];
	}

	// Get post ids by context showUserSavedPosts / showUserLikedPosts
	$post_ids = [];
	if ($context['showUserSavedPosts'] ?? false) {
		if (!empty($user_ids)) {
			foreach ($user_ids as $user_id) {
				$post_ids = array_merge($post_ids, ncmazfse_core_get_all_post_saved_post_id_by_user($user_id));
			}
		} else {
			// _anonymous user. Get post ids by cookie
			$post_ids = ncmazfse_core__get_saved_posts_from_cookie();
		}
	}
	if ($context['showUserLikedPosts'] ?? false) {
		if (!empty($user_ids)) {
			foreach ($user_ids as $user_id) {
				$post_ids = array_merge($post_ids, ncmazfse_core_get_all_post_liked_post_id_by_user($user_id));
			}
		} else {
			// _anonymous user. Get post ids by cookie
			$post_ids = ncmazfse_core__get_liked_posts_from_cookie();
		}
	}

	$new_query = array_merge($query, [
		'post__in' => empty($post_ids) ? [0] : $post_ids,
		'post_status' => 'publish',
		'ignore_sticky_posts' => true,
		'exclude' => [],
	]);

	// unset post__not_in
	if (isset($new_query['post__not_in'])) {
		unset($new_query['post__not_in']);
	}
	if (isset($new_query['author__in'])) {
		unset($new_query['author__in']);
	}

	return $new_query;
}
add_filter('query_loop_block_query_vars', 'ncmaz_fse_core_modify_query_vars_for_query_blocks', 10, 2);

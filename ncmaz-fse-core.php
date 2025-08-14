<?php

/**
 * Plugin Name:       Ncmaz Fse Core
 * Description:       Ncmaz Fse Core is a plugin that provides some custom blocks for Full Site Editing.
 * Requires at least: 6.5
 * Requires PHP:      7.4
 * Version:           2.0.0
 * Author:            BooliiTheme
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ncmaz-fse-core
 *
 * @package CreateBlock
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

define('NCMAZ_FSE_CORE_VERSION', '2.0.0');
define('NCMAZ_FSE_CORE_PLUGIN_URL', plugin_dir_url(__FILE__));
define('NCMAZ_FSE_CORE_PLUGIN_BASE', plugin_basename(__FILE__));
define('NCMAZ_FSE_CORE_PLUGIN_FILE', __FILE__);
define('NCMAZ_FSE_CORE_PLUGIN_ASSETS', NCMAZ_FSE_CORE_PLUGIN_URL . 'assets/');
define('NCMAZ_FSE_CORE_PLUGIN_BUILD', NCMAZ_FSE_CORE_PLUGIN_URL . 'build/');
define('NCMAZ_FSE_CORE_PLUGIN_SRC', NCMAZ_FSE_CORE_PLUGIN_URL . 'src/');
define('NCMAZ_FSE_CORE_PLUGIN_INCLUDES', NCMAZ_FSE_CORE_PLUGIN_URL . 'includes/');

// register_activation_hook function to run code when the plugin is activated.
function ncmaz_fse_core_plugin_activation_function()
{
	if (get_option('ncmaz_fse_core_activation_created')) {
		return;
	}
	// ...
	update_option('ncmaz_fse_core_activation_created', true);
}
// Đăng ký hook kích hoạt
register_activation_hook(__FILE__, 'ncmaz_fse_core_plugin_activation_function');

//
function ncmaz_fse_core_register_blocks_init()
{
	$ncmfse_blocks = [
		'common-css-block',
		'fe-editor-block',
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

// enqueue scripts
require_once plugin_dir_path(__FILE__) . 'includes/enqueue-scripts.php';

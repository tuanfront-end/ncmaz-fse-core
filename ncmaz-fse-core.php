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
define('NCMAZ_FSE_CORE_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('NCMAZ_FSE_CORE_PLUGIN_URL', plugin_dir_url(__FILE__));
define('NCMAZ_FSE_CORE_PLUGIN_BASE', plugin_basename(__FILE__));
define('NCMAZ_FSE_CORE_PLUGIN_FILE', __FILE__);
define('NCMAZ_FSE_CORE_PLUGIN_ASSETS', NCMAZ_FSE_CORE_PLUGIN_URL . 'assets/');
define('NCMAZ_FSE_CORE_PLUGIN_BUILD', NCMAZ_FSE_CORE_PLUGIN_DIR . 'build/');
define('NCMAZ_FSE_CORE_PLUGIN_SRC', NCMAZ_FSE_CORE_PLUGIN_DIR . 'src/');
define('NCMAZ_FSE_CORE_PLUGIN_INCLUDES', NCMAZ_FSE_CORE_PLUGIN_DIR . 'includes/');
define('NCMAZ_FSE_CORE_TEXT_DOMAIN',  'ncmaz-fse-core');
define('NCMAZ_FSE_CORE_STORE',  'ncmazfse-core');

function ncmaz_fse_core_register_blocks_init()
{
	register_block_type(__DIR__ . '/build/rating-block');
	register_block_type(__DIR__ . '/build/review-card-block');
	register_block_type(__DIR__ . '/build/like-button-block');
	register_block_type(__DIR__ . '/build/save-button-block');
}
add_action('init', 'ncmaz_fse_core_register_blocks_init');



//  Import file utils.php
require_once plugin_dir_path(__FILE__) . 'includes/hooks.php';
require_once plugin_dir_path(__FILE__) . 'includes/utils.php';
require_once plugin_dir_path(__FILE__) . 'includes/acf.php';
require_once plugin_dir_path(__FILE__) . 'includes/like-handler.php';
require_once plugin_dir_path(__FILE__) . 'includes/save-handler.php';

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

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_ncmaz_fse_core_block_init()
{
	register_block_type(__DIR__ . '/build/rating-block');
	register_block_type(__DIR__ . '/build/review-card-block');
}
add_action('init', 'create_block_ncmaz_fse_core_block_init');


// Add some post meta
function register_review_rating_post_meta()
{
	$post_meta = array(
		'_rating'      => array('type' => 'integer'),
		'_ratingStyle' => array('type' => 'string'),
	);

	foreach ($post_meta as $meta_key => $args) {
		register_post_meta(
			'post',
			$meta_key,
			array(
				'show_in_rest'  => true,
				'single'        => true,
				'type'          => $args['type'],
				'auth_callback' => function () {
					return current_user_can('edit_posts');
				}
			)
		);
	}
}
add_action('init', 'register_review_rating_post_meta');

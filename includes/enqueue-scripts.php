<?php

// add common css block to the enqueue script css
function ncmaz_fse_core_enqueue_common_css_block() {
	wp_enqueue_style(
		'ncmaz-fse-core-common-css-block',
		NCMAZ_FSE_CORE_PLUGIN_BUILD . 'common-css-block/style-index.css',
		array(),
		NCMAZ_FSE_CORE_VERSION
	);
	// update when RLT is ready
	wp_style_add_data( 'ncmaz-fse-core-common-css-block', 'rtl', 'replace' );
}
add_action( 'wp_enqueue_scripts', 'ncmaz_fse_core_enqueue_common_css_block' );

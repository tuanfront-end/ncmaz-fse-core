<?php

// add common css block to the enqueue script css
function ciseco_fse_core__enqueue_common_css_block()
{
	wp_enqueue_style(
		'ciseco-fse-core-common-css-block',
		CISECO_FSE_CORE_PLUGIN_BUILD . 'common-css-block/style-index.css',
		array(),
		CISECO_FSE_CORE_VERSION
	);
	// update when RLT is ready
	wp_style_add_data('ciseco-fse-core-common-css-block', 'rtl', 'replace');
}
add_action('wp_enqueue_scripts', 'ciseco_fse_core__enqueue_common_css_block');

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

// add scrip to header 
if (!defined('IS_NCMFSE_TOOGLE_DARK_MODE_BLOCK_INSERTED')) {
	if ($attributes['defaultMode'] === 'dark') {
		add_action('wp_head', function () {
			echo '<script type="text/javascript">
				if(!localStorage.theme){
					document.documentElement.classList.add("dark");
				} else {
					if(localStorage.theme === "dark"){
						document.documentElement.classList.add("dark");
						} else { document.documentElement.classList.remove("dark"); 	}
				}
				</script>';
		}, 1);
	} else {
		add_action('wp_head', function () {
			echo '<script type="text/javascript">
				if(localStorage.theme === "dark"){
						document.documentElement.classList.add("dark");
						} else { document.documentElement.classList.remove("dark"); }
				</script>';
		}, 1);
	}
}

// Set the interactivity state.
wp_interactivity_state(
	'ncmfse/toggle-dark-mode',
	[]
);
$allowed_tags = ncmazfse_core_get_allowed_tags_with_svg();
$dark_icons = [
	1 => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>',
	2 => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M19.5483 18C20.7476 16.9645 21.5819 15.6272 22 14.1756C19.5473 14.4746 17.0369 13.3432 15.7234 11.1113C14.4099 8.87928 14.6664 6.1807 16.1567 4.2463C14.1701 3.75234 11.9929 3.98823 10.0779 5.07295C7.30713 6.64236 5.83056 9.56635 6.0155 12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M2 15.3739C3.13649 16.1865 4.59053 16.1865 5.72702 15.3739C6.41225 14.8754 7.31476 14.8754 7.99999 15.3739C9.13648 16.1865 10.6072 16.2049 11.727 15.3924M17 19.6352C15.8635 18.8226 14.4095 18.8226 13.273 19.6352C12.5877 20.1338 11.6685 20.1153 10.9833 19.6167C9.8468 18.8042 8.39277 18.8042 7.27299 19.6167C6.57104 20.1153 5.68524 20.1153 5 19.6167" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
</svg>',
	3 => '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24" stroke-width="1.5" stroke="currentColor" >
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
</svg>',
];
$light_icons = [
	1 => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" stroke="currentColor" stroke-width="1.5" />
    <path d="M12 2V3.5M12 20.5V22M19.0708 19.0713L18.0101 18.0106M5.98926 5.98926L4.9286 4.9286M22 12H20.5M3.5 12H2M19.0713 4.92871L18.0106 5.98937M5.98975 18.0107L4.92909 19.0714" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
</svg>',
	2 => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" stroke="currentColor" stroke-width="1.5" />
    <path d="M11.9955 3H12.0045M11.9961 21H12.0051M18.3588 5.63599H18.3678M5.63409 18.364H5.64307M5.63409 5.63647H5.64307M18.3582 18.3645H18.3672M20.991 12.0006H21M3 12.0006H3.00898" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>',
	3 => '<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000">
			<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
		</svg>',
];

$dark_icon = $dark_icons[$attributes['darkIcon']];
$light_icon = $light_icons[$attributes['lightIcon']];

?>

<a role="button" tabindex="0"
	<?php echo wp_kses_data(get_block_wrapper_attributes([])); ?>
	data-wp-interactive="ncmfse/toggle-dark-mode"
	<?php echo wp_kses_data(wp_interactivity_data_wp_context([])); ?>
	data-wp-init="callbacks.onInit"
	data-wp-on--click="actions.handleDarkModeToggle">

	<div class="wp-block-ncmfse-toggle-dark-mode__icon wp-block-ncmfse-toggle-dark-mode__icon--dark">
		<?php echo wp_kses($dark_icon, $allowed_tags); ?>
	</div>

	<div class="wp-block-ncmfse-toggle-dark-mode__icon wp-block-ncmfse-toggle-dark-mode__icon--light">
		<?php echo wp_kses($light_icon, $allowed_tags); ?>
	</div>
</a>

<?php if ($attributes['defaultMode'] === 'dark') :  ?>
	<script type="text/javascript">
		if (!localStorage.theme) {
			document.querySelectorAll(".wp-block-ncmfse-toggle-dark-mode__icon--dark").forEach((el) => el.classList.add("activated"));
			document.querySelectorAll(".wp-block-ncmfse-toggle-dark-mode__icon--light").forEach((el) => el.classList.remove("activated"));
		}
	</script>
<?php endif; ?>

<script type="text/javascript">
	if (localStorage.theme) {
		if (localStorage.theme === "dark") {
			document.querySelectorAll(".wp-block-ncmfse-toggle-dark-mode__icon--dark").forEach((el) => el.classList.add("activated"));
			document.querySelectorAll(".wp-block-ncmfse-toggle-dark-mode__icon--light").forEach((el) => el.classList.remove("activated"));
		} else {
			document.querySelectorAll(".wp-block-ncmfse-toggle-dark-mode__icon--dark").forEach((el) => el.classList.remove("activated"));
			document.querySelectorAll(".wp-block-ncmfse-toggle-dark-mode__icon--light").forEach((el) => el.classList.add("activated"));
		}
	}
</script>

<?php
if (!defined('IS_NCMFSE_TOOGLE_DARK_MODE_BLOCK_INSERTED')) {
	define('IS_NCMFSE_TOOGLE_DARK_MODE_BLOCK_INSERTED', '1');
}
?>
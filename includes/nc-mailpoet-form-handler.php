<?php

// Hiển thị danh sách list của MailPoet trong trang Editor. Phục vụ cho block Ncmaz MailPoet Form
add_action('admin_footer', 'ncmaz_fse_core_mailpoet_list_to_window');
function ncmaz_fse_core_mailpoet_list_to_window()
{
	// Kiểm tra xem MailPoet đã được cài đặt và kích hoạt chưa
	if (! class_exists(\MailPoet\API\API::class)) {
		return;
	}

	// Khởi tạo MailPoet API
	$mailpoet_api = \MailPoet\API\API::MP('v1');

	try {
		// Lấy tất cả các list
		$lists = $mailpoet_api->getLists();

		// thêm vào biến window
		echo '<script>window.mailpoetLists = ' . wp_json_encode($lists) . ';</script>';
	} catch (\Exception $e) {
		return;
	}
}

function ncmazfse_core__add_subscriber_to_mailpoet_list()
{
	check_ajax_referer('nc_mailpoet_form_nonce', 'security');

	$email = sanitize_email(wp_unslash($_POST['email'] ?? ""));
	$name = sanitize_text_field(wp_unslash($_POST['name'] ?? ""));
	$list_id = sanitize_text_field(wp_unslash($_POST['mailpoet_list_id'] ?? ""));

	if (empty($email)) {
		wp_send_json_error(__('Missing email address!', "ncmaz-fse-core"));
	} else if (!class_exists(\MailPoet\API\API::class)) {
		wp_send_json_error(__('MailPoet plugin is not installed or activated!', 'ncmaz-fse-core'));
	} else {
		try {
			$mailpoet_api = \MailPoet\API\API::MP('v1');

			$mailpoet_api->addSubscriber([
				'email' => $email,
				'first_name' =>  $name,
			], [$list_id]);
			wp_send_json_success(__('Success - Subscribed to the list!', 'ncmaz-fse-core'));
		} catch (\Exception $e) {
			wp_send_json_error($e->getMessage());
		}
	}
	wp_die();
}
add_action('wp_ajax_add_subscriber_to_mailpoet_list', 'ncmazfse_core__add_subscriber_to_mailpoet_list'); // Đăng ký action cho người dùng đã đăng nhập
add_action('wp_ajax_nopriv_add_subscriber_to_mailpoet_list', 'ncmazfse_core__add_subscriber_to_mailpoet_list'); // Đăng ký action cho người dùng chưa đăng nhập

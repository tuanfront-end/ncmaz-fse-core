<?php

function my_var_export($value)
{

    echo '<pre>';
    var_export($value);
    echo '</pre>';
}

if (!function_exists('ncmfse_core_getSpacingPresetCssVar')):
    function ncmfse_core_getSpacingPresetCssVar($value)
    {
        if (!$value) {
            return;
        }

        if (preg_match('/var:preset\|spacing\|(.+)/', $value, $matches)) {
            $slug = $matches[1];
            return "var(--wp--preset--spacing--{$slug})";
        }

        return $value;
    }
endif;

if (!function_exists('ncmfse_core_getColorPresetCssVar')):
    function ncmfse_core_getColorPresetCssVar($value)
    {
        if (!$value) {
            return;
        }

        if (preg_match('/var:preset\|color\|(.+)/', $value, $matches)) {
            $slug = $matches[1];
            return "var(--wp--preset--spacing--{$slug})";
        }

        return $value;
    }
endif;

if (!function_exists('ncmfse_core_check_href_is_active_with_current_url')):
    function ncmfse_core_check_href_is_active_with_current_url(String $href = "")
    {
        $href_query = wp_parse_url($href, PHP_URL_QUERY) ?? '';
        $href_path = wp_parse_url($href, PHP_URL_PATH) ?? '';
        $href_host = wp_parse_url($href, PHP_URL_HOST) ?? false;

        $HTTP_HOST = sanitize_text_field(wp_unslash($_SERVER['HTTP_HOST'] ?? ''));
        $REQUEST_URI = sanitize_text_field(wp_unslash($_SERVER['REQUEST_URI'] ?? ''));
        $QUERY_STRING = sanitize_text_field(wp_unslash($_SERVER['QUERY_STRING'] ?? ''));

        // truong hop href la 1 external link, thi bo qua
        // truong hop href la 1 internal link, thi kiem tra xem href co cung host voi server hay khong
        if (!$href_host || $href_host === $HTTP_HOST) {
            // [---TẠI SAO KHÔNG KIỂM TRA $atts['href'] LUÔN TỪ ĐÂY -> VÌ NGƯỜI DÙNG CÓ THỂ NHẬP $atts['href'] CÓ THỂ FULL-URL HOẶC CHỈ LÀ PATH HOẶC QUERY STRING---]

            // truong hop href bao gom path, thi phai so sanh path cua href va path cua server
            if ($href_path) {
                if ($href_path !== '/') {
                    // remove / at the end of href
                    $href_path_trimed = rtrim($href_path, '/');
                    $server_path_trimed = rtrim(str_replace('?' . $QUERY_STRING, "", $REQUEST_URI), '/');

                    // check same query string or not
                    if ($href_path_trimed === $server_path_trimed && $href_query === $QUERY_STRING) {
                        return true;
                    }
                } else {
                    // remove / at the end of href
                    $href_path_trimed = $href_path;
                    $server_path_trimed = str_replace('?' . $QUERY_STRING, "", $REQUEST_URI);

                    // check same query string or not
                    if ($href_path_trimed === $server_path_trimed && $href_query === $QUERY_STRING) {
                        return true;
                    }
                }
            } else {
                // truong hop href chi la query string, thi phai so sanh query string cua href va query string cua server
                if ($href_query === $QUERY_STRING) {
                    return true;
                }
            }
        }

        return false;
    }
endif;


if (!function_exists('ncmazfse_core_get_allowed_tags_with_svg')):
    function ncmazfse_core_get_allowed_tags_with_svg()
    {
        $kses_defaults = wp_kses_allowed_html('post');
        $svg_args = array(
            'svg'   => array(
                'class'           => true,
                'aria-hidden'     => true,
                'aria-labelledby' => true,
                'role'            => true,
                'xmlns'           => true,
                'width'           => true,
                'height'          => true,
                'fill'              => true,
                'color'          => true,
                'viewbox'         => true,
                'view-box'         => true,
                "stroke"          => true,
                "stroke-width"    => true,
            ),
            'g'     => array('fill' => true),
            'title' => array('title' => true),
            'path'  => array(
                'd'               => true,
                'fill'            => true,
                "stroke"          => true,
                "stroke-width"    => true,
                "stroke-linecap"  => true,
                "stroke-linejoin" => true,
            )
        );
        return array_merge($kses_defaults, $svg_args);
    }
endif;


if (!function_exists('ncmazfse_core_get_src_using_DOM')):
    function ncmazfse_core_get_src_using_DOM($html)
    {
        $doc = new DOMDocument();
        @$doc->loadHTML($html); // Sử dụng @ để tránh cảnh báo về HTML không hợp lệ
        $iframe = $doc->getElementsByTagName('iframe');
        if (!$iframe->length) {
            return '';
        }
        $iframe = $iframe->item(0);
        if ($iframe) {
            return $iframe->getAttribute('src');
        }
        return '';
    }
endif;


if (!function_exists("ncmazfse_core__update_post_meta_like_save_view_count")) :
    /**
     * 
     * @param int $post_id
     * @param string $meta_key // like_count / view_count / save_count
     * @param string $handle // remove or add
     * @return int
     * */

    function ncmazfse_core__update_post_meta_like_save_view_count($post_id, $meta_key, $handle)
    {

        // Kiểm tra xem post_id có hợp lệ không
        if (!$post_id || $meta_key !== 'like_count' || $meta_key !== 'view_count' || $meta_key !== 'save_count') {
            return 0;
        }

        // Lấy thông tin lượt like hiện tại
        $meta_count = get_post_meta($post_id, $meta_key, true);

        // Nếu meta_count không phải là số, hoặc không tồn tại, thì gán bằng 0
        if (!is_numeric($meta_count)) {
            $meta_count = 0;
        } else {
            $meta_count =  intval($meta_count);
        }

        // Nếu $handle là 'add', thì tăng lượt like lên 1
        if ($handle === 'add') {
            $meta_count++;
        } elseif ($handle === 'remove') {
            // Nếu $handle là 'remove', thì giảm lượt like đi 1
            $meta_count--;
        }

        // Cập nhật lượt like mới
        update_post_meta($post_id, $meta_key, $meta_count);

        // Trả về lượt like mới
        return $meta_count;
    }
endif;

/**
 * 
 * @param int $user_id
 * @param string $meta_key // like_count / view_count / save_count
 * @return array //array post_id
 * */
function ncmazfse_core__get_posts_like_save_view_by_user($user_id, $meta_key)
{
    // Lấy thông tin lượt like hiện tại của user meta: 1,3,22,33...
    $string_meta_ids = get_user_meta($user_id, $meta_key, true);

    // Nếu string_meta_ids không tồn tại hoặc không phải là chuỗi, thì gán bằng chuỗi rỗng
    if (!$string_meta_ids || !is_string($string_meta_ids)) {
        $string_meta_ids = '';
    }
    // convert to array
    $array_meta_ids = explode(',', $string_meta_ids);

    // check $array_meta_ids is array or not
    if (!is_array($array_meta_ids)) {
        $array_meta_ids = [];
    }

    return $array_meta_ids;
}


/**
 * 
 * @param int $user_id
 * @param int $post_id
 * @param string $meta_key // like_count / view_count / save_count
 * @param string $handle // remove or add
 * @return int
 * */
function ncmazfse_core__update_user_meta_like_save_view($user_id, $post_id, $meta_key, $handle)
{

    // Kiểm tra xem user_id và post_id có hợp lệ không
    if (!$user_id || !$post_id || $meta_key !== 'like_count' || $meta_key !== 'view_count' || $meta_key !== 'save_count') {
        return 0;
    }

    $array_meta_ids = ncmazfse_core__get_posts_like_save_view_by_user($user_id, $meta_key);

    // Nếu $handle là 'add', thì thêm post_id vào mảng
    if ($handle === 'add') {
        if (!in_array($post_id, $array_meta_ids)) {
            $array_meta_ids[] = $post_id;
        }
    } elseif ($handle === 'remove') {
        // Nếu $handle là 'remove', thì xóa post_id khỏi mảng
        $array_meta_ids = array_diff($array_meta_ids, [$post_id]);
    }

    // convert to string
    $string_meta_ids = implode(',', $array_meta_ids);

    // Cập nhật user meta mới
    update_user_meta($user_id, $meta_key, $string_meta_ids);

    // Trả về lượt like mới
    return count($array_meta_ids);
}


/**
 * 
 * @param int $user_id 
 * @param int $post_id
 * @param string $meta_key // like_count / view_count / save_count
 * @return bool
 * */
function ncmazfse_core__check_user_is_like_save_view($user_id, $post_id, $meta_key)
{

    // Kiểm tra xem user_id và post_id có hợp lệ không
    if (!$user_id || !$post_id || $meta_key !== 'like_count' || $meta_key !== 'view_count' || $meta_key !== 'save_count') {
        return false;
    }

    // Lấy thông tin lượt like hiện tại của user meta: 1,3,22,33...
    $string_meta_ids = get_user_meta($user_id, $meta_key, true);

    // Nếu string_meta_ids không tồn tại hoặc không phải là chuỗi, thì gán bằng chuỗi rỗng
    if (!$string_meta_ids || !is_string($string_meta_ids)) {
        $string_meta_ids = '';
    }
    // convert to array
    $array_meta_ids = explode(',', $string_meta_ids);

    // check $array_meta_ids is array or not
    if (!is_array($array_meta_ids)) {
        $array_meta_ids = [];
    }

    // Nếu post_id có trong mảng, thì trả về true
    return in_array($post_id, $array_meta_ids);
}


/**
 *  
 * @param string $cookie_key // saved_posts / liked_posts / viewed_posts
 * @return array //array post_id
 * */
function ncmazfse_core__get_like_save_view_posts_from_cookie($cookie_key)
{
    $ids = json_decode(sanitize_text_field(wp_unslash($_COOKIE[$cookie_key] ?? '[]')));
    if (! $ids || ! is_array($ids)) {
        return [];
    }
    return $ids;
}


/**
 * 
 * @param int $post_id
 * @param string $handle // remove or add
 * @param string $cookie_key // saved_posts / liked_posts / viewed_posts
 * @return void
 * */
function ncmazfse_core__update_like_save_view_posts_cookie($post_id, $cookie_key, $handle)
{
    $ids = ncmazfse_core__get_like_save_view_posts_from_cookie($cookie_key);

    if ($handle === 'remove') {
        $ids = array_diff($ids, array($post_id));
    } elseif ($handle === 'add') {
        $ids[] = $post_id;
    }
    setcookie($cookie_key, wp_json_encode($ids), time() + 3600 * 24 * 30, '/');
}

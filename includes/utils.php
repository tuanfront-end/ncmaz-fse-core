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

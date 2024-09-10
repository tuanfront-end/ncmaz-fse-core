<?php

function my_var_export($value)
{

    echo '<pre>';
    var_export($value);
    echo '</pre>';
}

function ncmfse_getSpacingPresetCssVar($value)
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

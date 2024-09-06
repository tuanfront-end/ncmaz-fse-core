<?php


/**
 * Generate markup for the HTML element that will be used for the overlay.
 *
 * @since 6.1.0
 *
 * @param array $attributes Block attributes.
 *
 * @return string HTML markup in string format.
 */
if (!function_exists('ncmazfse_get_block_term_featured_img_overlay_element_markup')):
    function ncmazfse_get_block_term_featured_img_overlay_element_markup($attributes)
    {
        $has_dim_background  = isset($attributes['dimRatio']) && $attributes['dimRatio'];
        $has_gradient        = isset($attributes['gradient']) && $attributes['gradient'];
        $has_custom_gradient = isset($attributes['customGradient']) && $attributes['customGradient'];
        $has_solid_overlay   = isset($attributes['overlayColor']) && $attributes['overlayColor'];
        $has_custom_overlay  = isset($attributes['customOverlayColor']) && $attributes['customOverlayColor'];
        $class_names         = array('wp-block-ncmfse-term-featured-img__overlay');
        $styles              = array();

        if (! $has_dim_background) {
            return '';
        }

        // Apply border classes and styles.
        $border_attributes = get_block_core_post_featured_image_border_attributes($attributes);

        if (! empty($border_attributes['class'])) {
            $class_names[] = $border_attributes['class'];
        }

        if (! empty($border_attributes['style'])) {
            $styles[] = $border_attributes['style'];
        }

        // Apply overlay and gradient classes.
        if ($has_dim_background) {
            $class_names[] = 'has-background-dim';
            $class_names[] = "has-background-dim-{$attributes['dimRatio']}";
        }

        if ($has_solid_overlay) {
            $class_names[] = "has-{$attributes['overlayColor']}-background-color";
        }

        if ($has_gradient || $has_custom_gradient) {
            $class_names[] = 'has-background-gradient';
        }

        if ($has_gradient) {
            $class_names[] = "has-{$attributes['gradient']}-gradient-background";
        }

        // Apply background styles.
        if ($has_custom_gradient) {
            $styles[] = sprintf('background-image: %s;', $attributes['customGradient']);
        }

        if ($has_custom_overlay) {
            $styles[] = sprintf('background-color: %s;', $attributes['customOverlayColor']);
        }

        return sprintf(
            '<span class="%s" style="%s" aria-hidden="true"></span>',
            esc_attr(implode(' ', $class_names)),
            esc_attr(safecss_filter_attr(implode(' ', $styles)))
        );
    }
endif;
/**
 * Generates class names and styles to apply the border support styles for
 * the Post Featured Image block.
 *
 * @since 6.1.0
 *
 * @param array $attributes The block attributes.
 * @return array The border-related classnames and styles for the block.
 */
if (!function_exists('ncmazfse_get_block_term_featured_img_border_attributes')):
    function ncmazfse_get_block_term_featured_img_border_attributes($attributes)
    {
        $border_styles = array();
        $sides         = array('top', 'right', 'bottom', 'left');

        // Border radius.
        if (isset($attributes['style']['border']['radius'])) {
            $border_styles['radius'] = $attributes['style']['border']['radius'];
        }

        // Border style.
        if (isset($attributes['style']['border']['style'])) {
            $border_styles['style'] = $attributes['style']['border']['style'];
        }

        // Border width.
        if (isset($attributes['style']['border']['width'])) {
            $border_styles['width'] = $attributes['style']['border']['width'];
        }

        // Border color.
        $preset_color           = array_key_exists('borderColor', $attributes) ? "var:preset|color|{$attributes['borderColor']}" : null;
        $custom_color           = $attributes['style']['border']['color'] ?? null;
        $border_styles['color'] = $preset_color ? $preset_color : $custom_color;

        // Individual border styles e.g. top, left etc.
        foreach ($sides as $side) {
            $border                 = $attributes['style']['border'][$side] ?? null;
            $border_styles[$side] = array(
                'color' => isset($border['color']) ? $border['color'] : null,
                'style' => isset($border['style']) ? $border['style'] : null,
                'width' => isset($border['width']) ? $border['width'] : null,
            );
        }

        $styles     = wp_style_engine_get_styles(array('border' => $border_styles));
        $attributes = array();
        if (! empty($styles['classnames'])) {
            $attributes['class'] = $styles['classnames'];
        }
        if (! empty($styles['css'])) {
            $attributes['style'] = $styles['css'];
        }
        return $attributes;
    }
endif;



// get the term object if current on a term archive page or from the term query loop block context
if (!function_exists('ncmazfse_get_term_from_termIdContext_or_archivePage')):
    function ncmazfse_get_term_from_termIdContext_or_archivePage(string $termIdContext, string $termTaxonomyContext)
    {
        if (! $termIdContext && !is_tax() && !is_category() && !is_tag()) {
            return;
        }
        if ($termIdContext) {
            $term = get_term($termIdContext, $termTaxonomyContext); //from the term query loop block context
        } else {
            // get the term id if current on a term archive page
            $term = get_queried_object();
        }
        return $term;
    }
endif;

import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { PanelBody, RangeControl, SelectControl } from "@wordpress/components";
import { useEntityProp } from "@wordpress/core-data";
import {
	AlignmentControl,
	BlockControls,
	useBlockProps,
	InspectorControls,
	RichText,
	__experimentalUseBorderProps as useBorderProps,
	__experimentalUseColorProps as useColorProps,
	__experimentalGetSpacingClassesAndStyles as useSpacingProps,
	__experimentalGetShadowClassesAndStyles as useShadowProps,
	__experimentalLinkControl as LinkControl,
	__experimentalGetElementClassName,
	store as blockEditorStore,
	useBlockEditingMode,
} from "@wordpress/block-editor";
import clsx from "clsx";

import "./editor.scss";
import { EditProps } from "../types";

interface Attributes {
	isLiked: boolean;
	iconStyle: "clap" | "heart";
	style: Record<string, any>;
}

export default function Edit(props: EditProps<Attributes>) {
	const {
		attributes,
		setAttributes,
		context: { postType, postId, ...args },
	} = props;

	const { isLiked, iconStyle, style } = attributes;

	const [meta, updateMeta] = useEntityProp(
		"postType",
		postType,
		"meta",
		postId,
	);

	const [storedFeaturedImage, setFeaturedImage] = useEntityProp(
		"postType",
		postType,
		"featured_media",
		postId,
	);

	console.log(222, { meta, storedFeaturedImage });

	const borderProps = useBorderProps(attributes);
	const colorProps = useColorProps(attributes);
	const spacingProps = useSpacingProps(attributes);
	const shadowProps = useShadowProps(attributes);

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Rating", "multiblock-plugin")}>
					<SelectControl
						label={__("Rating Style", "multiblock-plugin")}
						// onChange={onChangeRatingStyle}
						value={iconStyle}
						options={[
							{
								label: __("Star", "multiblock-plugin"),
								value: "star",
							},
							{
								label: __("Heart", "multiblock-plugin"),
								value: "heart",
							},
						]}
					/>
				</PanelBody>
			</InspectorControls>
			<div
				{...useBlockProps({
					className: clsx(
						"wp-block-button__link",
						colorProps.className,
						borderProps.className,
						{
							// For backwards compatibility add style that isn't
							// provided via block support.
							"no-border-radius": style?.border?.radius === 0,
						},
						__experimentalGetElementClassName("button"),
					),
					style: {
						...borderProps.style,
						...colorProps.style,
						...spacingProps.style,
						...shadowProps.style,
					},
				})}
			>
				<p>
					<span>112 {isLiked ? "Liked" : "Not Liked"}</span>
				</p>
			</div>
		</>
	);

	// Other code will go here, don't forget or delete the closing curly brace!
}

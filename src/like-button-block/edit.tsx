import { __ } from "@wordpress/i18n";
import { PanelBody, SelectControl } from "@wordpress/components";
import { useEntityRecords } from "@wordpress/core-data";
import {
	InspectorControls,
	useBlockProps,
	__experimentalGetSpacingClassesAndStyles as useSpacingProps,
	__experimentalGetGapCSSValue as getGapCSSValue,
	InnerBlocks,
} from "@wordpress/block-editor";
import "./editor.scss";
import { EditProps } from "../types";

interface Attributes {
	iconStyle: "star" | "heart" | "like";
	style: Record<string, any>;
}

export default function Edit(props: EditProps<Attributes>) {
	const {
		attributes,
		setAttributes,
		context: { postId },
	} = props;

	const { iconStyle } = attributes;

	const { records } = useEntityRecords("postType", "post_like", {
		post_status: "publish",
		per_page: -1,
		meta_key: "post_id",
		meta_value: postId,
	});
	const postLikesCount = records?.length || 0;

	const onChangeIconStyle = (iconStyle: string) => {
		setAttributes({ iconStyle: iconStyle as Attributes["iconStyle"] });
	};

	const spacingProps = useSpacingProps(attributes);
	const gapCSSValue = getGapCSSValue(attributes.style?.spacing?.blockGap);

	console.log(11, { attributes, spacingProps, gapCSSValue });

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Like Button", "ncmaz-fse-core")}>
					<SelectControl
						label={__("Icon Style", "ncmaz-fse-core")}
						onChange={onChangeIconStyle}
						value={iconStyle}
						options={
							[
								{
									label: __("Star", "ncmaz-fse-core"),
									value: "star",
								},
								{
									label: __("Heart", "ncmaz-fse-core"),
									value: "heart",
								},
								{
									label: __("Like", "ncmaz-fse-core"),
									value: "like",
								},
							] as {
								label: string;
								value: Attributes["iconStyle"];
							}[]
						}
					/>
				</PanelBody>
			</InspectorControls>
			<div
				{...useBlockProps({
					className: "nc-post-like-button",
					style: {
						gap: gapCSSValue,
						...spacingProps.style,
					},
				})}
			>
				{/* insert Innerblock */}
				<InnerBlocks />

				{/* <div className="nc-post-like-button__icon">
					{iconStyle === "star" && (
						<StarIcon width={20} height={20} color="currentColor" />
					)}
					{iconStyle === "heart" && (
						<FavouriteIcon width={20} height={20} color="currentColor" />
					)}
					{iconStyle === "like" && (
						<ThumbsUpIcon width={20} height={20} color="currentColor" />
					)}
				</div> */}

				<span className="nc-post-like-button__count">{postLikesCount}</span>
			</div>
		</>
	);
}

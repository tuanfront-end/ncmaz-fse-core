import { __ } from "@wordpress/i18n";
import { PanelBody, SelectControl } from "@wordpress/components";
import { useEntityRecords } from "@wordpress/core-data";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import "./editor.scss";
import { EditProps } from "../types";
import { FavouriteIcon, StarIcon, ThumbsUpIcon } from "../components/Icon";

interface Attributes {
	isLiked: boolean;
	iconStyle: "star" | "heart" | "like";
	style: Record<string, any>;
}

export default function Edit(props: EditProps<Attributes>) {
	const {
		attributes,
		setAttributes,
		context: { postId, postType },
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
			<div {...useBlockProps()}>
				<button className="nc-post-like-button">
					<span>
						{iconStyle === "star" && (
							<StarIcon width={20} height={20} color="currentColor" />
						)}
						{iconStyle === "heart" && (
							<FavouriteIcon width={20} height={20} color="currentColor" />
						)}
						{iconStyle === "like" && (
							<ThumbsUpIcon width={20} height={20} color="currentColor" />
						)}
					</span>

					<span>{postLikesCount}</span>
				</button>
			</div>
		</>
	);

	// Other code will go here, don't forget or delete the closing curly brace!
}

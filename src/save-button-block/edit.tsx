import { __ } from "@wordpress/i18n";
import { PanelBody, SelectControl } from "@wordpress/components";
import { useEntityRecords } from "@wordpress/core-data";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import "./editor.scss";
import { EditProps } from "../types";
import { AllBookmarkIcon, Bookmark02Icon } from "../components/Icon";

interface Attributes {
	iconStyle: "bookmarkIcon1" | "bookmarkIcon2";
	style: Record<string, any>;
}

export default function Edit(props: EditProps<Attributes>) {
	const {
		attributes,
		setAttributes,
		context: { postId, postType },
	} = props;

	const { iconStyle } = attributes;

	const { records } = useEntityRecords("postType", "post_save", {
		post_status: "publish",
		per_page: -1,
		meta_key: "post_id",
		meta_value: postId,
	});
	const postSavesCount = records?.length || 0;

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
									label: __("Bookmark Icon 2", "ncmaz-fse-core"),
									value: "bookmarkIcon1",
								},
								{
									label: __("Bookmark Icon 2", "ncmaz-fse-core"),
									value: "bookmarkIcon2",
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
				<button className="nc-post-save-button">
					<span>
						{iconStyle === "bookmarkIcon1" && (
							<Bookmark02Icon width={20} height={20} color="currentColor" />
						)}
						{iconStyle === "bookmarkIcon2" && (
							<AllBookmarkIcon width={20} height={20} color="currentColor" />
						)}
					</span>

					<span>{postSavesCount}</span>
				</button>
			</div>
		</>
	);

	// Other code will go here, don't forget or delete the closing curly brace!
}

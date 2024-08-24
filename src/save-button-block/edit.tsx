import { __ } from "@wordpress/i18n";
import {
	PanelBody,
	SelectControl,
	FormToggle,
	CheckboxControl,
} from "@wordpress/components";
import { useEntityRecords } from "@wordpress/core-data";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import "./editor.scss";
import { EditProps } from "../types";
import { AllBookmarkIcon, Bookmark02Icon } from "../components/Icon";

interface Attributes {
	iconStyle: "bookmarkIcon1" | "bookmarkIcon2";
	showCount: boolean;
	style: Record<string, any>;
}

export default function Edit(props: EditProps<Attributes>) {
	const {
		attributes,
		setAttributes,
		context: { postId, postType },
	} = props;

	const { iconStyle, showCount } = attributes;

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
									label: __("Bookmark Icon 1", "ncmaz-fse-core"),
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
					<CheckboxControl
						__nextHasNoMarginBottom
						checked={showCount}
						label={__("Show Count Number", "ncmaz-fse-core")}
						onChange={(e) => setAttributes({ showCount: e })}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				<div className="nc-post-save-button">
					<div className="nc-post-save-button__icon">
						{iconStyle === "bookmarkIcon1" && (
							<Bookmark02Icon width={20} height={20} color="currentColor" />
						)}
						{iconStyle === "bookmarkIcon2" && (
							<AllBookmarkIcon width={20} height={20} color="currentColor" />
						)}
					</div>

					{!!showCount && (
						<span className="nc-post-save-button__count">{postSavesCount}</span>
					)}
				</div>
			</div>
		</>
	);

	// Other code will go here, don't forget or delete the closing curly brace!
}

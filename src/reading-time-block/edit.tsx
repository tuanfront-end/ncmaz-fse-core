import { __ } from "@wordpress/i18n";
import { PanelBody, SelectControl } from "@wordpress/components";
import { useEntityRecords } from "@wordpress/core-data";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import "./editor.scss";
import { EditProps } from "../types";
import { Comment01Icon, Message02Icon } from "../components/Icon";

interface Attributes {
	iconStyle: "commentIcon1" | "commentIcon2";
	style: Record<string, any>;
}

export default function Edit(props: EditProps<Attributes>) {
	const {
		attributes,
		setAttributes,
		context: { postId },
	} = props;

	const { iconStyle } = attributes;

	const { records } = useEntityRecords("root", "comment", {
		per_page: -1,
		post: postId,
	});

	const commentCount = records?.length || 0;

	const onChangeIconStyle = (iconStyle: string) => {
		setAttributes({ iconStyle: iconStyle as Attributes["iconStyle"] });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Comment Button", "ncmaz-fse-core")}>
					<SelectControl
						label={__("Icon Style", "ncmaz-fse-core")}
						onChange={onChangeIconStyle}
						value={iconStyle}
						options={
							[
								{
									label: __("Comment Icon 1", "ncmaz-fse-core"),
									value: "commentIcon1",
								},
								{
									label: __("Comment Icon 2", "ncmaz-fse-core"),
									value: "commentIcon2",
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
				<div className="nc-post-save-button">
					<div className="nc-post-save-button__icon">
						{iconStyle === "commentIcon1" && (
							<Comment01Icon width={20} height={20} color="currentColor" />
						)}
						{iconStyle === "commentIcon2" && (
							<Message02Icon width={20} height={20} color="currentColor" />
						)}
					</div>

					<span className="nc-post-save-button__count">{commentCount}</span>
				</div>
			</div>
		</>
	);

	// Other code will go here, don't forget or delete the closing curly brace!
}

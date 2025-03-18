import { __ } from "@wordpress/i18n";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";
import { TAttrs, EditProps } from "../types";
import metadata from "./block.json";
import { PanelBody } from "@wordpress/components";

type Attributes = TAttrs<typeof metadata.attributes>;

function Edit(props: EditProps<Attributes>) {
	const {
		clientId,
		attributes,
		setAttributes,
		context: {},
	} = props;

	const {} = attributes;

	const blockProps = useBlockProps();

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Settings", "ncmfse")}>
					{/* <ToggleControl
						__nextHasNoMarginBottom
						label={__("Show Count", "ncmfse")}
						help={__("Show/Hide count number", "ncmfse")}
						checked={showCountText}
						onChange={(newValue) => {
							setAttributes({ showCountText: newValue });
						}}
					/> */}
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<figure className="wp-block-video">
					<video controls src="placeholder"></video>
				</figure>
				<p
					style={{
						fontSize: 14,
						padding: 16,
						border: "1px solid #d1d5db",
						borderRadius: 4,
						fontStyle: "italic",
					}}
				>
					{__(
						"Display video/iframe player for posts with video format!",
						"ncmfse",
					)}
				</p>
			</div>
		</>
	);
}

export default Edit;

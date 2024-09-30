import { __ } from "@wordpress/i18n";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";
import { TAttrs, EditProps } from "../types";
import metadata from "./block.json";
import { PanelBody, TextControl } from "@wordpress/components";

type Attributes = TAttrs<typeof metadata.attributes>;

function Edit(props: EditProps<Attributes>) {
	const { clientId, attributes, setAttributes } = props;
	const { selector } = attributes;
	const blockProps = useBlockProps();

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Settings", "ncmfse")}>
					<TextControl
						label={__("Selector", "ncmfse")}
						value={selector}
						onChange={(newValue) => {
							setAttributes({ selector: newValue });
						}}
						__nextHasNoMarginBottom
						help={__(
							'Selector to calculate the reading progress. Tip: Find the unique class of the block you want to calculate the reading progress for, otherwise add an "Additional CSS class" to it in the Advanced settings.',
							"ncmfse",
						)}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<span className="wp-block-ncmfse-reading-progress__number">10%</span>
			</div>
		</>
	);
}

export default Edit;

import { __ } from "@wordpress/i18n";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";
import { TAttrs, EditProps } from "../types";
import metadata from "./block.json";
import {
	PanelBody,
	ToggleControl,
	__experimentalNumberControl as NumberControl,
	RangeControl,
} from "@wordpress/components";
// @ts-ignore
import FeEditorPng from "./fe-editor.png";

type Attributes = TAttrs<typeof metadata.attributes>;

function Edit(props: EditProps<Attributes>) {
	const {
		clientId,
		attributes,
		setAttributes,
		context: {},
	} = props;

	const {
		maxCategoriesSelect,
		maxFileSizeUpload,
		maxTagsSelect,
		multiCategorySelect,
	} = attributes;

	const blockProps = useBlockProps();

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Settings", "ncmfse")}>
					<ToggleControl
						__nextHasNoMarginBottom
						label={__("Multi Category Select", "ncmfse")}
						help={__(
							"Controls whether to allow multiple categories to be selected.",
							"ncmfse",
						)}
						checked={multiCategorySelect}
						onChange={(newValue) => {
							setAttributes({ multiCategorySelect: newValue });
						}}
					/>
					<NumberControl
						__next40pxDefaultSize
						onChange={(newValue) => {
							if (typeof newValue === "number") {
								setAttributes({ maxCategoriesSelect: newValue });
							}
						}}
						label={__("Max Categories Select", "ncmfse")}
						shiftStep={1}
						value={maxCategoriesSelect}
					/>
					<NumberControl
						__next40pxDefaultSize
						onChange={(newValue) => {
							if (typeof newValue === "number") {
								setAttributes({ maxTagsSelect: newValue });
							}
						}}
						label={__("Max Tags Select", "ncmfse")}
						shiftStep={1}
						value={maxTagsSelect}
					/>
					<RangeControl
						__next40pxDefaultSize
						__nextHasNoMarginBottom
						help="Controls the maximum file size for uploads in MB."
						initialPosition={50}
						label="File Size"
						max={100}
						min={0}
						value={maxFileSizeUpload}
						onChange={(value) => {
							if (typeof value === "number") {
								setAttributes({ maxFileSizeUpload: value });
							}
						}}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<img src={FeEditorPng} alt="Front-end Editor Block" />
			</div>
		</>
	);
}

export default Edit;

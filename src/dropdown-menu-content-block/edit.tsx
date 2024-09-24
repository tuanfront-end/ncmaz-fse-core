import { __ } from "@wordpress/i18n";
import { PanelBody, TextControl, ToggleControl } from "@wordpress/components";
import {
	useBlockProps,
	InspectorControls,
	InnerBlocks,
	HeightControl,
} from "@wordpress/block-editor";
import "./editor.scss";
import { EditProps, TAttrs } from "../types";
import metadata from "./block.json";

type Attributes = TAttrs<typeof metadata.attributes>;

export default function Edit(props: EditProps<Attributes>) {
	const { attributes, setAttributes, isSelected } = props;
	const {} = attributes;

	const blockProps = useBlockProps({});

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Settings", "ncmfse")}>
					{/* <HeightControl
						label={"My Height Control"}
						onChange={(value) => setAttributes({ imageHeight: value })}
						value={imageHeight}
					/> */}
					{/* <TextControl
						__nextHasNoMarginBottom
						label={__("Text", "ncmfse")}
						value={minReadText}
						onChange={(value) => setAttributes({ minReadText: value })}
					/> */}

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
				<InnerBlocks
					template={[
						[
							"core/paragraph",
							{
								content: "Label Menu",
								style: {
									typography: {
										fontSize: "0.875rem",
										fontWeight: "500",
									},
									spacing: {
										padding: {
											right: "0.5rem",
											bottom: "0.5rem",
											left: "0.5rem",
										},
									},
								},
							},
						],
						[
							"core/separator",
							{
								style: {
									spacing: {
										margin: { top: "0.25rem", bottom: "0.25rem" },
									},
								},
							},
						],
						["ncmfse/dropdown-menu-item", {}],
						["ncmfse/dropdown-menu-item", {}],
						["ncmfse/dropdown-menu-item", {}],
						[
							"core/separator",
							{
								style: {
									spacing: {
										margin: { top: "0.25rem", bottom: "0.25rem" },
									},
								},
							},
						],
						["ncmfse/dropdown-menu-item", {}],
						["ncmfse/dropdown-menu-item", {}],
					]}
					templateLock={false}
				/>
			</div>
		</>
	);
}

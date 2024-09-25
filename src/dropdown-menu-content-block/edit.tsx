import { __ } from "@wordpress/i18n";
import { PanelBody } from "@wordpress/components";
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
	const { attributes, setAttributes } = props;
	const { minWidth } = attributes;

	const blockProps = useBlockProps({
		style: {
			minWidth: minWidth || "180px",
		},
	});

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Settings", "ncmfse")}>
					<HeightControl
						label={__("Min Width", "ncmfse")}
						onChange={(value) => setAttributes({ minWidth: value })}
						value={minWidth}
					/>
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
											top: "0.25rem",
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
										margin: { top: "0.125rem", bottom: "0.25rem" },
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

import { __ } from "@wordpress/i18n";
import { PanelBody, TextControl, ToggleControl } from "@wordpress/components";
import {
	useBlockProps,
	InspectorControls,
	useInnerBlocksProps,
	InnerBlocks,
} from "@wordpress/block-editor";
import "./editor.scss";
import { EditProps, TAttrs } from "../types";
import metadata from "./block.json";

type Attributes = TAttrs<typeof metadata.attributes>;

export default function Edit(props: EditProps<Attributes>) {
	const { attributes, setAttributes, isSelected } = props;

	const {} = attributes;

	const blockProps = useBlockProps({});
	const { children, ...innerBlocksProps } = useInnerBlocksProps(blockProps, {
		template: [
			[
				"outermost/icon-block",
				{
					icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none"><path d="M7.78256 17.1112C6.68218 17.743 3.79706 19.0331 5.55429 20.6474C6.41269 21.436 7.36872 22 8.57068 22H15.4293C16.6313 22 17.5873 21.436 18.4457 20.6474C20.2029 19.0331 17.3178 17.743 16.2174 17.1112C13.6371 15.6296 10.3629 15.6296 7.78256 17.1112Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M15.5 10C15.5 11.933 13.933 13.5 12 13.5C10.067 13.5 8.5 11.933 8.5 10C8.5 8.067 10.067 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10Z" stroke="currentColor" stroke-width="1.5" /><path d="M2.854 16C2.30501 14.7664 2 13.401 2 11.9646C2 6.46129 6.47715 2 12 2C17.5228 2 22 6.46129 22 11.9646C22 13.401 21.695 14.7664 21.146 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /></svg>',
					iconColorValue: "#334155",
					iconBackgroundColorValue: "#f3f4f6",
					itemsJustification: "center",
					width: "40px",
					hasNoIconFill: true,
					style: {
						border: {
							radius: "99px",
						},
						spacing: {
							padding: "8px",
						},
					},
				},
			],
		],
	});

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Reading Time", "ncmfse")}>
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
				<InnerBlocks templateLock={false} />
				{/* <div {...innerBlocksProps}>{children}</div> */}
			</div>
		</>
	);
}

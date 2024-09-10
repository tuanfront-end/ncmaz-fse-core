import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from "@wordpress/block-editor";
import "./editor.scss";
import { TAttrs, EditProps } from "../types";
import metadata from "./block.json";
import { useUpdateLayoutFromDefault } from "../hooks/hooks";
import { PanelBody, ToggleControl } from "@wordpress/components";

type Attributes = TAttrs<typeof metadata.attributes>;

function Edit(props: EditProps<Attributes>) {
	const { attributes, setAttributes } = props;

	// Update layout from default layout when block is first loaded.
	useUpdateLayoutFromDefault(setAttributes, attributes.layout);

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Settings", "ncmfse")}>
					<ToggleControl
						label={__("Stack in the middle of the Carousel", "ncmfse")}
						help={__(
							"If enabled, the arrows will be stacked in the middle of the carousel.",
							"ncmfse",
						)}
						checked={!!attributes.stackInMiddle}
						onChange={(stackInMiddle) => setAttributes({ stackInMiddle })}
					/>
				</PanelBody>
			</InspectorControls>

			<div
				{...useBlockProps({
					className: attributes.stackInMiddle
						? "nc-is-stack-in-middle gap-2"
						: "gap-2",
				})}
			>
				{/* insert Innerblock */}
				<InnerBlocks
					allowedBlocks={[
						"ncmfse/snap-scroll-arrow-previous",
						"ncmfse/snap-scroll-arrow-next",
					]}
					template={[
						["ncmfse/snap-scroll-arrow-previous", {}],
						["ncmfse/snap-scroll-arrow-next", {}],
					]}
					templateLock="insert"
				/>
			</div>
		</>
	);
}

export default Edit;

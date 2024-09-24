import { __ } from "@wordpress/i18n";
import { PanelBody, TextControl, ToggleControl } from "@wordpress/components";
import { useDispatch } from "@wordpress/data";
import { useInstanceId } from "@wordpress/compose";
import { useEffect } from "@wordpress/element";
import {
	useBlockProps,
	InspectorControls,
	InnerBlocks,
	store as blockEditorStore,
	HeightControl,
} from "@wordpress/block-editor";
import "./editor.scss";
import { EditProps, TAttrs } from "../types";
import metadata from "./block.json";

type Attributes = TAttrs<typeof metadata.attributes>;

export default function Edit(props: EditProps<Attributes>) {
	const { attributes, setAttributes, isSelected, clientId } = props;
	const instanceId = useInstanceId(Edit);
	const { dropdownMenuId } = attributes;

	const { __unstableMarkNextChangeAsNotPersistent } =
		useDispatch(blockEditorStore);

	useEffect(() => {
		if (!Number.isFinite(dropdownMenuId)) {
			__unstableMarkNextChangeAsNotPersistent();
			setAttributes({ dropdownMenuId: instanceId });
		}
	}, [dropdownMenuId, instanceId]);

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
						["ncmfse/dropdown-menu-trigger", {}],
						["ncmfse/dropdown-menu-content", {}],
					]}
					templateLock="all"
				/>
			</div>
		</>
	);
}

import { __ } from "@wordpress/i18n";
import { useDispatch } from "@wordpress/data";
import { useInstanceId } from "@wordpress/compose";
import { useEffect } from "@wordpress/element";
import {
	useBlockProps,
	InnerBlocks,
	store as blockEditorStore,
	InspectorControls,
} from "@wordpress/block-editor";
import "./editor.scss";
import { EditProps, TAttrs } from "../types";
import metadata from "./block.json";
import {
	PanelBody,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from "@wordpress/components";

type Attributes = TAttrs<typeof metadata.attributes>;

export default function Edit(props: EditProps<Attributes>) {
	const { attributes, setAttributes } = props;
	const instanceId = useInstanceId(Edit);
	const { dropdownMenuId, menuType } = attributes;

	const { __unstableMarkNextChangeAsNotPersistent } =
		useDispatch(blockEditorStore);

	useEffect(() => {
		if (!Number.isFinite(dropdownMenuId)) {
			__unstableMarkNextChangeAsNotPersistent();
			setAttributes({ dropdownMenuId: instanceId });
		}
	}, [dropdownMenuId, instanceId]);

	const blockProps = useBlockProps();

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Settings", "ncmfse")}>
					<ToggleGroupControl
						__nextHasNoMarginBottom
						isBlock
						label="Menu type"
						onChange={(value) => setAttributes({ menuType: value as string })}
						value={menuType}
					>
						<ToggleGroupControlOption label={__("Dropdown")} value="dropdown" />
						<ToggleGroupControlOption label={__("Popover")} value="popover" />
					</ToggleGroupControl>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<InnerBlocks
					template={[
						["ncmfse/dropdown-menu-trigger", {}],
						[
							"ncmfse/dropdown-menu-content",
							{
								style: {
									spacing: {
										blockGap: "1px",
									},
								},
							},
						],
					]}
					templateLock="all"
				/>
			</div>
		</>
	);
}

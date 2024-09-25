import { __ } from "@wordpress/i18n";
import { useDispatch } from "@wordpress/data";
import { useInstanceId } from "@wordpress/compose";
import { useEffect } from "@wordpress/element";
import {
	useBlockProps,
	InnerBlocks,
	store as blockEditorStore,
} from "@wordpress/block-editor";
import "./editor.scss";
import { EditProps, TAttrs } from "../types";
import metadata from "./block.json";

type Attributes = TAttrs<typeof metadata.attributes>;

export default function Edit(props: EditProps<Attributes>) {
	const { attributes, setAttributes } = props;
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

	const blockProps = useBlockProps();

	return (
		<>
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

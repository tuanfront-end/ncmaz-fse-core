import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import "./editor.scss";
import { EditProps, TAttrs } from "../types";
import metadata from "./block.json";

type Attributes = TAttrs<typeof metadata.attributes>;

export default function Edit(props: EditProps<Attributes>) {
	const blockProps = useBlockProps();

	return (
		<>
			<div {...blockProps}>
				<InnerBlocks
					template={[
						[
							"core/button",
							{
								text: __("Open menu"),
							},
						],
					]}
					templateLock={false}
				/>
			</div>
		</>
	);
}

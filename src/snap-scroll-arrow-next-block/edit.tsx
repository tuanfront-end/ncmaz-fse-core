import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { TAttrs, EditProps } from "../types";
import metadata from "./block.json";
import "./editor.scss";

type Attributes = TAttrs<typeof metadata.attributes>;

function Edit(props: EditProps<Attributes>) {
	return (
		<>
			<button
				{...useBlockProps({
					className: "",
				})}
			>
				{/* insert Innerblock */}
				<InnerBlocks
					allowedBlocks={["outermost/icon-block"]}
					template={[
						[
							"outermost/icon-block",
							{
								icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>',
								itemsJustification: "center",
								hasNoIconFill: true,
								width: 44,
							},
						],
					]}
					templateLock="insert"
				/>
			</button>
		</>
	);

	// Other code will go here, don't forget or delete the closing curly brace!
}

export default Edit;

import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { TAttrs, EditProps } from "../types";
import metadata from "./block.json";
import "./editor.scss";

type Attributes = TAttrs<typeof metadata.attributes>;

function Edit(props: EditProps<Attributes>) {
	return (
		<>
			<a
				{...useBlockProps({
					className: "",
				})}
				role="button"
			>
				{/* insert Innerblock */}
				<InnerBlocks
					allowedBlocks={["outermost/icon-block"]}
					template={[
						[
							"outermost/icon-block",
							{
								icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /></svg>',
								itemsJustification: "center",
								hasNoIconFill: true,
								width: 42,
							},
						],
					]}
					templateLock="insert"
				/>
			</a>
		</>
	);

	// Other code will go here, don't forget or delete the closing curly brace!
}

export default Edit;

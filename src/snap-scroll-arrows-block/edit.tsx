import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import "./editor.scss";
import { TAttrs, EditProps } from "../types";
import metadata from "./block.json";

type Attributes = TAttrs<typeof metadata.attributes>;

function Edit(props: EditProps<Attributes>) {
	return (
		<>
			<div {...useBlockProps()}>
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

import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	return <InnerBlocks.Content />;
}

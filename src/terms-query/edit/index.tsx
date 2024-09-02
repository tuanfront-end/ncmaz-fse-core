/**
 * WordPress dependencies
 */
import { useSelect } from "@wordpress/data";
import { useState } from "@wordpress/element";
import { store as blockEditorStore } from "@wordpress/block-editor";

/**
 * Internal dependencies
 */
import QueryContent from "./query-content";
import QueryPlaceholder from "./query-placeholder";
import metadata from "../block.json";
import { EditProps, TAttrs } from "../../types";

type Attributes = TAttrs<typeof metadata.attributes>;

export type TermQueryEditProps = EditProps<Attributes> & { name: string };

const QueryEdit = (props: TermQueryEditProps) => {
	const { clientId, attributes } = props;
	const [isPatternSelectionModalOpen, setIsPatternSelectionModalOpen] =
		useState(false);
	const hasInnerBlocks = useSelect(
		(select) => !!(select(blockEditorStore) as any).getBlocks(clientId).length,
		[clientId],
	);
	const Component = hasInnerBlocks ? QueryContent : QueryPlaceholder;
	return (
		<>
			<Component
				{...props}
				openPatternSelectionModal={() => setIsPatternSelectionModalOpen(true)}
			/>
		</>
	);
};

export default QueryEdit;

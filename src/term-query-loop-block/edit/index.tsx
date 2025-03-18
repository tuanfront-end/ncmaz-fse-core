/**
 * WordPress dependencies
 */
import { useSelect } from "@wordpress/data";
import { store as blockEditorStore } from "@wordpress/block-editor";

/**
 * Internal dependencies
 */
import QueryContent from "./query-content";
import QueryPlaceholder from "./query-placeholder";
import metadata from "../block.json";
import { EditProps, TAttrs } from "../../types";
import "../editor.scss";

type Attributes = TAttrs<typeof metadata.attributes>;

export type TermQueryEditProps = EditProps<Attributes> & { name: string };

const QueryEdit = (props: TermQueryEditProps) => {
	const { clientId } = props;

	const hasInnerBlocks = useSelect(
		(select) => !!(select(blockEditorStore) as any).getBlocks(clientId).length,
		[clientId],
	);
	const Component = hasInnerBlocks ? QueryContent : QueryPlaceholder;
	return (
		<>
			<Component {...props} />
		</>
	);
};

export default QueryEdit;

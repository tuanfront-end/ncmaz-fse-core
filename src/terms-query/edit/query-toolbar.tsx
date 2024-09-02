import { ToolbarGroup, ToolbarButton } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useSelect } from "@wordpress/data";
import { store as blockEditorStore } from "@wordpress/block-editor";
import { TermQueryEditProps } from ".";

export default function QueryToolbar({
	openPatternSelectionModal,
	name,
	clientId,
}: Pick<
	TermQueryEditProps,
	"openPatternSelectionModal" | "name" | "clientId"
>) {
	// const hasPatterns = !!usePatterns( clientId, name ).length;

	const hasPatterns = useSelect(
		(select) => {
			const { getBlockRootClientId, getPatternsByBlockTypes } = select(
				blockEditorStore,
			) as Record<string, any>;
			const rootClientId = getBlockRootClientId(clientId);
			return getPatternsByBlockTypes(name, rootClientId);
		},
		[name, clientId],
	);

	return (
		<>
			{!!hasPatterns && (
				<ToolbarGroup className="wp-block-template-part__block-control-group">
					<ToolbarButton onClick={openPatternSelectionModal}>
						{__("Replace")}
					</ToolbarButton>
				</ToolbarGroup>
			)}
		</>
	);
}

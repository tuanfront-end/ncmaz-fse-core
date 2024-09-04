/**
 * WordPress dependencies
 */
import { useDispatch } from "@wordpress/data";
import { useInstanceId } from "@wordpress/compose";
import { useEffect } from "@wordpress/element";
import {
	InspectorControls,
	useBlockProps,
	store as blockEditorStore,
	useInnerBlocksProps,
} from "@wordpress/block-editor";
import { SelectControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import QueryInspectorControls from "./inspector-controls";
import { TermQueryEditProps } from ".";
import metadata from "../block.json";

export type MyTermQueryKey =
	keyof typeof metadata.attributes.myQuery.default & {};

export type MyTermQueryUpdateFuncT = (
	query: Partial<Record<MyTermQueryKey, any>>,
) => void;

// export type TermQueryObT = TAttrs<typeof metadata.attributes.myQuery.default>;
// export type UpdateTermQueryFuncT = (newQuery: Record<string,any>) => void;

const TEMPLATE = [["ncmazfse-block/term-template-block"]];
export default function QueryContent({
	attributes,
	setAttributes,
	name,
	clientId,
}: TermQueryEditProps) {
	const {
		myQueryId: queryId,
		myQuery,
		displayLayout,
		tagName: TagName = "div",
	} = attributes;
	const { __unstableMarkNextChangeAsNotPersistent } =
		useDispatch(blockEditorStore);
	const instanceId = useInstanceId(QueryContent);
	const blockProps = useBlockProps();

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		template: TEMPLATE,
	});

	// There are some effects running where some initialization logic is
	// happening and setting some values to some attributes (ex. queryId).
	// These updates can cause an `undo trap` where undoing will result in
	// resetting again, so we need to mark these changes as not persistent
	// with `__unstableMarkNextChangeAsNotPersistent`.

	// Changes in query property (which is an object) need to be in the same callback,
	// because updates are batched after the render and changes in different query properties
	// would cause to override previous wanted changes.

	// We need this for multi-query block pagination.
	// Query parameters for each block are scoped to their ID.
	useEffect(() => {
		if (!Number.isFinite(queryId)) {
			__unstableMarkNextChangeAsNotPersistent();
			setAttributes({ myQueryId: instanceId });
		}
	}, [queryId, instanceId]);

	const updateQuery: MyTermQueryUpdateFuncT = (newQuery) => {
		setAttributes({ myQuery: { ...myQuery, ...newQuery } });
	};

	const updateDisplayLayout = (newDisplayLayout: Record<string, any>) => {
		setAttributes({
			displayLayout: { ...displayLayout, ...newDisplayLayout },
		});
	};

	const htmlElementMessages = {
		main: __(
			"The <main> element should be used for the primary content of your document only.",
		),
		section: __(
			"The <section> element should represent a standalone portion of the document that can't be better represented by another element.",
		),
		aside: __(
			"The <aside> element should represent a portion of a document whose content is only indirectly related to the document's main content.",
		),
	};

	return (
		<>
			<InspectorControls>
				<QueryInspectorControls
					attributes={attributes}
					setQuery={updateQuery}
					setDisplayLayout={updateDisplayLayout}
					setAttributes={setAttributes}
					clientId={clientId}
				/>
			</InspectorControls>

			<InspectorControls group="advanced">
				<SelectControl
					__nextHasNoMarginBottom
					__next40pxDefaultSize
					label={__("HTML element")}
					options={
						[
							{ label: __("Default (<div>)"), value: "div" },
							{ label: "<main>", value: "main" },
							{ label: "<section>", value: "section" },
							{ label: "<aside>", value: "aside" },
						] as { label: string; value: "main" | "section" | "aside" }[]
					}
					value={TagName}
					onChange={(value) => setAttributes({ tagName: value })}
					help={htmlElementMessages[TagName as "main" | "section" | "aside"]}
				/>
			</InspectorControls>
			<TagName {...innerBlocksProps} />
		</>
	);
}

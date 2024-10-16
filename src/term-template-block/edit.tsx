import clsx from "clsx";
import { memo, useMemo, useState } from "@wordpress/element";
import { useSelect } from "@wordpress/data";
import { __, _x } from "@wordpress/i18n";
import {
	BlockControls,
	// @ts-ignore
	BlockContextProvider,
	// @ts-ignore
	__experimentalUseBlockPreview as useBlockPreview,
	useBlockProps,
	useInnerBlocksProps,
	store as blockEditorStore,
} from "@wordpress/block-editor";
import { Spinner, ToolbarGroup } from "@wordpress/components";
import { store as coreStore } from "@wordpress/core-data";
import { list, grid } from "@wordpress/icons";
import { EditProps, TAttrs } from "../types";
import metadata from "./block.json";
import "./editor.scss";

const TEMPLATE = [
	[
		"core/group",
		{},
		[
			// ["ncmfse/term-cover-img"],
			["ncmfse/term-featured-img"],
			["ncmfse/term-name"],
			["ncmfse/term-description"],
			["ncmfse/term-count"],
		],
	],
];

function PostTemplateInnerBlocks({ classList }: { classList: string }) {
	const innerBlocksProps = useInnerBlocksProps(
		{ className: clsx("wp-block-post", classList) },
		// @ts-ignore
		{ template: TEMPLATE, __unstableDisableLayoutClassNames: true },
	);
	return <li {...innerBlocksProps} />;
}

interface PostTemplateBlockPreviewProps {
	blocks: Record<string, any>[];
	blockContextId: number;
	classList: string;
	isHidden: boolean;
	setActiveBlockContextId: (blockContextId: number) => void;
}
function PostTemplateBlockPreview({
	blocks,
	blockContextId,
	classList,
	isHidden,
	setActiveBlockContextId,
}: PostTemplateBlockPreviewProps) {
	const blockPreviewProps = useBlockPreview({
		blocks,
		props: {
			className: clsx("wp-block-post", classList),
		},
	});

	const handleOnClick = () => {
		setActiveBlockContextId(blockContextId);
	};

	const style = {
		display: isHidden ? "none" : undefined,
	};

	return (
		<li
			{...blockPreviewProps}
			tabIndex={0}
			// eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
			role="button"
			onClick={handleOnClick}
			onKeyDown={handleOnClick}
			style={style}
		/>
	);
}

const MemoizedPostTemplateBlockPreview = memo(PostTemplateBlockPreview);

type Attributes = TAttrs<typeof metadata.attributes>;

type Props = EditProps<Attributes> & { name: string };

interface TermQueryOpt {
	order: string;
	orderby: string;
	hide_empty: boolean;
	per_page?: number;
	page?: number;
	parent?: string;
	exclude?: number[];
	include?: number[];
}

export default function TermTemplateEdit({
	setAttributes,
	clientId,
	context: {
		// ncmazfse_termQueryId,
		ncmazfse_termQuery: {
			perPage,
			// isFilterByOrder,
			taxonomySlug,
			termIdList,
			inherit,
			postType,
			orderBy,
			order,
			parentIdString,
			hideEmpty,
			excludeIdList,
			page,
			...restQueryArgs
		} = {},
		templateSlug,
		previewPostType,
	},
	attributes: { layout },
	__unstableLayoutClassNames,
}: Props) {
	const {
		type: layoutType,
		columnCount = 3,
	}: {
		type?: string;
		columnCount?: number;
	} = layout || ({} as any);

	const [activeBlockContextId, setActiveBlockContextId] = useState<number>();

	const { terms, blocks } = useSelect(
		(select) => {
			const { getEntityRecords } = select(coreStore);
			const { getBlocks } = select(blockEditorStore) as Record<string, any>;

			const templateCategory =
				inherit &&
				templateSlug?.startsWith("category-") &&
				// @ts-ignore
				getEntityRecords("taxonomy", "category", {
					context: "view",
					per_page: 1,
					_fields: ["id"],
					slug: templateSlug.replace("category-", ""),
				});

			let query: TermQueryOpt = {
				order,
				orderby: orderBy,
				hide_empty: !!hideEmpty,
			};

			if (perPage) {
				query.per_page = perPage;
			}
			if (page) {
				query.page = page;
			}

			// If `inherit` is truthy, adjust conditionally the query to create a better preview.
			if (inherit) {
				if (templateCategory) {
					query.parent = templateCategory[0]?.id;
				}
			} else {
				if (parentIdString) {
					query.parent = parentIdString;
				}
				if (excludeIdList?.length) {
					query.exclude = excludeIdList;
				}
				if (termIdList?.length) {
					query.include = termIdList;
				}
			}

			return {
				terms:
					// @ts-ignore
					(getEntityRecords("taxonomy", taxonomySlug, {
						...query,
						// ...restQueryArgs,
					}) as Record<string, any>[]) || [],
				blocks: (getBlocks(clientId) as Record<string, any>[]) || [],
			};
		},
		[perPage, clientId, inherit, templateSlug, restQueryArgs, previewPostType],
	);

	const blockContexts = useMemo(() => {
		const items = terms?.length
			? terms.map((term) => ({
					...terms,
					termId: term.id,
					termTaxonomy: term.taxonomy,
					classList: term.class_list ?? "",
			  }))
			: [];

		return items;
	}, [terms]);

	const blockProps = useBlockProps({
		className: clsx(__unstableLayoutClassNames, {
			[`columns-${columnCount}`]: layoutType === "grid" && columnCount, // Ensure column count is flagged via classname for backwards compatibility.
		}),
	});

	if (!terms) {
		return (
			<p {...blockProps}>
				<Spinner />
			</p>
		);
	}

	if (!terms.length) {
		return <p {...blockProps}> {__("No results found.")}</p>;
	}

	const setDisplayLayout = (newDisplayLayout: Record<string, any>) =>
		setAttributes({
			layout: { ...layout, ...newDisplayLayout },
		});

	const displayLayoutControls = [
		{
			icon: list,
			title: _x("List view", "Post template block display setting"),
			onClick: () => setDisplayLayout({ type: "default" }),
			isActive: layoutType === "default" || layoutType === "constrained",
		},
		{
			icon: grid,
			title: _x("Grid view", "Post template block display setting"),
			onClick: () =>
				setDisplayLayout({
					type: "grid",
					columnCount,
				}),
			isActive: layoutType === "grid",
		},
	];

	// To avoid flicker when switching active block contexts, a preview is rendered
	// for each block context, but the preview for the active block context is hidden.
	// This ensures that when it is displayed again, the cached rendering of the
	// block preview is used, instead of having to re-render the preview from scratch.
	return (
		<>
			<BlockControls>
				<ToolbarGroup controls={displayLayoutControls} />
			</BlockControls>

			<ul {...blockProps}>
				{blockContexts &&
					blockContexts.map((blockContext) => (
						<BlockContextProvider
							key={blockContext.termId}
							value={blockContext}
						>
							{blockContext.termId ===
							(activeBlockContextId || blockContexts[0]?.termId) ? (
								<PostTemplateInnerBlocks classList={blockContext.classList} />
							) : null}
							<MemoizedPostTemplateBlockPreview
								blocks={blocks}
								blockContextId={blockContext.termId}
								classList={blockContext.classList}
								setActiveBlockContextId={setActiveBlockContextId}
								isHidden={
									blockContext.termId ===
									(activeBlockContextId || blockContexts[0]?.termId)
								}
							/>
						</BlockContextProvider>
					))}
			</ul>
		</>
	);
}

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

const TEMPLATE = [
	["core/paragraph", { placeholder: __("Write post content…") }],
	// ["core/post-date"],
	// ["core/post-excerpt"],
];

function PostTemplateInnerBlocks({ classList }) {
	const innerBlocksProps = useInnerBlocksProps(
		{ className: clsx("wp-block-post", classList) },
		{ template: TEMPLATE, __unstableDisableLayoutClassNames: true },
	);
	return <li {...innerBlocksProps} />;
}

function PostTemplateBlockPreview({
	blocks,
	blockContextId,
	classList,
	isHidden,
	setActiveBlockContextId,
}) {
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
			onKeyPress={handleOnClick}
			style={style}
		/>
	);
}

const MemoizedPostTemplateBlockPreview = memo(PostTemplateBlockPreview);

type Attributes = TAttrs<typeof metadata.attributes>;

type Props = EditProps<Attributes> & { name: string };

export default function TermTemplateEdit({
	setAttributes,
	clientId,
	context,
	context: {
		ncmazfse_termQueryId,
		ncmazfse_termQuery: {
			perPage,
			isFilterByOrder,
			taxonomySlug,
			termIdList,
			inherit,
			...restQueryArgs
		} = {},
		templateSlug,
		previewPostType,
	},
	attributes: { layout },
	__unstableLayoutClassNames,
}: Props) {
	const { type: layoutType, columnCount = 3 } = layout || {};
	const [activeBlockContextId, setActiveBlockContextId] = useState();

	console.log(1111, { templateSlug });

	const { terms, blocks } = useSelect(
		(select) => {
			const { getEntityRecords, getTaxonomies } = select(coreStore);
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
			const query = {};

			if (perPage) {
				query.per_page = perPage;
			}

			// If `inherit` is truthy, adjust conditionally the query to create a better preview.
			if (inherit) {
				// Change the post-type if needed.
				if (templateSlug?.startsWith("archive-")) {
					query.postType = templateSlug.replace("archive-", "");
				} else if (templateCategory) {
					query.categories = templateCategory[0]?.id;
				}
			}

			return {
				// posts: getEntityRecords("postType", usedPostType, {
				// 	...query,
				// 	...restQueryArgs,
				// }),
				terms:
					// @ts-ignore
					getEntityRecords("taxonomy", taxonomySlug, {
						...query,
						...restQueryArgs,
					}) || [],
				blocks: getBlocks(clientId),
			};
		},
		[perPage, clientId, inherit, templateSlug, restQueryArgs, previewPostType],
	);

	const blockContexts = useMemo(
		() =>
			terms?.map((term) => ({
				// postType: post.type,
				// postId: post.id,
				// classList: post.class_list ?? "",
				...terms,
			})),
		[terms],
	);

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

	const setDisplayLayout = (newDisplayLayout) =>
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
							key={blockContext.postId}
							value={blockContext}
						>
							{blockContext.postId ===
							(activeBlockContextId || blockContexts[0]?.postId) ? (
								<PostTemplateInnerBlocks classList={blockContext.classList} />
							) : null}
							<MemoizedPostTemplateBlockPreview
								blocks={blocks}
								blockContextId={blockContext.postId}
								classList={blockContext.classList}
								setActiveBlockContextId={setActiveBlockContextId}
								isHidden={
									blockContext.postId ===
									(activeBlockContextId || blockContexts[0]?.postId)
								}
							/>
						</BlockContextProvider>
					))}
			</ul>
		</>
	);
}

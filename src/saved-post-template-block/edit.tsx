/**
 * External dependencies
 */
import clsx from "clsx";

/**
 * WordPress dependencies
 */
import { memo, useMemo, useState } from "@wordpress/element";
import { useSelect } from "@wordpress/data";
import { __, _x } from "@wordpress/i18n";
import {
	BlockControls,
	BlockContextProvider,
	__experimentalUseBlockPreview as useBlockPreview,
	useBlockProps,
	useInnerBlocksProps,
	store as blockEditorStore,
	InspectorControls,
} from "@wordpress/block-editor";
import {
	PanelBody,
	QueryControls,
	SelectControl,
	Spinner,
	ToolbarGroup,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from "@wordpress/components";
import { store as coreStore } from "@wordpress/core-data";
import { list, grid } from "@wordpress/icons";
import metadata from "./block.json";
import "./editor.scss";
import { EditProps, TAttrs } from "../types";
import { usePostTypes } from "../hooks/utils";

const TEMPLATE = [
	["core/post-title"],
	["core/post-date"],
	["core/post-excerpt"],
];

function PostTemplateInnerBlocks({ classList }: { classList: string }) {
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
}: Props) {
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

export default function PostTemplateEdit({
	setAttributes,
	clientId,
	attributes: { layout, postType },
	__unstableLayoutClassNames,
}: Props) {
	const { type: layoutType, columnCount = 3 } = layout || {};
	const [activeBlockContextId, setActiveBlockContextId] = useState();
	const { posts, blocks } = useSelect((select) => {
		const { getEntityRecords, getTaxonomies } = select(coreStore);
		const { getBlocks } = select(blockEditorStore);
		const query = {
			offset: 0,
			order: "desc",
			orderby: "date",
		};
		const usedPostType = "post";
		return {
			posts: getEntityRecords("postType", usedPostType, {
				...query,
			}),
			blocks: getBlocks(clientId),
		};
	}, []);
	const blockContexts = useMemo(
		() =>
			posts?.map((post) => ({
				postType: post.type,
				postId: post.id,
				classList: post.class_list ?? "",
			})),
		[posts],
	);

	const { postTypesSelectOptions } = usePostTypes();

	const blockProps = useBlockProps({
		className: clsx(__unstableLayoutClassNames, {
			[`columns-${columnCount}`]: layoutType === "grid" && columnCount, // Ensure column count is flagged via classname for backwards compatibility.
		}),
	});

	if (!posts) {
		return (
			<p {...blockProps}>
				<Spinner />
			</p>
		);
	}

	if (!posts.length) {
		return <p {...blockProps}> {__("No results found.")}</p>;
	}

	const setDisplayLayout = (newDisplayLayout = {}) =>
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

	const onPostTypeChange = (newValue: string) => {
		let updateQuery = { postType: newValue };
		setAttributes(updateQuery);
	};

	const postTypeControlHelp = __(
		"Limit results to taxonomies associated with a specific post type.",
	);

	// To avoid flicker when switching active block contexts, a preview is rendered
	// for each block context, but the preview for the active block context is hidden.
	// This ensures that when it is displayed again, the cached rendering of the
	// block preview is used, instead of having to re-render the preview from scratch.
	return (
		<>
			<BlockControls>
				<ToolbarGroup controls={displayLayoutControls} />
			</BlockControls>

			<InspectorControls>
				<PanelBody title={__("Filter", "ncmfse")}>
					{postTypesSelectOptions.length > 2 ? (
						<SelectControl
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							options={postTypesSelectOptions}
							value={postType}
							label={__("Post type")}
							onChange={onPostTypeChange}
							help={postTypeControlHelp}
						/>
					) : (
						<ToggleGroupControl
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							isBlock
							value={postType}
							label={__("Post type")}
							onChange={(value) => {
								value ? onPostTypeChange(value?.toString() || "") : null;
							}}
							help={postTypeControlHelp}
						>
							{postTypesSelectOptions.map((option) => (
								<ToggleGroupControlOption
									key={option.value}
									value={option.value}
									label={option.label}
								/>
							))}
						</ToggleGroupControl>
					)}

					<QueryControls
						numberOfItems={5}
						onNumberOfItemsChange={function noRefCheck() {}}
						onOrderByChange={function noRefCheck() {}}
						onOrderChange={function noRefCheck() {}}
						order="desc"
						orderBy="date"
					/>
				</PanelBody>
			</InspectorControls>

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

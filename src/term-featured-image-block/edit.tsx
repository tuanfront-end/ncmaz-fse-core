/**
 * External dependencies
 */
import clsx from "clsx";
import { useEntityRecord, store as coreStore } from "@wordpress/core-data";
import { useSelect } from "@wordpress/data";
import {
	ToggleControl,
	PanelBody,
	Placeholder,
	TextControl,
} from "@wordpress/components";
import {
	InspectorControls,
	useBlockProps,
	__experimentalUseBorderProps as useBorderProps,
	__experimentalGetShadowClassesAndStyles as getShadowClassesAndStyles,
	useBlockEditingMode,
} from "@wordpress/block-editor";
import { __, sprintf } from "@wordpress/i18n";
import "./editor.scss";

/**
 * Internal dependencies
 */
import DimensionControls from "./dimension-controls";
import OverlayControls from "./overlay-controls";
import Overlay from "./overlay";
import metadata from "./block.json";
import { EditProps, TAttrs } from "../types";

type Attributes = TAttrs<typeof metadata.attributes>;
export type TermFeaturedImageEditProps = EditProps<Attributes>;

function getMediaSourceUrlBySizeSlug(media: Record<string, any>, slug: string) {
	return media?.media_details?.sizes?.[slug]?.source_url || media?.source_url;
}

const disabledClickProps = {
	onClick: (event) => event.preventDefault(),
	"aria-disabled": true,
};

export default function TermFeaturedImageEdit({
	clientId,
	attributes,
	setAttributes,
	context: { termId, termTaxonomy, ncmazfse_termQueryId },
}: TermFeaturedImageEditProps) {
	const isDescendentOfQueryLoop = Number.isFinite(ncmazfse_termQueryId);

	const {
		isLink,
		aspectRatio,
		height,
		width,
		scale,
		sizeSlug,
		rel,
		linkTarget,
	} = attributes;

	const { record: termRecord } = useEntityRecord<Record<string, any>>(
		"taxonomy",
		termTaxonomy,
		termId,
	);

	const featuredImage = termRecord?.acf?.featured_image;
	const termLink = termRecord?.link;

	const { media } = useSelect(
		(select) => {
			const { getMedia } = select(coreStore);
			return {
				media:
					featuredImage &&
					// @ts-ignore
					getMedia(featuredImage, {
						context: "view",
					}),
			};
		},
		[featuredImage],
	);

	console.log(11111, { isDescendentOfQueryLoop, media, termRecord });

	const mediaUrl = getMediaSourceUrlBySizeSlug(media, sizeSlug);

	const blockProps = useBlockProps({
		style: { width, height, aspectRatio },
	});

	const borderProps = useBorderProps(attributes);
	const shadowProps = getShadowClassesAndStyles(attributes);
	const blockEditingMode = useBlockEditingMode();

	const placeholder = (content?: string) => {
		return (
			<Placeholder
				className={clsx(
					"block-editor-media-placeholder",
					borderProps.className,
				)}
				withIllustration
				style={{
					height: !!aspectRatio && "100%",
					width: !!aspectRatio && "100%",
					...borderProps.style,
					...shadowProps.style,
				}}
			>
				{content || ""}
			</Placeholder>
		);
	};

	const controls = blockEditingMode === "default" && (
		<>
			<InspectorControls group="color">
				<OverlayControls
					attributes={attributes}
					setAttributes={setAttributes}
					clientId={clientId}
				/>
			</InspectorControls>
			<InspectorControls group="dimensions">
				<DimensionControls
					clientId={clientId}
					attributes={attributes}
					setAttributes={setAttributes}
					media={media}
				/>
			</InspectorControls>
			<InspectorControls>
				<PanelBody title={__("Settings")}>
					<ToggleControl
						__nextHasNoMarginBottom
						label={__("Link to term")}
						onChange={() => setAttributes({ isLink: !isLink })}
						checked={isLink}
					/>
					{isLink && (
						<>
							<ToggleControl
								__nextHasNoMarginBottom
								label={__("Open in new tab")}
								onChange={(value) =>
									setAttributes({
										linkTarget: value ? "_blank" : "_self",
									})
								}
								checked={linkTarget === "_blank"}
							/>
							<TextControl
								__next40pxDefaultSize
								__nextHasNoMarginBottom
								label={__("Link rel")}
								value={rel}
								onChange={(newRel) => setAttributes({ rel: newRel })}
							/>
						</>
					)}
				</PanelBody>
			</InspectorControls>
		</>
	);

	/**
	 * A Post Featured Image block should not have image replacement
	 * or upload options in the following cases:
	 * - Is placed in a Query Loop. This is a conscious decision to
	 * prevent content editing of different posts in Query Loop, and
	 * this could change in the future.
	 * - Is in a context where it does not have a postId (for example
	 * in a template or template part).
	 */
	if (!featuredImage && (isDescendentOfQueryLoop || !termId)) {
		return (
			<>
				{controls}
				<div {...blockProps}>
					{!!isLink ? (
						<a href={termLink} target={linkTarget} {...disabledClickProps}>
							{placeholder()}
						</a>
					) : (
						placeholder()
					)}
					<Overlay
						attributes={attributes}
						setAttributes={setAttributes}
						clientId={clientId}
					/>
				</div>
			</>
		);
	}

	const imageStyles = {
		...borderProps.style,
		...shadowProps.style,
		height: aspectRatio ? "100%" : height,
		width: !!aspectRatio && "100%",
		objectFit: !!(height || aspectRatio) && scale,
	};

	// We have a Featured image so show a Placeholder if is loading.
	const image = !media ? (
		placeholder()
	) : (
		<>
			<img
				className={borderProps.className}
				src={mediaUrl}
				alt={
					media && media?.alt_text
						? sprintf(
								// translators: %s: The image's alt text.
								__("Featured image: %s"),
								media.alt_text,
						  )
						: __("Featured image")
				}
				style={imageStyles}
			/>
		</>
	);

	/**
	 * When the post featured image block:
	 * - Has an image assigned
	 * - Is not inside a query loop
	 * Then display the image and the image replacement option.
	 */
	return (
		<>
			{controls}

			<figure {...blockProps}>
				{/* If the featured image is linked, wrap in an <a /> tag to trigger any inherited link element styles */}
				{!!isLink ? (
					<a href={termLink} target={linkTarget} {...disabledClickProps}>
						{image}
					</a>
				) : (
					image
				)}
				<Overlay
					attributes={attributes}
					setAttributes={setAttributes}
					clientId={clientId}
				/>
			</figure>
		</>
	);
}

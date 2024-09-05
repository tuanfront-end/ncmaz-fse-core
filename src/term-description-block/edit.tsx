/**
 * External dependencies
 */
import clsx from "clsx";
import { useEntityProp } from "@wordpress/core-data";
import {
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
	useBlockProps,
} from "@wordpress/block-editor";
import { PanelBody, RangeControl } from "@wordpress/components";
import { __, _x } from "@wordpress/i18n";
import metadata from "./block.json";
import { EditProps, TAttrs } from "../types";

type Attributes = TAttrs<typeof metadata.attributes>;
type Props = EditProps<Attributes> & { name: string };

const ELLIPSIS = "…";

export default function TermDescriptionEdit({
	attributes: { textAlign, descriptionLength },
	setAttributes,
	isSelected,
	context: { termId, termTaxonomy },
}: Props) {
	const [rawDescription] = useEntityProp(
		"taxonomy",
		termTaxonomy,
		"description",
		termId,
	);

	const blockProps = useBlockProps({
		className: clsx({
			[`has-text-align-${textAlign}`]: textAlign,
		}),
	});

	/**
	 * translators: If your word count is based on single characters (e.g. East Asian characters),
	 * enter 'characters_excluding_spaces' or 'characters_including_spaces'. Otherwise, enter 'words'.
	 * Do not translate into your own language.
	 */
	const wordCountType = _x("words", "Word count type. Do not translate!");

	if (!termId || !termTaxonomy) {
		return (
			<>
				<BlockControls>
					<AlignmentToolbar
						value={textAlign}
						onChange={(newAlign) => setAttributes({ textAlign: newAlign })}
					/>
				</BlockControls>
				<div {...blockProps}>
					<p>{__("This block will display the excerpt.")}</p>
				</div>
			</>
		);
	}

	const excerptClassName = "wp-block-ncmfse-term-description__description";

	/**
	 * The excerpt length setting needs to be applied to both
	 * the raw and the rendered excerpt depending on which is being used.
	 */
	const rawOrRenderedExcerpt = rawDescription.trim();

	let trimmedExcerpt = "";
	if (wordCountType === "words") {
		trimmedExcerpt = rawOrRenderedExcerpt
			.split(" ", descriptionLength)
			.join(" ");
	} else if (wordCountType === "characters_excluding_spaces") {
		/*
		 * 1. Split the excerpt at the character limit,
		 * then join the substrings back into one string.
		 * 2. Count the number of spaces in the excerpt
		 * by comparing the lengths of the string with and without spaces.
		 * 3. Add the number to the length of the visible excerpt,
		 * so that the spaces are excluded from the word count.
		 */
		const excerptWithSpaces = rawOrRenderedExcerpt
			.split("", descriptionLength)
			.join("");

		const numberOfSpaces =
			excerptWithSpaces.length - excerptWithSpaces.replaceAll(" ", "").length;

		trimmedExcerpt = rawOrRenderedExcerpt
			.split("", descriptionLength + numberOfSpaces)
			.join("");
	} else if (wordCountType === "characters_including_spaces") {
		trimmedExcerpt = rawOrRenderedExcerpt.split("", descriptionLength).join("");
	}

	const isTrimmed = trimmedExcerpt !== rawOrRenderedExcerpt;

	const descriptionContent = (
		<p className={excerptClassName}>
			{!isTrimmed
				? rawOrRenderedExcerpt || __("No excerpt found")
				: trimmedExcerpt + ELLIPSIS}
		</p>
	);
	return (
		<>
			<BlockControls>
				<AlignmentToolbar
					value={textAlign}
					onChange={(newAlign) => setAttributes({ textAlign: newAlign })}
				/>
			</BlockControls>
			<InspectorControls>
				<PanelBody title={__("Settings")}>
					<RangeControl
						__next40pxDefaultSize
						__nextHasNoMarginBottom
						label={__("Max number of words")}
						value={descriptionLength}
						onChange={(value) => {
							setAttributes({ descriptionLength: value });
						}}
						min={8}
						max={100}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>{descriptionContent}</div>
		</>
	);
}

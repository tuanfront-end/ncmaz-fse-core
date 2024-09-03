/**
 * External dependencies
 */
import clsx from "clsx";
import {
	// @ts-ignore
	AlignmentControl,
	BlockControls,
	InspectorControls,
	useBlockProps,
	// @ts-ignore
	HeadingLevelDropdown,
	// @ts-ignore
	useBlockEditingMode,
} from "@wordpress/block-editor";
import { ToggleControl, TextControl, PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useEntityProp } from "@wordpress/core-data";
import metadata from "./block.json";
import { EditProps, TAttrs } from "../types";

type Attributes = TAttrs<typeof metadata.attributes>;

type Props = EditProps<Attributes> & { name: string };

export default function TermTitleEdit({
	attributes: { level, levelOptions, textAlign, isLink, rel, linkTarget },
	setAttributes,
	context: { termId, termTaxonomy },
}: Props) {
	const TagName =
		level === 0 ? "p" : (`h${level}` as keyof HTMLElementTagNameMap);

	const [name = ""] = useEntityProp("taxonomy", termTaxonomy, "name", termId);
	const [link] = useEntityProp("taxonomy", termTaxonomy, "link", termId);

	const blockProps = useBlockProps({
		className: clsx({
			[`has-text-align-${textAlign}`]: textAlign,
		}),
	});
	const blockEditingMode = useBlockEditingMode();

	let titleElement = <TagName {...blockProps}>{__("Title")}</TagName>;

	if (termTaxonomy && termId) {
		titleElement = (
			<TagName
				{...blockProps}
				dangerouslySetInnerHTML={{ __html: name || "" }}
			/>
		);
	}

	if (isLink && termId && termTaxonomy) {
		titleElement = (
			<TagName {...blockProps}>
				<a
					href={link}
					target={linkTarget}
					rel={rel}
					onClick={(event) => event.preventDefault()}
					dangerouslySetInnerHTML={{
						__html: name,
					}}
				/>
			</TagName>
		);
	}

	return (
		<>
			{blockEditingMode === "default" && (
				<>
					<BlockControls group="block">
						<HeadingLevelDropdown
							value={level}
							options={levelOptions}
							onChange={(newLevel: number) =>
								setAttributes({ level: newLevel })
							}
						/>
						<AlignmentControl
							value={textAlign}
							onChange={(nextAlign: string) => {
								setAttributes({ textAlign: nextAlign });
							}}
						/>
					</BlockControls>
					<InspectorControls>
						<PanelBody title={__("Settings")}>
							<ToggleControl
								__nextHasNoMarginBottom
								label={__("Make title a link")}
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
			)}
			{titleElement}
		</>
	);
}

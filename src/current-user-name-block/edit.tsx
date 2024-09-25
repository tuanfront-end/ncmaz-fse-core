/**
 * External dependencies
 */
import clsx from "clsx";

/**
 * WordPress dependencies
 */
import {
	AlignmentControl,
	BlockControls,
	InspectorControls,
	useBlockProps,
} from "@wordpress/block-editor";
import { useSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import { store as coreStore } from "@wordpress/core-data";
import { PanelBody, ToggleControl } from "@wordpress/components";
import "./editor.scss";

import { EditProps, TAttrs } from "../types";
import metadata from "./block.json";

type Attributes = TAttrs<typeof metadata.attributes>;

function Edit({
	attributes: { textAlign, isLink, linkTarget },
	setAttributes,
}: EditProps<Attributes>) {
	const { authorName } = useSelect((select) => {
		const { getCurrentUser } = select(coreStore);
		const currentUser = getCurrentUser();
		return {
			authorName: currentUser ? currentUser.name : null,
		};
	}, []);

	const blockProps = useBlockProps({
		className: clsx({
			[`has-text-align-${textAlign}`]: textAlign,
		}),
	});

	const displayName = authorName || __("Author Name");

	const displayAuthor = isLink ? (
		<a
			href="#author-pseudo-link"
			onClick={(event) => event.preventDefault()}
			className="wp-block-post-author-name__link"
		>
			{displayName}
		</a>
	) : (
		displayName
	);

	return (
		<>
			<BlockControls group="block">
				<AlignmentControl
					value={textAlign}
					onChange={(nextAlign) => {
						setAttributes({ textAlign: nextAlign });
					}}
				/>
			</BlockControls>
			<InspectorControls>
				<PanelBody title={__("Settings")}>
					<ToggleControl
						__nextHasNoMarginBottom
						label={__("Link to author archive")}
						onChange={() => setAttributes({ isLink: !isLink })}
						checked={isLink}
					/>
					{isLink && (
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
					)}
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}> {displayAuthor} </div>
		</>
	);
}

export default Edit;

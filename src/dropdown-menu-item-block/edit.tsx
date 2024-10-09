import clsx from "clsx";
import { __ } from "@wordpress/i18n";
import {
	PanelBody,
	Popover,
	ToggleControl,
	ToolbarButton,
} from "@wordpress/components";
import {
	useBlockProps,
	AlignmentControl,
	InspectorControls,
	InnerBlocks,
	__experimentalLinkControl as LinkControl,
	BlockControls,
} from "@wordpress/block-editor";
import "./editor.scss";
import { EditProps, TAttrs } from "../types";
import { useState } from "@wordpress/element";
import metadata from "./block.json";
import { link } from "@wordpress/icons";

type Attributes = TAttrs<typeof metadata.attributes>;

export default function Edit(props: EditProps<Attributes>) {
	const { attributes, setAttributes } = props;
	const { linkTarget, textAlign, href, linkWithCurrentSearch } = attributes;

	const [isEditingURL, setIsEditingURL] = useState(false);
	const [popoverAnchor, setPopoverAnchor] = useState(null);

	const blockProps = useBlockProps({
		className: clsx({
			[`has-text-align-${textAlign}`]: textAlign,
		}),
	});

	return (
		<>
			<BlockControls group="block">
				<AlignmentControl
					value={textAlign}
					onChange={(nextAlign) => {
						setAttributes({ textAlign: nextAlign });
					}}
				/>

				<ToolbarButton
					ref={setPopoverAnchor}
					name="link"
					icon={link}
					title={__("Link", "enable-linked-groups")}
					onClick={() => setIsEditingURL(true)}
					isActive={!!href || isEditingURL}
				/>
				{isEditingURL && (
					<Popover
						anchor={popoverAnchor}
						onClose={() => setIsEditingURL(false)}
						focusOnMount={true}
						offset={10}
						className="enable-linked-groups__link-popover"
						variant="alternate"
					>
						<LinkControl
							value={{
								url: href,
								opensInNewTab: linkTarget === "_blank",
							}}
							onChange={({ url: newURL = "", opensInNewTab }) => {
								setAttributes({
									href: newURL,
									linkTarget: opensInNewTab ? "_blank" : undefined,
								});
							}}
							onRemove={() =>
								setAttributes({
									href: undefined,
									linkTarget: undefined,
								})
							}
						/>

						{/* This control allow use the current url + new */}
						<div style={{ padding: 16, paddingTop: 0 }}>
							<ToggleControl
								__nextHasNoMarginBottom
								label={__("User with current search params")}
								help={__(
									'Use with search parameters in the current url, this is useful for filters etc. This will add the current search parameters to the link. For example, if the current url is ".../?s=text" and the link is ".../?oder=desc", the final link will be ".../?s=text&oder=desc".',
								)}
								checked={linkWithCurrentSearch}
								onChange={(newValue) => {
									setAttributes({ linkWithCurrentSearch: newValue });
								}}
							/>
						</div>
					</Popover>
				)}
			</BlockControls>
			<InspectorControls>
				<PanelBody title={__("Settings")}></PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<InnerBlocks
					template={[
						[
							"core/paragraph",
							{
								content: "Menu Item",
							},
						],
					]}
				/>
			</div>
		</>
	);
}

import clsx from "clsx";
import { __ } from "@wordpress/i18n";
import {
	MenuGroup,
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
import { link, linkOff, page, Icon } from "@wordpress/icons";

type Attributes = TAttrs<typeof metadata.attributes>;

export default function Edit(props: EditProps<Attributes>) {
	const { attributes, setAttributes } = props;
	const { linkTarget, textAlign, href } = attributes;

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

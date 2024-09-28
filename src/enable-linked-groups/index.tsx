/**
 * External dependencies
 */
import classnames from "clsx";
import { __ } from "@wordpress/i18n";
import { addFilter } from "@wordpress/hooks";
import {
	BlockControls,
	// @ts-ignore
	__experimentalLinkControl as LinkControl,
} from "@wordpress/block-editor";
import {
	Button,
	ToolbarButton,
	MenuGroup,
	MenuItem,
	Popover,
	ToggleControl,
} from "@wordpress/components";
import { link, linkOff, page, Icon } from "@wordpress/icons";
import { useState } from "@wordpress/element";
import "./style.scss";
import "./editor.scss";

/**
 * Add the attributes needed for linked groups.
 *
 * @since 0.1.0
 * @param {Object} settings
 */
function addAttributes(settings: Record<string, any>) {
	if ("core/group" !== settings.name) {
		return settings;
	}

	// Add the link attributes.
	const linkAttributes = {
		href: {
			type: "string",
		},
		linkDestination: {
			type: "string",
		},
		linkTarget: {
			type: "string",
		},
		linkWithCurrentSearch: {
			type: "boolean",
			default: false,
		},
	};

	const newSettings = {
		...settings,
		attributes: {
			...settings.attributes,
			...linkAttributes,
		},
		usesContext: [
			...(settings.usesContext || {}),
			"termId",
			"termTaxonomy",
			"ncmazfse_termQueryId",
		],
	};

	return newSettings;
}

addFilter(
	"blocks.registerBlockType",
	"enable-linked-groups/add-attributes",
	addAttributes,
);

/**
 * Filter the BlockEdit object and add linked group inspector controls.
 *
 * @todo Fix the issue where the popover remains open when clicking another block.
 *
 * @since 0.1.0
 * @param {Object} BlockEdit
 */
function addInspectorControls(BlockEdit) {
	return (props: Record<string, any>) => {
		if (props.name !== "core/group") {
			return <BlockEdit {...props} />;
		}

		const [isEditingURL, setIsEditingURL] = useState(false);
		const [popoverAnchor, setPopoverAnchor] = useState(null);
		const { attributes, setAttributes } = props;
		const { href, linkDestination, linkTarget, linkWithCurrentSearch } =
			attributes;

		return (
			<>
				<BlockEdit {...props} />
				<BlockControls group="block">
					<ToolbarButton
						ref={setPopoverAnchor}
						name="link"
						icon={link}
						title={__("Link", "enable-linked-groups")}
						onClick={() => setIsEditingURL(true)}
						isActive={!!href || linkDestination === "post" || isEditingURL}
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
							{linkDestination !== "post" && (
								<>
									<LinkControl
										value={{
											url: href,
											opensInNewTab: linkTarget === "_blank",
										}}
										onChange={({ url: newURL = "", opensInNewTab }) => {
											setAttributes({
												href: newURL,
												linkDestination: newURL ? "custom" : undefined,
												linkTarget: opensInNewTab ? "_blank" : undefined,
											});
										}}
										onRemove={() =>
											setAttributes({
												href: undefined,
												linkDestination: undefined,
												linkTarget: undefined,
											})
										}
									/>
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
								</>
							)}
							{!href && !linkDestination && (
								<div className="enable-linked-groups__link-popover-menu">
									<MenuGroup>
										<MenuItem
											icon={page}
											iconPosition="left"
											info={__(
												"Use when the Group is located in a Query block.",
												"ncmazfse",
											)}
											onClick={() =>
												setAttributes({
													linkDestination: "post",
												})
											}
										>
											{__("Link to current object", "ncmazfse")}
										</MenuItem>
									</MenuGroup>
								</div>
							)}
							{linkDestination === "post" && (
								<div className="enable-linked-groups__link-popover-post-selected">
									<div className="enable-linked-groups__link-popover-post-selected-label">
										<span className="enable-linked-groups__link-popover-post-selected-icon">
											<Icon icon={page} />
										</span>
										<div>
											<span>{__("Linked to current object", "ncmazfse")}</span>
											<span style={{ fontSize: 10 }}>
												{__(
													"Use when the Group is located in a Query block.",
													"ncmazfse",
												)}
											</span>
										</div>
									</div>
									<Button
										icon={linkOff}
										label={__("Remove link", "ncmazfse")}
										onClick={() =>
											setAttributes({
												linkDestination: undefined,
											})
										}
									/>
								</div>
							)}
						</Popover>
					)}
				</BlockControls>
			</>
		);
	};
}

addFilter(
	"editor.BlockEdit",
	"enable-linked-groups/add-inspector-controls",
	addInspectorControls,
);

/**
 * Add linked group classes in the Editor.
 *
 * @since 0.1.0
 * @param {Object} BlockListBlock
 */
function addClasses(BlockListBlock) {
	return (props: Record<string, any>) => {
		const { name, attributes } = props;

		if ("core/group" !== name) {
			return <BlockListBlock {...props} />;
		}

		const classes = classnames(props?.className, {
			"is-linked": attributes?.href || attributes?.linkDestination === "post",
		});

		return <BlockListBlock {...props} className={classes} />;
	};
}

addFilter(
	"editor.BlockListBlock",
	"enable-linked-groups/add-classes",
	addClasses,
);

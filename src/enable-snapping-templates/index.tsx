/**
 * External dependencies
 */
import classnames from "clsx";
import { __ } from "@wordpress/i18n";
import { addFilter } from "@wordpress/hooks";
import { BlockControls, HeightControl } from "@wordpress/block-editor";
import { ToolbarButton, Popover, ToggleControl } from "@wordpress/components";
import { queryPaginationNext } from "@wordpress/icons";
import { useState, useEffect } from "@wordpress/element";
import "./style.scss";
import "./editor.scss";

/**
 * Add the attributes needed for linked groups.
 *
 * @since 0.1.0
 * @param {Object} settings
 */
function addAttributes(settings: Record<string, any>) {
	if (
		"ncmfse/term-template" !== settings.name &&
		"core/post-template" !== settings.name
	) {
		return settings;
	}

	// Add the link attributes.
	const scrollSnappingAttributes = {
		isHorizontalScrollSnapping: {
			type: "boolean",
		},
		childWidth: {
			type: "string",
		},
		showScrollbar: {
			type: "boolean",
		},
	};

	const newSettings = {
		...settings,
		attributes: {
			...settings.attributes,
			...scrollSnappingAttributes,
		},
		// usesContext: [
		// 	...(settings.usesContext || {}),
		// 	"termId",
		// 	"termTaxonomy",
		// 	"ncmazfse_termQueryId",
		// ],
	};

	return newSettings;
}

addFilter(
	"blocks.registerBlockType",
	"enable-snapping-templates/add-attributes",
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
		if (
			props.name !== "ncmfse/term-template" &&
			props.name !== "core/post-template"
		) {
			return <BlockEdit {...props} />;
		}

		const [isEditingURL, setIsEditingURL] = useState(false);
		const [popoverAnchor, setPopoverAnchor] = useState(null);
		const { attributes, setAttributes } = props;
		const { isHorizontalScrollSnapping, childWidth, showScrollbar } =
			attributes;

		useEffect(() => {
			if (isHorizontalScrollSnapping && attributes.layout?.type !== "flex") {
				setAttributes({
					isHorizontalScrollSnapping: false,
				});
			}
		}, [attributes.layout?.type, isHorizontalScrollSnapping]);

		return (
			<>
				<BlockEdit {...props} />
				<BlockControls group="block">
					<ToolbarButton
						ref={setPopoverAnchor}
						name="isHorizontalScrollSnapping"
						icon={queryPaginationNext}
						title={__("Horizontal Scroll Snapping")}
						onClick={() => setIsEditingURL(true)}
						isActive={!!isHorizontalScrollSnapping}
					/>
					{isEditingURL && (
						<Popover
							anchor={popoverAnchor}
							onClose={() => setIsEditingURL(false)}
							focusOnMount={true}
							offset={10}
							className="enable-snapping-templates__popover"
							variant="toolbar"
						>
							<ToggleControl
								label={__("Horizontal Scroll Snapping")}
								help={__(
									"Enable horizontal scroll snapping for this template.",
								)}
								__nextHasNoMarginBottom
								checked={isHorizontalScrollSnapping}
								onChange={(newValue: boolean) => {
									setAttributes({
										isHorizontalScrollSnapping: newValue,
										showScrollbar: newValue ? false : showScrollbar,
										childWidth: newValue ? childWidth || "20rem" : undefined,
										layout: {
											type: newValue ? "flex" : "grid",
											orientation: newValue ? "horizontal" : undefined,
											flexWrap: newValue ? "nowrap" : undefined,
											verticalAlignment: newValue ? "top" : undefined,
										},
									});
								}}
							/>

							{!!isHorizontalScrollSnapping && (
								<>
									<HeightControl
										label={__("Item Width")}
										onChange={(value: string | number | undefined) => {
											setAttributes({ childWidth: value });
										}}
										value={childWidth}
									/>

									<ToggleControl
										label={__("Show Scrollbar")}
										checked={showScrollbar}
										onChange={(newValue: boolean) => {
											setAttributes({ showScrollbar: newValue });
										}}
									/>
								</>
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
	"enable-snapping-templates/add-inspector-controls",
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

		if ("ncmfse/term-template" !== name && "core/post-template" !== name) {
			return <BlockListBlock {...props} />;
		}

		const classes = classnames(props?.className, {
			"is-h-scroll-snapping": attributes.isHorizontalScrollSnapping,
			"hidden-scrollbar":
				attributes.isHorizontalScrollSnapping && !attributes.showScrollbar,
		});

		const wrapperProps = {
			...props.wrapperProps,
			"data-my-property": "the-value-testt",
			style: {
				...(props.wrapperProps?.style || {}),
				"--child-width": attributes.childWidth,
			},
		};

		return (
			<BlockListBlock
				{...props}
				className={classes}
				wrapperProps={wrapperProps}
			/>
		);
	};
}

addFilter(
	"editor.BlockListBlock",
	"enable-snapping-templates/add-classes",
	addClasses,
);

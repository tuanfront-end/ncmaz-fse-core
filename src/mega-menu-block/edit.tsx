/**
 * WordPress dependencies
 */
import { __, sprintf } from "@wordpress/i18n";
import {
	InspectorControls,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";
import { useEntityRecords } from "@wordpress/core-data";
import { useSelect } from "@wordpress/data";
import { createInterpolateElement } from "@wordpress/element";
import {
	ComboboxControl,
	PanelBody,
	Notice,
	TextControl,
	TextareaControl,
	ToggleControl,
	__experimentalHStack as HStack, // eslint-disable-line
	__experimentalToggleGroupControl as ToggleGroupControl, // eslint-disable-line
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
	BaseControl, // eslint-disable-line
} from "@wordpress/components";
import {
	alignNone,
	justifyLeft,
	justifyCenter,
	justifyRight,
	stretchWide,
	stretchFullWidth,
} from "@wordpress/icons";
import "./edit.scss";
import { TAttrs, EditProps } from "../types";
import metadata from "./block.json";

type Attributes = TAttrs<typeof metadata.attributes>;

export default function Edit({
	attributes,
	setAttributes,
}: EditProps<Attributes>) {
	const {
		label,
		menuSlug,
		title,
		description,
		disableWhenCollapsed,
		collapsedUrl,
		justifyMenu,
		width,
	} = attributes;

	// Get the Url for the template part screen in the Site Editor.
	const siteUrl = useSelect((select) => select("core").getSite()?.url);
	const menuTemplateUrl = siteUrl
		? siteUrl +
		  "/wp-admin/site-editor.php?path=%2Fpatterns&categoryType=wp_template_part&categoryId=menu"
		: "";

	// Get the layout settings.
	const layout = useSelect(
		(select) =>
			select("core/editor").getEditorSettings()?.__experimentalFeatures?.layout,
	);

	// Fetch all template parts.
	const { hasResolved, records } = useEntityRecords<Record<string, any>>(
		"postType",
		"wp_template_part",
		{
			per_page: -1,
		},
	);

	let menuOptions: {
		label: string;
		value: string;
	}[] = [];

	// Filter the template parts for those in the 'menu' area.
	if (hasResolved) {
		menuOptions =
			records
				?.filter((item) => item.area === "menu")
				.map((item) => ({
					label: item.title.rendered,
					value: item.slug,
				})) || [];
	}

	const hasMenus = menuOptions.length > 0;
	const selectedMenuAndExists = menuSlug
		? menuOptions.some((option) => option.value === menuSlug)
		: true;

	// Notice for when no menus have been created.
	const noMenusNotice = (
		<Notice status="warning" isDismissible={false}>
			{createInterpolateElement(
				__(
					"No menu templates could be found. Create a new one in the <a>Site Editor</a>.",
					"ncmfse",
				),
				{
					a: (
						<a // eslint-disable-line
							href={menuTemplateUrl}
							target="_blank"
							rel="noreferrer"
						/>
					),
				},
			)}
		</Notice>
	);

	// Notice for when the selected menu template no longer exists.
	const menuDoesntExistNotice = (
		<Notice status="warning" isDismissible={false}>
			{__(
				"The selected menu template no longer exists. Choose another.",
				"ncmfse",
			)}
		</Notice>
	);

	// Modify block props.
	const blockProps = useBlockProps({
		className: "wp-block-navigation-item wp-block-outermost-mega-menu__toggle",
	});

	const justificationOptions = [
		{
			value: "left",
			icon: justifyLeft,
			label: __("Justify menu left", "ncmfse"),
			iconLabel: __("Left", "ncmfse"),
		},
		{
			value: "center",
			icon: justifyCenter,
			label: __("Justify menu center", "ncmfse"),
			iconLabel: __("Center", "ncmfse"),
		},
		{
			value: "right",
			icon: justifyRight,
			label: __("Justify menu right", "ncmfse"),
			iconLabel: __("Right", "ncmfse"),
		},
	];

	const widthOptions = [
		{
			value: "content",
			icon: alignNone,
			label: sprintf(
				// translators: %s: container size (i.e. 600px etc)
				__("Content width (%s wide)", "ncmfse"),
				layout.contentSize,
			),
			iconLabel: __("Content", "ncmfse"),
		},
		{
			value: "wide",
			icon: stretchWide,
			label: sprintf(
				// translators: %s: container size (i.e. 600px etc)
				__("Wide width (%s wide)", "ncmfse"),
				layout.wideSize,
			),
			iconLabel: __("Wide", "ncmfse"),
		},
		{
			value: "full",
			icon: stretchFullWidth,
			label: __("Full width", "ncmfse"),
			iconLabel: __("Full", "ncmfse"),
		},
	];

	return (
		<>
			<InspectorControls group="settings">
				<PanelBody
					className="outermost-mega-menu__settings-panel"
					title={__("Settings", "ncmfse")}
					initialOpen={true}
				>
					<TextControl
						label={__("Label", "ncmfse")}
						type="text"
						value={label}
						onChange={(value) => setAttributes({ label: value })}
						autoComplete="off"
					/>
					<ComboboxControl
						label={__("Menu Template", "ncmfse")}
						value={menuSlug}
						options={menuOptions}
						onChange={(value) => setAttributes({ menuSlug: value || "" })}
						help={
							hasMenus &&
							createInterpolateElement(
								__(
									"Create and modify menu templates in the <a>Site Editor</a>.",
									"ncmfse",
								),
								{
									a: (
										<a // eslint-disable-line
											href={menuTemplateUrl}
											target="_blank"
											rel="noreferrer"
										/>
									),
								},
							)
						}
					/>
					{!hasMenus && noMenusNotice}
					{hasMenus && !selectedMenuAndExists && menuDoesntExistNotice}
					<TextareaControl
						className="settings-panel__description"
						label={__("Description", "ncmfse")}
						type="text"
						value={description || ""}
						onChange={(descriptionValue) => {
							setAttributes({ description: descriptionValue });
						}}
						help={__(
							"The description will be displayed in the menu if the current theme supports it.",
							"ncmfse",
						)}
						autoComplete="off"
					/>
					<TextControl
						label={__("Title", "ncmfse")}
						type="text"
						value={title || ""}
						onChange={(titleValue) => {
							setAttributes({ title: titleValue });
						}}
						help={__(
							"Additional information to help clarify the purpose of the link.",
							"ncmfse",
						)}
						autoComplete="off"
					/>
					<ToggleControl
						label={__("Disable in navigation overlay", "ncmfse")}
						checked={disableWhenCollapsed}
						onChange={(value) => {
							setAttributes({
								disableWhenCollapsed: value,
							});
						}}
						help={__(
							"When the navigation options are displayed in an overlay, typically on mobile devices, disable the mega menu.",
							"ncmfse",
						)}
					/>
					{disableWhenCollapsed && (
						<TextControl
							label={__("Url", "ncmfse")}
							type="text"
							value={collapsedUrl || ""}
							onChange={(collapsedUrlValue) => {
								setAttributes({
									collapsedUrl: collapsedUrlValue,
								});
							}}
							help={__(
								"When the navigtion menu is collapsed, link to this URL instead.",
								"ncmfse",
							)}
							autoComplete="off"
						/>
					)}
				</PanelBody>
				<PanelBody
					className="outermost-mega-menu__layout-panel"
					title={__("Layout", "ncmfse")}
					initialOpen={true}
				>
					<HStack alignment="top" justify="space-between">
						<ToggleGroupControl
							className="block-editor-hooks__flex-layout-justification-controls"
							label={__("Justification", "ncmfse")}
							value={justifyMenu}
							onChange={(justificationValue) => {
								setAttributes({
									justifyMenu: (justificationValue as string) || "center",
								});
							}}
							isDeselectable={true}
						>
							{justificationOptions.map(({ value, icon, iconLabel }) => {
								return (
									<ToggleGroupControlOptionIcon
										key={value}
										value={value}
										icon={icon}
										label={iconLabel}
										disabled={value !== "center" && width !== "content"}
										style={
											value !== "center" && width !== "content"
												? { opacity: 0.5 }
												: {}
										}
									/>
								);
							})}
						</ToggleGroupControl>
						<ToggleGroupControl
							className="block-editor-hooks__flex-layout-justification-controls"
							label={__("Width", "ncmfse")}
							value={width || "content"}
							onChange={(widthValue) => {
								if (widthValue !== "content") {
									setAttributes({
										width: (widthValue as string) || "",
										justifyMenu: "center",
									});
								} else {
									setAttributes({
										width: widthValue,
									});
								}
							}}
							__nextHasNoMarginBottom
						>
							{widthOptions.map(({ value, icon, iconLabel }) => {
								return (
									<ToggleGroupControlOptionIcon
										key={value}
										value={value}
										icon={icon}
										label={iconLabel}
									/>
								);
							})}
						</ToggleGroupControl>
					</HStack>
					<BaseControl
						help={__(
							'Mega-menu with width "Full" or "Wide" will always be centered.',
							"ncmfse",
						)}
					>
						<p></p>
					</BaseControl>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<div className="wp-block-navigation-item__content wp-block-outermost-mega-menu__toggle">
					<RichText
						identifier="label"
						className="wp-block-navigation-item__label"
						value={label}
						onChange={(labelValue) =>
							setAttributes({
								label: labelValue,
							})
						}
						aria-label={__("Mega menu link text", "ncmfse")}
						placeholder={__("Add label…", "ncmfse")}
						allowedFormats={[
							"core/bold",
							"core/italic",
							"core/image",
							"core/strikethrough",
						]}
					/>
					<span className="wp-block-outermost-mega-menu__toggle-icon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="12"
							height="12"
							viewBox="0 0 12 12"
							fill="none"
						>
							<path d="M1.50002 4L6.00002 8L10.5 4" strokeWidth="1.5"></path>
						</svg>
					</span>
					{description && (
						<span className="wp-block-navigation-item__description">
							{description}
						</span>
					)}
				</div>
			</div>
		</>
	);
}

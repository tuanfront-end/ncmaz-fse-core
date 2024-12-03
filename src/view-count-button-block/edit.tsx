import { __ } from "@wordpress/i18n";
import { useEntityRecord } from "@wordpress/core-data";
import {
	InspectorControls,
	useBlockProps,
	withColors,
	__experimentalColorGradientSettingsDropdown as ColorGradientSettingsDropdown,
	__experimentalUseMultipleOriginColorsAndGradients as useMultipleOriginColorsAndGradients,
	useInnerBlocksProps,
} from "@wordpress/block-editor";
import "./editor.scss";
import { TAttrs, EditProps } from "../types";
import metadata from "./block.json";
import { PanelBody, ToggleControl } from "@wordpress/components";

type Attributes = TAttrs<typeof metadata.attributes>;

function Edit(props: EditProps<Attributes>) {
	const {
		clientId,
		attributes,
		setAttributes,
		context: { postId, postType },
		activeColor,
		activeBgColor,
		activeBorderColor,
		setActiveColor,
		setActiveBgColor,
		setActiveBorderColor,
	} = props;

	const {
		customActiveBgColor,
		customActiveBorderColor,
		customActiveColor,
		showCountText,
	} = attributes;

	// get the record of the post
	const { record } = useEntityRecord<Record<string, any>>(
		"postType",
		postType as string,
		postId as number,
	);
	const postViewCount = postId ? record?.acf?.view_count || 0 : 99;

	//
	const colorGradientSettings = useMultipleOriginColorsAndGradients() as any;
	const colorSettings = [
		{
			label: __("Active Text/Icon", "ncmfse"),
			value: activeColor.color || customActiveColor,
			onChange: (value: string) => {
				setActiveColor(value);
				setAttributes({ customActiveColor: value });
			},
			resetAllFilter: () => {
				setActiveColor(undefined);
				setAttributes({ customActiveColor: "#2563eb" });
			},
		},
		{
			label: __("Active Background", "ncmfse"),
			value: activeBgColor.color || customActiveBgColor,
			onChange: (value: string) => {
				setActiveBgColor(value);
				setAttributes({ customActiveBgColor: value });
			},
			resetAllFilter: () => {
				setActiveBgColor(undefined);
				setAttributes({ customActiveBgColor: undefined });
			},
		},
		{
			label: __("Active Border", "ncmfse"),
			value: activeBorderColor.color || customActiveBorderColor,
			onChange: (value: string) => {
				setActiveBorderColor(value);
				setAttributes({ customActiveBorderColor: value });
			},
			resetAllFilter: () => {
				setActiveBorderColor(undefined);
				setAttributes({ customActiveBorderColor: undefined });
			},
		},
	];

	const blockProps = useBlockProps({
		className: "nc-post-reaction-button",
		style: {
			"--active-color": activeColor.slug
				? `var( --wp--preset--color--${activeColor.slug} )`
				: customActiveColor,
			"--active-background-color": activeBgColor.slug
				? `var( --wp--preset--color--${activeBgColor.slug} )`
				: customActiveBgColor,
			"--active-border-color": activeBorderColor.slug
				? `var( --wp--preset--color--${activeBorderColor.slug} )`
				: customActiveBorderColor,
		},
	});
	const { children, ...innerBlocksProps } = useInnerBlocksProps(blockProps, {
		template: [
			[
				"outermost/icon-block",
				{
					icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none"><path d="M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z" stroke="currentColor" stroke-width="1.5" /><path d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z" stroke="currentColor" stroke-width="2" /></svg>',
					iconColor: "contrast-2",
					iconColorValue: "var:preset|color|contrast-2",
					iconBackgroundColor: "shadcn-accent",
					iconBackgroundColorValue: "var:preset|color|shadcn-accent",
					itemsJustification: "center",
					width: "34px",
					hasNoIconFill: true,
					style: {
						border: {
							radius: "99px",
						},
						spacing: {
							padding: "8px",
						},
					},
				},
			],
		],
		templateLock: "insert",
	});

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Post View Count Button", "ncmfse")}>
					<ToggleControl
						__nextHasNoMarginBottom
						label={__("Show Count", "ncmfse")}
						help={__("Show/Hide count number", "ncmfse")}
						checked={showCountText}
						onChange={(newValue) => {
							setAttributes({ showCountText: newValue });
						}}
					/>
				</PanelBody>
			</InspectorControls>

			<InspectorControls group="color">
				{colorSettings.map(({ onChange, label, value, resetAllFilter }) => (
					// @ts-ignore
					<ColorGradientSettingsDropdown
						__experimentalIsRenderedInSidebar
						key={`like-btns-color-${label}`}
						settings={[
							{
								colorValue: value,
								label,
								onColorChange: onChange,
								isShownByDefault: true,
								resetAllFilter,
								enableAlpha: true,
							},
						]}
						panelId={clientId}
						{...colorGradientSettings}
					/>
				))}
				<p className="outermost-icon-block__color-settings__help">
					<strong>{__("Active: ", "ncmfse")}</strong>
					{__(
						"Set the color for the active state (liked/saved/hovering) of the button.",
						"ncmfse",
					)}
				</p>
			</InspectorControls>

			{/* @ts-ignore */}
			<div {...blockProps}>
				<div {...innerBlocksProps}>
					{children}
					{showCountText ? (
						<span className="nc__count">{postViewCount}</span>
					) : null}
				</div>
			</div>
		</>
	);

	// Other code will go here, don't forget or delete the closing curly brace!
}

export default withColors({
	activeColor: "active-color",
	activeBgColor: "active-background-color",
	activeBorderColor: "active-border-color",
})(Edit);

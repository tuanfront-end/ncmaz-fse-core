import { __ } from "@wordpress/i18n";
import { useEntityRecords } from "@wordpress/core-data";
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
		context: { postId },
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

	const { records } = useEntityRecords("root", "comment", {
		per_page: -1,
		post: postId,
	});

	const commentCount = records?.length || 0;
	//
	const colorGradientSettings = useMultipleOriginColorsAndGradients() as any;
	const colorSettings = [
		{
			label: __("Active Text/Icon ", "ncmfse"),
			value: activeColor.color || customActiveColor,
			onChange: (value: string) => {
				setActiveColor(value);
				setAttributes({ customActiveColor: value });
			},
			resetAllFilter: () => {
				setActiveColor(undefined);
				setAttributes({ customActiveColor: "#16a34a" });
			},
		},
		{
			label: __("Active Background ", "ncmfse"),
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
			label: __("Active Border ", "ncmfse"),
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
					icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none"><path d="M8 13.5H16M8 8.5H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M6.09881 19C4.7987 18.8721 3.82475 18.4816 3.17157 17.8284C2 16.6569 2 14.7712 2 11V10.5C2 6.72876 2 4.84315 3.17157 3.67157C4.34315 2.5 6.22876 2.5 10 2.5H14C17.7712 2.5 19.6569 2.5 20.8284 3.67157C22 4.84315 22 6.72876 22 10.5V11C22 14.7712 22 16.6569 20.8284 17.8284C19.6569 19 17.7712 19 14 19C13.4395 19.0125 12.9931 19.0551 12.5546 19.155C11.3562 19.4309 10.2465 20.0441 9.14987 20.5789C7.58729 21.3408 6.806 21.7218 6.31569 21.3651C5.37769 20.6665 6.29454 18.5019 6.5 17.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" /></svg>',
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
				<PanelBody title={__("Post Comment Count Button", "ncmfse")}>
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
						" Set the color for the active state (liked/saved/hovering) of the button.",
						"ncmfse",
					)}
				</p>
			</InspectorControls>

			{/* @ts-ignore */}
			<div {...blockProps}>
				<div {...innerBlocksProps}>
					{children}
					{showCountText ? (
						<span className="nc__count">{commentCount}</span>
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

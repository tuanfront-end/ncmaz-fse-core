import { __ } from "@wordpress/i18n";
import {
	InspectorControls,
	useBlockProps,
	InnerBlocks,
	getSpacingPresetCssVar,
	withColors,
	__experimentalColorGradientSettingsDropdown as ColorGradientSettingsDropdown,
	__experimentalUseMultipleOriginColorsAndGradients as useMultipleOriginColorsAndGradients,
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
		activeColor,
		activeBgColor,
		activeBorderColor,
		activeIconBgColor,
		setActiveColor,
		setActiveBgColor,
		setActiveBorderColor,
		setActiveIconBgColor,
	} = props;

	const {
		customActiveBgColor,
		customActiveBorderColor,
		customActiveColor,
		customActiveIconBgColor,
		style,
	} = attributes;

	const gapCSSValue = getSpacingPresetCssVar(
		attributes.style?.spacing?.blockGap,
	);

	//
	const colorGradientSettings = useMultipleOriginColorsAndGradients() as any;
	const colorSettings = [
		{
			label: __("Active Color", "ncmfse"),
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
			label: __("Active Background Color", "ncmfse"),
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
			label: __("Active Border Color", "ncmfse"),
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
		{
			label: __("Active Icon Background Color", "ncmfse"),
			value: activeIconBgColor.color || customActiveIconBgColor,
			onChange: (value: string) => {
				setActiveIconBgColor(value);
				setAttributes({ customActiveIconBgColor: value });
			},
			resetAllFilter: () => {
				setActiveIconBgColor(undefined);
				setAttributes({ customActiveIconBgColor: "#00ba7c1a" });
			},
		},
	];

	return (
		<>
			{/* <InspectorControls>
				<PanelBody title={__("Post Comment Count Button", "ncmfse")}>
					
				</PanelBody>
			</InspectorControls> */}

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
						"Set the color for the active state (hovering/active) of the button.",
						"ncmfse",
					)}
				</p>
			</InspectorControls>

			<div
				{...useBlockProps({
					className: "",
					style: {
						...style,
						gap: gapCSSValue,
						"--active-color": activeColor.slug
							? `var( --wp--preset--color--${activeColor.slug} )`
							: customActiveColor,
						"--active-background-color": activeBgColor.slug
							? `var( --wp--preset--color--${activeBgColor.slug} )`
							: customActiveBgColor,
						"--active-border-color": activeBorderColor.slug
							? `var( --wp--preset--color--${activeBorderColor.slug} )`
							: customActiveBorderColor,
						"--active-icon-background-color": activeIconBgColor.slug
							? `var( --wp--preset--color--${activeIconBgColor.slug} )`
							: customActiveIconBgColor,
					},
				})}
			>
				{/* insert Innerblock */}
				<InnerBlocks
					allowedBlocks={[
						"ncmfse/snap-scroll-arrow-previous",
						"ncmfse/snap-scroll-arrow-next",
					]}
					template={[
						["ncmfse/snap-scroll-arrow-previous", {}],
						["ncmfse/snap-scroll-arrow-next", {}],
					]}
					templateLock="insert"
				/>
			</div>
		</>
	);

	// Other code will go here, don't forget or delete the closing curly brace!
}

export default withColors({
	activeColor: "active-color",
	activeBgColor: "active-background-color",
	activeBorderColor: "active-border-color",
	activeIconBgColor: "active-icon-background-color",
})(Edit);

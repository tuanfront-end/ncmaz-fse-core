import { __ } from "@wordpress/i18n";
import { useEntityRecords } from "@wordpress/core-data";
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
		context: { postId },
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
		showCountText,
	} = attributes;

	const currentUserId = window.wp.data.select("core").getCurrentUser()?.id || 0;

	const { records } = useEntityRecords("postType", "post_save", {
		post_status: "publish",
		per_page: -1,
		meta_key: "post_id",
		meta_value: postId,
	});
	const postSavesCount = records?.length || 0;

	// check if the current user liked the post
	const { records: isSavedRecords } = useEntityRecords(
		"postType",
		"post_save",
		{
			post_status: "publish",
			per_page: -1,
			meta_query: [
				{ key: "user_id", value: currentUserId, compare: "=" },
				{ key: "post_id", value: postId, compare: "=" },
			],
		},
	);
	const isSaved = (isSavedRecords?.length || 0) > 0;

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
				setAttributes({ customActiveColor: "#27272a" });
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
				setAttributes({ customActiveIconBgColor: "#e4e4e794" });
			},
		},
	];

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Post Save Button", "ncmfse")}>
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

			<div
				{...useBlockProps({
					className: "nc-post-reaction-button" + (isSaved ? " is-actived" : ""),
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
					allowedBlocks={["outermost/icon-block"]}
					template={[
						[
							"outermost/icon-block",
							{
								icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" /></svg>',
								iconColorValue: "#334155",
								iconBackgroundColorValue: "#f3f4f6",
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
					]}
					templateLock="insert"
				/>

				{showCountText ? (
					<span className="nc__count">{postSavesCount}</span>
				) : null}
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

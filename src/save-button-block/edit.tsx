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

	const currentUser = window.wp.data.select("core").getCurrentUser() || {};

	// get the record of the post
	const { record } = useEntityRecord<Record<string, any>>(
		"postType",
		postType as string,
		postId as number,
	);
	const postSaveCount = postId ? record?.acf?.save_count || 0 : 99;

	// liked_posts is a string of post ids separated by commas: "1,2,3,4"
	let user_saved_posts: string = currentUser?.acf?.saved_posts || "";
	if (typeof user_saved_posts !== "string") {
		user_saved_posts = "";
	}
	const savedPosts = user_saved_posts.split(",");
	const isSaved = savedPosts.includes(String(postId as number));

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
				setAttributes({ customActiveColor: "#27272a" });
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
		className: "nc-post-reaction-button" + (isSaved ? " is-actived" : ""),
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
					icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" /></svg>',
					iconColor: "contrast-2",
					iconColorValue: "hsl(215 13.8% 34.1%)",
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

			{/* @ts-ignore */}
			<div {...blockProps}>
				<div {...innerBlocksProps}>
					{children}
					{showCountText ? (
						<span className="nc__count">{postSaveCount}</span>
					) : null}
				</div>
			</div>
		</>
	);
}

export default withColors({
	activeColor: "active-color",
	activeBgColor: "active-background-color",
	activeBorderColor: "active-border-color",
})(Edit);

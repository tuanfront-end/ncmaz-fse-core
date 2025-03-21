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

// get type keyof Attributes with type value is type
type Attributes = TAttrs<typeof metadata.attributes>;

function Edit(props: EditProps<Attributes>) {
	const {
		clientId,
		attributes,
		setAttributes,
		context: { postId: postIdContext, commentId, postType },
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
	let postId = postIdContext as number;

	if (!postType && !postIdContext && commentId) {
		postId = commentId as number;
	}

	// get the record of the post
	const { record } = useEntityRecord<Record<string, any>>(
		"postType",
		postType as string,
		postId,
	);
	const postLikeCount = postId ? record?.acf?.like_count || 0 : 99;

	// check if the current user liked the post
	// liked_posts is a string of post ids separated by commas: "1,2,3,4"
	let user_liked_posts: string = currentUser?.acf?.liked_posts || "";
	if (typeof user_liked_posts !== "string") {
		user_liked_posts = "";
	}
	const likedPosts = user_liked_posts.split(",");
	const isLiked = likedPosts.includes(String(postId));

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
				setAttributes({ customActiveColor: "#dc2626" });
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
		className: "nc-post-reaction-button" + (isLiked ? " is-actived" : ""),
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
					icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none"><path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" /></svg>',
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
				<PanelBody title={__("Post Like Button", "ncmfse")}>
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
						<span className="nc__count">{postLikeCount}</span>
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

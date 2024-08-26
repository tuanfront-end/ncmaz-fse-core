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
import { EditProps } from "../types";
import metadata from "./block.json";
import { createAttributesType } from "../utils/utils";

// get type keyof Attributes with type of value
type Attributes = ReturnType<
	typeof createAttributesType<typeof metadata.attributes>
>;

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
	} = attributes;

	const currentUserId = window.wp.data.select("core").getCurrentUser()?.id || 0;

	// get the post likes count
	const { records } = useEntityRecords("postType", "post_like", {
		post_status: "publish",
		per_page: -1,
		meta_key: "post_id",
		meta_value: postId,
	});
	const postLikesCount = records?.length || 0;

	// check if the current user liked the post
	const { records: isLikedRecords } = useEntityRecords(
		"postType",
		"post_like",
		{
			post_status: "publish",
			per_page: -1,
			meta_query: [
				{ key: "user_id", value: currentUserId, compare: "=" },
				{ key: "post_id", value: postId, compare: "=" },
			],
		},
	);
	const isLiked = (isLikedRecords?.length || 0) > 0;

	const gapCSSValue = getSpacingPresetCssVar(
		attributes.style?.spacing?.blockGap,
	);

	//
	const colorGradientSettings = useMultipleOriginColorsAndGradients();
	const colorSettings = [
		{
			label: __("Active Color", "ncmaz-fse-core"),
			value: activeColor.color || customActiveColor,
			onChange: (value: string) => {
				setActiveColor(value);
				setAttributes({ customActiveColor: value });
			},
			resetAllFilter: () => {
				setActiveColor(undefined);
				setAttributes({ customActiveColor: undefined });
			},
		},
		{
			label: __("Active Background Color", "ncmaz-fse-core"),
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
			label: __("Active Border Color", "ncmaz-fse-core"),
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
			label: __("Active Icon Background Color", "ncmaz-fse-core"),
			value: activeIconBgColor.color || customActiveIconBgColor,
			onChange: (value: string) => {
				setActiveIconBgColor(value);
				setAttributes({ customActiveIconBgColor: value });
			},
			resetAllFilter: () => {
				setActiveIconBgColor(undefined);
				setAttributes({ customActiveIconBgColor: undefined });
			},
		},
	];

	return (
		<>
			<InspectorControls group="color">
				{colorSettings.map(({ onChange, label, value, resetAllFilter }) => (
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
			</InspectorControls>
			<div
				{...useBlockProps({
					className: "nc-post-reaction-button" + (isLiked ? " is-actived" : ""),
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
								icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none"><path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /></svg>',
								iconColorValue: "#000000",
								iconBackgroundColorValue: "#eee",
								itemsJustification: "center",
								width: "36px",
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

				<span className="nc__count">{postLikesCount}</span>
			</div>
		</>
	);
}

export default withColors({
	activeColor: "active-color",
	activeBgColor: "active-background-color",
	activeBorderColor: "active-border-color",
	activeIconBgColor: "active-icon-background-color",
})(Edit);

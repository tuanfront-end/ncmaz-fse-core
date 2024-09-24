import { __ } from "@wordpress/i18n";
import { PanelBody, TextControl, ToggleControl } from "@wordpress/components";
import {
	useBlockProps,
	InspectorControls,
	InnerBlocks,
	HeightControl,
} from "@wordpress/block-editor";
import "./editor.scss";
import { EditProps, TAttrs } from "../types";
import metadata from "./block.json";

type Attributes = TAttrs<typeof metadata.attributes>;

export default function Edit(props: EditProps<Attributes>) {
	const { attributes, setAttributes, isSelected } = props;
	const { imageHeight } = attributes;

	const blockProps = useBlockProps({});

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Reading Time", "ncmfse")}>
					<HeightControl
						label={"My Height Control"}
						onChange={(value) => setAttributes({ imageHeight: value })}
						value={imageHeight}
					/>
					{/* <TextControl
						__nextHasNoMarginBottom
						label={__("Text", "ncmfse")}
						value={minReadText}
						onChange={(value) => setAttributes({ minReadText: value })}
					/> */}

					{/* <ToggleControl
						__nextHasNoMarginBottom
						label={__("Show Count", "ncmfse")}
						help={__("Show/Hide count number", "ncmfse")}
						checked={showCountText}
						onChange={(newValue) => {
							setAttributes({ showCountText: newValue });
						}}
					/> */}
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<div
					className="ncmfse-current-user-avatar__icon"
					style={{
						width: imageHeight,
						height: imageHeight,
					}}
				>
					<img src="https://github.com/shadcn.png" alt="avatar" />

					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width={24}
						height={24}
						color={"currentColor"}
						fill={"none"}
					>
						<circle
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							strokeWidth="1.5"
						/>
						<path
							d="M7.5 17C9.8317 14.5578 14.1432 14.4428 16.5 17M14.4951 9.5C14.4951 10.8807 13.3742 12 11.9915 12C10.6089 12 9.48797 10.8807 9.48797 9.5C9.48797 8.11929 10.6089 7 11.9915 7C13.3742 7 14.4951 8.11929 14.4951 9.5Z"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
						/>
					</svg>
				</div>
				{/* <InnerBlocks
					template={[
						// [
						// 	"core/group",
						// 	{
						// 		className: "ncmfse-current-user-avatar__icon",
						// 		metadata: { name: "Avatar" },
						// 	},
						// 	[
						// 		[
						// 			"outermost/icon-block",
						// 			{
						// 				icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none"><path d="M7.78256 17.1112C6.68218 17.743 3.79706 19.0331 5.55429 20.6474C6.41269 21.436 7.36872 22 8.57068 22H15.4293C16.6313 22 17.5873 21.436 18.4457 20.6474C20.2029 19.0331 17.3178 17.743 16.2174 17.1112C13.6371 15.6296 10.3629 15.6296 7.78256 17.1112Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M15.5 10C15.5 11.933 13.933 13.5 12 13.5C10.067 13.5 8.5 11.933 8.5 10C8.5 8.067 10.067 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10Z" stroke="currentColor" stroke-width="1.5" /><path d="M2.854 16C2.30501 14.7664 2 13.401 2 11.9646C2 6.46129 6.47715 2 12 2C17.5228 2 22 6.46129 22 11.9646C22 13.401 21.695 14.7664 21.146 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /></svg>',
						// 				iconColorValue: "#334155",
						// 				iconBackgroundColorValue: "#f3f4f6",
						// 				itemsJustification: "center",
						// 				width: "40px",
						// 				hasNoIconFill: true,
						// 				style: {
						// 					border: {
						// 						radius: "99px",
						// 					},
						// 					spacing: {
						// 						padding: "8px",
						// 					},
						// 				},
						// 			},
						// 		],
						// 	],
						// ],
						[
							"ncmfse/current-user-avatar-dropdown",
							{ metadata: { name: "Dropdown Content" } },
							[
								[
									"core/group",
									{
										metadata: { name: "Logged-out Avatar Dropdown" },
										backgroundColor: "base",
										style: {
											backgroundColor: "base",
											spacing: {
												padding: "1rem",
												blockGap: "0.75rem",
											},
											border: { width: "1px" },
										},
										blockVisibility: {
											controlSets: [
												{
													enable: true,
													controls: {
														userRole: { visibilityByRole: "logged-out" },
													},
												},
											],
										},
									},
									[
										["core/paragraph", { content: "Login" }],
										["core/paragraph", { content: "Sign up" }],
										["core/paragraph", { content: "Dropdown Menu 3" }],
										["core/separator", {}],
										["core/paragraph", { content: "Dropdown Menu 4" }],
									],
								],
								[
									"core/group",
									{
										metadata: { name: "Logged-in Avatar Dropdown" },
										backgroundColor: "base",
										style: {
											backgroundColor: "base",
											spacing: {
												padding: "1rem",
												blockGap: "0.75rem",
											},
											border: { width: "1px" },
										},
										blockVisibility: {
											controlSets: [
												{
													enable: true,
													controls: {
														userRole: { visibilityByRole: "logged-in" },
													},
												},
											],
										},
									},
									[
										["core/paragraph", { content: "Author page" }],
										["core/paragraph", { content: "Wishlist" }],
										["core/paragraph", { content: "Dropdown Menu 3" }],
										["core/separator", {}],
										["core/paragraph", { content: "Logout" }],
									],
								],
							],
						],
					]}
					templateLock="insert"
				/> */}
			</div>
		</>
	);
}

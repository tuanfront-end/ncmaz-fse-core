import { __ } from "@wordpress/i18n";
import { useEntityRecord } from "@wordpress/core-data";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";
import { TAttrs, EditProps } from "../types";
import metadata from "./block.json";
import {
	PanelBody,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
} from "@wordpress/components";

type Attributes = TAttrs<typeof metadata.attributes>;

function Edit(props: EditProps<Attributes>) {
	const {
		attributes,
		context: { postId, postType },
		setAttributes,
	} = props;

	const { iconType } = attributes;

	const { record } = useEntityRecord<Record<string, any>>(
		"postType",
		postType as string,
		postId as number,
	);

	const blockProps = useBlockProps({});

	const renderIcon = (icontype: string) => {
		switch (icontype) {
			case "2":
				return (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width={24}
						height={24}
						color={"currentColor"}
						fill={"none"}
					>
						<path
							d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinejoin="round"
						/>
					</svg>
				);
			case "3":
				return (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
						/>
					</svg>
				);
			case "4":
				return (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width={24}
						height={24}
						color={"currentColor"}
						fill={"none"}
					>
						<path
							d="M11 7.13678V17M11 7.13678C12.8928 8.81698 14.5706 10.0042 16.0063 10.6818C16.6937 11.0062 17.3165 11.0682 18.0198 10.7552C19.7751 9.97419 21 8.20629 21 6.15045C19.0715 7.50911 16.6876 6.77163 14.6847 5.50548C13.0454 4.46918 12.2258 3.95102 11.8569 4.00364C11.5781 4.0434 11.4283 4.1242 11.244 4.33421C11 4.61216 11 5.4537 11 7.13678Z"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M11 17C11 19.2091 9.20914 21 7 21C4.79086 21 3 19.2091 3 17C3 14.7909 4.79086 13 7 13C9.20914 13 11 14.7909 11 17Z"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				);

			default:
				return (
					<svg viewBox="0 0 36 36" aria-hidden="true" className="size-6">
						<path d="M33.75 16.701C34.75 17.2783 34.75 18.7217 33.75 19.299L11.25 32.2894C10.25 32.8668 9 32.1451 9 30.9904L9 5.00962C9 3.85491 10.25 3.13323 11.25 3.71058L33.75 16.701Z"></path>
					</svg>
				);
		}
	};

	if (record?.format !== "video" && record?.format !== "audio") {
		return null;
	}

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={__("Settings", "ncmfse")}
					className="wp-block-ncmfse-post-media-play-button-PanelBody__settings"
				>
					<ToggleGroupControl
						isBlock
						label={__("Icon")}
						onChange={(value) => setAttributes({ iconType: value as string })}
						value={iconType}
					>
						<ToggleGroupControlOptionIcon
							label="1"
							value="1"
							icon={renderIcon("1")}
						/>
						<ToggleGroupControlOptionIcon
							label="2"
							value="2"
							icon={renderIcon("2")}
						/>
						<ToggleGroupControlOptionIcon
							label="3"
							value="3"
							icon={renderIcon("3")}
						/>
						<ToggleGroupControlOptionIcon
							label="4"
							value="4"
							icon={renderIcon("4")}
						/>
					</ToggleGroupControl>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>{renderIcon(iconType)}</div>
		</>
	);
}

export default Edit;

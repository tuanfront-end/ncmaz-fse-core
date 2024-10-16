import clsx from "clsx";
import { __ } from "@wordpress/i18n";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { useState } from "@wordpress/element";
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
		setAttributes,
		context: {},
	} = props;

	const { darkIcon, lightIcon } = attributes;

	const [isDarkMode, setIsDarkMode] = useState(false);

	const renderDarkIcon = (darkIcon: string) => {
		switch (darkIcon) {
			case "2":
				return (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width={24}
						height={24}
						color={"#000000"}
						fill={"none"}
					>
						<path
							d="M19.5483 18C20.7476 16.9645 21.5819 15.6272 22 14.1756C19.5473 14.4746 17.0369 13.3432 15.7234 11.1113C14.4099 8.87928 14.6664 6.1807 16.1567 4.2463C14.1701 3.75234 11.9929 3.98823 10.0779 5.07295C7.30713 6.64236 5.83056 9.56635 6.0155 12.5"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M2 15.3739C3.13649 16.1865 4.59053 16.1865 5.72702 15.3739C6.41225 14.8754 7.31476 14.8754 7.99999 15.3739C9.13648 16.1865 10.6072 16.2049 11.727 15.3924M17 19.6352C15.8635 18.8226 14.4095 18.8226 13.273 19.6352C12.5877 20.1338 11.6685 20.1153 10.9833 19.6167C9.8468 18.8042 8.39277 18.8042 7.27299 19.6167C6.57104 20.1153 5.68524 20.1153 5 19.6167"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
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
							d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
						/>
					</svg>
				);

			default:
				return (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width={24}
						height={24}
						color={"#000000"}
						fill={"none"}
					>
						<path
							d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				);
		}
	};

	const renderLightIcon = (darkIcon: string) => {
		switch (darkIcon) {
			case "2":
				return (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width={24}
						height={24}
						color={"#000000"}
						fill={"none"}
					>
						<path
							d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"
							stroke="currentColor"
							strokeWidth="1.5"
						/>
						<path
							d="M11.9955 3H12.0045M11.9961 21H12.0051M18.3588 5.63599H18.3678M5.63409 18.364H5.64307M5.63409 5.63647H5.64307M18.3582 18.3645H18.3672M20.991 12.0006H21M3 12.0006H3.00898"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
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
							d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
						/>
					</svg>
				);

			default:
				return (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width={24}
						height={24}
						color={"#000000"}
						fill={"none"}
					>
						<path
							d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"
							stroke="currentColor"
							strokeWidth="1.5"
						/>
						<path
							d="M12 2V3.5M12 20.5V22M19.0708 19.0713L18.0101 18.0106M5.98926 5.98926L4.9286 4.9286M22 12H20.5M3.5 12H2M19.0713 4.92871L18.0106 5.98937M5.98975 18.0107L4.92909 19.0714"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
						/>
					</svg>
				);
		}
	};

	const blockProps = useBlockProps();

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={__("Settings", "ncmfse")}
					className="wp-block-ncmfse-toggle-dark-mode-PanelBody__settings"
				>
					<ToggleGroupControl
						isBlock
						label={__("Dark Icon")}
						onChange={(value) => setAttributes({ darkIcon: value as string })}
						value={darkIcon}
					>
						<ToggleGroupControlOptionIcon
							label="1"
							value="1"
							icon={renderDarkIcon("1")}
						/>
						<ToggleGroupControlOptionIcon
							label="2"
							value="2"
							icon={renderDarkIcon("2")}
						/>
						<ToggleGroupControlOptionIcon
							label="3"
							value="3"
							icon={renderDarkIcon("3")}
						/>
					</ToggleGroupControl>
					<ToggleGroupControl
						__nextHasNoMarginBottom
						isBlock
						label={__("Light Icon")}
						onChange={(value) => setAttributes({ lightIcon: value as string })}
						value={lightIcon}
					>
						<ToggleGroupControlOptionIcon
							label="1"
							value="1"
							icon={renderLightIcon("1")}
						/>
						<ToggleGroupControlOptionIcon
							label="2"
							value="2"
							icon={renderLightIcon("2")}
						/>
						<ToggleGroupControlOptionIcon
							label="3"
							value="3"
							icon={renderLightIcon("3")}
						/>
					</ToggleGroupControl>
				</PanelBody>
			</InspectorControls>

			<div
				{...blockProps}
				onClick={() => {
					const iframe = document.querySelector(
						'[name="editor-canvas"]',
					) as HTMLIFrameElement;
					if (iframe && iframe.contentWindow) {
						const iframehtmlElement =
							iframe.contentWindow.document.querySelector("html");
						iframehtmlElement?.classList.toggle("dark");
						const isDarkMode = iframehtmlElement?.classList.contains("dark");
						localStorage.theme = isDarkMode ? "dark" : "light";

						setIsDarkMode(!!isDarkMode);
					}
				}}
			>
				<div
					className={clsx(
						"wp-block-ncmfse-toggle-dark-mode__icon",
						isDarkMode && "activated",
					)}
				>
					{renderDarkIcon(darkIcon)}
				</div>
				<div
					className={clsx(
						"wp-block-ncmfse-toggle-dark-mode__icon",
						!isDarkMode && "activated",
					)}
				>
					{renderLightIcon(lightIcon)}
				</div>
			</div>
		</>
	);
}

export default Edit;

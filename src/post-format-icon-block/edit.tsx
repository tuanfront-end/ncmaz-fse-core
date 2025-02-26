import { __ } from "@wordpress/i18n";
import { useEntityRecord } from "@wordpress/core-data";
import { useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";
import { TAttrs, EditProps } from "../types";
import metadata from "./block.json";

type Attributes = TAttrs<typeof metadata.attributes>;

function Edit(props: EditProps<Attributes>) {
	const {
		attributes,
		context: { postId, postType },
	} = props;

	const {} = attributes;

	const { record } = useEntityRecord<Record<string, any>>(
		"postType",
		postType as string,
		postId as number,
	);

	const blockProps = useBlockProps({});

	const renderIcon = () => {
		if (!record?.format) {
			return null;
		}

		if (record.format === "quote") {
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
						d="M10 8C10 9.88562 10 10.8284 9.41421 11.4142C8.82843 12 7.88562 12 6 12C4.11438 12 3.17157 12 2.58579 11.4142C2 10.8284 2 9.88562 2 8C2 6.11438 2 5.17157 2.58579 4.58579C3.17157 4 4.11438 4 6 4C7.88562 4 8.82843 4 9.41421 4.58579C10 5.17157 10 6.11438 10 8Z"
						stroke="currentColor"
						strokeWidth="1.5"
					/>
					<path
						d="M10 7L10 11.4821C10 15.4547 7.48429 18.8237 4 20"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
					/>
					<path
						d="M22 8C22 9.88562 22 10.8284 21.4142 11.4142C20.8284 12 19.8856 12 18 12C16.1144 12 15.1716 12 14.5858 11.4142C14 10.8284 14 9.88562 14 8C14 6.11438 14 5.17157 14.5858 4.58579C15.1716 4 16.1144 4 18 4C19.8856 4 20.8284 4 21.4142 4.58579C22 5.17157 22 6.11438 22 8Z"
						stroke="currentColor"
						strokeWidth="1.5"
					/>
					<path
						d="M22 7L22 11.4821C22 15.4547 19.4843 18.8237 16 20"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
					/>
				</svg>
			);
		}
		if (record.format === "link") {
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
						d="M9.5 14.5L14.5 9.49995"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
					/>
					<path
						d="M16.8463 14.6095L19.4558 12C21.5147 9.94108 21.5147 6.60298 19.4558 4.54411C17.397 2.48524 14.0589 2.48524 12 4.54411L9.39045 7.15366M14.6095 16.8463L12 19.4558C9.94113 21.5147 6.60303 21.5147 4.54416 19.4558C2.48528 17.3969 2.48528 14.0588 4.54416 12L7.1537 9.39041"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
					/>
				</svg>
			);
		}
		if (record.format === "gallery") {
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
						d="M6 17.9745C6.1287 19.2829 6.41956 20.1636 7.07691 20.8209C8.25596 22 10.1536 22 13.9489 22C17.7442 22 19.6419 22 20.8209 20.8209C22 19.6419 22 17.7442 22 13.9489C22 10.1536 22 8.25596 20.8209 7.07691C20.1636 6.41956 19.2829 6.1287 17.9745 6"
						stroke="currentColor"
						strokeWidth="1.5"
					/>
					<path
						d="M2 10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2C13.7712 2 15.6569 2 16.8284 3.17157C18 4.34315 18 6.22876 18 10C18 13.7712 18 15.6569 16.8284 16.8284C15.6569 18 13.7712 18 10 18C6.22876 18 4.34315 18 3.17157 16.8284C2 15.6569 2 13.7712 2 10Z"
						stroke="currentColor"
						strokeWidth="1.5"
					/>
					<path
						d="M2 11.1185C2.61902 11.0398 3.24484 11.001 3.87171 11.0023C6.52365 10.9533 9.11064 11.6763 11.1711 13.0424C13.082 14.3094 14.4247 16.053 15 18"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinejoin="round"
					/>
					<path
						d="M12.9998 7H13.0088"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			);
		}
		if (record.format === "audio") {
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
		}
		if (record.format === "video") {
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
						d="M17.7001 21.3351C16.5281 21.4998 14.9996 21.4998 12.9501 21.4998H11.0501C7.01955 21.4998 5.0043 21.4998 3.75218 20.2476C2.50006 18.9955 2.50006 16.9803 2.50006 12.9498V11.0498C2.50006 7.01925 2.50006 5.00399 3.75218 3.75187C5.0043 2.49976 7.01955 2.49976 11.0501 2.49976H12.9501C16.9806 2.49976 18.9958 2.49976 20.2479 3.75187C21.5001 5.00399 21.5001 7.01925 21.5001 11.0498V12.9498C21.5001 14.158 21.5001 15.1851 21.4663 16.0648C21.4393 16.7699 21.4258 17.1224 21.1588 17.2541C20.8918 17.3859 20.5932 17.1746 19.9958 16.752L18.6501 15.7998"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M14.9453 12.3948C14.7686 13.0215 13.9333 13.4644 12.2629 14.3502C10.648 15.2064 9.8406 15.6346 9.18992 15.4625C8.9209 15.3913 8.6758 15.2562 8.47812 15.07C8 14.6198 8 13.7465 8 12C8 10.2535 8 9.38018 8.47812 8.92995C8.6758 8.74381 8.9209 8.60868 9.18992 8.53753C9.8406 8.36544 10.648 8.79357 12.2629 9.64983C13.9333 10.5356 14.7686 10.9785 14.9453 11.6052C15.0182 11.8639 15.0182 12.1361 14.9453 12.3948Z"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinejoin="round"
					/>
				</svg>
			);
		}

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
					d="M17.0235 3.03358L16.0689 2.77924C13.369 2.05986 12.019 1.70018 10.9555 2.31074C9.89196 2.9213 9.53023 4.26367 8.80678 6.94841L7.78366 10.7452C7.0602 13.4299 6.69848 14.7723 7.3125 15.8298C7.92652 16.8874 9.27651 17.247 11.9765 17.9664L12.9311 18.2208C15.631 18.9401 16.981 19.2998 18.0445 18.6893C19.108 18.0787 19.4698 16.7363 20.1932 14.0516L21.2163 10.2548C21.9398 7.57005 22.3015 6.22768 21.6875 5.17016C21.0735 4.11264 19.7235 3.75295 17.0235 3.03358Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M16.8538 7.43306C16.8538 8.24714 16.1901 8.90709 15.3714 8.90709C14.5527 8.90709 13.889 8.24714 13.889 7.43306C13.889 6.61898 14.5527 5.95904 15.3714 5.95904C16.1901 5.95904 16.8538 6.61898 16.8538 7.43306Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M12 20.9463L11.0477 21.2056C8.35403 21.9391 7.00722 22.3059 5.94619 21.6833C4.88517 21.0608 4.52429 19.6921 3.80253 16.9547L2.78182 13.0834C2.06006 10.346 1.69918 8.97731 2.31177 7.89904C2.84167 6.96631 4 7.00027 5.5 7.00015"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
			</svg>
		);
	};

	if (!record?.format || record?.format === "standard") {
		return null;
	}

	return <div {...blockProps}>{renderIcon()}</div>;
}

export default Edit;

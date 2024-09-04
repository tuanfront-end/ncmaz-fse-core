/**
 * WordPress dependencies
 */
import { __experimentalNumberControl as NumberControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

interface PagesControlProps {
	page: number;
	onChange: (newPage: { page: number }) => void;
}

export const PageControl = ({ page, onChange }: PagesControlProps) => {
	return (
		<NumberControl
			__next40pxDefaultSize
			label={__("Page to show.")}
			value={page}
			min={0}
			onChange={(value) => {
				if (typeof value === "undefined") {
					return;
				}
				let newPage = 0;
				newPage = parseInt(value);
				if (isNaN(newPage) || newPage < 0) {
					return;
				}
				onChange({ page: newPage });
			}}
			help={__(
				"Use this to specify the number of pages of the query to display. If you set it to 0 or leave it blank, it will display the first page of the query.",
			)}
		/>
	);
};

export default PageControl;

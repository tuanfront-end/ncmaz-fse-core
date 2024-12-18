/**
 * WordPress dependencies
 */
import { RangeControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

const MIN_POSTS_PER_PAGE = 1;
const MAX_POSTS_PER_PAGE = 100;

interface PerPageControlProps {
	perPage: number;
	onChange: ({ perPage }: { perPage: number }) => void;
}

const PerPageControl = ({ perPage, onChange }: PerPageControlProps) => {
	return (
		<RangeControl
			__next40pxDefaultSize
			__nextHasNoMarginBottom
			label={__("Posts per page")}
			min={MIN_POSTS_PER_PAGE}
			max={MAX_POSTS_PER_PAGE}
			onChange={(newPerPage) => {
				if (typeof newPerPage === "undefined") {
					return;
				}
				if (
					isNaN(newPerPage) ||
					newPerPage < MIN_POSTS_PER_PAGE ||
					newPerPage > MAX_POSTS_PER_PAGE
				) {
					return;
				}
				onChange({ perPage: newPerPage as number });
			}}
			// @ts-ignore
			value={parseInt(perPage, 10)}
		/>
	);
};

export default PerPageControl;

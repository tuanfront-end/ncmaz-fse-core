/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import { titleDate } from "./icons";

const variations = [
	{
		name: "title-date",
		title: __("Title & Date"),
		icon: titleDate,
		attributes: {},
		innerBlocks: [
			["core/post-template", {}, [["core/post-title"], ["core/post-date"]]],
		],
		scope: ["block"],
	},
];

export default variations;

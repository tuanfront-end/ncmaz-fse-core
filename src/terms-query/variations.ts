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
			// ["core/post-template", {}, [["core/post-title"], ["core/post-date"]]],
			[
				"core/paragraph",
				{ content: __("Add a summary, this is term query paragraph!!") },
			],
			["ncmazfse-block/term-template-block", {}],
		],
		scope: ["block"],
	},
];

export default variations;

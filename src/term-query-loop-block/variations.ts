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
			[
				"ncmazfse-block/term-template",
				{},
				[
					["ncmazfse-block/term-name"],
					["ncmazfse-block/term-description"],
					["ncmazfse-block/term-count"],
				],
			],
		],
		scope: ["block"],
	},
];

export default variations;

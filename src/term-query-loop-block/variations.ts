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
				"ncmfse/term-template",
				{},
				[
					[
						"core/group",
						{},
						[
							["ncmfse/term-name"],
							["ncmfse/term-description"],
							["ncmfse/term-count"],
						],
					],
				],
			],
		],
		scope: ["block"],
	},
];

export default variations;

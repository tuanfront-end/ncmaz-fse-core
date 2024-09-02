/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import {
	titleDate,
	titleExcerpt,
	titleDateExcerpt,
	imageDateTitle,
} from "./icons";

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
	{
		name: "title-excerpt",
		title: __("Title & Excerpt"),
		icon: titleExcerpt,
		attributes: {},
		innerBlocks: [
			["core/post-template", {}, [["core/post-title"], ["core/post-excerpt"]]],
		],
		scope: ["block"],
	},
	{
		name: "title-date-excerpt",
		title: __("Title, Date, & Excerpt"),
		icon: titleDateExcerpt,
		attributes: {},
		innerBlocks: [
			[
				"core/post-template",
				{},
				[["core/post-title"], ["core/post-date"], ["core/post-excerpt"]],
			],
		],
		scope: ["block"],
	},
	{
		name: "image-date-title",
		title: __("Image, Date, & Title"),
		icon: imageDateTitle,
		attributes: {},
		innerBlocks: [
			[
				"core/post-template",
				{},
				[["core/post-featured-image"], ["core/post-date"], ["core/post-title"]],
			],
		],
		scope: ["block"],
	},
];

export default variations;

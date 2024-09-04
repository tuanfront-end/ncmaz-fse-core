/**
 * WordPress dependencies
 */
import { SelectControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

const orderOptions = [
	{
		label: __("Include/desc"),
		value: "include/desc",
	},
	{
		label: __("Include/asc"),
		value: "include/asc",
	},
	{
		/* translators: label for ordering posts by title in ascending order */
		label: __("A → Z"),
		value: "name/asc",
	},
	{
		/* translators: label for ordering posts by title in descending order */
		label: __("Z → A"),
		value: "name/desc",
	},
	{
		label: __("Count/asc"),
		value: "count/asc",
	},
	{
		label: __("Count/desc"),
		value: "count/desc",
	},
	{
		label: __("Term group/asc"),
		value: "term_group/asc",
	},
	{
		label: __("Term group/desc"),
		value: "term_group/desc",
	},
];

interface OrderControlProps {
	order: string;
	orderBy: string;
	onChange: (newOrder: { order: string; orderBy: string }) => void;
}

function OrderControl({ order, orderBy, onChange }: OrderControlProps) {
	return (
		<SelectControl
			__nextHasNoMarginBottom
			__next40pxDefaultSize
			label={__("Order by")}
			value={`${orderBy}/${order}`}
			options={orderOptions}
			onChange={(value) => {
				const [newOrderBy, newOrder] = value.split("/");
				onChange({ order: newOrder, orderBy: newOrderBy });
			}}
		/>
	);
}

export default OrderControl;

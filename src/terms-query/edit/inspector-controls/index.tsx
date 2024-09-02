/**
 * WordPress dependencies
 */
import {
	FormTokenField,
	PanelBody,
	QueryControls,
	SelectControl,
	ToggleControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { TokenItem } from "@wordpress/components/build-types/form-token-field/types";
import { useEntityRecords } from "@wordpress/core-data";
import { useMemo } from "@wordpress/element";
import { TermQueryEditProps } from "..";
import { MyTermQueryUpdateFuncT } from "../query-content";

export default function QueryInspectorControls(
	props: Pick<
		TermQueryEditProps,
		| "attributes"
		| "setQuery"
		| "setDisplayLayout"
		| "clientId"
		| "setAttributes"
	> & {
		setQuery: MyTermQueryUpdateFuncT;
	},
) {
	const { attributes, setQuery, setDisplayLayout, setAttributes, clientId } =
		props;
	const { myQuery, displayLayout } = attributes;
	const { perPage, isFilterByOrder, taxonomySlug, termIdList, inherit } =
		myQuery;

	const { records: taxonomiesRecords } = useEntityRecords<Record<string, any>>(
		"root",
		"taxonomy",
		{
			per_page: -1,
			orderby: "name",
			order: "asc",
		},
	);

	const { records: termRecords } = useEntityRecords<Record<string, any>>(
		"taxonomy",
		taxonomySlug,
		{
			per_page: -1,
			orderby: "name",
			order: "asc",
			_fields: "id,name,parent",
			context: "view",
		},
	);

	const taxonomies = useMemo(() => {
		const data =
			taxonomiesRecords?.map((item) => {
				if (!item?.visibility?.publicly_queryable) {
					return null;
				}
				return {
					value: item.slug,
					label: item.name,
				};
			}) || [];
		return data.filter((item) => item !== null);
	}, [taxonomiesRecords]);

	const termRecordsConvert = useMemo(() => {
		const data =
			termRecords?.map((item) => {
				let label = item.name;
				if (item.parent) {
					const parent = termRecords.find((term) => term.id === item.parent);
					if (parent) {
						label = `${parent.name} > ${label}`;
					}
				}

				return {
					...item,
					id: item.id.toString(),
					label,
				};
			}) || [];
		return data;
	}, [termRecords]);

	const termNameList = termRecordsConvert.map((item) => item.label);

	const getTermNameListFromIds = (ids: string[] = []) => {
		return termRecordsConvert
			.filter((item) => ids.includes(item.id))
			.map((item) => item.label);
	};
	const getTermIdsFromNames = (names: (string | TokenItem)[] = []) => {
		return termRecordsConvert
			.filter((item) => names.includes(item.label))
			.map((item) => item.id);
	};

	return (
		<>
			<PanelBody title={__("Settings")}>
				<ToggleControl
					__nextHasNoMarginBottom
					checked={inherit}
					label={__("Inherit sub-terms from template.")}
					onChange={(value) => {
						setQuery({ inherit: value });
					}}
					help={__("Display a list of sub-terms of the current Archive page.")}
				/>

				{/* // loai taxonomies -> lua chon loai taxonomy de filter terms */}
				{!inherit && (
					<SelectControl
						__nextHasNoMarginBottom
						label={__("Taxonomy type")}
						value={taxonomySlug}
						options={taxonomies}
						onChange={(value) => setQuery({ taxonomySlug: value })}
					/>
				)}

				{!inherit && (
					<ToggleControl
						__nextHasNoMarginBottom
						checked={isFilterByOrder}
						label={__("Filter by order.")}
						onChange={(value) => {
							setQuery({ isFilterByOrder: value });
						}}
						help={__(
							"Display a list of terms in a sort order-by or in a specific terms selected.",
						)}
					/>
				)}
			</PanelBody>

			{!isFilterByOrder && !inherit && (
				<PanelBody title={__("Terms")}>
					{/* // danh sach terms -> lua chon terms */}
					<FormTokenField
						__experimentalAutoSelectFirstMatch
						__experimentalExpandOnFocus
						label={__("Terms")}
						onChange={(value) => {
							if (!Array.isArray(value)) {
								return;
							}
							const newIds = getTermIdsFromNames(value);
							setQuery({ termIdList: newIds });
						}}
						suggestions={termNameList}
						value={getTermNameListFromIds(termIdList)}
					/>
				</PanelBody>
			)}

			{(inherit || !!isFilterByOrder) && (
				<PanelBody title={__("Query")}>
					<QueryControls
						numberOfItems={perPage}
						onNumberOfItemsChange={(value) => {
							setQuery({ perPage: value });
						}}
						minItems={1}
						maxItems={100}
					/>
				</PanelBody>
			)}
		</>
	);
}

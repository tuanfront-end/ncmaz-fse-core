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

export default function QueryInspectorControls(props) {
	const { attributes, setQuery, setDisplayLayout, setAttributes, clientId } =
		props;
	const { query, displayLayout, enhancedPagination } = attributes;
	const { order, orderBy, perPage, isFilterByOrder, taxonomySlug, termIdList } =
		query;

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
				{/* // loai taxonomies -> lua chon loai taxonomy de filter terms */}
				<SelectControl
					__nextHasNoMarginBottom
					label={__("Taxonomy type")}
					value={taxonomySlug}
					options={taxonomies}
					onChange={(value) => setQuery({ taxonomySlug: value })}
				/>

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
			</PanelBody>

			{!isFilterByOrder && (
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

			{!!isFilterByOrder && (
				<PanelBody title={__("Query")}>
					<QueryControls
						numberOfItems={perPage}
						onNumberOfItemsChange={(value) => {
							setQuery({ perPage: value });
						}}
						onOrderByChange={(value) => {
							setQuery({ orderBy: value });
						}}
						onOrderChange={(value) => {
							setQuery({ order: value });
						}}
						order={order}
						orderBy={orderBy}
					/>
				</PanelBody>
			)}
		</>
	);
}

/**
 * WordPress dependencies
 */
import {
	BaseControl,
	FormTokenField,
	PanelBody,
	SelectControl,
	ToggleControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { TokenItem } from "@wordpress/components/build-types/form-token-field/types";
import { useEntityRecords } from "@wordpress/core-data";
import { useMemo } from "@wordpress/element";
import { TermQueryEditProps } from "..";
import { MyTermQueryUpdateFuncT } from "../query-content";
import OrderControl from "./order-control";
import PerPageControl from "./per-page-control";
import PageControl from "./page-control";
import { usePostTypes, useTaxonomies } from "../../utils";

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
	const {
		perPage,
		isFilterByOrder,
		taxonomySlug,
		termIdList,
		inherit,
		excludeIdList,
		hideEmpty,
		order,
		orderBy,
		parentIdString,
		postType,
		page,
	} = myQuery;

	const taxonomiesRecords = useTaxonomies(postType);

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

	const { postTypesTaxonomiesMap = {}, postTypesSelectOptions } =
		usePostTypes();

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
					parent: item.parent,
				};
			}) || [];
		return data;
	}, [termRecords]);

	const childTermRecords = useMemo(() => {
		if (typeof parentIdString !== "string") {
			return termRecordsConvert;
		}
		return termRecordsConvert.filter((item) => item.parent == parentIdString);
	}, [termRecordsConvert, parentIdString]);

	const onPostTypeChange = (newValue: string) => {
		let updateQuery = { postType: newValue };
		// We need to dynamically update the `taxQuery` property,
		// by removing any not supported taxonomy from the query.
		const supportedTaxonomies = postTypesTaxonomiesMap[newValue];

		setQuery({
			...updateQuery,
			taxonomySlug: supportedTaxonomies[0],
			parent: null,
			termIdList: [],
			excludeIdList: [],
		});
	};

	const termNameList = termRecordsConvert.map((item) => item.label);
	const temChildNameList = childTermRecords.map((item) => item.label);

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

	const postTypeControlHelp = __(
		"Limit results to taxonomies associated with a specific post type.",
	);
	return (
		<>
			<PanelBody title={__("Settings")}>
				<ToggleControl
					__nextHasNoMarginBottom
					checked={inherit}
					label={__("Inherit from the archive page.")}
					onChange={(value) => {
						setQuery({ inherit: value });
					}}
					help={__(
						"Limit results are set to terms assigned to the parent - current archive page. Note: This only works in archive pages.",
					)}
				/>

				{!inherit &&
					(postTypesSelectOptions.length > 2 ? (
						<SelectControl
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							options={postTypesSelectOptions}
							value={postType}
							label={__("Post type")}
							onChange={onPostTypeChange}
							help={postTypeControlHelp}
						/>
					) : (
						<ToggleGroupControl
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							isBlock
							value={postType}
							label={__("Post type")}
							onChange={(value) => {
								value ? onPostTypeChange(value?.toString() || "") : null;
							}}
							help={postTypeControlHelp}
						>
							{postTypesSelectOptions.map((option) => (
								<ToggleGroupControlOption
									key={option.value}
									value={option.value}
									label={option.label}
								/>
							))}
						</ToggleGroupControl>
					))}

				{/* // loai taxonomies -> lua chon loai taxonomy de filter terms */}
				{!inherit && (
					<>
						{taxonomies.length ? (
							<SelectControl
								__nextHasNoMarginBottom
								label={__("Taxonomy type")}
								value={taxonomySlug}
								options={taxonomies}
								onChange={(value) => {
									setQuery({
										taxonomySlug: value,
										parent: null,
										termIdList: [],
										excludeIdList: [],
									});
								}}
							/>
						) : (
							<BaseControl
								label={__("Taxonomy type")}
								help={__(
									"No taxonomy found, please try again with another post type.",
								)}
							>
								<div />
							</BaseControl>
						)}
					</>
				)}

				<ToggleControl
					__nextHasNoMarginBottom
					checked={hideEmpty}
					label={__("Hide empty terms.")}
					onChange={(value) => {
						setQuery({ hideEmpty: value });
					}}
					help={__(
						"Display a list of terms that have posts associated with them.",
					)}
				/>

				{/* <ToggleControl
					__nextHasNoMarginBottom
					checked={isFilterByOrder}
					label={__("Filter by order.")}
					onChange={(value) => {
						setQuery({ isFilterByOrder: value });
					}}
					help={__(
						"Display a list of terms in a sort order-by or in a specific terms selected.",
					)}
				/> */}
			</PanelBody>

			<PanelBody title={__("Query")}>
				<OrderControl order={order} orderBy={orderBy} onChange={setQuery} />
				<PerPageControl perPage={perPage} onChange={setQuery} />
				<PageControl page={page} onChange={setQuery} />
			</PanelBody>

			{!inherit && (
				<PanelBody title={__("Terms Settings")} initialOpen={false}>
					{!!termNameList.length ? (
						<>
							<BaseControl
								help={__(
									"Limit result set to terms assigned to a specific parent. Data will return empty if the selected has no children. ",
								)}
							>
								<FormTokenField
									__experimentalAutoSelectFirstMatch
									__experimentalExpandOnFocus
									__experimentalShowHowTo={false}
									label={__("Parent")}
									onChange={(value) => {
										if (!Array.isArray(value)) {
											return;
										}
										// cần reverse để lấy id của parent cuối cùng trong mảng. VÌ chỉ chọn 1 parent
										const parentIds = getTermIdsFromNames([value.reverse()[0]]);
										setQuery({
											parentIdString: parentIds[0],
											termIdList: [],
											excludeIdList: [],
										});
									}}
									suggestions={termNameList}
									value={getTermNameListFromIds(
										typeof parentIdString === "string" ? [parentIdString] : [],
									)}
									maxLength={1}
									placeholder={__("Select only one parent")}
								/>
							</BaseControl>

							<BaseControl
								help={__(
									"Show a list of terms with related posts. Leave blank if you want to catch all.",
								)}
							>
								<FormTokenField
									__experimentalAutoSelectFirstMatch
									__experimentalExpandOnFocus
									label={__("Terms include")}
									onChange={(value) => {
										if (!Array.isArray(value)) {
											return;
										}
										setQuery({ termIdList: getTermIdsFromNames(value) });
									}}
									suggestions={temChildNameList}
									value={getTermNameListFromIds(termIdList)}
								/>
							</BaseControl>

							<BaseControl
								help={__("Exclude a list of terms with related posts.")}
							>
								<FormTokenField
									__experimentalAutoSelectFirstMatch
									__experimentalExpandOnFocus
									label={__("Terms exclude")}
									onChange={(value) => {
										if (!Array.isArray(value)) {
											return;
										}
										setQuery({ excludeIdList: getTermIdsFromNames(value) });
									}}
									suggestions={temChildNameList}
									value={getTermNameListFromIds(excludeIdList)}
								/>
							</BaseControl>
						</>
					) : (
						<BaseControl
							help={__(
								"Please select a taxonomy type to filter terms by parent, include, exclude. Or with your current query no results are found, please try again.",
							)}
						>
							<div />
						</BaseControl>
					)}
				</PanelBody>
			)}
		</>
	);
}

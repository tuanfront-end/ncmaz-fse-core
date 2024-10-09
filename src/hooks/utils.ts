/**
 * WordPress dependencies
 */
import { useSelect } from "@wordpress/data";
import { useMemo } from "@wordpress/element";
import { store as coreStore } from "@wordpress/core-data";

export const usePostTypes = () => {
	const postTypes = useSelect((select) => {
		const { getPostTypes } = select(coreStore);
		const excludedPostTypes = ["attachment"];
		// @ts-ignore
		const filteredPostTypes = getPostTypes({ per_page: -1 })?.filter(
			({ viewable, slug }: Record<string, any>) =>
				viewable && !excludedPostTypes.includes(slug),
		);
		return filteredPostTypes as Record<string, any>[];
	}, []);
	const postTypesTaxonomiesMap = useMemo(() => {
		if (!postTypes?.length) {
			return;
		}
		return postTypes.reduce((accumulator, type) => {
			accumulator[type.slug] = type.taxonomies;
			return accumulator;
		}, {});
	}, [postTypes]);
	const postTypesSelectOptions = useMemo(
		() =>
			(postTypes || []).map(({ labels, slug }) => ({
				label: labels.singular_name,
				value: slug,
			})),
		[postTypes],
	);
	return { postTypesTaxonomiesMap, postTypesSelectOptions };
};

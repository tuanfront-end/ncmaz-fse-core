/**
 * WordPress dependencies
 */
import { useSelect } from "@wordpress/data";
import { useMemo } from "@wordpress/element";
import { store as blockEditorStore } from "@wordpress/block-editor";
import { store as blocksStore } from "@wordpress/blocks";
import { store as coreStore } from "@wordpress/core-data";

/**
 * Hook that returns the taxonomies associated with a specific post type.
 *
 * @param {string} postType The post type from which to retrieve the associated taxonomies.
 * @return {Object[]} An array of the associated taxonomies.
 */
export const useTaxonomies = (postType: string) => {
	const taxonomies = useSelect(
		(select) => {
			const { getTaxonomies, getPostType } = select(coreStore);
			// Does the post type have taxonomies?
			// @ts-ignore
			if (getPostType(postType)?.taxonomies?.length > 0) {
				// @ts-ignore
				return getTaxonomies({
					type: postType,
					per_page: -1,
				});
			}
			return [];
		},
		[postType],
	) as Record<string, any>[];
	return useMemo(() => {
		return taxonomies?.filter(
			({ visibility }: Record<string, any>) => !!visibility?.publicly_queryable,
		);
	}, [taxonomies]);
};

/**
 * Returns a helper object that contains:
 * 1. An `options` object from the available post types, to be passed to a `SelectControl`.
 * 2. A helper map with available taxonomies per post type.
 *
 * @return {Object} The helper object related to post types.
 */
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

/**
 * Helper hook that determines if there is an active variation of the block
 * and if there are available specific patterns for this variation.
 * If there are, these patterns are going to be the only ones suggested to
 * the user in setup and replace flow, without including the default ones
 * for Query Loop.
 *
 * If there are no such patterns, the default ones for Query Loop are going
 * to be suggested.
 *
 * @param {string} clientId   The block's client ID.
 * @param {Object} attributes The block's attributes.
 * @return {string} The block name to be used in the patterns suggestions.
 */
export function useBlockNameForPatterns(
	clientId: string,
	attributes: Record<string, any>,
) {
	const activeVariationName = useSelect(
		(select) =>
			(select(blocksStore) as any).getActiveBlockVariation(
				"ncmazfse-block/terms-query",
				attributes,
			)?.name,
		[attributes],
	);
	const blockName = `ncmazfse-block/terms-query/${activeVariationName}`;
	const hasActiveVariationPatterns = useSelect(
		(select) => {
			if (!activeVariationName) {
				return false;
			}
			const { getBlockRootClientId, getPatternsByBlockTypes } = select(
				blockEditorStore,
			) as Record<string, any>;
			const rootClientId = getBlockRootClientId(clientId);
			const activePatterns = getPatternsByBlockTypes(blockName, rootClientId);
			return activePatterns.length > 0;
		},
		[clientId, activeVariationName, blockName],
	);
	return hasActiveVariationPatterns ? blockName : "ncmazfse-block/terms-query";
}

/**
 * Helper hook that determines if there is an active variation of the block
 * and if there are available specific scoped `block` variations connected with
 * this variation.
 *
 * If there are, these variations are going to be the only ones suggested
 * to the user in setup flow when clicking to `start blank`, without including
 * the default ones for Query Loop.
 *
 * If there are no such scoped `block` variations, the default ones for Query
 * Loop are going to be suggested.
 *
 * The way we determine such variations is with the convention that they have the `namespace`
 * attribute defined as an array. This array should contain the names(`name` property) of any
 * variations they want to be connected to.
 * For example, if we have a `Query Loop` scoped `inserter` variation with the name `products`,
 * we can connect a scoped `block` variation by setting its `namespace` attribute to `['products']`.
 * If the user selects this variation, the `namespace` attribute will be overridden by the
 * main `inserter` variation.
 *
 * @param {Object} attributes The block's attributes.
 * @return {WPBlockVariation[]} The block variations to be suggested in setup flow, when clicking to `start blank`.
 */
export function useScopedBlockVariations(attributes: Record<string, any>) {
	const { activeVariationName, blockVariations } = useSelect(
		(select) => {
			const { getActiveBlockVariation, getBlockVariations } = select(
				blocksStore,
			) as Record<string, any>;
			return {
				activeVariationName: getActiveBlockVariation(
					"ncmazfse-block/terms-query",
					attributes,
				)?.name,
				blockVariations: getBlockVariations(
					"ncmazfse-block/terms-query",
					"block",
				),
			};
		},
		[attributes],
	);
	const variations = useMemo(() => {
		// Filter out the variations that have defined a `namespace` attribute,
		// which means they are 'connected' to specific variations of the block.
		const isNotConnected = (variation: Record<string, any>) =>
			!variation.attributes?.namespace;
		if (!activeVariationName) {
			return blockVariations.filter(isNotConnected);
		}
		const connectedVariations = blockVariations.filter(
			(variation: Record<string, any>) =>
				variation.attributes?.namespace?.includes(activeVariationName),
		);
		if (!!connectedVariations.length) {
			return connectedVariations;
		}
		return blockVariations.filter(isNotConnected);
	}, [activeVariationName, blockVariations]);
	return variations;
}

import { useSelect } from "@wordpress/data";
import { useEffect } from "@wordpress/element";
import { store as coreStore } from "@wordpress/core-data";

/**
 * Returns whether the current user can edit the given entity.
 *
 * @param {string} kind     Entity kind.
 * @param {string} name     Entity name.
 * @param {string} recordId Record's id.
 */
export function useCanEditEntity(kind: string, name: string, recordId: string) {
	return useSelect(
		(select) =>
			select(coreStore).canUser("update", {
				kind,
				name,
				id: recordId,
			}),
		[kind, name, recordId],
	);
}

/**
 *  Update layout from default layout when block is first loaded.
 */
export function useUpdateLayoutFromDefault(
	setAttributes: (attrs: Record<string, any>) => void,
	layout?: Record<string, any>,
) {
	useEffect(() => {
		if (!layout?.type || layout.x) {
			return;
		}
		setAttributes({
			// phải set X ở đây vì để tạo giá trị khác với giá giá trị mặc định -> để setAttributes hoạt động được
			layout: {
				...layout,
				x: "x",
			},
		});
	}, []);
}

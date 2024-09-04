// @ts-nocheck

import { useSelect } from "@wordpress/data";
import { useLayoutEffect, useEffect, useRef } from "@wordpress/element";
import { getBlobByURL, isBlobURL, revokeBlobURL } from "@wordpress/blob";
import { store as blockEditorStore } from "@wordpress/block-editor";
import { store as coreStore } from "@wordpress/core-data";
import { useViewportMatch } from "@wordpress/compose";

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

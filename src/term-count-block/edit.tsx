/**
 * External dependencies
 */
import clsx from "clsx";
import { useEntityRecord } from "@wordpress/core-data";
import {
	AlignmentToolbar,
	BlockControls,
	useBlockProps,
} from "@wordpress/block-editor";
import { __, _x } from "@wordpress/i18n";
import metadata from "./block.json";
import { EditProps, TAttrs } from "../types";
import "./editor.scss";

type Attributes = TAttrs<typeof metadata.attributes>;
type Props = EditProps<Attributes> & { name: string };

export default function TermDescriptionEdit({
	attributes: { textAlign },
	setAttributes,
	isSelected,
	context: { termId, termTaxonomy },
}: Props) {
	const { record, isResolving } = useEntityRecord<Record<string, any>>(
		"taxonomy",
		termTaxonomy,
		termId,
	);

	const blockProps = useBlockProps({
		className: clsx({
			[`has-text-align-${textAlign}`]: textAlign,
		}),
	});

	if (!termId || !termTaxonomy) {
		return (
			<>
				<BlockControls>
					<AlignmentToolbar
						value={textAlign}
						onChange={(newAlign) => setAttributes({ textAlign: newAlign })}
					/>
				</BlockControls>
				<div {...blockProps}>
					<p>{__("Count (99)")}</p>
				</div>
			</>
		);
	}

	return (
		<>
			<BlockControls>
				<AlignmentToolbar
					value={textAlign}
					onChange={(newAlign) => setAttributes({ textAlign: newAlign })}
				/>
			</BlockControls>

			<div {...blockProps}>
				<p className={"wp-block-ncmfse-term-count__count"}>
					{record?.count ?? 99}
				</p>
			</div>
		</>
	);
}

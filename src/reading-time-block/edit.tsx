import { __ } from "@wordpress/i18n";
import { PanelBody, TextControl } from "@wordpress/components";
import { useEntityRecord } from "@wordpress/core-data";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import "./editor.scss";
import { EditProps, TAttrs } from "../types";
import metadata from "./block.json";

type Attributes = TAttrs<typeof metadata.attributes>;

export default function Edit(props: EditProps<Attributes>) {
	const {
		attributes,
		setAttributes,
		context: { postId, postType },
	} = props;
	const { minReadText, minReadTextOnMobile } = attributes;

	const { record } = useEntityRecord<Record<string, any>>(
		"postType",
		postType as string,
		postId as number,
	);

	const content = (record?.content.rendered as string) || "";
	const words = content?.split(" ").length;
	const minRead = Math.ceil(words / 200) || 1;

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Reading Time", "ncmfse")}>
					<TextControl
						__nextHasNoMarginBottom
						label={__("Text", "ncmfse")}
						value={minReadText}
						onChange={(value) => setAttributes({ minReadText: value })}
					/>
					<TextControl
						__nextHasNoMarginBottom
						label={__("Text on mobile", "ncmfse")}
						value={minReadTextOnMobile}
						onChange={(value) => setAttributes({ minReadText: value })}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				<span className="reading-time">{`${minRead} ${minReadText}`}</span>
				<span className="reading-time-mobile">{`${minRead} ${minReadText}`}</span>
			</div>
		</>
	);
}

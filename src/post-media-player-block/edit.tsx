import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";
import { TAttrs, EditProps } from "../types";
import metadata from "./block.json";

type Attributes = TAttrs<typeof metadata.attributes>;

function Edit(props: EditProps<Attributes>) {
	const {
		clientId,
		attributes,
		setAttributes,
		context: {},
	} = props;

	const {} = attributes;

	const blockProps = useBlockProps();

	return (
		<>
			<div {...blockProps}>
				<p>{__("THIS IS THE MEDIA PLAYER", "ncmaz-fse-core")}</p>
				<p style={{ fontSize: 14, marginTop: 0 }}>
					{__(
						"The player will hide and appear only when you start playing music/video.",
						"ncmaz-fse-core",
					)}
				</p>
			</div>
		</>
	);
}

export default Edit;

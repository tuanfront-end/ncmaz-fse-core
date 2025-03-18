import { __ } from "@wordpress/i18n";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";
import { TAttrs, EditProps } from "../types";
import metadata from "./block.json";
import {
	PanelBody,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from "@wordpress/components";

type Attributes = TAttrs<typeof metadata.attributes>;

function Edit(props: EditProps<Attributes>) {
	const {
		clientId,
		attributes,
		setAttributes,
		context: {},
	} = props;

	const { videoRatio } = attributes;

	const blockProps = useBlockProps();

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Settings", "ncmfse")}>
					<ToggleGroupControl
						isBlock
						label={__("Video aspect-ratio", "ncmfse")}
						onChange={(value) => setAttributes({ videoRatio: value as string })}
						value={videoRatio}
						help={__(
							'Choose the aspect ratio for the video player. If "auto", auto-detects short videos on YouTube then auto-shows the video player to 9/16.',
							"ncmfse",
						)}
					>
						<ToggleGroupControlOption label={__("Auto")} value={"auto"} />
						<ToggleGroupControlOption label={__("16/9")} value={"16-9"} />
						<ToggleGroupControlOption
							label={__("Vertical 9/16")}
							value={"9-16"}
						/>
					</ToggleGroupControl>
				</PanelBody>
			</InspectorControls>

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

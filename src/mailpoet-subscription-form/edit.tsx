import { __ } from "@wordpress/i18n";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { TAttrs, EditProps } from "../types";
import metadata from "./block.json";
import {
	PanelBody,
	SelectControl,
	TextareaControl,
	ToggleControl,
} from "@wordpress/components";

type Attributes = TAttrs<typeof metadata.attributes>;

export default function Edit(props: EditProps<Attributes>) {
	const { setAttributes, attributes } = props;
	const { mailpoetListId } = attributes;
	const blockProps = useBlockProps();

	const mailpoetLists =
		window.mailpoetLists?.map((list) => ({
			label: list.name,
			value: list.id,
		})) || [];

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody title={__("Settings", "ncmfse")}>
					<SelectControl
						label={__("Select MailPoet List", "ncmfse")}
						help={__(
							"This form adds the subscribers to these lists.",
							"ncmfse",
						)}
						value={mailpoetListId}
						options={mailpoetLists}
						onChange={(value) => setAttributes({ mailpoetListId: value })}
					/>

					<TextareaControl
						label={__("Success Message", "ncmfse")}
						help={__(
							"This message will be displayed after the user submits the form.",
							"ncmfse",
						)}
						value={attributes.successMessage}
						onChange={(value) => setAttributes({ successMessage: value })}
					/>

					<ToggleControl
						label={__("Show Name Field", "ncmfse")}
						checked={attributes.showNameField}
						onChange={(value) => setAttributes({ showNameField: value })}
					/>
				</PanelBody>
			</InspectorControls>

			<form action="">
				<div>
					<label htmlFor="name">{__("Name")}</label>
					<input
						type="text"
						id="name"
						name="name"
						value={attributes.name}
						onChange={(e) => setAttributes({ name: e.target.value })}
					/>
				</div>

				<div>
					<label htmlFor="email">{__("Email")}</label>
					<input
						type="email"
						id="email"
						name="email"
						value={attributes.email}
						onChange={(e) => setAttributes({ email: e.target.value })}
					/>
				</div>

				<button type="submit">{__("Submit")}</button>
			</form>
		</div>
	);
}

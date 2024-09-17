import { __ } from "@wordpress/i18n";
import {
	InspectorControls,
	useBlockProps,
	useInnerBlocksProps,
	store as blockEditorStore,
} from "@wordpress/block-editor";
import { TAttrs, EditProps } from "../types";
import metadata from "./block.json";
import {
	Notice,
	PanelBody,
	RadioControl,
	SelectControl,
	TextareaControl,
	TextControl,
	ToggleControl,
	RangeControl,
} from "@wordpress/components";
import { useSelect, useDispatch } from "@wordpress/data";
import { useEffect } from "@wordpress/element";

type Attributes = TAttrs<typeof metadata.attributes>;

type TButtonStyle = "default" | "inline-email-input";

export default function Edit(props: EditProps<Attributes>) {
	const { setAttributes, attributes, clientId } = props;
	const {
		mailpoetListId,
		submitButtonStyle,
		showNameField,
		successMessage,
		showLabel,
		emailLabel,
		emailPlaceholder,
		nameLabel,
		namePlaceholder,
		inputRadius,
		inputPadding,
	} = attributes;

	const mailpoetLists =
		window.mailpoetLists?.map((list) => ({
			label: list.name,
			value: list.id,
		})) || [];

	useEffect(() => {
		if (!mailpoetLists.length) {
			return;
		}

		if (mailpoetListId) {
			return;
		}
		setAttributes({ mailpoetListId: mailpoetLists[0]?.value });
	}, [mailpoetLists.length, mailpoetListId]);

	const { innerBlocks } = useSelect(
		(select) => {
			const { getBlocks } = select(blockEditorStore) as Record<string, any>;
			return {
				innerBlocks: getBlocks(clientId),
			};
		},
		[clientId],
	);

	const { replaceInnerBlocks } = useDispatch(blockEditorStore);

	const getInnerTemplate = (type: TButtonStyle) => {
		switch (type) {
			case "default":
				return [
					[
						"core/buttons",
						{},
						[
							[
								"core/button",
								{
									text: __("Subscribe", "ncmfse"),
									width: 100,
									tagName: "button",
									type: "submit",
									style: {
										spacing: {
											padding: {
												top: "0.65rem",
												bottom: "0.65rem",
											},
										},
									},
								},
							],
						],
					],
				];
			case "inline-email-input":
				return [
					[
						"outermost/icon-block",
						{
							icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>',
							iconColorValue: "#ffffff",
							iconBackgroundColorValue: "#000000",
							itemsJustification: "center",
							width: "36px",
							hasNoIconFill: true,
							style: {
								border: {
									radius: "99px",
								},
								spacing: {
									padding: "8px",
								},
							},
						},
					],
				];
			default:
				return [];
		}
	};

	useEffect(() => {
		if (!innerBlocks?.length) {
			return;
		}
		if (
			innerBlocks[0]?.name === "outermost/icon-block" &&
			submitButtonStyle === "inline-email-input"
		) {
			return;
		}

		if (
			innerBlocks[0]?.name === "core/buttons" &&
			submitButtonStyle === "default"
		) {
			return;
		}

		const newTemplate = getInnerTemplate(submitButtonStyle as TButtonStyle);

		const newInnerBlocks = newTemplate.map(([name, attributes, innerChilds]) =>
			window.wp.blocks.createBlock(
				name,
				attributes,
				// @ts-ignore
				innerChilds?.map(([name, attributes]) =>
					window.wp.blocks.createBlock(name, attributes),
				),
			),
		);
		replaceInnerBlocks(clientId, newInnerBlocks, false);
	}, [submitButtonStyle, innerBlocks, clientId, replaceInnerBlocks]);

	const blockProps = useBlockProps({
		style: {
			"--input-radius": `${inputRadius}px`,
			"--input-padding": `${inputPadding}px`,
		},
	});

	const { children, ...innerBlocksProps } = useInnerBlocksProps(blockProps, {
		template: getInnerTemplate(submitButtonStyle as TButtonStyle) as any[],
		templateLock: "insert",
	});

	return (
		// @ts-ignore
		<div {...blockProps}>
			<InspectorControls>
				<Notice status="warning" isDismissible={false}>
					{__(
						"Please make sure you have the MailPoet plugin installed and configured. This block requires MailPoet to work.",
						"ncmfse",
					)}
				</Notice>
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

					<ToggleControl
						label={__("Show Name Field", "ncmfse")}
						checked={showNameField}
						onChange={(value) => setAttributes({ showNameField: value })}
					/>

					<ToggleControl
						label={__("Show Label", "ncmfse")}
						checked={showLabel}
						onChange={(value) => setAttributes({ showLabel: value })}
					/>

					{showNameField && (
						<>
							{showLabel && (
								<TextControl
									label={__("Name Label", "ncmfse")}
									value={nameLabel}
									onChange={(value) => setAttributes({ nameLabel: value })}
								/>
							)}

							<TextControl
								label={__("Name Placeholder", "ncmfse")}
								value={namePlaceholder}
								onChange={(value) => setAttributes({ namePlaceholder: value })}
							/>
						</>
					)}

					{showLabel && (
						<TextControl
							label={__("Email Label", "ncmfse")}
							value={emailLabel}
							onChange={(value) => setAttributes({ emailLabel: value })}
						/>
					)}

					<TextControl
						label={__("Email Placeholder", "ncmfse")}
						value={emailPlaceholder}
						onChange={(value) => setAttributes({ emailPlaceholder: value })}
					/>

					<RadioControl
						label={__("Submit Button Style", "ncmfse")}
						onChange={(value) => setAttributes({ submitButtonStyle: value })}
						options={[
							{
								label: __("Default", "ncmfse"),
								value: "default",
							},
							{
								label: __("Inline Email Input", "ncmfse"),
								value: "inline-email-input",
							},
						]}
						selected={submitButtonStyle}
					/>

					<TextareaControl
						label={__("Success Message", "ncmfse")}
						help={__(
							"This message will be displayed after the user submits the form.",
							"ncmfse",
						)}
						value={successMessage}
						onChange={(value) => setAttributes({ successMessage: value })}
					/>
				</PanelBody>
				<PanelBody title={__("Styles", "ncmfse")}>
					<RangeControl
						__nextHasNoMarginBottom
						label={__("Input Radius (px)", "ncmfse")}
						max={100}
						min={0}
						onChange={(value) => setAttributes({ inputRadius: value })}
						value={inputRadius}
					/>
					<RangeControl
						__nextHasNoMarginBottom
						label={__("Input Padding (px)", "ncmfse")}
						max={100}
						min={0}
						onChange={(value) => setAttributes({ inputPadding: value })}
						value={inputPadding}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...innerBlocksProps}>
				{!!showNameField && (
					<div className="form-item__name">
						{showLabel && <label htmlFor="name">{nameLabel}</label>}
						<input type="text" name="name" placeholder={namePlaceholder} />
					</div>
				)}

				<div className="form-item__email">
					{showLabel && <label htmlFor="email">{emailLabel}</label>}
					<div className="form-item__email-content">
						<input type="email" name="email" placeholder={emailPlaceholder} />
						{submitButtonStyle === "inline-email-input" ? (
							<button type="submit">{children}</button>
						) : (
							""
						)}
					</div>
				</div>

				{submitButtonStyle === "default" ? children : ""}
			</div>
		</div>
	);
}

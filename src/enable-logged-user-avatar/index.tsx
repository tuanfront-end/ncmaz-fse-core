/**
 * External dependencies
 */
import { __ } from "@wordpress/i18n";
import { addFilter } from "@wordpress/hooks";
import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody, ToggleControl } from "@wordpress/components";
import { useSelect } from "@wordpress/data";
import { store as coreStore } from "@wordpress/core-data";
import "./style.scss";
import "./editor.scss";

/**
 * Add the attributes needed for linked groups.
 *
 * @since 0.1.0
 * @param {Object} settings
 */
function addAttributes(settings: Record<string, any>) {
	if ("core/avatar" !== settings.name) {
		return settings;
	}

	const newSettings = {
		...settings,
		attributes: {
			...settings.attributes,
			isCurrentLogged: {
				type: "boolean",
			},
		},
	};

	return newSettings;
}

addFilter(
	"blocks.registerBlockType",
	"enable-logged-user-avatar/add-attributes",
	addAttributes,
);

/**
 * Filter the BlockEdit object and add linked group inspector controls.
 *
 * @todo Fix the issue where the popover remains open when clicking another block.
 *
 * @since 0.1.0
 * @param {Object} BlockEdit
 */
function addInspectorControls(BlockEdit) {
	return (props: Record<string, any>) => {
		if (props.name !== "core/avatar") {
			return <BlockEdit {...props} />;
		}

		const currentUser = useSelect((select) => {
			const { getCurrentUser } = select(coreStore);
			return getCurrentUser();
		}, []);

		const { attributes, setAttributes } = props;
		const { isCurrentLogged } = attributes;

		return (
			<>
				<BlockEdit {...props} />
				<InspectorControls>
					<PanelBody title={__("Settings")}>
						<ToggleControl
							__nextHasNoMarginBottom
							label={__("Is current logged in user")}
							help={__(
								"Show the avatar of the current logged in user. Only display when the user is logged in.",
							)}
							checked={isCurrentLogged}
							onChange={(newValue) => {
								setAttributes({
									isCurrentLogged: newValue,
									userId: newValue ? currentUser.id : 0,
								});
							}}
						/>
					</PanelBody>
				</InspectorControls>
			</>
		);
	};
}

addFilter(
	"editor.BlockEdit",
	"enable-logged-user-avatar/add-inspector-controls",
	addInspectorControls,
);

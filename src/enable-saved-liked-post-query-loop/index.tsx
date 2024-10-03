import { __ } from "@wordpress/i18n";
import { addFilter } from "@wordpress/hooks";
import {
	InspectorControls,
	// @ts-ignore
	__experimentalLinkControl as LinkControl,
} from "@wordpress/block-editor";
import { ToggleControl, PanelBody } from "@wordpress/components";
import "./style.scss";
import "./editor.scss";

function addAttributes(settings: Record<string, any>) {
	if ("core/query" !== settings.name) {
		return settings;
	}

	// Add the link attributes.
	const myQuery = {};

	const newSettings = {
		...settings,
		attributes: {
			...settings.attributes,
			showSavedPostOfCurrentUser: {
				type: "boolean",
				default: false,
			},
			showLikedPostOfCurrentUser: {
				type: "boolean",
				default: false,
			},
			query: {
				...(settings.attributes.query || {}),
				...myQuery,
			},
		},
	};

	return newSettings;
}
addFilter(
	"blocks.registerBlockType",
	"enable-saved-liked-post-query-loop/add-attributes",
	addAttributes,
);

function addInspectorControls(BlockEdit) {
	return (props: Record<string, any>) => {
		if (props.name !== "core/query") {
			return <BlockEdit {...props} />;
		}

		const { attributes, setAttributes } = props;
		const { showSavedPostOfCurrentUser, showLikedPostOfCurrentUser, query } =
			attributes;

		const onChangeToggleSavedPost = (value: boolean) => {
			setAttributes({
				showSavedPostOfCurrentUser: value,
				showLikedPostOfCurrentUser: value ? false : showLikedPostOfCurrentUser,
			});
		};

		const onChangeToggleLikedPost = (value: boolean) => {
			setAttributes({
				showLikedPostOfCurrentUser: value,
				showSavedPostOfCurrentUser: value ? false : showSavedPostOfCurrentUser,
			});
		};

		return (
			<>
				<BlockEdit {...props} />
				<InspectorControls>
					<PanelBody
						title={__("Ncmaz saved/liked post setting")}
						initialOpen={false}
					>
						<ToggleControl
							__nextHasNoMarginBottom
							label={__("Show saved posts")}
							help={__("Only Show saved posts of the current logged in user.")}
							checked={showSavedPostOfCurrentUser}
							onChange={onChangeToggleSavedPost}
						/>
						<ToggleControl
							__nextHasNoMarginBottom
							label={__("Show liked posts")}
							help={__("Only Show liked posts of the current logged in user.")}
							checked={showLikedPostOfCurrentUser}
							onChange={onChangeToggleLikedPost}
						/>
					</PanelBody>
				</InspectorControls>
			</>
		);
	};
}
addFilter(
	"editor.BlockEdit",
	"enable-saved-liked-post-query-loop/add-inspector-controls",
	addInspectorControls,
);

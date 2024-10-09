import { __ } from "@wordpress/i18n";
import { addFilter } from "@wordpress/hooks";
import { InspectorControls } from "@wordpress/block-editor";
import { ToggleControl, PanelBody } from "@wordpress/components";

import "./style.scss";
import "./editor.scss";

function addInspectorControls(BlockEdit) {
	return (props: Record<string, any>) => {
		if (props.name !== "core/query") {
			return <BlockEdit {...props} />;
		}

		const { attributes, setAttributes } = props;
		const { showUserSavedPosts, showUserLikedPosts, query } = attributes;

		const onChangeToggleSavedPost = (value: boolean) => {
			setAttributes({
				showUserSavedPosts: value,
				showUserLikedPosts: value ? false : showUserLikedPosts,
			});
		};

		const onChangeToggleLikedPost = (value: boolean) => {
			setAttributes({
				showUserLikedPosts: value,
				showUserSavedPosts: value ? false : showUserSavedPosts,
			});
		};

		return (
			<>
				<BlockEdit {...props} />
				<InspectorControls>
					{!query?.inherit && (
						<PanelBody
							title={__("Saved & Liked posts setting")}
							initialOpen={false}
						>
							<ToggleControl
								__nextHasNoMarginBottom
								label={__("Show user's saved posts")}
								help={__(
									"Show saved posts of the user. Note: Leave the Author filter blank to get the posts based on the current user (viewer). If Author has a value, the posts will be filtered based on that user.",
								)}
								checked={showUserSavedPosts}
								onChange={onChangeToggleSavedPost}
							/>
							<ToggleControl
								__nextHasNoMarginBottom
								label={__("Show user's liked posts")}
								help={__(
									"Show liked posts of the user. Note: Leave the Author filter blank to get the posts based on the current user (viewer). If Author has a value, the posts will be filtered based on that user.",
								)}
								checked={showUserLikedPosts}
								onChange={onChangeToggleLikedPost}
							/>
						</PanelBody>
					)}
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

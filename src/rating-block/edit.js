import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, RangeControl, SelectControl } from "@wordpress/components";
import { useEntityProp } from "@wordpress/core-data";

import "./editor.scss";

export default function Edit({
	attributes: { rating, ratingStyle },
	setAttributes,
	context: { postType, postId, ...args },
	...props
}) {
	const [meta, updateMeta] = useEntityProp(
		"postType",
		postType,
		"meta",
		postId,
	);

	const [storedFeaturedImage, setFeaturedImage] = useEntityProp(
		"postType",
		postType,
		"featured_media",
		postId,
	);

	console.log(222, { meta, storedFeaturedImage });

	useEffect(() => {
		const initStyle = meta?._ratingStyle ? meta?._ratingStyle : "star";
		setAttributes({
			rating: meta?._rating || 0,
			ratingStyle: initStyle,
		});
	}, []);
	const onChangeRating = (val) => {
		updateMeta({
			...meta,
			_rating: val,
		});
		setAttributes({
			rating: val,
		});
	};
	const onChangeRatingStyle = (val) => {
		updateMeta({
			...meta,
			_ratingStyle: val,
		});
		setAttributes({
			ratingStyle: val,
		});
	};
	const getRatingEmojis = () => {
		let ratingEmojis = "";
		for (let i = 0; i < rating; i++) {
			ratingEmojis += ratingStyle === "star" ? "⭐" : "❤️";
		}
		return ratingEmojis;
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Rating", "multiblock-plugin")}>
					<RangeControl
						label={__("Rating", "multiblock-plugin")}
						value={rating}
						onChange={onChangeRating}
						min={1}
						max={5}
					/>
					<SelectControl
						label={__("Rating Style", "multiblock-plugin")}
						onChange={onChangeRatingStyle}
						value={ratingStyle}
						options={[
							{
								label: __("Star", "multiblock-plugin"),
								value: "star",
							},
							{
								label: __("Heart", "multiblock-plugin"),
								value: "heart",
							},
						]}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				<p>
					<strong>Rating:</strong>{" "}
					<span className={`rating-${ratingStyle}`}> {getRatingEmojis()}</span>
				</p>
			</div>
		</>
	);

	// Other code will go here, don't forget or delete the closing curly brace!
}

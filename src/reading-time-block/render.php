<?php
global $post;
// Generate unique id for aria-controls.
$current_post_id =  $block->context['postId'] ?? 0;
// get content of the post
$post_content = get_post_field('post_content', $current_post_id);
// get the number of words in the post
$word_count = str_word_count(strip_tags($post_content));
// get the reading time
$reading_time = ceil($word_count / 200) ?: 1;

?>


<div
	<?php echo get_block_wrapper_attributes(); ?>>
	<span class="reading-time">
		<?php echo $reading_time . ' ' . $attributes['minReadText']; ?>
	</span>
	<span class="reading-time-mobile">
		<?php echo $reading_time . ' ' . $attributes['minReadTextOnMobile']; ?>
	</span>

</div>
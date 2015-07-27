<?php get_header(); ?>
<?php
  //set feature image as intro section BG
  $_id = $post->ID;
  if(has_post_thumbnail($_id)):
    $image  = wp_get_attachment_image_src(get_post_thumbnail_id($_id), 'full', true);
  endif;
?>
<div class="timeline-container">
  <section class="intro-section" style="background-image:url('<?php echo $image[0]?>')">
    <div class="container">
      <div class="congress-selector-wrapper">

      </div>
      <div class="heading-group">
        <h1>FOI</h1>
        <h1>Legislative Campaign</h1>
        <h1>Timeline</h1>
      </div>
    </div>
  </section>
  <section class="timeline-section">

  </section>
</div>
<?php get_footer(); ?>

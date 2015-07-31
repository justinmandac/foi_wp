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
      <h1 class="congress-heading">16th Congress</h1>
      <div class="menu-container">
          <i class="fa fa-bars"></i>
      </div>
    <section class="congress-container">
      <div class="timeline-line">
      </div>
      <ul class="timeline-events">
        <li class="timeline-item left">
          <div class="date-block">
            <div class="date-container">
              May 27, 2015
            </div>
          </div>
          <div class="dot-block">
            <div class="dot">

            </div>
          </div>
          <div class="content-block">
            <div class="content-inner">
              <div class="content">
                Committee Chairperson Rep. Jorge Almonte, House FOI champions and authors hold press briefing expressing their readiness for FOI Second Reading.
              </div>
            </div>
          </div>
        </li>

        <li class="timeline-item right">
          <div class="date-block">
            <div class="date-container">
              May 23, 2015
            </div>
          </div>
          <div class="dot-block">
            <div class="dot">

            </div>
          </div>
          <div class="content-block">
            <div class="content-inner">
                <div class="content">
Scheduled group filing of the FOI Committee Report with the Secretary General by Committee on Public Information Chairperson Rep. Jorge Almonte, together with House FOI authors, champions and advocates, was postponed.
                </div>
            </div>
          </div>
        </li>

    </section>
  </section>
</div>
<?php get_footer(); ?>

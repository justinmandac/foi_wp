<?php get_header(); ?>
<header class="tracker-header-wrapper" style="background-image: url('<?php echo get_stylesheet_directory_uri(); ?>/images/hor_1600.jpg')">
  <div class="header-inner container">
    <h1>Congress Action on F<i class="fa fa-tachometer"></i>I Tracker</h1>

    <div class="header-buttons">
      <div class="show-timeline-button">
        <a href="#" class="button button--transparent timeline-trigger">
          <i class="fa fa-clock-o"></i><span>Show Timeline</span>

        </a>
      </div>
    </div>

  </div>
</header>
<div class="sidebar-wrapper" id="sidr">
  <h4 class="timeline-title">Timeline</h4>
  <div class="timeline-wrapper" id="timeline-wrapper">
     <div class="timeline-line"></div>
    <ul class="timeline" id="timeline"></ul>
  </div>
</div>
<div class="outer-wrapper container">
  <div class="content-wrapper">
    <div class="content" id="content">
      <div class="post-title" id="post-title">

      </div>
      <div class="chart-container" id="chart-container">

      </div>
      <div class="post-content" id="post-content">

      </div>
      <div class="buttons" id="buttons">
        <a class="button button--regular" id="read-more-button" href="#" target="_blank">
          <span><i class="fa fa-newspaper-o"></i>Read More</span>
        </a>
        <div class="button timeline-trigger button--regular">
          <span><i class="fa fa-clock-o"></i>Show Timeline</span>
        </div>
        <a class="button button--regular button--full-width" href="https://www.youtube.com/watch?v=2m1PHGS8xx4">
          <span><i class="fa fa-info"></i>Why do we need the FOI Bill?</span>
        </a>
      </div>
    </div>
  </div>
</div>
<?php get_footer(); ?>

<?php get_header(); ?>
  <div class="no-page-container" style="background-image: url('<?php echo get_stylesheet_directory_uri(); ?>/images/hor_1600.jpg')">
    <div class="container full-height">
      <div class="grid-wrapper">
        <div class="grid">
          <div class="left-block">
            <h1 class="message-404">404</h1>
          </div>
          <div class="right-block">
            <h5 class="message-body">We can't find the page you're looking for!</h5>
            <h5 class="message-body"> It could've been moved, deleted, or doesn't exist.</h5>
            <?php get_search_form(); ?>
          </div>
          <div class="full-block">

          </div>
        </div>
      </div>
    </div>
  </div>
<?php get_footer(); ?>

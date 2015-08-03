    <footer class="footer-wrapper">
      <div class="footer-content container">
            <div class="left-block">
              <div class="bottom-menu">
                  <?php wp_nav_menu( array( 'theme_location' => 'footer-nav' ) ); ?>
              </div>
            </div>
            <div class="right-block">

            </div>
            <div class="full-block">
              <div class="copyright">
                <div class="footer-logo" style="background-image:url('<?php echo get_template_directory_uri().'/images/spritesheet.png' ?>')">

                </div>
                <span> &copy; Institute of Freedom For Information</span>
              </div>
            </div>
      </div>
      <?php wp_footer(); ?>

    </footer>
  </body>
</html>

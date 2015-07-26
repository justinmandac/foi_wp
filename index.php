<?php get_header(); ?>
<div class="outer-wrapper">
 <?php if(is_home() || is_front_page()):?>
   <?php echo do_shortcode('[owl-carousel category="Home" items="1" autoPlay="true" autoHeight="true" ] ');?>
 <?php else: ?>
   <h2 class="page-title"><?php wp_title(''); ?></h2>
   <?php if ( have_posts() ) : while ( have_posts() ) : the_post();
   the_content();
   endwhile; else: ?>
   <p>Sorry, no posts matched your criteria.</p>
   <?php endif; ?>
 <?php endif;?>
 <div class="featurettes">
   <div class="featurette-item">
        content
   </div>
   <div class="featurette-item">
     content
   </div>
   <div class="featurette-item">
     content
   </div>
   <div class="featurette-item">
     content
   </div>
 </div>
</div>
<?php get_footer(); ?>

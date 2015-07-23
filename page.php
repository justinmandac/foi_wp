<?php get_header(); ?>
<div class="outer-wrapper">

    <h2 class="page-title"><?php wp_title(''); ?></h2>
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post();?>
        <div class="post-wrapper">
          <div class="post-content">
              
             <?php the_content(); ?>
          </div>
        </div>
    <?php endwhile; else: ?>
    <p>Sorry, no posts matched your criteria.</p>
    <?php endif; ?>

</div>
<?php get_footer(); ?>

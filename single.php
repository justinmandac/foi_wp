<?php get_header(); ?>
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post();?>
      <div class="post-header">
        <?php
          $_id = $post->ID;

          if(has_post_thumbnail($_id)): ?>
          <?php $image  = wp_get_attachment_image_src(get_post_thumbnail_id($_id), 'full', true);?>
          <div class="post-header-image" style="background-image:url('<?php echo $image[0]; ?>')">
              <div class="page-title-wrapper">
                <h2 class="page-title"><?php wp_title(''); ?></h2>
                <div class="author-wrapper">
                  <span><?php echo __('by');?></span>
                  <span><b><?php the_author();?></b> <?php echo __('|')?></span>
                  <span><?php the_time('F jS Y');?></span>
                </div>

              </div>


          </div>
        <?php else:?>
          <h2 class="page-title"><?php wp_title(''); ?></h2>

        <?php endif;?>
      </div>
    <div class="outer-wrapper container">
        <div class="post-wrapper">
          <div class="post-content">
             <?php the_content(); ?>
          </div>
        </div>
    </div>
    <?php endwhile; else: ?>
    <p>Sorry, no posts matched your criteria.</p>
    <?php endif; ?>
<?php get_footer(); ?>

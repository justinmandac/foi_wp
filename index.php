<?php get_header(); ?>
<div class="outer-wrapper">
 <?php if(is_home() || is_front_page()):?>
   <?php echo do_shortcode('[owl-carousel category="Home" items="1" autoPlay="true" autoHeight="true" lazyLoad="true" singleItem="true"] ');?>
 <?php else: ?>
   <h2 class="page-title"><?php wp_title(''); ?></h2>
   <?php if ( have_posts() ) : while ( have_posts() ) : the_post();?>
     <div class="post-wrapper">
       <div class="post-content">
          <h2 class="post-title">
            <a href="<?php the_permalink() ?>" title="Permalink to <?php the_title_attribute();?>">
              <?php the_title(); ?>
            </a>
          </h2>
          <div class="post-info">
            <span><i class="fa fa-clock-o"></i><?php the_time('F jS Y');?></span>
            <span><?php echo __('|');?></span>
            <span><?php echo __('by');?></span>
            <span><?php the_author_posts_link(); ?></span>
          </div>
          <div class="post-text">
            <?php the_excerpt(); ?>
          </div>
          <div class="read-more-block">
            <a href="<?php the_permalink() ?>" title="Read more of <?php the_title_attribute();?>">
              <span>Read more</span>
              <i class="fa fa-caret-down"></i>
            </a>
          </div>
          <div class="post-tags">
            <span class="tag-label"><?php echo __('Tags')?></span>
            <?php the_category(); ?>
          </div>
       </div>
     </div>
   <?php endwhile; else: ?>
   <p>Sorry, no posts matched your criteria.</p>
   <?php endif; ?>
 <?php endif;?>
</div>
<?php get_footer(); ?>

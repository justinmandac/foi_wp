<?php get_header(); ?>
<div class="outer-wrapper">
 <?php if(is_home() || is_front_page()):?>
   <?php echo do_shortcode('[owl-carousel category="Home" items="1" autoPlay="true" autoHeight="true" ] ');?>

   <div class="featurettes">
     <div class="featurette-item">
          <h4 class="featurette-title">Congress Tracker</h4>
          <?php
            $_tracker_args = array('posts_per_page' => 1, 'category_name' => 'Performance Tracker');
            $_posts_array = get_posts( $_tracker_args );
            ?>
           <?php foreach($_posts_array as $_post):
             setup_postdata( $_post );
            ?>
  		          <h5 class="featurette-title-sub"><a href="<?php echo get_permalink($_post->ID); ?>"><?php echo get_the_title($_post->ID); ?></a></h5>

                <div class="content">
                  <?php
                      the_excerpt();
                   ?>
                </div>

                 <div class="buttons">
                   <div class="view-tracker">
                      <a href="http://i-foi.org/"><i class="fa fa-tachometer"></i>View Tracker </a>
                   </div>
                   <div class="view-report">
                       <a href="<?php echo get_permalink($_post->ID); ?>"><i class="fa fa-book"></i>Read Report </i></a>
                   </div>
                 </div>

           <?php endforeach;
              wp_reset_postdata();
           ?>
     </div>
     <div class="featurette-item">
       <h4 class="featurette-title">Latest News</h4>
       <?php
         $_news_args = array('posts_per_page' => 1, 'category_name' => 'News');
         $_posts_array = get_posts( $_news_args );
         ?>
        <?php foreach($_posts_array as $_post):
          setup_postdata( $_post );
         ?>
             <h5 class="featurette-title-sub"><a href="<?php echo get_permalink($_post->ID); ?>"><?php echo get_the_title($_post->ID); ?></a></h5>

             <div class="content">
               <?php
                   the_excerpt();
                ?>
             </div>

              <div class="buttons">
                <div class="read-more">
                    <a href="<?php echo get_permalink($_post->ID); ?>"><i class="fa fa-book"></i>Read More </i></a>
                </div>
              </div>

        <?php endforeach;
           wp_reset_postdata();
        ?>
     </div>
   </div>

 <?php else: ?>
   <h2 class="page-title"><?php wp_title(''); ?></h2>
   <?php if ( have_posts() ) : while ( have_posts() ) : the_post();?>
     <div class="post-wrapper">
       <div class="post-content">
          <h2 class="post-title"><a href="<?php the_permalink() ?>" title="Permalink to <?php the_title_attribute();?>"><?php the_title(); ?></a></h2>
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
            <a href="<?php the_permalink() ?>" title="Read more of <?php the_title_attribute();?>"><span>Read more</span><i class="fa fa-caret-down"></i></a>
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

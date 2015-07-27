<?php get_header(); ?>
<div class="cat-header congtrack" style="background-image: url('<?php echo get_stylesheet_directory_uri(); ?>/images/hor_1600.jpg')">
  <div class="container content">
    <h1 class="category-title"><?php wp_title(''); ?></h1>
    <h5 class="feed-link"><a href="#" title="Subscribe"><i class="fa fa-rss"></i></a></h5>

    <div class="latest">
        <?php
          $_cur_cat_id = get_cat_id( single_cat_title("",false) );
          $_tracker_args = array('posts_per_page' => 1, 'category' => $_cur_cat_id);
          $_posts_array = get_posts( $_tracker_args );
        ?>
        <?php foreach($_posts_array as $_post):
          setup_postdata( $_post );
         ?>
             <h2 class="latest-title"><a href="<?php echo get_permalink($_post->ID); ?>">
                <?php echo __('Latest: ')?>
               <?php echo get_the_title($_post->ID); ?>
             </a>
           </h2>
           <div class="latest-info">
             <span><i class="fa fa-clock-o"></i><?php the_time('F jS Y');?></span>
             <span><?php echo __('|');?></span>
             <span><?php echo __('by');?></span>
             <span><?php the_author_posts_link(); ?></span>
           </div>
             <div class="latest-content">
               <?php
                   the_excerpt();
                ?>
             </div>
              <div class="buttons">
                <div class="read-more-block">
                  <a href="<?php the_permalink() ?>" title="Read more of <?php the_title_attribute();?>">
                    <span>Read more</span>
                    <i class="fa fa-caret-down"></i>
                  </a>
                </div>
              </div>

        <?php endforeach;
           wp_reset_postdata();
        ?>
    </div>
    <h3 class="view-tracker"><a href="http://i-foi.org"><i class="fa fa-tachometer"></i>View Congress Tracker</a></h3>
  </div>
</div>
<div class="outer-wrapper container">


    <?php
      $_count = 0;
      if ( have_posts() ) :
      while ( have_posts() ) :
        the_post();
        if($_count > 0) :
        ?>
        <div class="post-wrapper">
          <div class="post-content">
             <h3 class="post-title">
               <a href="<?php the_permalink() ?>" title="Permalink to <?php the_title_attribute();?>">
                 <?php the_title(); ?>
               </a>
             </h3>
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
          </div>
        </div>
      <?php else:
        $_count++;
      endif;?>
    <?php endwhile; else: ?>
    <p>Sorry, no posts matched your criteria.</p>
    <?php endif; ?>

</div>
<?php get_footer(); ?>

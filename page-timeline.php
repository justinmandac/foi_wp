<?php get_header(); ?>
<?php 
  $_file = file_get_contents(get_stylesheet_directory_uri().'/inc/json/16th-congress.json');
  $_json = json_decode($_file, true);

  $_congress  = $_json['congress'].' Congress';

  $_years =  $_json['Years'];
  $direction = ['left','right'];
  $dflag = 0;
?>
  <script>
  var $_16th_arr = <?php echo $_file; ?>;
</script>

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
      <div class="congress-selector-wrapper"></div>
      <div class="heading-group">
        <h1>FOI</h1>
        <h1>Legislative Campaign</h1>
        <h1>Timeline</h1>
      </div>
    </div>
  </section>
  
  <section class="timeline-section">
      <h1 class="congress-heading">
        <?php echo $_congress; ?>
      </h1>
      <div class="menu-container">
          <i class="fa fa-bars"></i>
      </div>
    <section id="congress_16" class="congress-container">
      <div class="timeline-line">
      </div>
      
      <ul class="timeline-events">
        <?php 
          //TIMELINE MAIN LOOP
         
   
          foreach($_years as $year):
            $curr_year = $year['year'];

            foreach($year['Months'] as $month):
              $curr_month = $month['month'];

              foreach($month['Days'] as $day):
                $curr_day = $day['day'];
        ?>
        <li class="timeline-item <?php echo $direction[($dflag = !$dflag)];?>" data-date="<?php echo $curr_month.'-'.$curr_day.'-'.$curr_year ?>">
          <div class="date-block">
            <div class="date-container">
              <?php echo $curr_month.' '.$curr_day.', '.$curr_year?>
            </div>
          </div>
          <div class="dot-block">
            <div class="dot"></div>
          </div>
          <div class="content-block">
            <div class="content-inner">
              <div class="content">
                <?php echo $day['activity'] ?>
              </div>
              <div class="arrow"></div>
            </div>
          </div>
        </li>
            
            <?php endforeach;?>  
          <?php endforeach; ?>
        <?php endforeach; ?>
      </ul>
    </section>
    
  </section>
</div>
<?php get_footer(); ?>

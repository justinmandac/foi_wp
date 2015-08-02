<?php get_header(); ?>

<?php
  
?>

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
  <div id="sidr">
    <div class="menu-container">
      <div class="timeline-menu-header"><h5>Close</h5></div>
      <ul class="timeline-menu" id="timeline-menu"></ul>
    </div>
  </div>
  <section class="timeline-section">
      <div class="congress-heading">
        <div class="inner">
          <div class="heading">
            <h1><?php echo $_congress; ?></h1>
          </div>
          <div class="menu-trigger-container"><a href="#sidr" id="menu-trigger" class="menu-trigger"><i class="fa fa-bars"></i>Menu</a></div>
        </div>
      </div>
    <section id="congress_16" class="congress-container">
      <div class="timeline-line">
      </div>
     
      <ul class="timeline-events" id="timeline-events">
        <?php 
          $timeline_navi = array();

          //TIMELINE MAIN LOOP
          foreach($_years as $ykey => $year):
            $curr_year = $year['year'];
           
            foreach($year['Months'] as $mkey => $month):
              $curr_month = $month['month'];
              $new_month = true;
              foreach($month['Days'] as $dkey => $day):
                $curr_day = $day['day'];
                $item_id = $ykey.'-'.$mkey.'-'.$dkey;
        ?>
        <?php if($new_month) :
          $marker_id = 'marker-'.$curr_year.'-'.strtolower($curr_month);
          $marker_text = $curr_month.' '.$curr_year;
        ?>
        <li class="timeline-item marker" id="<?php echo $marker_id; ?>" data-text="<?php echo $marker_text?>" data-year="<?php echo $curr_year?>">
            <h2>
              <?php echo $marker_text; $new_month = false;?>
            </h2>
          </li>
        <?php endif;?>
                <li class="timeline-item <?php echo $direction[($dflag = !$dflag)];?>" id="<?php echo $item_id?>">
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
            
            <?php endforeach;
              
            ?>  
          <?php endforeach; ?>
        <?php endforeach; ?>
      </ul>
    </section>
    
  </section>
</div>
<?php get_footer(); ?>

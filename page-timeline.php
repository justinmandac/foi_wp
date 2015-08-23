<?php get_header(); ?>

<?php
  $query = $_SERVER['QUERY_STRING'];

  $_file = null;
  $_error = false;
  
  $_master_file = file_get_contents(get_stylesheet_directory_uri().'/inc/json/jsonfiles.json');

  function noFileHandler($errno, $errstring) {
    $_error = true;
  }

  set_error_handler("noFileHandler");
  /*
      query format: <domain>/timeline?f=<filename>.json
      Default to 16th Congress JSON if no query string has been specified
      else, parse query string for filename
    */

  if(strlen($query) == 0) {
     $_file = file_get_contents(get_stylesheet_directory_uri().'/inc/json/16thCongress.json');
  } else {
    $exploded =  explode('=', $query);
    $_file = file_get_contents(get_stylesheet_directory_uri().'/inc/json/'.$exploded[1]);
  }

  //$_master_json = json_decode($_master_file, true);
  $_json        = json_decode($_file, true);
  $_list        = json_decode($_master_file, true);

  $_congress  = $_json['congress'].' Congress';

  $_years =  $_json['Years'];
  $direction = ['left','right'];
  $dflag = 0;

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
         <h1>Legislative</h1>
         <h1>Campaign</h1>
      </div>
    </div>
  </section>
  <div id="sidr">
    <div class="menu-container">
      <div class="timeline-menu-header"></div>
      <ul class="selector">

          <?php foreach($_list['files'] as $file):?>
          <li>
            <a href="<?php echo the_permalink().'?f='.$file['file']; ?>"><span><?php echo $file['title']; ?></span>     </a>
          </li>
        <?php endforeach; ?>
      </ul>

      <ul class="timeline-menu" id="timeline-menu"></ul>
    </div>
  </div>
  <section class="timeline-section">
      <div class="congress-heading">
        <div class="inner">
          <div class="heading">
              <h1><?php echo $_congress; ?></h1>
          </div>
          <div class="menu-trigger-container">
            <div id="menu-trigger" class="menu-trigger">
              <a href="#sidr">
                <span class="sidr-open">
                  <i class="fa fa-bars"></i>
                  Menu
                </span>
                <span class="sidr-close">
                  <i class="fa fa-times-circle"></i>
                  Close
                </span>
              </a>
            </div>
            </div>
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
           
          ?>
        <li class="timeline-year-container" data-year="<?php echo $curr_year?>">

           <?php
            foreach($year['Months'] as $mkey => $month):
              $curr_month = $month['month'];
              $item_id = 'item-'.$ykey.'-'.$mkey;
          ?>

          <ul class="timeline-month-container" data-month="<?php echo $curr_month ?>" id="<?php echo $item_id?>">
            <?php
              $new_month = true;
              foreach($month['Days'] as $dkey => $day):
                $curr_day = $day['day'];
        ?>
        <?php if($new_month) :
          $marker_id = 'marker-'.$curr_year.'-'.strtolower($curr_month);
          $marker_text = $curr_month.' '.$curr_year;
        ?>
             <li class="timeline-item marker" id="<?php echo $marker_id; ?>" data-text="<?php echo $marker_text?>" >
            <h2>
              <?php echo $marker_text; $new_month = false;?>
            </h2>
          </li>
        <?php endif;?>
             <li class="timeline-item <?php echo $direction[($dflag = !$dflag)];?>" >
                  <div class="date-block">
                    <div class="date-container">
                      <span class="date-text"><?php echo $curr_month.' '.$curr_day.', '.$curr_year?></span>
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
          </ul>
          <?php endforeach; ?>

        </li>
        <?php endforeach; ?>
      </ul>
    </section>
    
  </section>
</div>
<?php get_footer(); ?>

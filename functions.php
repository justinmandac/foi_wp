<?php
update_option('siteurlc','http://i-foi.org/home');
function register_main_menu() {
  register_nav_menu('main-nav',__( 'Main Menu' ));
  register_nav_menu('footer-nav',__( 'Footer Links' ));
}
add_action( 'init', 'register_main_menu' );

function load_scripts() {
  wp_deregister_script('jquery');
  wp_enqueue_script('cdn-jquery', 'https://code.jquery.com/jquery-2.1.4.min.js','','2.1.4',false);
  wp_enqueue_style( 'prefix-font-awesome', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css', array(), '4.4.0' );

  if(is_page('timeline')) {
    wp_enqueue_style( 'timeline-style', get_stylesheet_directory_uri().'/stylesheets/timeline.css' );
    wp_enqueue_style( 'sidr-style', get_stylesheet_directory_uri().'/stylesheets/jquery.sidr.light.css' );
    wp_enqueue_script('sidr', get_stylesheet_directory_uri().'/js/jquery.sidr.min.js','','3.0.3',true);
    wp_enqueue_script('timeline', get_stylesheet_directory_uri().'/js/timeline.js','','1.0.0',true);
  }

  if(is_page('tracker')) {
    wp_enqueue_script('sidr', get_stylesheet_directory_uri().'/js/jquery.sidr.min.js','','3.0.3',true);
    wp_enqueue_script('xml2json', get_stylesheet_directory_uri().'/js/jquery.xml2json.js','','3.0.3',true);
    wp_enqueue_script('moment', get_stylesheet_directory_uri().'/js/moment.min.js','','1.0.0',true);
    wp_enqueue_script('highcharts', get_stylesheet_directory_uri().'/js/highcharts.js','','1.0.0',true);
    wp_enqueue_script('highcharts-more', get_stylesheet_directory_uri().'/js/highcharts-more.js','','1.0.0',true);
    wp_enqueue_script('tracker', get_stylesheet_directory_uri().'/js/tracker.js','','1.0.0',true);
    wp_enqueue_style( 'tracker-styles', get_stylesheet_directory_uri().'/stylesheets/tracker-styles.css' );
  }

  wp_enqueue_script('app', get_stylesheet_directory_uri().'/js/app.js','','1.0.0',true);
}
add_action( 'wp_enqueue_scripts', 'load_scripts' );

add_theme_support( 'html5', array( 'search-form' ) );
add_theme_support( 'post-thumbnails' );
add_theme_support( 'post-formats', array( 'aside', 'gallery' ) );
add_theme_support( 'automatic-feed-links' );
?>

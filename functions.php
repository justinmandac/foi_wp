<?php
function register_main_menu() {
  register_nav_menu('main-nav',__( 'Main Menu' ));
  register_nav_menu('footer-nav',__( 'Footer Links' ));
}
add_action( 'init', 'register_main_menu' );

function load_scripts() {
  wp_enqueue_script('jquery');

  if(is_page('timeline')) {
    wp_enqueue_style( 'timeline-style', get_stylesheet_directory_uri().'/stylesheets/timeline.css' );
    wp_enqueue_style( 'sidr-style', get_stylesheet_directory_uri().'/stylesheets/jquery.sidr.light.css' );
    wp_enqueue_script('sidr', get_stylesheet_directory_uri().'/js/jquery.sidr.min.js','','3.0.3',true);
    wp_enqueue_script('timeline', get_stylesheet_directory_uri().'/js/timeline.js','','1.0.0',true);
  }

  wp_enqueue_script('app', get_stylesheet_directory_uri().'/js/app.js','','1.0.0',true);
}
add_action( 'wp_enqueue_scripts', 'load_scripts' );

add_theme_support( 'html5', array( 'search-form' ) );
add_theme_support( 'post-thumbnails' );
add_theme_support( 'post-formats', array( 'aside', 'gallery' ) );
?>

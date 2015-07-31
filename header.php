<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta name="name" content="content">
    <meta charset="<?php bloginfo('charset');?>"/>
    <link rel="profile" href="http://gmpg.org/xfn/11" />
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">
    <title>
        <?php bloginfo('title') ?>
        <?php wp_title('|', true, 'left'); ?>
    </title>
    <link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri(); ?>/favicon.ico" />
    <?php wp_head(); ?>
  </head>
  <body <?php body_class(); ?>>
    <div class="header-wrapper">
      <header class="navi-wrapper">
        <div class="trigger">
            <span><i class="fa fa-bars"></i>Menu</span>
        </div>
        <?php wp_nav_menu( array( 'theme_location' => 'main-nav' ) ); ?>
      </header>
      <div class="page-header-wrapper">
        <header class="page-header">
          <div class="logo-wrapper">
            <div class="logo-content">
              <a href="<?php bloginfo('url'); ?>">  <img src="<?php echo get_template_directory_uri().'/images/logo.jpg' ?>" alt=""></a>
            </div>
          </div>        
        <div class="search-wrapper">
          <?php get_search_form(); ?>
        </div>
      </div>
      </header>
    </div>

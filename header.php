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
    <header class="header-main">
      <div class="header-inner">
        <div class="logo-wrapper">
          <div class="logo-content" onclick="location.href='<?php echo bloginfo('url');?>'" style="background-image:url('<?php echo get_template_directory_uri().'/images/spritesheet.png' ?>')">
          </div>
        </div>
        <div class="search-wrapper">
          <div class="search-content">
            <div class="search-trigger">
              <div class="open-search-message">
                <i class="fa fa-search"></i><span>Search</span>
              </div>
              <div class="close-search-message">
                <i class="fa fa-times-circle"></i><span>Close</span>
              </div>
            </div>
            <?php get_search_form(); ?>
          </div>
        </div>
        <div class="navi-wrapper">
          <div class="trigger">
            <span><i class="fa fa-bars"></i>Menu</span>
          </div>
          <?php wp_nav_menu( array( 'theme_location' => 'main-nav' ) ); ?>
        </div>
      </div>
    </header>

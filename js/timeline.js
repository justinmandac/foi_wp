(function ($) {
  "use strict";
  $(function () {

    var $timeline_menu_container = $('.menu-container'),
      $timeline_menu = $('#timeline-menu'),
      $timeline_markers = $('#timeline-events .marker'),
      $trigger = $('#menu-trigger'),
      $congress_heading = $('.congress-heading'),
      $heading_offset = $congress_heading.offset().top,
      $heading_height = $congress_heading.height(),
      $menu_model = $('#timeline-events').children();
    
      $timeline_menu.detach();

    //console.log($heading_height);
    
    console.log($_16th_arr);
    
    //console.log($timeline_markers);

    
    $.each($menu_model, function (key, val){

      var $year_obj = $(val);
      var $year = $year_obj[0].dataset.year;
      
      var $months = $year_obj.children();
      
      var $year_li = $('<li></li>');
      var $year_heading = $('<h4>' + $year + '</h4>');

      
      $year_li.append($year_heading);
      
      var $month_ul = $('<ul></ul>');

      
      $.each($months, function(key, val){
        var $month_obj = $(val);
        var $month = $month_obj[0].dataset.month;
        var $id = $month_obj[0].id;
        
        var $month_li = $('<li></li>');
        var $month_a = $('<a>'+$month+'</a>').attr({
          href: '#' + $id
        });

        $month_li.append($month_a);
        $month_ul.append($month_li);

      });
      $year_li.append($month_ul);
      $timeline_menu.append($year_li);
      
    });

    
    $timeline_menu_container.append($timeline_menu);
    
    $trigger.sidr({
      displace: false,
      onOpen: function () {
        $trigger.addClass('open-menu');
      },
      onClose: function () {
        $trigger.removeClass('open-menu');
      }
    });
    
    
    $('#sidr a[href^="#"]').on('click', function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 50
      }, 700, 'swing');
      
      jQuery.sidr('close' );
    });
    
    //handles the stickiness of the timeline menu header when the header exits the
    //viewport on scrolling down
    $(window).scroll(function () {
      
      var $window_offset =  $(window).scrollTop(),
        $diff = $heading_offset - $window_offset;
/*      console.log('window: '+ $window_offset);
      console.log('diff: '+ $diff);*/
      
      if ($diff < 0) {
        $congress_heading.addClass('fixed');
      }
        else {
          $congress_heading.removeClass('fixed');
        }
    });
  });
})(jQuery);

(function($){
  $(function() {
    var $timeline_menu_container = $('.menu-container');
    var $timeline_menu = $('#timeline-menu');
    var $timeline_markers = $('#timeline-events .marker');
    var $trigger = $('#menu-trigger');
    var $congress_heading = $('.congress-heading');
    var $heading_offset = $congress_heading.offset().top;
    var $heading_height = $congress_heading.height();
    
    
    console.log($heading_height);
    
    console.log($_16th_arr);
    
    console.log($timeline_markers);
    
    $timeline_menu.detach();
    
    var $curr_year = null;
    var $prev_year = null;
    
    $.each($timeline_markers, function(key, val){
      
      var $marker_text = $(val).attr('data-text');
      var $marker_year = $(val).attr('data-year');
      var $marker_id   = $(val).attr('id');
      
      
      var $li = $('<li></li>');
      
      var $link = $('<a>'+$marker_text+'</a>').attr({
        href: '#'+$marker_id,
        text: $marker_text
      });
      
      $li.append($link);
      $timeline_menu.append($li);
      
      $curr_year = $marker_year;
      
      if($curr_year !== $prev_year) {
        //create sub-list
        
      }
      else {
        //insert elements into created sub-list
      }
      
      $prev_year = $curr_year;
      
    });
    
    $timeline_menu_container.append($timeline_menu);
    
    $trigger.sidr({
      displace: false
    });
    
    
    $('#sidr a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 30
      }, 700, 'swing');
    });
    
    
    $(window).scroll(function() {
      
      var $window_offset =  $(window).scrollTop();
      var $diff = $heading_offset - $window_offset;
      console.log('window: '+ $window_offset);
      console.log('diff: '+ $diff);
      
      if ($diff < 0) {
        $congress_heading.addClass('fixed');
      }
      else {
        $congress_heading.removeClass('fixed');
      }
    });
  });
})(jQuery);
(function($){
  $(function() {
    var $timeline_menu_container = $('.menu-container');
    var $timeline_menu = $('#timeline-menu');
    var $timeline_markers = $('#timeline-events .marker');
    var $trigger = $('#menu-trigger');
    
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
    
    $trigger.sidr();
    
    
    $('#sidr a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 50
      }, 700, 'swing');
    });
    
  });
})(jQuery);
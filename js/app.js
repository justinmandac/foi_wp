(function($){

  $(function() {
    var navi_wrapper = $('.header-main');
    var navi_fixed = false;
    var menu_trigger = $('.navi-wrapper .trigger');
    var menu_container = $('.navi-wrapper .menu');
    var search_content = $('.header-main .search-content');
    var search_trigger = $('.header-main .search-trigger');
    var search_close_trigger = $('#search-close');

    menu_trigger.click(function() {

      if(menu_container.hasClass('expand')) {
        menu_container.removeClass('expand');
        $(this).removeClass('twist');
      }
      else {
        menu_container.addClass('expand');
        $(this).addClass('twist');
      }

    });


    search_trigger.click(function() {
      if(search_content.hasClass('expand')) {
        $(this).removeClass('search-active');
         search_content.removeClass('expand');

      }
      else {
        search_content.addClass('expand');
        $(this).addClass('search-active');

      }
    });


    $(window).scroll(function () {
      var _offset = window.scrollY;

      if(_offset > 0 && !navi_fixed) {
        navi_wrapper.addClass('fixed');
        navi_fixed = true;
      }
      else {
        if (_offset == 0) {
          navi_wrapper.removeClass('fixed');
          navi_fixed = false;
        }
      }

    });

  });

})(jQuery);

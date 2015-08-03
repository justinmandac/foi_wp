(function($){

  $(function() {
    var navi_wrapper = $('.header-main');
    var navi_fixed = false;
    var menu_trigger = $('.navi-wrapper .trigger');
    var menu_container = $('.navi-wrapper .menu');

    $(menu_trigger).click(function() {

      if(menu_container.hasClass('expand')) {
        menu_container.removeClass('expand');
        $(this).removeClass('twist');
      }
      else {
        menu_container.addClass('expand');
        $(this).addClass('twist');
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

(function($){

  $(function() {
    var navi_wrapper = $('.navi-wrapper');
    var navi_fixed = false;
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

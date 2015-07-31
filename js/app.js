(function($){

  $(function() {
    var navi_wrapper = $('.navi-wrapper');

    $(window).scroll(function () {
      var _offset = window.scrollY;
      console.log('');

      if(_offset > 0) {
        navi_wrapper.addClass('fixed');
      }
      else {
        navi_wrapper.removeClass('fixed');
      }

    });

  });

})(jQuery);

(() => {
    !!(window.jQuery) && (
        $(function () {
            "use strict";
            $('#text-carousel').slick({
              speed: 500,
              centerMode: true,
              arrows: false,
              centerPadding: "0",
              slidesToShow: 1,
              slidesToScroll: 1,
            });
            $('#carousel').slick({
              asNavFor: '#text-carousel',
              speed: 500,
              dots: true,
              arrows: true,
              centerMode: true,
              centerPadding: "0",
              slidesToShow: 1,
              slidesToScroll: 1,
            });
          })    
    );
    
})();
    
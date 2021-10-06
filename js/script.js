$(function () {
  $(window).on("scroll", function () {
    var sticky = $(window).scrollTop();

    if (sticky > 59) {
      $("#menu").addClass("sticky");
    } else {
      $("#menu").removeClass("sticky");
    }

    if (sticky > 500) {
      $("#back").show();
    } else {
      $("#back").hide();
    }
  });

  $("#back").on("click", function () {
    $("html,body").animate({
      scrollTop: 0,
    });
  });

  $(window).on("load", function () {
    $("#preloader").fadeOut(2000);
  });

  $("a").on("click", function (e) {
    e.preventDefault();
    if (this.hash != "") {
      var hash = $(this.hash);
      $("html,body").animate(
        {
          scrollTop: $(hash).offset().top - 40,
        },
        500
      );
    }
  });

  $("#banner").slick({
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    prevArrow: '<i class="fas fa-chevron-left  arrow"></i>',
    nextArrow: '<i class="fas fa-chevron-right  arrow"></i>',
  });

  $("#slider-for").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    dotsClass: "latest-dots",
    arrows:false,
  });
  $('.venobox').venobox();
});

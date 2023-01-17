$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('#header-main').addClass("navbar-sticky");
    } else {
      $('#header-main').removeClass("navbar-sticky");
    }
  });
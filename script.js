$(window).scroll(function() {
  if (window.pageYOffset > 0) {
    $(document).ready(function() {
      $(".navbar-brand").css(
        {
          "font-size":"1.25em",
          "transition":"0.325s ease"
        }
      );
    });
  } else {
    $(".navbar-brand").css(
      {
        "font-size":"3.0em",
        "transition":"0.325s ease"
      }
    );
  }
});

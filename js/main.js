// Responsive Menu

$("#menu-icon").on("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
  if (!$(".sidebar").hasClass("active")) {
    $(".sidebar").addClass("active");
  } else {
    $(".sidebar").removeClass("active");
  }
  return false;
});

$(".sidebar li").on("click", function (e) {
  $(".sidebar li").removeClass("active");
  $(this).addClass("active");
});

// Smooth Scroll to sections

$("#navbar").on("click", function (e) {
  if ($(e.target).is("a.page-scroll")) {
    if (
      location.pathname.replace(/^\//, "") ==
        e.target.pathname.replace(/^\//, "") &&
      location.hostname == e.target.hostname
    ) {
      var target = $(e.target.hash);
      target = target.length
        ? target
        : $("[name=" + e.target.hash.slice(1) + "]");
      if (target.length) {
        var gap = 0;
        $("html,body").animate(
          {
            scrollTop: target.offset().top - gap,
          },
          900
        );
      }
    }
    return false;
  }
});

// animation
new WOW({ offset: 200 }).init();

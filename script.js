let currentRating;

$(".rating").click(function () {
  $(".rating").removeClass("clicked");
  $(this).addClass("clicked");
  currentRating = $(this).text();
});

$("button").click(function () {
  if ($(".rating").hasClass("clicked")) {
    $(".preview").addClass("hidden");
    $(".thank-you").removeClass("hidden");
    $("span").text(currentRating);
  }
});

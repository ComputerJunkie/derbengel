$(function() {
  let open = $("#open");
  let close = $("#close");
  let side = $(".nav");

  open.click(function() {
    side.toggleClass("open");
  });
  $("main").click(function() {
    side.removeClass("open");
  });
});

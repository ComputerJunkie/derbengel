var menu= document.querySelector("#bars");
var main= document.querySelector("main");
var drawer= document.querySelector("#drawer");

menu.addEventListener("click", function(e) {
	drawer.classList.toggle("open");
	e.stopProgress();
});

main.addEventListener("click", function() {
	drawer.classList.remove("open");
});






/*
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
*/

/*  Open the drawer when the menu icon is clicked -inside HTML page:      
    <script>
      
      var menu = document.querySelector('#menu');
      var main = document.querySelector('main');
      var drawer = document.querySelector('.nav');

      menu.addEventListener('click', function(e) {
        drawer.classList.toggle('open');
        e.stopPropagation();
      });
      main.addEventListener('click', function() {
        drawer.classList.remove('open');
      });
    </script>
	*/
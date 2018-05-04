var menu= document.querySelector("#bars");
var main= document.querySelector("main");
var drawer= document.querySelector("#drawer");

menu.addEventListener("click", function(e) {
	drawer.classList.toggle("open");
	e.stopProgress();
});

main.addEventListener("click", function() {
	drawer.classList.remove("open");
})

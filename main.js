// to find the correct event listeners i used https://www.w3schools.com/jsref/dom_obj_event.asp
// and for code on lines 7 and 11 i used https://www.w3schools.com/js/tryit.asp?filename=tryjs_intro_lightbulb
const fala = document.getElementById("falaFigure");
const image = document.querySelector("falaImg");

falaFigure.addEventListener("mouseenter", function (event) {
  falaImg.src = "img/portfolio-fala-b.jpg";
});

falaFigure.addEventListener("mouseleave", function (event) {
  falaImg.src = "img/portfolio-fala.jpg";
});

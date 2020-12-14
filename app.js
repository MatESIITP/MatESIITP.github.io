const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

var preloader = document.getElementById("loading");

function myFunction() {
  setTimeout(function(){ preloader.style.display = "none"; }, 1500);
}
hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});
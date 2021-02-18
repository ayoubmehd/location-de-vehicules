var navMenu = document.querySelector(".nav-menu");
var burgerIcon = document.querySelector("body>nav .container .burger-icon");

console.log(burgerIcon);

burgerIcon.addEventListener("click", function () {
  console.log("what");
  navMenu.classList.toggle("show");
});

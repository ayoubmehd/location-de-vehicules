var navMenu = document.querySelector(".nav-menu");
var burgerIcon = document.querySelector("body>nav .container .burger-icon");

console.log(burgerIcon);

navMenu.addEventListener("animationend", () => {
  if (navMenu.classList.contains("slide-up")) navMenu.classList.remove("show");
});

burgerIcon.addEventListener("click", function () {
  console.log("what");
  if (!navMenu.classList.contains("show")) navMenu.classList.add("show");

  if (!navMenu.classList.contains("slide-down")) {
    navMenu.classList.remove("slide-up");
    navMenu.classList.add("slide-down");
    console.log(" Wait Is this Show");
  } else {
    console.log(" This is defenetly not show");
    navMenu.classList.remove("slide-down");
    navMenu.classList.add("slide-up");
  }
});

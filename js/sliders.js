var cards = document.querySelector("#cards");
var header = document.querySelector("body > header");
var scripllable = document.querySelectorAll(".scripllable");
if (cards) {
  cards.addEventListener("click", function (event) {
    var card = event.target.closest(".card");
    if (!card) return;
    document.querySelector("#cards > .active").classList.remove("active");
    card.classList.add("active");
    var overlay = header.querySelector(".overlay");
    overlay.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 0.8,
        },
      ],
      700
    );

    overlay.style.backgroundImage = `url('${card.querySelector("img").src}')`;
  });
}
console.log(scripllable);

// Scroll Event
Array.from(scripllable).forEach((element) => {
  console.log(element);
  element.addEventListener("wheel", (event) => {
    event.preventDefault();
    element.scrollLeft += event.deltaY * 15;
  });
});

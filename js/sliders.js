var cards = document.querySelector("#cards");
var header = document.querySelector("body > header");

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
        opacity: 0.6,
      },
    ],
    500
  );

  header.style.backgroundImage = `url('${card.querySelector("img").src}')`;
});

var imagePopup = document.querySelector(".image-popup");
var cards = Array.from(document.querySelectorAll(".card"));

imagePopup.querySelector(".close").addEventListener("click", closePopup);

cards.forEach((card) => {
  card.addEventListener("click", showPopup);
});

function showPopup(event) {
  var img = event.target.closest(".card").querySelector("img");

  imagePopup.classList.remove("fade-out");
  imagePopup.classList.add("fade-in");
  imagePopup.querySelector("img").src = img.src;
  imagePopup.removeEventListener("animationend", imagePopupEndOfAnimation);
  imagePopup.style.display = "flex";
  //   console.log(img);
  //   console.log();
}
function imagePopupEndOfAnimation() {
  console.log(imagePopup.style.display);
  if (imagePopup.style.display === "flex") {
    imagePopup.style.display = "none";
  }
}
function closePopup() {
  imagePopup.classList.remove("fade-in");
  imagePopup.classList.add("fade-out");
  imagePopup.addEventListener("animationend", imagePopupEndOfAnimation);
  console.log(imagePopup);
}

function animate(from, to) {
  imagePopup.animate([from, to], 500);
}

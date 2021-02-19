var links = Array.from(document.querySelectorAll("a"));

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    // var pageTransition = document.createElement("div");

    // pageTransition.className = "page-transition";

    // document.body.appendChild(pageTransition);
    setTimeout(() => {
      document.body.classList.add("fade-in");
      window.location = event.target.closest("a");
    }, 250);

    document.body.classList.add("fade-out");
  });
});

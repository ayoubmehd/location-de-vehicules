var contactForm = document.querySelector("#contact");
var modalAlert = document.querySelector(".alert");
modalAlert.addEventListener("click", function () {
  modalAlert.style.display = "none";
});
var error = false;

Array.from(contactForm).forEach((element) => {
  element.addEventListener("focus", hideError);
});

function nullValidation() {
  Array.from(contactForm).forEach((element) => {
    if (
      !element.nextElementSibling &&
      !element.value &&
      (element.tagName === "INPUT" || element.tagName === "TEXTAREA")
    ) {
      element.insertAdjacentHTML(
        "afterend",
        `
            <div class="error-msg required my t-danger">
                This field is required
            </div>
          `
      );
      error = true;
    }
  });
}

function hideError(event) {
  if (!event.target.nextElementSibling) return;
  event.target.nextElementSibling.remove();
  // console.log();
}

function nameValidation() {
  var regexp = /[a-zA-Z]+/g;

  if (
    !regexp.test(contactForm["name"].value) &&
    !contactForm.name.nextElementSibling
  ) {
    contactForm.name.insertAdjacentHTML(
      "afterend",
      `
            <div class="error-msg not-valid my t-danger">
                Name should contain only charachter
            </div>
      `
    );

    error = true;

    return;
  }

  error = false;
}

function emailValidation() {
  var regExp = /^[\w-]+@([\w-]+\.)+[\w-]+/;

  console.log(regExp.test(contactForm["email"].value));
  if (
    !regExp.test(contactForm["email"].value) &&
    !contactForm.email.nextElementSibling
  ) {
    contactForm.email.insertAdjacentHTML(
      "afterend",
      `
            <div class="error-msg not-valid my t-danger">
                This is not a valid email
            </div>
      `
    );

    error = true;
    return;
  }

  error = false;
}

// function subjectValidation() {}

function contentValidation() {
  if (
    contactForm["content"].value.length < 60 &&
    !contactForm.content.nextElementSibling
  ) {
    contactForm.content.insertAdjacentHTML(
      "afterend",
      `
            <div class="error-msg not-valid my t-danger">
                Content is too short
            </div>
      `
    );
    error = true;
    return;
  }

  error = false;
}

function sendForm() {
  modalAlert.innerHTML = "";
  modalAlert.insertAdjacentHTML(
    "beforeend",
    `
    <p>Name: ${contactForm.name.value}</p>
    <p>Email: ${contactForm.email.value}</p>
    <p>Subject: ${contactForm.subject.value}</p>
    <p>Content: ${contactForm.content.value}</p>
  `
  );
  modalAlert.style.display = "flex";
}

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  nullValidation();
  nameValidation();
  emailValidation();
  contentValidation();

  if (error) return;

  sendForm();
});

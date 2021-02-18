var contactForm = document.querySelector("#contact");
var modalAlert = document.querySelector(".alert");
modalAlert.addEventListener("click", function () {
  modalAlert.style.display = "none";
});

Array.from(contactForm).forEach((element) => {
  element.addEventListener("focus", hideError);
});

function nullValidation() {
  var error = false;
  Array.from(contactForm).forEach((element) => {
    if (
      !element.value &&
      (element.tagName === "INPUT" || element.tagName === "TEXTAREA")
    ) {
      console.log(element.value);
      if (!element.nextElementSibling) {
        element.insertAdjacentHTML(
          "afterend",
          `
            <div class="error-msg required my t-danger">
                This field is required
            </div>
          `
        );
      }
      error = true;
    }
  });

  return error;
}

function hideError(event) {
  if (!event.target.nextElementSibling) return;
  event.target.nextElementSibling.remove();
  // console.log();
}

function nameValidation() {
  var regexp = /[a-zA-Z]+/g;
  var error = false;

  if (!regexp.test(contactForm["name"].value)) {
    if (!contactForm.name.nextElementSibling) {
      contactForm.name.insertAdjacentHTML(
        "afterend",
        `
            <div class="error-msg not-valid my t-danger">
                Name should contain only charachter
            </div>
      `
      );
    }

    error = true;
  }
  return error;
}

function emailValidation() {
  var regExp = /^[\w-]+@([\w-]+\.)+[\w-]+/;
  var error = false;
  if (!regExp.test(contactForm["email"].value)) {
    if (!contactForm.email.nextElementSibling) {
      contactForm.email.insertAdjacentHTML(
        "afterend",
        `
            <div class="error-msg not-valid my t-danger">
                This is not a valid email
            </div>
      `
      );
    }

    error = true;
  }

  return error;
}

// function subjectValidation() {}

function contentValidation() {
  var error = false;
  if (contactForm["content"].value.length < 60) {
    if (!contactForm.content.nextElementSibling) {
      contactForm.content.insertAdjacentHTML(
        "afterend",
        `
            <div class="error-msg not-valid my t-danger">
                Content is too short
            </div>
      `
      );
    }
    error = true;
  }
  return error;
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
  if (nullValidation()) return;
  // console.log("null", nullValidation());
  if (nameValidation()) return;
  // console.log("name", nameValidation());
  if (emailValidation()) return;
  // console.log("email", emailValidation());
  if (contentValidation()) return;
  // console.log("content", contentValidation());

  sendForm();
});

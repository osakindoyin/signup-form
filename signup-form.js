/*
function validateForm() {
    let firstName = document.forms["userForm"]["firstName"].value;
    console.log(firstName);
    if(firstName == ""){
        alert("Please enter first name");
        return false;
    }
}
*/

const submit = document.getElementById("submit");

submit.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();

  const firstNameField = document.getElementById("firstName");
  const lastNameField = document.getElementById("lastName");
  const emailField = document.getElementById("email");
  const passwordField = document.getElementById("password");

  if (firstNameField.value === "") {
    const firstNameError = document.getElementById("nameError");
    firstNameError.classList.add("visible");
    firstNameField.classList.add("invalid");
    firstNameError.setAttribute("aria-hidden", false);
  }

  if (lastNameField.value === "") {
    const lastNameError = document.getElementById("nameError");
    lastNameError.classList.add("visible");
    lastNameField.classList.add("invalid");
    lastNameError.setAttribute("aria-hidden", false);
  }

  if (emailField.value === "") {
    const emailError = document.getElementById("nameError");
    emailError.classList.add("visible");
    emailField.classList.add("invalid");
    emailError.setAttribute("aria-hidden", false);
  }

  if (passwordField.value === "") {
    const passwordError = document.getElementById("nameError");
    passwordError.classList.add("visible");
    passwordField.classList.add("invalid");
    passwordError.setAttribute("aria-hidden", false);
  }
  return true;
}
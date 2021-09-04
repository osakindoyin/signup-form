// This function checks if email is valid
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Here, I declared the variables
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submit = document.getElementById("submit");

const formInput = [firstNameInput, emailInput, lastNameInput, passwordInput];

// checks if form has been validated
let isValidationOn = false;

// This function resets each input fields
function resetValidation(input) {
    input.classList.remove("invalid")
    input.nextElementSibling.classList.add("hidden");
}

// This function validates each input fields
function checkValidation(input){
    input.classList.add("invalid")
    input.nextElementSibling.classList.remove("hidden");
}

// This function vaildates the whole form when the submit button is clicked 
function validateForm(){
  if(!isValidationOn) return;
  resetValidation(firstNameInput);
  resetValidation(lastNameInput);
  resetValidation(emailInput);
  resetValidation(passwordInput);

  if (!firstNameInput.value){
    checkValidation(firstNameInput);
  }
  if (!lastNameInput.value){
    checkValidation(lastNameInput);
  }
  if (!validateEmail(emailInput.value)){
    checkValidation(emailInput);
  }
  if (!passwordInput.value){
    checkValidation(passwordInput);
  }
}

//Gets the submit event
submit.addEventListener("click", submitForm);
function submitForm(e) {
  e.preventDefault();
  isValidationOn = true;
  validateForm();
}

formInput.forEach(input => {
  input.addEventListener("input", function(){
    validateForm();
  })
});
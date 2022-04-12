import { validEmail } from "./regex";

// handle login form submit
export const inputsValid = (e) => {
  const inputs = document.querySelectorAll("form[name='login'] input");
  const emailField = inputs[0];
  const passwordField = inputs[1];

  // if (validEmail(emailField) && validPassword(passwordField)) loginUser(e);

  if (emailField.value !== "") {
    if (!validEmail(emailField)) {
      emailField.classList.add("invalid");
      emailField.value = "";
      emailField.placeholder = "Invalid email address";
    }
  } else {
    emailField.classList.add("invalid");
    emailField.value = "";
    emailField.placeholder = "Email Cannot be empty";
  }

  if (passwordField.value === "") {
    passwordField.classList.add("invalid");
    passwordField.value = "";
    passwordField.placeholder = "Password cannot be empty";
  } else {
    passwordField.classList.remove("invalid");
    passwordField.placeholder = "";
  }
};

import { validEmail, validPassword } from "./regex";

export const handleRegisterSubmit = (e) => {
  e.preventDefault();
  const inputs = document.querySelectorAll("form[name='register'] input");
  const fnameField = inputs[0];
  const lnameField = inputs[1];
  const emailField = inputs[2];
  const phoneField = inputs[3];
  const passwordField = inputs[4];
  const confirmPasswordField = inputs[5];

  if (fnameField.value === "") {
    fnameField.classList.add("invalid");
    fnameField.value = "";
    fnameField.placeholder = "Field cannot be empty";
  } else {
    fnameField.classList.remove("invalid");
    fnameField.placeholder = "";
  }

  if (lnameField.value === "") {
    lnameField.classList.add("invalid");
    lnameField.value = "";
    lnameField.placeholder = "Field cannot be empty";
  } else {
    lnameField.classList.remove("invalid");
    lnameField.placeholder = "";
  }

  if (emailField.value === "") {
    emailField.classList.add("invalid");
    emailField.value = "";
    emailField.placeholder = "Field cannot be empty";
  } else {
    if (validEmail(emailField)) {
      emailField.classList.remove("invlaid");
      emailField.placeholder = "";
    }
  }

  if (phoneField.value == "") {
    phoneField.classList.add("invalid");
    phoneField.value = "";
    phoneField.placeholder = "Field cannot be empty";
  } else if (phoneField.value.length != 10) {
    phoneField.classList.add("invalid");
    phoneField.value = "";
    phoneField.placeholder = "Phone no must be of 10 digits";
  } else {
    phoneField.classList.remove("invalid");
    phoneField.placeholder = "";
  }

  if (passwordField.value === "") {
    passwordField.classList.add("invalid");
    passwordField.value = "";
    passwordField.placeholder = "Field cannot be empty";
  } else {
    if (validPassword(passwordField)) {
      passwordField.classList.remove("invlaid");
      passwordField.placeholder = "";
    }
  }

  if (confirmPasswordField.value === "") {
    confirmPasswordField.classList.add("invalid");
    confirmPasswordField.value = "";
    confirmPasswordField.placeholder = "Field cannot be empty";
  } else {
    if (validPassword(confirmPasswordField)) {
      if (confirmPasswordField.value !== passwordField.value) {
        confirmPasswordField.classList.add("invalid");
        confirmPasswordField.value = "";
        confirmPasswordField.placeholder = "Passwords do not match";
      }
    }
  }
};

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

  emailValid(emailField);
  digitsValid(phoneField, "Phone no", 10);
  passwordValid(passwordField);

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

export const handleNurseryRegisterSubmit = (e) => {
  e.preventDefault();
  const inputs = document.querySelectorAll("form[name='register'] input");

  const emailField = inputs[1];
  const phoneField = inputs[2];
  const pincodeField = inputs[5];
  const passwordField = inputs[8];
  const confirmPasswordField = inputs[9];

  inputs.forEach((input) => {
    if (input.value === "") {
      input.classList.add("invalid");
      input.value = "";
      input.placeholder = "Field cannot be empty";
    } else {
      input.classList.remove("invalid");
      input.placeholder = "";
    }
  });

  emailValid(emailField);
  digitsValid(phoneField, "Phone no", 10);
  digitsValid(pincodeField, "Pincode ", 6);
  passwordValid(passwordField);

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

const emailValid = (input) => {
  if (input.value === "") {
    input.classList.add("invalid");
    input.value = "";
    input.placeholder = "Field cannot be empty";
  } else {
    if (validEmail(input)) {
      input.classList.remove("invlaid");
      input.placeholder = "";
    }
  }
};

const digitsValid = (input, name, digits) => {
  if (input.value == "") {
    input.classList.add("invalid");
    input.value = "";
    input.placeholder = "Field cannot be empty";
  } else if (input.value.length != digits) {
    input.classList.add("invalid");
    input.value = "";
    input.placeholder = `${name} must be of ${digits} digits`;
  } else {
    input.classList.remove("invalid");
    input.placeholder = "";
  }
};

const passwordValid = (input) => {
  if (input.value === "") {
    input.classList.add("invalid");
    input.value = "";
    input.placeholder = "Field cannot be empty";
  } else {
    if (validPassword(input)) {
      input.classList.remove("invlaid");
      input.placeholder = "";
    }
  }
};

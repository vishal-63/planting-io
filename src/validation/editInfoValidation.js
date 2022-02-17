import { validEmail } from "./regex";

export const handleInfoSubmit = (e) => {
  e.preventDefault();
  const inputs = document.querySelectorAll("form[name='edit-info'] input");
  const emailField = inputs[2];
  const phoneField = inputs[3];

  inputs.forEach((input) => {
    if (input.value === "") {
      input.classList.add("invalid");
      input.placeholder = "Field cannot be empty";
    } else {
      input.classList.remove("invalid");
      input.placeholder = "";
    }
  });

  if (!validEmail(emailField)) {
    emailField.classList.add("invalid");
    emailField.placeholder = "Invalid Email";
    emailField.value = "";
  }

  if (phoneField.value.length != 10) {
    phoneField.classList.add("invalid");
    phoneField.placeholder = "Phone no must be of 10 digits";
    phoneField.value = "";
  }
};

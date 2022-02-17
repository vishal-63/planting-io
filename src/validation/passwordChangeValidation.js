import { validPassword } from "./regex";

export const handleFormSubmit = (e) => {
  e.preventDefault();
  const inputs = document.querySelectorAll(
    "form[name='change-password'] input"
  );
  inputs.forEach((input) => {
    if (input.value === "") {
      input.classList.add("invalid");
      input.placeholder = "Field cannot be empty";
    } else if (!validPassword(input)) {
      input.classList.add("invalid");
      input.placeholder = "Invalid Password";
    } else {
      input.classList.remove("invalid");
      input.placeholder = "";
    }
  });
};

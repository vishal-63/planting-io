export const handleAddressSubmit = (e) => {
  e.preventDefault();
  const inputs = document.querySelectorAll("form[name='address'] input");
  const pincodeField = inputs[3];
  inputs.forEach((input) => {
    if (input.value === "") {
      input.classList.add("invalid");
      input.placeholder = "Field cannot be empty";
    } else {
      input.classList.remove("invalid");
      input.placeholder = "";
    }
  });

  if (pincodeField.value !== "" && pincodeField.value.length !== 6) {
    pincodeField.classList.add("invalid");
    pincodeField.value = "";
    pincodeField.placeholder = "Pincode must be of 6 digits";
  }
};

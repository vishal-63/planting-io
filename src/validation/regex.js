export const validEmail = (input) => {
  var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (validRegex.test(input.value)) {
    input.classList.remove("invalid");
    return true;
  } else {
    input.classList.add("invalid");
    input.value = "";
    input.placeholder = "Invalid email address";
    return false;
  }
};

export const validPassword = (input) => {
  var validRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}$/;
  if (validRegex.test(input.value)) {
    input.classList.remove("invalid");
    return true;
  } else {
    input.classList.add("invalid");
    input.value = "";
    input.placeholder = "Invalid Password";
    return false;
  }
};

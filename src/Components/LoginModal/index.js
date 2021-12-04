import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  LoginContainer,
  TabsContainer,
  Tab,
  FormContainer,
  Wrapper,
  Input,
  Label,
  ButtonContainer,
  ForgotPass,
  SignInBtn,
  NewAccount,
  Block,
  SignUpBtn,
  AlreadyAccount,
} from "./LoginModalElements";

function inputChange(e) {
  if (e.target.value !== "") {
    e.target.classList.add("text");
  } else {
    e.target.classList.remove("text");
  }
}

const LoginModal = ({ mode }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [formMode, setFormMode] = useState(`${mode}`);

  const ref = useRef();

  useEffect(() => {
    const closeModal = (e) => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(!isOpen);
      }
    };
    document.addEventListener("mousedown", closeModal);
  }, [isOpen]);

  return (
    <>
      {isOpen && formMode === "login" ? (
        <LoginContainer ref={ref}>
          <TabsContainer>
            <Tab className="login">Login</Tab>
            <Tab onClick={() => setFormMode("register")}>Register</Tab>
          </TabsContainer>
          <p>Please login using account detail below</p>

          <FormContainer
            name="login"
            method="POST"
            onSubmit={handleLoginSubmit}
          >
            <Wrapper className="emailinput">
              <Input
                spellcheck="false"
                type="email"
                name="email"
                id="email"
                onChange={inputChange}
                required
              />
              <Label className="label">Email</Label>
            </Wrapper>
            <Wrapper>
              <Input
                spellcheck="false"
                type="password"
                name="password"
                id="password"
                onChange={inputChange}
                required
              />
              <Label className="label">Password</Label>
            </Wrapper>

            <ButtonContainer>
              <ForgotPass to="/">Forgot Password?</ForgotPass>
              <SignInBtn type="submit">Sign In</SignInBtn>
            </ButtonContainer>
          </FormContainer>

          <NewAccount>
            New Member?
            <span onClick={() => setFormMode("register")}> Create Account</span>
          </NewAccount>
        </LoginContainer>
      ) : (
        <></>
      )}

      {isOpen && formMode === "register" ? (
        <LoginContainer className="register" ref={ref}>
          <TabsContainer>
            <Tab onClick={() => setFormMode("login")}>Login</Tab>
            <Tab className="register">Register</Tab>
          </TabsContainer>
          <p>Enter your Account Details</p>

          <FormContainer className="register" name="register">
            <Block>
              <Wrapper className="register">
                <Input
                  spellcheck="false"
                  type="text"
                  name="fname"
                  id="fname"
                  onChange={inputChange}
                />
                <Label className="label">First Name</Label>
              </Wrapper>
              <Wrapper className="register">
                <Input
                  spellcheck="false"
                  type="text"
                  name="lname"
                  id="lname"
                  onChange={inputChange}
                />
                <Label className="label">Last Name</Label>
              </Wrapper>
              <Wrapper className="register">
                <Input
                  spellcheck="false"
                  type="email"
                  name="email"
                  id="email"
                  onChange={inputChange}
                />
                <Label className="label">Email</Label>
              </Wrapper>
              <Wrapper className="register">
                <Input
                  spellcheck="false"
                  type="number"
                  name="phone"
                  id="phone"
                  onChange={inputChange}
                />
                <Label className="label">Phone</Label>
              </Wrapper>
              <Wrapper className="register">
                <Input
                  spellcheck="false"
                  type="password"
                  name="password"
                  id="password"
                  onChange={inputChange}
                />
                <Label className="label">Password</Label>
              </Wrapper>
              <Wrapper className="register">
                <Input
                  spellcheck="false"
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  onChange={inputChange}
                />
                <Label className="label">Confirm Password</Label>
              </Wrapper>
            </Block>

            <ButtonContainer className="register">
              <AlreadyAccount>
                Already a Member?
                <span onClick={() => setFormMode("login")}> Sign In</span>
              </AlreadyAccount>
              <SignUpBtn type="submit">Sign Up</SignUpBtn>
            </ButtonContainer>
          </FormContainer>
        </LoginContainer>
      ) : (
        <></>
      )}
    </>
  );
};

// input validation
const validEmail = (input) => {
  var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (validRegex.test(input.value)) {
    input.classList.remove("invalid");
    return true;
  } else {
    input.classList.add("invalid");
    input.value = "";
    input.placeholder = "Please enter valid email address";
    return false;
  }
};

const validPassword = (input) => {
  var validRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}$/;
  if (validRegex.test(input.value)) {
    input.classList.remove("invalid");
    return true;
  } else {
    input.classList.add("invalid");
    input.value = "";
    input.placeholder =
      "Must have at least 8 characters and a lowercase,an uppercase letter and a digit";
    return false;
  }
};

// handle login form submit
const handleLoginSubmit = (e) => {
  e.preventDefault();
  const inputs = document.querySelectorAll("form[name='login'] input");
  const emailField = inputs[0];
  const passwordField = inputs[1];
  if (validEmail(emailField) && validPassword(passwordField)) loginUser(e);
};

// call api to login user
const loginUser = async (e) => {
  e.preventDefault();

  const params = new URLSearchParams([...new FormData(e.target).entries()]);
  console.log(params);

  const res = await fetch("/Planting.ioUser/registration", {
    method: "POST",
    body: params,
  });
  const body = await res.text();
  console.log(body);
};

export default LoginModal;

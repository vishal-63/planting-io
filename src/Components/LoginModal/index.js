import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { inputsValid } from "../../validation/loginValidation";
import { handleRegisterSubmit } from "../../validation/registrationValidation";
import {
  Container,
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
  Error,
  Response,
} from "./LoginModalElements";

function inputChange(e) {
  if (e.target.value !== "") {
    e.target.classList.add("text");
  } else {
    e.target.classList.remove("text");
  }
}

const LoginModal = ({ mode, isFormOpen, closeForm }) => {
  const [formMode, setFormMode] = useState(`${mode}`);
  const [response, setResponse] = useState("");
  const [responseVisible, setResponseVisible] = useState(false);
  const [responseClass, setResponseClass] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (inputsValid) loginUser(e);
  };

  // call api to login user
  const loginUser = async (e) => {
    e.preventDefault();

    // console.log(e.target);
    // console.log(new FormData(e.target).entries);
    // console.log([...new FormData(e.target)]);
    const params = new URLSearchParams([...new FormData(e.target).entries()]);
    // console.log(params);

    const res = await fetch("CRUD/login", {
      method: "POST",
      body: params,
    });
    await console.log(res);
    const body = await res.text();
    setResponse(body);
    setResponseVisible(true);
    if (!res.ok) {
      setResponseClass("login-error");
    } else {
      setResponseClass("login-success");
    }
    console.log(body);
  };

  return (
    <>
      {/* {isOpen ? ( */}
      <Container>
        {formMode === "login" ? (
          <LoginContainer>
            <TabsContainer>
              <Tab className="login">Login</Tab>
              <Tab onClick={() => setFormMode("register")}>Register</Tab>
            </TabsContainer>
            <p>Please login using account detail below</p>

            <Response className={responseClass} isVisible={responseVisible}>
              {response}
            </Response>

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
                  // required
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
                  // required
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
              <span onClick={() => setFormMode("register")}>
                {" "}
                Create Account
              </span>
            </NewAccount>
          </LoginContainer>
        ) : (
          <></>
        )}

        {formMode === "register" ? (
          <LoginContainer className="register">
            <TabsContainer>
              <Tab onClick={() => setFormMode("login")}>Login</Tab>
              <Tab className="register">Register</Tab>
            </TabsContainer>
            <p>Enter your Account Details</p>

            <FormContainer
              className="register"
              name="register"
              onSubmit={handleRegisterSubmit}
            >
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

              <span className="password-info">
                Password must contain at least 8 characters, a digit, lowercase
                and and uppercase letters
              </span>

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
        <AiOutlineClose className="close-button" onClick={closeForm} />
      </Container>
      {/* ) : (
        <></>
      )} */}
    </>
  );
};

export default LoginModal;

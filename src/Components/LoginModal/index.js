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
      console.log("clicked");
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
          <FormContainer name="login">
            <Wrapper className="emailinput">
              <Input
                spellcheck="false"
                type="email"
                name="email"
                id="email"
                onChange={inputChange}
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
            <br />{" "}
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

export default LoginModal;

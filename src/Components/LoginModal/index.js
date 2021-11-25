import React from "react";
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

const LoginModal = () => {
  return (
    <LoginContainer>
      <TabsContainer>
        <Tab>Login</Tab>
        <Tab>Register</Tab>
      </TabsContainer>
      {/* <p>Please login using account detail below</p>
      <FormContainer>
        <Wrapper class="emailinput">
          <Input spellcheck="false" type="email" />
          <Label className="label">Email</Label>
        </Wrapper>
        <Wrapper>
          <Input spellcheck="false" type="password" />
          <Label className="label">Password</Label>
        </Wrapper>
        <ButtonContainer>
          <ForgotPass to="/">Forgot Password?</ForgotPass>
          <SignInBtn type="submit">Sign In</SignInBtn>
        </ButtonContainer>
      </FormContainer>
      <NewAccount>
        New Member?<br/> <a href="/"> Create Account</a>
      </NewAccount> */}
      <p>Enter you Account Details</p>
      <FormContainer>
        <Block>
          <Wrapper>
            <Input spellcheck="false" type="text" />
            <Label className="label">First Name</Label>
          </Wrapper>
          <Wrapper class="emailinput">
            <Input spellcheck="false" type="email" />
            <Label className="label">Email</Label>
          </Wrapper>
          <Wrapper>
            <Input spellcheck="false" type="password" />
            <Label className="label">Password</Label>
          </Wrapper>
        </Block>
        <Block>
          <Wrapper>
            <Input spellcheck="false" type="text" />
            <Label className="label">Last Name</Label>
          </Wrapper>
          <Wrapper>
            <Input spellcheck="false" type="text" />
            <Label className="label">Phone</Label>
          </Wrapper>
          <Wrapper>
            <Input spellcheck="false" type="password" />
            <Label className="label">Confirm Password</Label>
          </Wrapper>
        </Block>
      </FormContainer>
      <ButtonContainer style={{ margin: "4px" }}>
        <AlreadyAccount>
          Already a Member?<a href="/"> Sign In</a>
        </AlreadyAccount>
        <SignUpBtn type="submit">Sign Up</SignUpBtn>
      </ButtonContainer>
    </LoginContainer>
  );
};

export default LoginModal;

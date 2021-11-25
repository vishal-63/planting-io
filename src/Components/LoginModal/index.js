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
} from "./LoginModalElements";

const LoginModal = () => {
  return (
    <LoginContainer>
      <TabsContainer>
        <Tab>Login</Tab>
        <Tab>Register</Tab>
      </TabsContainer>
      <p>Please login using account detail below.</p>
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
        New Member?<br/> <a to="/"> Create Account</a>
      </NewAccount>
    </LoginContainer>
  );
};

export default LoginModal;

import React from "react";
import {
  LoginContainer,
  TabsContainer,
  Tab,
  FormContainer,
  Wrapper,
  Input,
  Underline,
  Label,
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
        <Wrapper>
          <Input spellcheck="false" type="email" />
          <Underline className="underline"/>
          <Label className="label">Email</Label>
        </Wrapper>
        <Wrapper>
          <Input spellcheck="false" type="password" />
          <Underline className="underline"/>
          <Label className="label">Password</Label>
        </Wrapper>
          <a href="/">Forgot Password?</a>
          <SignInBtn type="submit">Sign In</SignInBtn>
      </FormContainer>
      <NewAccount>
        New Member? <a href="/">Create Account</a>
      </NewAccount>
    </LoginContainer>
  );
};

export default LoginModal;

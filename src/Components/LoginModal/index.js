import React from "react";
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
          <ForgotPass href="/">Forgot Password?</ForgotPass>
          <SignInBtn type="submit">Sign In</SignInBtn>
        </ButtonContainer>
      </FormContainer>
      <NewAccount>
        New Member?<br/> <a href="/">Create Account</a>
      </NewAccount>
    </LoginContainer>
  );
};

export default LoginModal;

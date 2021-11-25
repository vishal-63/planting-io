import React, {useState} from "react";
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
  if (e.target.value != "") {
    e.target.classList.add("text");
  } else {
    e.target.classList.remove("text");
  }
}

const LoginModal = ({mode}) => {

  const [formMode, setFormMode] = useState(mode || 'login')

  return (
    <>
      {formMode==='login'?
      <LoginContainer>
        <TabsContainer>
          <Tab className="login">Login</Tab>
          <Tab onClick={()=>setFormMode('register')}>Register</Tab>
        </TabsContainer>
        <p>Please login using account detail below</p>
      <FormContainer>
        <Wrapper class="emailinput">
          <Input spellcheck="false" type="email" onChange={inputChange} />
          <Label className="label">Email</Label>
        </Wrapper>
        <Wrapper>
          <Input spellcheck="false" type="password" onChange={inputChange} />
          <Label className="label">Password</Label>
        </Wrapper>
        <ButtonContainer>
          <ForgotPass to="/">Forgot Password?</ForgotPass>
          <SignInBtn type="submit">Sign In</SignInBtn>
        </ButtonContainer>
      </FormContainer>
      <NewAccount>
        New Member?<br/> <a href="/"> Create Account</a>
      </NewAccount>
      </LoginContainer>:<></>}
      {formMode==='register'?
      <LoginContainer className="register">
        <TabsContainer>
          <Tab onClick={()=>setFormMode('login')}>Login</Tab>
          <Tab className="register">Register</Tab>
        </TabsContainer>
        <p>Enter your Account Details</p>
        <FormContainer className="register">
          <Block>
            <Wrapper>
              <Input spellcheck="false" type="text" onChange={inputChange} />
              <Label className="label">First Name</Label>
            </Wrapper>
            <Wrapper class="emailinput">
              <Input spellcheck="false" type="email" onChange={inputChange} />
              <Label className="label">Email</Label>
            </Wrapper>
            <Wrapper>
              <Input
                spellcheck="false"
                type="password"
                onChange={inputChange}
              />
              <Label className="label">Password</Label>
            </Wrapper>
          </Block>
          <Block>
            <Wrapper>
              <Input spellcheck="false" type="text" onChange={inputChange} />
              <Label className="label">Last Name</Label>
            </Wrapper>
            <Wrapper>
              <Input spellcheck="false" type="text" onChange={inputChange} />
              <Label className="label">Phone</Label>
            </Wrapper>
            <Wrapper>
              <Input
                spellcheck="false"
                type="password"
                onChange={inputChange}
              />
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
      </LoginContainer>:<></>}
    </>
  );
};

export default LoginModal;

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import img from "../../Images/nursery-login-bg.png";
import {
  FormContainer,
  Wrapper,
  Input,
  Label,
  ButtonContainer,
  ForgotPass,
  SignInBtn,
  NewAccount,
} from "../../Components/LoginModal/LoginModalElements";

function inputChange(e) {
  if (e.target.value !== "") {
    e.target.classList.add("text");
  } else {
    e.target.classList.remove("text");
  }
}

const NurseryLoginContainer = styled.section`
  max-width: 500px;
  margin: 4rem 0 0 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin: 4rem auto;
  }
`;

const Title = styled.h3`
  font-size: 2rem;
  font-family: Lora;
  color: #618925;
  margin-bottom: 1.5rem;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: url(${img}) no-repeat center center fixed;
  z-index: -1;
  background-size: cover;
`;

const NurseryLogin = () => {
  return (
    <>
      <Background></Background>
      <NurseryLoginContainer>
        <Title>LOGIN</Title>
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
        <NewAccount style={{ justifyContent: "center" }}>
          New Member?
          <br /> <Link to="/nursery/register"> Create Account</Link>
        </NewAccount>
      </NurseryLoginContainer>
    </>
  );
};

export default NurseryLogin;

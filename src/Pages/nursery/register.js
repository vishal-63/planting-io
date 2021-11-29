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
  Block,
  SignUpBtn,
  AlreadyAccount,
} from "../../Components/LoginModal/LoginModalElements";

function inputChange(e) {
  if (e.target.value !== "") {
    e.target.classList.add("text");
  } else {
    e.target.classList.remove("text");
  }
}

const NurseryRegisterContainer = styled.section`
  max-width: 700px;
  margin: 4rem 0 0 5.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index:1;

  @media (max-width:768px){
    margin: 4rem auto;
  }
`;

const Title = styled.h3`
  font-size: 2rem;
  font-family: Lora;
  color: #618925;
  margin-bottom:1.5rem;
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

const NurseryRegister = () => {
  return (
  <>
    <Background></Background>
    <NurseryRegisterContainer>
      <Title>REGISTER</Title>
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
            <Link to="/nursery/login"> Sign In</Link>
          </AlreadyAccount>
          <SignUpBtn type="submit">Sign Up</SignUpBtn>
        </ButtonContainer>
      </FormContainer>
    </NurseryRegisterContainer></>
  );
};

export default NurseryRegister;

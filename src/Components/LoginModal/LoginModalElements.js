import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #dadada85;
  z-index: 99;

  & .close-button {
    position: absolute;
    top: 25px;
    right: 25px;
    height: 1.75rem;
    width: 1.75rem;
    cursor: pointer;
  }
`;

export const LoginContainer = styled.div`
  width: 700px;
  height: 450px;
  align-items: center;
  border-radius: 20px;
  /* position: fixed; */
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 20;
  background-color: #fff;

  & p {
    font-size: 14px;
    line-height: 21px;
    padding: 20px 5px 10px;
    text-align: center;

    @media (min-width: 768px) {
      font-size: 16px;
    }
  }

  @media (max-width: 768px) {
    height: auto;
    width: 90vw;
    padding: 0 1rem;

    & p {
      padding: 1rem;
    }

    &.register {
      height: 530px;
      scroll-behavior: auto;
      overflow: scroll;
      top: 50vh;
    }
  }
`;

export const TabsContainer = styled.div`
  border-bottom: 1px solid #a4a4a4;
  display: flex;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-around;
  margin: 0.5rem 0 0;
  width: 100%;
`;

export const Tab = styled.div`
  font-family: Lora;
  font-size: 30px;
  line-height: 31px;
  padding: 15px 10px;
  cursor: pointer;

  &.login,
  &.register {
    border-bottom: 5px solid #618925;
  }

  @media (max-width: 768px) {
    font-size: 19px;
  }
`;

export const FormContainer = styled.form`
  padding: 5px 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: 5rem;

  &.textarea {
    height: auto;
    width: 100%;
  }

  & .emailinput {
    margin-top: 6px;
  }

  &.register {
    width: 45%;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 55px;
  border: 0;
  border-bottom: 2px solid #2e2a33;
  outline: none;
  background: transparent;
  font-size: 1rem;
  transition: all 0.35s;
  margin: 1.1rem 0 0;

  &.invalid {
    border-color: #dc3545;
    background-color: rgb(220 53 69 / 25%);
  }

  &.invalid ~ .label,
  &::placeholder,
  &:-ms-input-placeholder,
  &::-ms-input-placeholder {
    color: #dc3545;
  }

  &::placeholder,
  &:-ms-input-placeholder,
  &::-ms-input-placeholder {
    font-size: 0.75rem;
  }

  &:focus ~ .label,
  &.text ~ .label,
  &.invalid ~ .label {
    transform: translate(0, -2.6rem) scale(1);
    color: #618925;
  }
`;

export const TextArea = styled.textarea`
  margin: 1.1rem 0 0;
  height: 75px;
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 2px solid #2e2a33;

  &:focus ~ .label,
  &.text ~ .label,
  &.invalid ~ .label {
    transform: translate(0, -3.2rem) scale(1);
    color: #618925;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 25px;
  align-items: center;
  justify-content: space-between;
  /* width: 90%; */

  &.register {
    margin: 1rem 0.25rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 1rem;

    &.register {
      flex-direction: column-reverse;
    }
  }
`;

export const ForgotPass = styled(Link)`
  font-size: 0.875rem;
  color: #066093;

  @media (min-wdith: 768px) {
    font-size: 1rem;
  }
`;

export const Label = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0rem, -50%);
  transform-origin: 0% 0%;
  pointer-events: none;
  transition: all 0.35s;
`;

export const SignInBtn = styled.button`
  height: 40px;
  background: #cddfc1;
  border: 1px solid #cddfc1;
  border-radius: 34px;
  font-family: Lora;
  font-size: 20px;
  display: flex;
  text-align: center;
  align-items: center;
  cursor: pointer;
  padding: 0 2rem;
  color: #0d0d06;

  @media (max-width: 768px) {
    padding: 0.4rem 2rem;
    margin-top: 1rem;

    &.nursery-page {
      margin: 0;
    }
  }

  &.verify {
    width: auto;
    align-self: flex-end;
  }
`;

export const NewAccount = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-top: 1.5rem;

  &.nursery-page {
    margin: 1rem 0 0 0;
    align-self: center;
  }

  & span,
  & a {
    color: #066093;
    padding-left: 3px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 14px;
    justify-content: center;
    margin: 1.5rem;
  }
`;

export const Block = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /* column-gap: 2rem; */

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 0.38rem;
  }
`;

export const SignUpBtn = styled.button`
  height: 40px;
  width: fit-content;
  background: #cddfc1;
  border: 1px solid #cddfc1;
  border-radius: 34px;
  font-family: Lora;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
  padding: 0 32px;
  color: #0d0d06;

  @media (max-width: 768px) {
    height: 45px;
    width: 150px;
    padding: 5px 35px;
  }
`;

export const AlreadyAccount = styled.div`
  font-size: 16px;
  line-height: 21px;
  display: flex;
  align-items: center;
  justify-self: flex-end;
  /* margin-top: 0.5rem; */

  & span,
  & a {
    color: #066093;
    cursor: pointer;
    padding-left: 3px;
  }

  @media (max-width: 768px) {
    width: 100%;
    line-height: 23px;
    margin-top: 1rem;
    font-size: 14px;
  }
`;

import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 700px;
  height: 450px;
  align-items: center;
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);

  & p {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 21px;
    padding: 20px 5px;
    text-align: center;
  }
`;

export const TabsContainer = styled.div`
  border-bottom: 1px solid #a4a4a4;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-around;
  margin: 5px 55px;
`;

export const Tab = styled.div`
  font-family: Lora;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 31px;
  padding: 15px 10px;
  border-bottom: 5px solid #618925;
`;

export const FormContainer = styled.form`
  margin: -20px 10px;
  padding: 5px 20px;

  & a {
    margin-top: 35px;
    margin-left: 25px;
    padding: 12px;
    display: flex;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    color: #066093;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: 4rem;
  margin: 5px 40px;
`;

export const Input = styled.input`
  width: 100%;
  height: 75px;
  padding-left: 2.5rem;
  border: 0;
  border-bottom: 2px solid #2e2a33;
  outline: none;
  background: transparent;
  font-size: 1rem;
  transition: all 0.35s;
  padding: 2px 10px;

  &:focus ~ .label {
    transform: translate(0, -2.25rem) scale(1);
  }

  &:focus ~ .underline {
    transform: scaleX(1);
  }
`;

export const Underline = styled.div`
  display: block;
  position: absolute;
  z-index: 1;
  left: 0;
  bottom: 0;
  top: 0;
  transform: scaleX(0);
  width: 100%;
  height: 2px;
  transition: all 0.35s;
`;

export const Label = styled.div`
  position: absolute;
  top: 70%;
  left: -40px;
  transform: translate(2.5rem, -50%);
  transform-origin: 0% 0%;

  pointer-events: none;
  transition: all 0.35s;
`;

export const SignInBtn = styled.button`
  position: absolute;
  width: 135px;
  height: 40px;
  left: 500px;
  top: 300px;
  background: #cddfc1;
  border: 1px solid #cddfc1;
  box-sizing: border-box;
  border-radius: 34px;
  font-family: Lora;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  display: flex;
  text-align: ;
  align-items: center;
  cursor: pointer;
  padding-left: 32px;
  color: #0d0d06;
`;

export const NewAccount = styled.div`
  position: absolute;
  left: 230px;
  top: 390px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 21px;
  /* identical to box height */

  display: inline;
  align-items: center;
  & a {
    color: #066093;
  }
`;

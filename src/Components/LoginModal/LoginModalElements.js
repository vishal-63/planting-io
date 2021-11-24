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
  padding: 0 2rem;

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
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-around;
  margin: 5px 55px;
`;

export const Tab = styled.div`
  font-family: Lora;
  font-size: 30px;
  line-height: 31px;
  padding: 15px 10px;
  border-bottom: 5px solid #618925;
`;

export const FormContainer = styled.form`
  margin-top: -17px;
  padding: 5px 0px;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: 4rem;
  margin: 15px 40px;

  & .emailinput {
    margin-top: 6px;
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
  padding: 0px 1px;

  &:focus ~ .label {
    transform: translate(0, -2.6rem) scale(1);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const ForgotPass = styled.a`
  padding: 12px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  color: #066093;
  margin-left: 30px;
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
  line-height: 30px;
  display: flex;
  text-align: center;
  align-items: center;
  cursor: pointer;
  padding: 0 32px;
  color: #0d0d06;
  margin-right: 40px;
`;

export const NewAccount = styled.div`
  position: absolute;
  left: 230px;
  top: 380px;
  font-size: 17px;
  line-height: 21px;
  display: inline;
  align-items: center;
  & a {
    color: #066093;
  }
`;

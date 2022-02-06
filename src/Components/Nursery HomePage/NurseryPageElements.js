import styled from "styled-components";

export const HeroSection = styled.section`
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;
export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 0 1rem;

  @media (min-width: 540px) {
    width: 70%;
  }

  @media (min-width: 769px) {
    width: 35%;
  }
`;

export const HeroTitle = styled.h3`
  font-family: Lora, "sans serif";
  font-size: 2rem;
  letter-spacing: -1px;
  max-width: 450px;
`;

export const HeroSubtitle = styled.p`
  margin-top: 1rem;
  max-width: 450px;
`;

export const PhoneInputWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  margin-top: 1.5rem;
  height: 40px;

  & span {
    padding: 0.5rem;
    border: 1px solid #a4a4a4;
    border-radius: 5px 0 0 5px;
    border-right: none;
    height: 100%;
  }
`;

export const PhoneInput = styled.input`
  height: 100%;
  border: none;
  outline: none;
  box-shadow: none;
  border-top: 1px solid #a4a4a4;
  border-bottom: 1px solid #a4a4a4;
  width: 70%;

  @media (min-width: 540px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  height: 100%;
  padding: 0.5rem;
  border: none;
  color: #fff;
  background-color: #28c274;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  white-space: nowrap;
`;

export const HeroSvg = styled.img`
  width: 45%;

  @media (min-width: 769px) {
    width: 35%;
  }
`;

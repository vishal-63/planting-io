import styled from "styled-components";

export const MainContainer = styled.main`
  max-width: 80vw;
  height: calc(
    100vh - 80px - 1rem
  ); /* 80px for the navbar and 2rem for margin*/
  margin: 1rem auto 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    margin-top: 2rem;
    height: calc(
      100vh - 80px - 2rem
    ); /* 80px for the navbar and 2rem for margin*/
  }
`;

export const Title = styled.h2`
  font-family: Lora, sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: -1px;
  align-self: center;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 0.8rem;
  margin-top: 0.5rem;
  align-self: center;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const ContentWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem 1rem;

  @media (min-width: 769px) {
    margin: 2rem auto;
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    width: 80vw;
    margin: 2rem auto;
  }
`;

export const NurseryLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2.5rem;
  max-width: 500px;
  width: 100%;

  @media (min-width: 1100px) {
    max-width: 40%;
  }
`;

export const LoginSvg = styled.img`
  max-height: 150px;
  max-width: 100%;
  margin: 2rem 0;

  @media (min-width: 769px) {
    margin: 0 2rem;
    max-width: 250px;
    max-height: 100%;
  }

  @media (min-width: 1100px) {
    max-width: 30%;
  }
`;

export const Waves = styled.div`
  /* position: relative;
  bottom: 0; */

  width: 100vw;
  display: flex;
  align-items: flex-end;

  & svg {
    width: 100vw;
  }
`;

export const Steps = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  margin-top: 1rem;
`;

export const StepNumber = styled.span`
  font-size: 0.8rem;
  color: ${({ activeStep }) => (activeStep ? "#fff" : "#000")};

  height: 25px;
  width: 25px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ activeStep }) =>
    activeStep ? "#28c274" : "transparent"};
  border: 1px solid ${({ activeStep }) => (activeStep ? "#28c274" : "#000")};
  border-radius: 20px;
`;

export const StepName = styled.span`
  font-size: 0.875rem;
  color: #000;
  margin: 0 0.5rem;
  position: relative;

  @media (min-wdith: 540px) {
    font-size: 1rem;
    margin: 0 0.75rem 0 0.5rem;
  }
`;

export const Line = styled.span`
  width: 75px;
  height: 1px;
  margin-right: 0.75rem;
  background-color: #000;

  @media (min-width: 540px) {
    width: 100px;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
  user-select: none;
  width: 100%;
`;

export const SelectLabel = styled.span`
  font-size: 0.9rem;
  color: #000000;
  pointer-events: none;
  position: absolute;
  top: -0.8rem;
`;

export const Select = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  &.open .custom-options {
    opacity: 1;
    visibility: visible;
    pointer-events: all;
  }
`;

export const SelectTrigger = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  color: #000;
  height: 50px;
  cursor: pointer;
  border-bottom: 1px solid #000;
  padding: 0 0.5rem;
`;

export const CustomOptions = styled.div`
  position: absolute;
  display: block;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #fafafa;
  transition: all 0.3s;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 2;
`;

export const CustomOption = styled.span`
  position: relative;
  display: block;
  font-size: 1rem;
  color: #000;
  cursor: pointer;
  transition: all 0.4s;
  padding: 0.75rem 0.5rem;

  &:hover {
    background-color: #ddd;
  }

  &.selected {
    color: #fff;
    background-color: #28c274;
  }
`;

import styled from "styled-components";

export const HeroSection = styled.section`
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;

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

export const HowItWorksContainer = styled.section`
  width: 100%;
  display: flex;
`;

export const SectionTitle = styled.div`
  background-color: #f9f9fb;
  width: 40%;
  margin: 0 !important;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  & h3 {
    color: #2d2a32;
    font-family: Lora, "sans serif";
    font-size: 2rem;
    font-weight: 500;
  }

  &::before {
    content: "";
    background-image: radial-gradient(#f2f1ff 30%, transparent 0);
    background-position: 0 0;
    background-size: 13px 13px;
    width: 160px;
    height: 90px;
    position: absolute;
    top: 10%;
    left: 10%;
  }
  &::after {
    content: "";
    background-image: radial-gradient(#f2f1ff 30%, transparent 0);
    background-position: 0 0;
    background-size: 13px 13px;
    width: 160px;
    height: 90px;
    position: absolute;
    bottom: 10%;
    right: 10%;
  }
`;

export const HowItWorksContent = styled.div`
  color: #2d2a32;
  width: 60%;
  padding: 2rem;

  & > div {
    margin-bottom: 4rem;
  }

  & .heading {
    font-weight: 500;
    font-size: 1.5rem;
    color: #2a7d2e;
    margin-bottom: 1rem;
  }

  & ul {
    list-style: none;
    margin-top: 1rem;
    padding-left: 0.5rem;
    border-left: 1px solid #2a7d2e88;
  }

  & p {
    margin: 1rem 0;
    width: 90%;
  }

  & a {
    color: #3370ff;
    cursor: pointer;
  }

  & .subtitle {
    font-size: 1.25rem;
    font-weight: 500;
    padding-left: 0.5rem;
    border-left: 3px solid #5ebb8c;
  }
`;

export const SectionContainer = styled.section`
  margin: 3rem auto;
  max-width: 1100px;

  & h3.title {
    font-size: 1.75rem;
    font-family: Lora, "sans serif";
    font-weight: 500;
    line-height: 1.5;
    margin-bottom: 1.5rem;
    color: #2a7d2e;
  }

  & .subtitle {
    color: #161616;
    font-weight: 500;
    font-size: 1.15rem;
    margin-bottom: 1rem;
    padding-left: 0.75rem;
    border-left: 3px solid #2a7d2e;
  }
`;

export const PricingFormula = styled.div`
  width: max-content;
  margin: 0 auto;
  padding: 2rem 3rem;
  background-color: #f9f9fb;
  border-radius: 15px;
  display: flex;
  gap: 2rem;
`;
export const FormulaItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & .formula-title {
    color: #2f2f2f;
    padding: 1rem 1.25rem;
    background-color: #fff;
    border-radius: 8px;
    margin-bottom: 0.5rem;
  }
  & .formula-caption {
    color: #666;
    font-size: 0.875rem;
    max-width: 225px;
    text-align: center;
  }
`;

export const FormulaIcon = styled.div`
  font-size: 3rem;
  font-family: Lora, "sans serif";
  color: #404643;
`;

export const SectionContent = styled.div`
  margin: 2rem 0;

  & > div {
    margin-bottom: 2rem;
  }

  & div > p {
    color: #3a3a39;
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    width: 85%;
  }
`;

export const ShippingSteps = styled.ul`
  list-style: none;
  font-size: 0.9rem;

  & li {
    display: flex;
    margin-bottom: 1.5rem;
  }

  & p.step-info {
    color: #3a3a3a;
  }
`;

export const ListStyle = styled.span`
  height: min-content;
  color: #2c6e53;
  background-color: #189b6422;
  border-radius: 5px;
  margin-right: 0.75rem;
  padding: 0.75rem;
  line-height: 1;
`;

export const FooterWrapper = styled.div`
  width: 100vw;
  background-color: #28c27433;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem 10vw;

  & div {
    @media (max-width: 540px) {
      width: 100%;
      margin-bottom: 1rem;
    }
  }
`;

export const ContactUs = styled.div`
  font-size: 1.125rem;

  & p {
    font-weight: 500;
  }
  & a {
    font-size: 1rem;
    cursor: pointer;
  }
`;

export const CopyRights = styled.div`
  font-size: 0.85rem;
  color: #fff;
  background-color: #176e42;
  text-align: center;
  width: 100%;
  padding: 0.25rem 0;
`;

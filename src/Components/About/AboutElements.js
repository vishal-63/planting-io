import styled from "styled-components";
import bgImg from "../../Images/aboutBg.png";

export const AboutHeader = styled.div`
  width: 100%;
  height: 350px;
  background-image: url(${bgImg});
  display: flex;
  justify-content: center;
  padding-top: 4rem;

  & h1 {
    color: #fff;
    font-size: 2.5rem;
    font-family: Lora, "sans-serif";
    font-weight: 600;
    letter-spacing: 2px;
    height: fit-content;
  }
`;

export const WelcomeCard = styled.div`
  width: 1000px;
  height: 400px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(20, 20, 20, 0.4);
  display: flex;
  justify-content: space-between;
  margin-top: -150px;

  & img {
    height: 100%;
    width: 45%;
  }
`;

export const WelcomeContent = styled.div`
  width: 55%;
  padding: 2rem;

  & h3 {
    font-size: 2rem;
    font-weight: 500;
    font-family: Lora, "sans serif";
    color: #28c274;
    margin-bottom: 1.5rem;
  }

  & .subtitle {
    font-size: 1.3rem;
    font-weight: 500;
    color: #000;
    margin-bottom: 1.5rem;
  }

  & p {
    color: #2d2a32;
    letter-spacing: 0.75px;
    line-height: 1.721;
  }
`;

export const GardenerDiv = styled.div`
  width: 50%;
  padding: 1rem 2rem;

  & .caption {
    font-size: 1.5rem;
    font-weight: 500;
    color: #000;
  }

  & p {
    color: #121212bf;
    margin-top: 1.5rem;
  }
`;

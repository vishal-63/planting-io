import styled from "styled-components";

export const HeroContainer = styled.section`
  height: calc(100vh - 110px);
  width: 100vw;

  & .slick-slider,
  & .slick-slider div {
    height: 100%;
  }

  @media (min-width: 768px) {
    height: calc(100vh - 120px);
  }
`;

export const HeroSlideWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: url(${(props) => props.src});
  background-size: cover;
  background-position-x: 55%;

  &.second-slide {
    background-position-x: 40%;
  }

  @media (min-width: 767px) {
    background-position-x: 60%;
  }
`;

export const HeroContent = styled.div`
  font-family: Lora, "sans serif";
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 35% !important;
  position: relative;
  top: 50%;
  left: 15%;
  transform: translateY(-50%);
  max-width: 60%;
  max-height: 300px;

  &.second-slide {
    left: 22.5%;
    align-items: flex-end;
  }

  @media (min-width: 768px) {
    max-width: 40%;

    &.second-slide {
      left: 45%;
    }
  }
`;

export const HeroTitle = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: -0.5px;
  font-family: inherit;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const HeroText = styled.p`
  font-size: 1.25rem;
  font-family: inherit;

  &.second-slide-text {
    text-align: right;
  }

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const HeroButton = styled.button`
  font-size: 1rem;
  color: #000;
  background: #cddfc1;
  padding: 0.5rem 1.2rem;
  border: none;
  border-radius: 35px;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 1.2rem;
    padding: 0.65rem 1.3rem;
  }
`;

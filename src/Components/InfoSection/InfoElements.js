import { keyframes } from "styled-components";
import styled from "styled-components";
import bgImg from "../../Images/gardening.jpg";

export const Title = styled.h3`
  font-family: Lora, "sans serif";
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.75px;
  color: #000;
  margin-bottom: 2rem;
`;

export const Button = styled.button`
  font-size: 1rem;
  font-family: Lora, "sans serif";
  padding: 0.6rem 1.2rem;
  border: 1.5px solid #28c274;
  border-radius: 10px;
  margin-top: 1.5rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 0 0.5rem #28c27488;
    transition: all 0.3s ease;
  }

  &.primary-btn {
    color: #fff;
    background-color: #28c274;
    border: none;
  }

  &.secondary-btn {
    color: #28c274;
    background-color: transparent;
  }

  &.about-us {
    position: absolute;
    bottom: 0;
    transform: translateY(50%);
  }
`;

export const SectionContainer = styled.section`
  width: 100%;
  margin: 4.5rem auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    padding: 0;
    max-width: 90vw;
  }

  @media (min-width: 1100px) {
    max-width: 1200px;
  }
`;

export const PlantCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  max-width: 1300px;

  @media (min-width: 768px) {
    gap: 1.5rem;
  }

  @media (min-width: 900px) {
    gap: 2rem;
  }
`;

export const PlantCard = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 0.25rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  /* background-color: ; */

  &:hover {
    box-shadow: 0 0 0.75rem rgba(0, 0, 0, 0.4);
    transition: all 0.2s ease-in-out;
  }

  @media (min-width: 768px) {
    width: 175px;
  }

  @media (min-width: 1100px) {
    width: 200px;
  }
`;

export const PlantImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
`;

export const PlantName = styled.p`
  display: inline;
  font-size: 0.875rem;
`;

export const NurseryName = styled.span`
  font-size: 0.8rem;
  color: #666;
  margin-left: 0.5rem;
`;

export const PlantStarsWrapper = styled.div`
  font-size: 0.65rem;
  display: flex;
  align-items: center;

  & svg {
    height: 0.75rem;
    width: 0.75rem;
  }
`;

export const PlantPrice = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0.5rem;
`;

export const DiscountedPrice = styled.div`
  color: #000;
  font-size: 1rem;
  display: flex;
  align-items: center;
  margin-right: 0.25rem;

  @media (min-width: 900px) {
    font-size: 1.1rem;
  }
`;

export const ActualPrice = styled.span`
  color: #7d7d7d;
  font-size: 0.75rem;
  text-decoration: line-through;
  transform: translateY(12%);
`;

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  @media (min-width: 900px) {
    flex-direction: row;
    max-width: 85vw;
    margin-bottom: 2rem;
  }
  max-width: 1100px;
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;

  @media (min-width: 540px) {
    width: 90%;
    padding: 1.5rem;
  }
  @media (min-width: 900px) {
    width: 52%;
    padding-right: 3.5rem;
    height: 300px;
  }
`;

export const AboutHeading = styled.h4`
  font-size: 1.25rem;
  color: #000;
  letter-spacing: 1px;
  margin-bottom: 1rem;
`;

export const AboutText = styled.p`
  color: #2d2a32;
  font-size: 1rem;
  margin-bottom: 1.5rem;
`;

export const AboutImg = styled.div`
  width: 65%;
  border-radius: 10px;
  position: relative;
  z-index: 3;
  margin-bottom: 1rem;

  @media (min-width: 540px) {
    width: 50%;
  }
  @media (min-width: 900px) {
    width: 48%;
    height: 350px;
    margin-bottom: 0;
    transform: translate(-8%, 8%);
  }
  @media (min-width: 1100px) {
    height: 350px;
  }
  @media (min-width: 1100px) {
    height: 300px;
  }

  & img {
    width: 100%;
    border-radius: 10px;
    height: inherit;
  }

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    border: 2px solid #2d2a32;
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transform: translate(3%, 3%);

    @media (max-width: 900px) {
      display: none;
    }
  }
`;

export const ServicesCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;

  @media (min-width: 1100px) {
    gap: 3rem;
  }
`;

export const ServicesCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  padding: 2rem 1rem;
  position: relative;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  text-align: center;

  @media (min-width: 900px) and (max-width: 1100px) {
    width: 200px;
  }

  & p {
    color: #222;
    font-size: 1rem;
  }

  & h4 {
    color: #000;
    font-size: 1.2rem;
    font-weight: 500;
    margin: 1rem 0;
  }

  & img.leaf {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(10%, 10%);
  }
`;

export const ParallaxContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  padding: 3rem 2rem;

  @media (min-width: 540px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const ParallaxDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 1rem;

  @media (max-width: 540px) {
    margin-bottom: 2rem;
  }
`;

export const ParallaxNumber = styled.div`
  font-family: Lora, "sans serif";
  color: #fff;
  padding: 0 1rem 1.5rem;
  margin-bottom: 0.75rem;
  font-size: 2.5rem;
  position: relative;

  @media (min-width: 900px) {
    font-size: 2.875rem;
  }

  &::after {
    content: "";
    width: 150px;
    height: 3px;
    background-color: #ffbf34;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const ParallaxText = styled.p`
  font-size: 1rem;
  color: #fff;
  text-align: center;
  margin-top: 0.75rem;

  @media (min-width: 900px) {
    font-size: 1.25rem;
  }
`;

const PlantAnimation = keyframes`
  0% {
    transform: translate(-50%, -70%);
  }
  50% {
    transform: translate(-50%, -60%);
  }
  100% {
    transform: translate(-50%, -70%);
  }
`;

const PlantAnimationMobile = keyframes`
  0% {
    transform: translate(0, 0%);
  }
  50% {
    transform: translate(0, -10%);
  }
  100% {
    transform: translate(0, 0%);
  }
`;

export const PlantCareContainer = styled.section`
  width: 100vw;
  padding: 3rem 1.5rem;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (min-width: 540px) {
    padding: 3rem;
  }

  & img.plant-care-img {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -70%);
    animation: ${PlantAnimation} 3s ease-in-out infinite;

    @media (max-width: 1250px) {
      width: 260px;
    }

    @media (max-width: 900px) {
      margin-bottom: 2rem;
      position: relative;
      top: auto;
      left: auto;
      animation: ${PlantAnimationMobile} 3s ease-in-out infinite;
    }
  }
`;

export const PlantCareSubtitle = styled.p`
  color: #666666;
  font-size: 1rem;
  max-width: 100%;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 0.75px;
  margin: 0 0 3rem;

  @media (min-width: 540px) {
    max-width: 80%;
  }

  @media (min-width: 900px) {
    max-width: 50%;
  }
`;

export const PlantCareCardWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto;

  @media (min-width: 900px) {
    height: 400px;
  }

  & div.row {
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 540px) {
      flex-wrap: wrap;
    }
  }
`;

export const PlantCareCard = styled.div`
  width: 100%;
  padding: 1rem;
  margin: 1rem 0;
  background-color: #fff;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media (min-width: 540px) {
    width: 45%;
  }
  @media (min-width: 900px) {
    width: 350px;
    padding: 2rem 1rem;
    margin: 0;
  }
  @media (min-width: 1100px) {
    width: 400px;
  }

  & div {
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    color: #666;
    font-size: 0.85rem;

    & h5 {
      font-size: 1.15rem;
      font-weight: 500;
      color: #5b9837;
    }
  }
`;
export const CtaContainer = styled.div`
  background-image: url(${bgImg});
  background-position: center;
  background-size: cover;
  width: 90vw;
  margin: 4rem auto;
  border-radius: 15px;
  position: relative;

  @media (min-width: 900px) {
    width: 80vw;
  }
`;

export const CtaWrapper = styled.div`
  width: 100%;
  padding: 2rem;
  border-radius: 15px;
  background: linear-gradient(
    90deg,
    rgba(3, 3, 3, 0.93) 0%,
    rgba(0, 0, 0, 0.66) 44.06%,
    rgba(0, 0, 0, 0.17) 74.27%,
    rgba(0, 0, 0, 0) 100%
  );
`;

export const CtaTitle = styled.h5`
  color: #fff;
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: -1px;
  z-index: 2;

  @media (min-width: 540px) {
    font-size: 1.5rem;
  }
`;

export const CtaText = styled.p`
  color: #fff;
  font-size: 0.8rem;
  max-width: 95%;
  margin: 1.5rem 0 0;
  z-index: 2;

  @media (min-width: 540px) {
    font-size: 1rem;
    max-width: 75%;
  }

  @media (min-width: 1100px) {
    max-width: 50%;
  }
`;

export const TestimonialContainer = styled.section`
  max-width: 80vw;
  margin: 0 auto;

  @media (min-width: 1100px) {
    max-width: 1200px;
  }
`;

export const TestimonialCard = styled.div`
  width: 250px !important;
  position: relative;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  margin: 4rem 0;
  transform: translateX(20%);

  @media (min-width: 900px) {
    width: 320px !important;
    padding: 2rem;
  }

  & img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const ClientName = styled.div`
  color: #000;
  font-size: 1.25rem;
  margin: 1rem auto 0;
  text-align: center;
`;

export const ClientReview = styled.p`
  color: #000;
  font-size: 1rem;
  text-align: center;
  margin-top: 1rem;
`;

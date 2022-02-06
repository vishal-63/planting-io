import React from "react";
import {
  Button,
  HeroContent,
  HeroSection,
  HeroSubtitle,
  HeroSvg,
  HeroTitle,
  PhoneInput,
  PhoneInputWrapper,
} from "./NurseryPageElements";
import heroSvg from "../../Images/illustration.svg";

const NurseryPage = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroTitle>Grow your business by multiple times</HeroTitle>
        <HeroSubtitle>
          Sell your products and provide services to thoudands of customers
        </HeroSubtitle>
        <PhoneInputWrapper>
          <span>+91</span>
          <PhoneInput
            type="number"
            name="phone"
            id="phone"
            placeholder="Enter your Number"
          />
          <Button>Start Selling</Button>
        </PhoneInputWrapper>
      </HeroContent>
      <HeroSvg src={heroSvg} alt="Hero Section Illustration" />
    </HeroSection>
  );
};

export default NurseryPage;

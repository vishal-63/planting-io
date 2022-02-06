import React from "react";

import img from "../../Images/about-1.png";
import svg1 from "../../Images/services-1.svg";
import svg2 from "../../Images/services-2.svg";
import svg3 from "../../Images/services-3.svg";
import svg4 from "../../Images/services-4.svg";
import leafSvg from "../../Images/leaf-icon.svg";
import gardenerImg from "../../Images/garden-4.jpg";
import client1 from "../../Images/client-1.jpg";
import client2 from "../../Images/client-2.jpg";
import client3 from "../../Images/client-3.jpeg";
import client4 from "../../Images/client-4.jpg";
import {
  AboutHeader,
  GardenerDiv,
  WelcomeCard,
  WelcomeContent,
} from "./AboutElements";
import {
  SectionContainer,
  Title,
  ServicesCardWrapper,
  ServicesCard,
  TestimonialContainer,
  TestimonialCard,
  ClientName,
  ClientReview,
} from "../InfoSection/InfoElements";
import Slider from "react-slick";

const AboutComponent = () => {
  return (
    <section>
      <AboutHeader>
        <h1>About Our Company</h1>
      </AboutHeader>
      <WelcomeCard>
        <WelcomeContent>
          <h3>Welcome To Planting.io</h3>
          <div className="subtitle">
            Our professional gardeners help create, nourish and manage native
            gardens.
          </div>
          <p>
            Be it a balcony brimming with floral gardens, a vegetable patch for
            your family’s needs or a medicinal garden full of goodness,
            UrbanMali helps create and maintain your garden. City gardens play a
            vital role in bringing nature into urban spaces and we take great
            joy in restoring green cover for our urban locales.
          </p>
        </WelcomeContent>
        <img src={img} alt="" />
      </WelcomeCard>

      <SectionContainer>
        <Title>Services We Offer</Title>
        <ServicesCardWrapper>
          <ServicesCard>
            <img alt="" src={svg1} />
            <h4>Garden Setup</h4>
            <p>Nunc a dui at orci tincidunt pulvinar vel nec libero.</p>
            <img alt="" src={leafSvg} className="leaf" />
          </ServicesCard>
          <ServicesCard>
            <img alt="" src={svg2} />
            <h4>Lawn & Garden Care</h4>
            <p>Nunc a dui at orci tincidunt pulvinar vel nec libero.</p>
            <img alt="" src={leafSvg} className="leaf" />
          </ServicesCard>
          <ServicesCard>
            <img alt="" src={svg3} />
            <h4>Irrigation & Drainage</h4>
            <p>Nunc a dui at orci tincidunt pulvinar vel nec libero.</p>
            <img alt="" src={leafSvg} className="leaf" />
          </ServicesCard>
          <ServicesCard>
            <img alt="" src={svg4} />
            <h4>Garden Clearance</h4>
            <p>Nunc a dui at orci tincidunt pulvinar vel nec libero.</p>
            <img alt="" src={leafSvg} className="leaf" />
          </ServicesCard>
        </ServicesCardWrapper>
      </SectionContainer>

      <SectionContainer
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "6rem",
        }}
      >
        <img
          src={gardenerImg}
          alt="Gardener"
          style={{ height: "325px", borderRadius: "10px" }}
        />
        <GardenerDiv>
          <div className="caption">We believe in empowering Gardeners</div>
          <p>
            Ensuring dignified employment, a healthy income and a support
            network, we empower every member of our garden experts with the
            confidence of being able to pay back their debts and live a better
            life within the city.
          </p>
          <p>
            The Planting.io network of gardeners are also beneficiaries of
            microfinance options further allowing them to pay back agricultural
            debts, provide quality education for their children and better
            healthcare for their family members.
          </p>
        </GardenerDiv>
      </SectionContainer>

      <Testimonials />
    </section>
  );
};

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 750,
    slidesToShow: 3,
    slidesToScroll: 1,
    // variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <TestimonialContainer>
      <Title style={{ textAlign: "center" }}>Testimonials</Title>
      <Slider {...settings}>
        <TestimonialCard>
          <img src={client4} alt="" />
          <ClientName>Anusha Basu</ClientName>
          <ClientReview>
            You won't regret it. Thank you for making it painless, pleasant and
            most of all hassle free!
          </ClientReview>
        </TestimonialCard>
        <TestimonialCard>
          <img src={client1} alt="" />
          <ClientName>Rajendra Prabhu</ClientName>
          <ClientReview>
            These plants are my absolute favorite things to give as gifts!
          </ClientReview>
        </TestimonialCard>
        <TestimonialCard>
          <img src={client2} alt="" />
          <ClientName>Sirish Narang</ClientName>
          <ClientReview>
            Thanks planting.io your plants are amazing and your service is
            wonderful .
          </ClientReview>
        </TestimonialCard>
        <TestimonialCard>
          <img src={client3} alt="" />
          <ClientName>Siddharth Bal</ClientName>
          <ClientReview>
            I can honestly say that there is not one company that I've ever
            worked with that has better service.
          </ClientReview>
        </TestimonialCard>
      </Slider>
    </TestimonialContainer>
  );
};

export default AboutComponent;

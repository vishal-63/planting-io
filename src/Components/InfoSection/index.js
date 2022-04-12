import React from "react";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import { AiFillStar } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
import Slider from "react-slick";

import aboutImg from "../../Images/gardener-1.jpg";
import svg1 from "../../Images/services-1.svg";
import svg2 from "../../Images/services-2.svg";
import svg3 from "../../Images/services-3.svg";
import svg4 from "../../Images/services-4.svg";
import leafSvg from "../../Images/leaf-icon.svg";
import plantCare from "../../Images/plant-care.png";
import careIcon1 from "../../Images/care-icon-1.svg";
import careIcon2 from "../../Images/care-icon-2.svg";
import careIcon3 from "../../Images/care-icon-3.svg";
import careIcon4 from "../../Images/care-icon-4.svg";
import parallaxImg from "../../Images/parallax-img.png";
import client1 from "../../Images/client-1.jpg";
import client2 from "../../Images/client-2.jpg";
import client3 from "../../Images/client-3.jpeg";
import client4 from "../../Images/client-4.jpg";
import {
  SectionContainer,
  Title,
  PlantCardWrapper,
  PlantCard,
  PlantImg,
  PlantName,
  PlantStarsWrapper,
  PlantPrice,
  DiscountedPrice,
  ActualPrice,
  Button,
  AboutContent,
  AboutHeading,
  AboutImg,
  AboutText,
  AboutWrapper,
  ServicesCardWrapper,
  ServicesCard,
  ParallaxContent,
  ParallaxDiv,
  ParallaxNumber,
  ParallaxText,
  PlantCareContainer,
  PlantCareCard,
  PlantCareCardWrapper,
  PlantCareSubtitle,
  CtaContainer,
  CtaTitle,
  CtaText,
  CtaWrapper,
  TestimonialCard,
  ClientName,
  ClientReview,
  TestimonialContainer,
} from "./InfoElements.js";
import { plants } from "../../data/plants";

const InfoSection = () => {
  return (
    <>
      <FeaturedProducts />
      <AboutUs />
      <ServicesOffered />
      <Stats />
      <PlantCare />
      <RegisterCta />
      <Testimonials />
    </>
  );
};

const FeaturedProducts = () => {
  return (
    <SectionContainer>
      <Title>Featured Products</Title>
      <PlantCardWrapper>
        {plants.map((plant, index) => (
          <PlantCard key={index}>
            <Link to={`${plant.link}/${plant.id}`}>
              <PlantImg src={plant.img} alt={plant.name} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: "1rem .5rem 0",
                }}
              >
                <PlantName>{plant.name}</PlantName>
                <PlantStarsWrapper>
                  {[...Array(plant.stars)].map((index) => (
                    <AiFillStar key={index} />
                  ))}
                  {[...Array(5 - plant.stars)].map((index) => (
                    <AiFillStar key={index} style={{ color: "#dadada" }} />
                  ))}
                </PlantStarsWrapper>
              </div>
              <PlantPrice>
                <DiscountedPrice>
                  <BiRupee />
                  <span>{plant.discountedPrice}</span>
                </DiscountedPrice>
                <ActualPrice>{plant.actualPrice}</ActualPrice>
              </PlantPrice>
            </Link>
          </PlantCard>
        ))}
      </PlantCardWrapper>
      <Link to="/shop-plants">
        <Button className="secondary-btn">View All</Button>
      </Link>
    </SectionContainer>
  );
};

const AboutUs = () => {
  return (
    <SectionContainer>
      <Title>About Us</Title>
      <AboutWrapper>
        <AboutContent>
          <AboutHeading>
            Our professional gardeners help create and manage native gardens.
          </AboutHeading>
          <AboutText>
            Be it a balcony brimming with floral gardens, a vegetable patch for
            your family’s needs or a medicinal garden full of goodness, We help
            create and maintain your garden. City gardens play a vital role in
            bringing nature into urban spaces and we take great joy in restoring
            green cover for our urban locales.
          </AboutText>
          <Button className="primary-btn about-us">
            <Link to="/services">Book A Gardener</Link>
          </Button>
        </AboutContent>
        <AboutImg>
          <img src={aboutImg} alt="Gardener" />
        </AboutImg>
      </AboutWrapper>
    </SectionContainer>
  );
};

const ServicesOffered = () => {
  return (
    <SectionContainer>
      <Title>Services We Offer</Title>
      <ServicesCardWrapper>
        <ServicesCard>
          <img alt="" src={svg1} />
          <h4>Garden Setup</h4>
          <p>You can get your own garden set up at your home or office.</p>
          <img alt="" src={leafSvg} className="leaf" />
        </ServicesCard>
        <ServicesCard>
          <img alt="" src={svg2} />
          <h4>Lawn & Garden Care</h4>
          <p>You can book a one time or regurlar based gardening service.</p>
          <img alt="" src={leafSvg} className="leaf" />
        </ServicesCard>
        <ServicesCard>
          <img alt="" src={svg3} />
          <h4>Irrigation & Drainage</h4>
          <p> You can book a service for irrigating and draining your garden</p>
          <img alt="" src={leafSvg} className="leaf" />
        </ServicesCard>
        <ServicesCard>
          <img alt="" src={svg4} />
          <h4>Garden Clearance</h4>
          <p>
            You can get your garden neat and clean by booking garden clearance
            service.
          </p>
          <img alt="" src={leafSvg} className="leaf" />
        </ServicesCard>
      </ServicesCardWrapper>
    </SectionContainer>
  );
};

const Stats = () => {
  return (
    <Parallax
      bgImage={parallaxImg}
      bgImageAlt="Parallax Image"
      strength={500}
      style={{ marginTop: "6rem" }}
    >
      <ParallaxContent>
        <ParallaxDiv>
          <ParallaxNumber className="parallax-number">600+</ParallaxNumber>
          <ParallaxText>Customers</ParallaxText>
        </ParallaxDiv>
        <ParallaxDiv>
          <ParallaxNumber className="parallax-number">50+</ParallaxNumber>
          <ParallaxText>Services Completed</ParallaxText>
        </ParallaxDiv>
        <ParallaxDiv>
          <ParallaxNumber className="parallax-number">1200+</ParallaxNumber>
          <ParallaxText>Plants sold</ParallaxText>
        </ParallaxDiv>
        <ParallaxDiv>
          <ParallaxNumber className="parallax-number">20</ParallaxNumber>
          <ParallaxText>Nurseries Registered</ParallaxText>
        </ParallaxDiv>
      </ParallaxContent>
    </Parallax>
  );
};

const PlantCare = () => {
  return (
    <PlantCareContainer>
      <Title>Plant Care Guide</Title>
      <PlantCareSubtitle>
        Indoor plants often add to the ambience of a house or any place they are
        kept at. Not only they make a place look more beautiful but some also
        purify inside environment. Plants also improve your health and help
        increase your focus.
      </PlantCareSubtitle>

      <img src={plantCare} alt="" className="plant-care-img" />
      <PlantCareCardWrapper>
        <div className="row">
          <PlantCareCard>
            <img src={careIcon1} alt="Plant Care" />
            <div>
              <h5>Clean Air</h5>
              <p>
                Plants need to breathe for the same reason people and animals
                must breathe they need clean air to convert food into energy.
              </p>
            </div>
          </PlantCareCard>
          <PlantCareCard>
            <img src={careIcon2} alt="Plant Care" />
            <div>
              <h5>Hand Planted</h5>
              <p>
                For proper growth, plants need sufficient quantity or
                fertilizers or manure of the right type. We should provide them
                with these with hands.
              </p>
            </div>
          </PlantCareCard>
        </div>
        <div className="row">
          <PlantCareCard>
            <img src={careIcon3} alt="Plant Care" />
            <div>
              <h5>Water Deeply</h5>
              <p>
                Water is necessary for germination, rapid growth and healthy
                life of the plants.We should take care to water the plants
                regularly at proper intervals.
              </p>
            </div>
          </PlantCareCard>
          <PlantCareCard>
            <img src={careIcon4} alt="Plant Care" />
            <div>
              <h5>Natural Sunlight</h5>
              <p>
                The process of photosynthesis, which produces food for plants,
                is performed only in presence of sunlight.Thus the should get
                sufficient amount of sunlight.
              </p>
            </div>
          </PlantCareCard>
        </div>
      </PlantCareCardWrapper>
    </PlantCareContainer>
  );
};

const RegisterCta = () => {
  return (
    <CtaContainer>
      <CtaWrapper>
        <CtaTitle>Register as a Nursery</CtaTitle>
        <CtaText>
          Sell plants and provide gardening services to thousands of customers
          online on planting.io.
        </CtaText>
        <Button className="primary-btn">
          <Link to="/nursery/register">Register Now</Link>
        </Button>
      </CtaWrapper>
    </CtaContainer>
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

export default InfoSection;

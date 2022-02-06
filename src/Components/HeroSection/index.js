import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

import {
  HeroContainer,
  HeroSlideWrapper,
  HeroContent,
  HeroTitle,
  HeroText,
  HeroButton,
} from "./HeroElements";
import img1 from "../../Images/hero-img-1.jpg";
import imgMobile1 from "../../Images/hero-img-1-mobile.jpeg";
import img2 from "../../Images/hero-img-2.jpg";
import { Link } from "react-router-dom";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <BsFillArrowRightCircleFill
      className={className}
      style={{
        color: "#dadada",
        height: "1.5rem",
        width: "1.5rem",
        right: "20px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <BsFillArrowLeftCircleFill
      className={className}
      style={{
        color: "#dadada",
        height: "1.5rem",
        width: "1.5rem",
        left: "15px",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
}

const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const [bgImg, setBgImg] = useState(img1);
  const [scrollNav, setScrollNav] = useState(false);

  useEffect(() => {
    // change background image based on the screen width
    window.addEventListener("resize", () =>
      window.innerWidth < 900 ? setBgImg(imgMobile1) : setBgImg(img1)
    );

    // set scrollNav value based on the scroll position
    window.addEventListener("scroll", () =>
      window.scrollY >= 38 ? setScrollNav(true) : setScrollNav(false)
    );
  }, [setBgImg]);

  return (
    <HeroContainer scrollNav={scrollNav}>
      <Slider {...settings}>
        <HeroSlideWrapper src={bgImg}>
          <HeroContent>
            <HeroTitle>Lorem Ipsum</HeroTitle>
            <HeroText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </HeroText>
            <HeroButton>
              <Link to="/shop-plants">Shop Now</Link>
            </HeroButton>
          </HeroContent>
        </HeroSlideWrapper>

        <HeroSlideWrapper src={img2} className="second-slide">
          <HeroContent className="second-slide">
            <HeroTitle>Lorem Ipsum</HeroTitle>
            <HeroText className="second-slide-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </HeroText>
            <HeroButton>
              <Link to="/services">View All</Link>
            </HeroButton>
          </HeroContent>
        </HeroSlideWrapper>
      </Slider>
    </HeroContainer>
  );
};

export default HeroSection;

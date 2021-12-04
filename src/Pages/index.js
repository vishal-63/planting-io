import React from "react";
import LoginModal from "../Components/LoginModal";
import Topbar from "../Components/Topbar";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import InfoSection from "../Components/InfoSection";

const Home = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <HeroSection />
      <InfoSection />
    </>
  );
};

export default Home;

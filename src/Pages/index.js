import React from "react";
import Topbar from "../Components/Topbar";
import { UserNavbar } from "../Components/Navbar/index";
import HeroSection from "../Components/HeroSection";
import InfoSection from "../Components/InfoSection";

const Home = () => {
  return (
    <>
      <Topbar />
      <UserNavbar />
      <HeroSection />
      <InfoSection />
    </>
  );
};

export default Home;

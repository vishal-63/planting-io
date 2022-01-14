import React from "react";
import Topbar from "../Components/Topbar";
import { UserNavbar } from "../Components/Navbar/index";
import HeroSection from "../Components/HeroSection";
import InfoSection from "../Components/InfoSection";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <Topbar />
      <UserNavbar />
      <HeroSection />
      <InfoSection />
      <Footer />
    </>
  );
};

export default Home;

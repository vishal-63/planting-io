import React, { useState } from "react";
import Topbar from "../Components/Topbar";
import { UserNavbar } from "../Components/Navbar/index";
import HeroSection from "../Components/HeroSection";
import InfoSection from "../Components/InfoSection";
import Footer from "../Components/Footer";

const Home = () => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  const authenticateUser = () => setIsUserAuthenticated(true);

  return (
    <>
      <Topbar />
      <UserNavbar
        isUserAuthenticated={isUserAuthenticated}
        authenticateUser={authenticateUser}
      />
      <HeroSection />
      <InfoSection />
      <Footer />
    </>
  );
};

export default Home;

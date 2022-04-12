import React from "react";

import Topbar from "../Components/Topbar";
import { UserNavbar } from "../Components/Navbar";
import BreadCrumb from "../Components/BreadCrumb";
import Footer from "../Components/Footer";
import AboutComponent from "../Components/About";
import { Cookies } from "react-cookie";

const About = () => {
  const cookies = new Cookies();
  console.log(cookies.get("userId"));
  return (
    <>
      <Topbar />
      <UserNavbar />
      <BreadCrumb page="About" />
      <AboutComponent />
      <Footer />
    </>
  );
};

export default About;

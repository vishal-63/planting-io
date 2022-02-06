import React from "react";
import { services } from "../data/services";

import { UserNavbar } from "../Components/Navbar";
import Topbar from "../Components/Topbar";
import BreadCrumb from "../Components/BreadCrumb";
import Footer from "../Components/Footer";
import { ServiceSection, ServiceTitle } from "../Components/ServiceElements";
import SericeCardComponent from "../Components/ServiceCardComponent";

const Services = () => {
  return (
    <>
      <Topbar />
      <UserNavbar />
      <BreadCrumb page="Services" />
      <ServiceSection>
        <ServiceTitle>Services</ServiceTitle>
        {services.map((service, index) => (
          <SericeCardComponent service={service} key={index} />
        ))}
      </ServiceSection>
      <Footer />
    </>
  );
};

export default Services;

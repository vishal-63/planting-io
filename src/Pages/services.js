import React, { useEffect, useState } from "react";
import _ from "lodash";

import { UserNavbar } from "../Components/Navbar";
import Topbar from "../Components/Topbar";
import BreadCrumb from "../Components/BreadCrumb";
import Footer from "../Components/Footer";
import { ServiceSection, ServiceTitle } from "../Components/ServiceElements";
import SericeCardComponent from "../Components/ServiceCardComponent";

const Services = () => {
  const [services, setServices] = useState();

  useEffect(async () => {
    const res = await fetch("http://localhost:8080/api/service/get-all", {
      method: "GET",
    });
    const body = await res.json();
    const servicesGrouped = _.groupBy(body, "nurseryName");
    setServices(servicesGrouped);
  }, []);

  return (
    <>
      <Topbar />
      <UserNavbar />
      <BreadCrumb page="Services" />
      <ServiceSection>
        <ServiceTitle>Services</ServiceTitle>
        {Object.entries(services).map((service, index) => (
          <SericeCardComponent
            nurseryName={service[0]}
            service={service[1]}
            key={index}
          />
        ))}
      </ServiceSection>
      <Footer />
    </>
  );
};

export default Services;

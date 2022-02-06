import React from "react";

import { NurseryNavbar } from "../../Components/Navbar";
import NurseryPage from "../../Components/Nursery HomePage";

const Nursery = () => {
  return (
    <>
      <NurseryNavbar page="home" />
      <NurseryPage />
    </>
  );
};

export default Nursery;

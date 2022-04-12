import React, { useEffect } from "react";
import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import { NurseryNavbar } from "../../Components/Navbar";
import NurseryPage from "../../Components/Nursery HomePage";

const Nursery = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (new Cookies().get("nurseryId") != undefined)
      navigate("/nursery/dashboard");
  }, []);

  return (
    <>
      <NurseryNavbar page="home" />
      <NurseryPage />
    </>
  );
};

export default Nursery;

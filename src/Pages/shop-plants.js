import React, { useState, useEffect } from "react";

import BreadCrumb from "../Components/BreadCrumb";
import Footer from "../Components/Footer";
import { UserNavbar } from "../Components/Navbar";
import ShopPage from "../Components/ShopPage";
import Topbar from "../Components/Topbar";

const ShopPlants = () => {
  const [items, setItems] = useState([]);

  useEffect(async () => {
    const res = await fetch("http://localhost:8080/api/product/get-all/Plant", {
      method: "GET",
    });
    const body = await res.json();
    setItems(body);
  }, []);

  return (
    <>
      <Topbar />
      <UserNavbar />
      <BreadCrumb page="Plants" />
      <ShopPage items={items} link="/shop-plants" />
      <Footer />
    </>
  );
};

export default ShopPlants;

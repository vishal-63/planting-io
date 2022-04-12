import React, { useState, useEffect } from "react";
import { tools } from "../data/tools";
import BreadCrumb from "../Components/BreadCrumb";
import Footer from "../Components/Footer";
import { UserNavbar } from "../Components/Navbar";
import ShopPage from "../Components/ShopPage";
import Topbar from "../Components/Topbar";

const ShopTools = () => {
  const [items, setItems] = useState([]);

  useEffect(async () => {
    const res = await fetch("http://localhost:8080/api/product/get-all/Tool", {
      method: "GET",
    });
    const body = await res.json();
    // console.log(body);
    setItems(body);
  }, []);

  return (
    <>
      <Topbar />
      <UserNavbar />
      <BreadCrumb page="Tools" />
      <ShopPage items={items} link="/shop-tools" />
      <Footer />
    </>
  );
};

export default ShopTools;

import React, { useEffect, useState } from "react";
import { seeds } from "../data/seeds";
import BreadCrumb from "../Components/BreadCrumb";
import Footer from "../Components/Footer";
import { UserNavbar } from "../Components/Navbar";
import ShopPage from "../Components/ShopPage";
import Topbar from "../Components/Topbar";

const ShopSeeds = () => {
  const [items, setItems] = useState([]);

  useEffect(async () => {
    const res = await fetch("http://localhost:8080/api/product/get-all/Seed", {
      method: "GET",
    });
    const body = await res.json();
    console.log(body);
    setItems(body);
  }, []);
  return (
    <>
      <Topbar />
      <UserNavbar />
      <BreadCrumb page="Seeds" />
      <ShopPage items={items} link="/shop-seeds" />
      <Footer />
    </>
  );
};

export default ShopSeeds;

import React from "react";
import { seeds } from "../data/seeds";
import BreadCrumb from "../Components/BreadCrumb";
import Footer from "../Components/Footer";
import { UserNavbar } from "../Components/Navbar";
import ShopPage from "../Components/ShopPage";
import Topbar from "../Components/Topbar";

const ShopSeeds = () => {
  let itemsData = [
    ...seeds,
    ...seeds,
    ...seeds,
    ...seeds,
    ...seeds,
    ...seeds,
    ...seeds,
    // ...plants,
  ];
  let items = itemsData.sort(() => Math.random() - 0.5);
  return (
    <>
      <Topbar />
      <UserNavbar />
      <BreadCrumb />
      <ShopPage items={items} />
      <Footer />
    </>
  );
};

export default ShopSeeds;

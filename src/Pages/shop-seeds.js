import React from "react";
import { seeds } from "../data/seeds";
import BreadCrumb from "../Components/BreadCrumb";
import Footer from "../Components/Footer";
import { UserNavbar } from "../Components/Navbar";
import ShopPage from "../Components/ShopPage";
import Topbar from "../Components/Topbar";

const ShopSeeds = () => {
  let items = [
    ...seeds,
    ...seeds,
    ...seeds,
    ...seeds,
    ...seeds,
    ...seeds,
    ...seeds,
    // ...plants,
  ];
  return (
    <>
      <Topbar />
      <UserNavbar />
      <BreadCrumb page="Seeds" />
      <ShopPage items={items} />
      <Footer />
    </>
  );
};

export default ShopSeeds;

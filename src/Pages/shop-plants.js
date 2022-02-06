import React from "react";
import { plants } from "../data/plants";
import BreadCrumb from "../Components/BreadCrumb";
import Footer from "../Components/Footer";
import { UserNavbar } from "../Components/Navbar";
import ShopPage from "../Components/ShopPage";
import Topbar from "../Components/Topbar";

const ShopPlants = () => {
  let items = [
    ...plants,
    ...plants,
    ...plants,
    ...plants,
    ...plants,
    ...plants,
    ...plants,
    // ...plants,
  ];
  return (
    <>
      <Topbar />
      <UserNavbar />
      <BreadCrumb page="Plants" />
      <ShopPage items={items} />
      <Footer />
    </>
  );
};

export default ShopPlants;

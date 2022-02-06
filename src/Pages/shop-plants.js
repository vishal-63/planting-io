import React from "react";
import { plants } from "../data/plants";
import BreadCrumb from "../Components/BreadCrumb";
import Footer from "../Components/Footer";
import { UserNavbar } from "../Components/Navbar";
import ShopPage from "../Components/ShopPage";
import Topbar from "../Components/Topbar";

const ShopPlants = () => {
  let itemsData = [
    ...plants,
    ...plants,
    ...plants,
    ...plants,
    ...plants,
    ...plants,
    ...plants,
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

export default ShopPlants;

import React from "react";
import { tools } from "../data/tools";
import BreadCrumb from "../Components/BreadCrumb";
import Footer from "../Components/Footer";
import { UserNavbar } from "../Components/Navbar";
import ShopPage from "../Components/ShopPage";
import Topbar from "../Components/Topbar";

const ShopTools = () => {
  let itemsData = [
    ...tools,
    ...tools,
    ...tools,
    ...tools,
    ...tools,
    ...tools,
    ...tools,
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

export default ShopTools;

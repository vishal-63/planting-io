import React from "react";
import { tools } from "../data/tools";
import BreadCrumb from "../Components/BreadCrumb";
import Footer from "../Components/Footer";
import { UserNavbar } from "../Components/Navbar";
import ShopPage from "../Components/ShopPage";
import Topbar from "../Components/Topbar";

const ShopTools = () => {
  let items = [
    ...tools,
    ...tools,
    ...tools,
    ...tools,
    ...tools,
    ...tools,
    ...tools,
  ];
  return (
    <>
      <Topbar />
      <UserNavbar />
      <BreadCrumb page="Tools" />
      <ShopPage items={items} />
      <Footer />
    </>
  );
};

export default ShopTools;

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../Components/BreadCrumb";
import Footer from "../Components/Footer";
import ItemPage from "../Components/ItemPage";
import { UserNavbar } from "../Components/Navbar";
import Topbar from "../Components/Topbar";
import { getPlant } from "../data/plants";
import { getSeed } from "../data/seeds";
import { getTool } from "../data/tools";

const Item = () => {
  const params = useParams();
  const key = Object.keys(params)[0];

  let item;

  function setItem() {
    if (key === "plantId") {
      item = getPlant(params.plantId);
    } else if (key === "seedId") {
      item = getSeed(params.seedId);
    } else {
      item = getTool(params.toolId);
    }
  }

  setItem();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Topbar />
      <UserNavbar />
      <BreadCrumb />
      <ItemPage item={item} />
      <Footer />
    </>
  );
};

export default Item;

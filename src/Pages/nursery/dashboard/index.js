import React, { useEffect, useState } from "react";
import DashboardItems from "../../../Components/Dashboard Items";
import DashboardHeader from "../../../Components/DashboardHeader";
import DashboardMenu from "../../../Components/DashboardMenu";

const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.innerWidth >= 1100 ? setMenuOpen(true) : setMenuOpen(false);
  }, [setMenuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <DashboardHeader toggleMenu={toggleMenu} />
      <DashboardMenu activePage="dashboard" menuOpen={menuOpen} />
      <DashboardItems />
    </>
  );
};

export default Dashboard;

import React, { useEffect, useState } from "react";
import DashboardHeader from "../../Components/DashboardHeader";
import DashboardMenu from "../../Components/DashboardMenu";
import AdminDashboardItems from "../../Components/Admin Dashboard Items";
import { AdminMenu } from "../../data/dashboard-menu-items";

const Admin = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.innerWidth >= 1100 ? setMenuOpen(true) : setMenuOpen(false);
  }, [setMenuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <DashboardHeader toggleMenu={toggleMenu} name="Admin" />
      <DashboardMenu
        activePage="dashboard"
        menuOpen={menuOpen}
        listItems={AdminMenu}
      />
      <AdminDashboardItems />
    </>
  );
};

export default Admin;

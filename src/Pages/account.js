import React, { useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import { RiPencilFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";

import Topbar from "../Components/Topbar";
import { UserNavbar } from "../Components/Navbar";
import BreadCrumb from "../Components/BreadCrumb";
import Footer from "../Components/Footer";
import {
  AccountSection,
  AccountTitle,
  AddNew,
  Address,
  AddressWrapper,
  EditAddress,
  MainWrapper,
  ProfileInfo,
  SectionLinks,
  Sidebar,
} from "../Components/AccountElements";
import RecentOrders from "../Components/RecentOrders";

const Account = () => {
  const [tab, setTab] = useState("orders");
  return (
    <>
      <Topbar />
      <UserNavbar />
      <BreadCrumb page="Account" />
      <AccountSection>
        <AccountTitle>Your Account</AccountTitle>
        <div style={{ display: "flex" }}>
          <Sidebar>
            <ProfileInfo>
              <MdAccountCircle />
              <div className="name">Vishal Shah</div>
              <span>Edit Info</span>
            </ProfileInfo>
            <SectionLinks>
              <div
                className={tab === "orders" ? "active" : ""}
                onClick={() => setTab("orders")}
              >
                View Orders
              </div>
              <div
                className={tab === "address" ? "active" : ""}
                onClick={() => setTab("address")}
              >
                Manage Addresses
              </div>
            </SectionLinks>
          </Sidebar>
          <main style={{ width: "100%" }}>
            {tab === "orders" ? <RecentOrders /> : <AddressSection />}
          </main>
        </div>
      </AccountSection>
      <Footer />
    </>
  );
};

const AddressSection = () => {
  return (
    <MainWrapper>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="title">Saved Addresses</div>
        <AddNew>
          <IoMdAdd /> Add New Address
        </AddNew>
      </div>
      <AddressWrapper>
        <Address>
          <div className="address-name">Address 1</div>
          <p>202, Kanak Residency</p>
          <p>Pritamnagar, Paldi</p>
          <p>Ahmedabad - 380007</p>
          <p>Gujarat, India</p>
          <EditAddress>
            <RiPencilFill />
          </EditAddress>
        </Address>
        <Address>
          <div className="address-name">Address 2</div>
          <p>106, Puja Abhishek</p>
          <p>Pritamnagar, Paldi</p>
          <p>Ahmedabad - 380007</p>
          <p>Gujarat, India</p>
          <EditAddress>
            <RiPencilFill />
          </EditAddress>
        </Address>
      </AddressWrapper>
    </MainWrapper>
  );
};

export default Account;

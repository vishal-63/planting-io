import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Cookies } from "react-cookie";

import { BsChevronDown, BsChevronUp, BsDownload } from "react-icons/bs";

import DashboardHeader from "../../../Components/DashboardHeader";
import DashboardMenu from "../../../Components/DashboardMenu";
import { AdminMenu } from "../../../data/dashboard-menu-items";
import { DashboardCard } from "../../../Components/Dashboard Items/DashboardElements";

import logo from "../../../Images/logo.svg";

const Container = styled.section`
  width: 100vw;
  height: calc(100vh - 60px);
  overflow-y: scroll;
  background-color: #fbfbfb;
  padding: 2.5rem 1.5rem;
  position: relative;

  @media (min-width: 1100px) {
    width: calc(100vw - 275px);
    left: 275px;
  }
`;

const Title = styled.h4`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 1rem;
  margin-left: 0;
`;

const TitleContainer = styled.div`
  color: #444;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DownloadButton = styled.div`
  display: flex;
  align-items: center;
  padding: 0.3rem 0.8rem;
  cursor: pointer;
  border: 1px solid #697864;
  border-radius: 8px;
  font-size: 1.3rem;
  color: #697864;
  margin-right: 1rem;
`;

const ServicesReport = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [services, setServices] = useState([]);

  const jwt = new Cookies().get("adminId");

  const FilterableTable = require("react-filterable-table");

  React.useEffect(() => {
    window.innerWidth >= 1100 ? setMenuOpen(true) : setMenuOpen(false);
  }, [setMenuOpen]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "http://localhost:8080/api/admin/get-all-services",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      const body = await res.json();
      console.log(body);
      setServices(body);
    }
    fetchData();
  }, [jwt]);

  const data = services;
  const fields = [
    {
      name: "id",
      displayName: "Id",
      inputFilterable: true,
      sortable: true,
    },
    {
      name: "type",
      displayName: "Service Type",
      inputFilterable: true,
      exactFilterable: true,
      sortable: true,
    },
    {
      name: "nurseryName",
      displayName: "Nursery Name",
      inputFilterable: true,
      exactFilterable: true,
      sortable: true,
    },
    {
      name: "price",
      displayName: "Price",
      inputFilterable: true,
      exactFilterable: true,
      sortable: true,
    },
    {
      name: "discount",
      displayName: "Discount",
      inputFilterable: true,
      exactFilterable: true,
      sortable: true,
    },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <DashboardHeader toggleMenu={toggleMenu} />
      <DashboardMenu
        activePage="reports"
        menuOpen={menuOpen}
        listItems={AdminMenu}
        adminPage
      />
      <Container>
        <DashboardCard style={{ padding: "1rem" }}>
          <img src={logo} alt="" />
          <TitleContainer>
            <Title style={{ margin: "1rem 1rem 1rem 0" }}>Services</Title>
            <DownloadButton>
              <BsDownload />
            </DownloadButton>
          </TitleContainer>

          <FilterableTable
            namespace="Products"
            initialSort="name"
            data={data}
            fields={fields}
            noRecordsMessage="There are no records to display"
            noFilteredRecordsMessage="No record match your filters!"
            iconSortedDesc={<BsChevronUp />}
            iconSortedAsc={<BsChevronDown />}
          />
        </DashboardCard>
      </Container>
    </>
  );
};
export default ServicesReport;

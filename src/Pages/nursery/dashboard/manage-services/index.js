import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

import {
  DashboardCard,
  DashboardTable,
} from "../../../../Components/Dashboard Items/DashboardElements";
import DashboardHeader from "../../../../Components/DashboardHeader";
import DashboardMenu from "../../../../Components/DashboardMenu";

import { NurseryMenu } from "../../../../data/dashboard-menu-items";
import { services } from "../../../../data/service";

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
  font-size: 1.1rem;
  color: #444;
  font-weight: 500;
  margin: 1rem;
`;

const Icon = styled.span`
  color: #fff;
  font-size: 0.85rem;
  width: fit-content;
  margin-right: 0.5rem;
  padding: 0.25rem;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &.edit {
    background-color: #2ec272;
  }
  &.view {
    background-color: #2e7bc2;
  }
  &.delete {
    background-color: #e16565;
  }
`;

const ManageServices = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const nurseryServices = services.filter(
    (service) => service.nurseryName === "Vrundavan Nursery"
  );

  useEffect(() => {
    window.innerWidth >= 1100 ? setMenuOpen(true) : setMenuOpen(false);
  }, [setMenuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <DashboardHeader toggleMenu={toggleMenu} />
      <DashboardMenu
        activePage="manage-services"
        menuOpen={menuOpen}
        listItems={NurseryMenu}
      />
      <Container>
        <DashboardCard style={{ padding: "1rem" }}>
          <Title>Your Services</Title>
          <DashboardTable className="order-list">
            <thead>
              <tr>
                <th>Service Id</th>
                <th>Service Name</th>
                <th>Price</th>
                <th>Discount</th>
                <th>Service Type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {nurseryServices.map((service, index) => (
                <tr key={index}>
                  <td>#{service.id}</td>
                  <td>{service.serviceName}</td>
                  <td>{service.price}</td>
                  <td>{service.discount}</td>
                  <td>{service.type}</td>
                  <td>
                    <div style={{ display: "flex" }}>
                      <Icon className="delete">
                        <AiOutlineDelete />
                      </Icon>
                      <Link
                        to={`/nursery/dashboard/manage-services/${service.id}`}
                      >
                        <Icon className="edit">
                          <FiEdit />
                        </Icon>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </DashboardTable>
        </DashboardCard>
      </Container>
    </>
  );
};

export default ManageServices;

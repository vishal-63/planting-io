import styled from "styled-components";
import { FiEdit, FiEye } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

import React, { useEffect, useState } from "react";
import DashboardHeader from "../../Components/DashboardHeader";
import DashboardMenu from "../../Components/DashboardMenu";
import AdminDashboardItems from "../../Components/Admin Dashboard Items";
import { AdminMenu } from "../../data/dashboard-menu-items";
import {
  DashboardCard,
  DashboardTable,
} from "../../Components/Dashboard Items/DashboardElements";
import { nursery } from "../../data/nursery";

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
  &.delete {
    background-color: #e16565;
  }
  &.view {
    background-color: #2e7bc2;
  }
`;

const NurseryList = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    window.innerWidth >= 1100 ? setMenuOpen(true) : setMenuOpen(false);
  }, [setMenuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <DashboardHeader toggleMenu={toggleMenu} />
      <DashboardMenu
        activePage="nurseries"
        menuOpen={menuOpen}
        listItems={AdminMenu}
      />
      <Container>
        <DashboardCard style={{ padding: "1rem" }}>
          <Title>Nursery List</Title>
          <DashboardTable className="order-list">
            <thead>
              <tr>
                <th>Nursery Id</th>
                <th>Nursery Name</th>
                <th>email</th>
                <th>Mobile No.</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {nursery.map((nursery, index) => (
                <tr key={index}>
                  <td>{nursery.id}</td>
                  <td>{nursery.name}</td>
                  <td>{nursery.email}</td>
                  <td>{nursery.phone}</td>
                  <td>
                    <div style={{ display: "flex" }}>
                      <Icon className="view">
                        <FiEye />
                      </Icon>
                      <Icon className="edit">
                        <FiEdit />
                      </Icon>
                      <Icon className="delete">
                        <AiOutlineDelete />
                      </Icon>
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

export default NurseryList;

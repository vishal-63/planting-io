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
  DashboardTableStatus,
} from "../../Components/Dashboard Items/DashboardElements";
import { getProducts, products } from "../../data/products";

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

const ProductList = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    window.innerWidth >= 1100 ? setMenuOpen(true) : setMenuOpen(false);
  }, [setMenuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const products = getProducts();

  return (
    <>
      <DashboardHeader toggleMenu={toggleMenu} />
      <DashboardMenu
        activePage="product-list"
        menuOpen={menuOpen}
        listItems={AdminMenu}
      />
      <Container>
        <DashboardCard style={{ padding: "1rem" }}>
          <Title>Product List</Title>
          <DashboardTable className="order-list">
            <thead>
              <tr>
                <th>Product Id</th>
                <th>Product Name</th>
                <th>Nursery Name</th>
                <th>Product Type</th>
                <th>Price</th>
                <th>Discount</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((products, index) => (
                <tr key={index}>
                  <td>{products.id}</td>
                  <td>{products.name}</td>
                  <td>{products.nurseryName}</td>
                  <td>{products.type}</td>
                  <td>{products.price}</td>
                  <td>{products.discount}</td>
                  <td>{products.quantity}</td>
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

export default ProductList;

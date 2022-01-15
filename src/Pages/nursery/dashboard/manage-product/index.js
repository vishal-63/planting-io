import React from "react";
import styled from "styled-components";
import { FiEdit, FiEye } from "react-icons/fi";

import DashboardHeader from "../../../../Components/DashboardHeader";
import DashboardMenu from "../../../../Components/DashboardMenu";
import {
  DashboardCard,
  DashboardTable,
  DashboardTableStatus,
} from "../../../../Components/Dashboard Items/DashboardElements";
import { orders } from "../../../../data/orders";
import { getProducts, products } from "../../../../data/products";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { NurseryMenu } from "../../../../data/dashboard-menu-items";

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

const ManageProducts = () => {
  const products = getProducts();

  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    window.innerWidth >= 1100 ? setMenuOpen(true) : setMenuOpen(false);
  }, [setMenuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <DashboardHeader toggleMenu={toggleMenu} />
      <DashboardMenu
        activePage="manage-products"
        menuOpen={menuOpen}
        listItems={NurseryMenu}
      />
      <Container>
        <DashboardCard style={{ padding: "1rem" }}>
          <Title>Your Orders</Title>
          <DashboardTable className="order-list">
            <thead>
              <tr>
                <th>Product Id</th>
                <th>Product Name</th>
                <th>Type</th>
                <th>Price</th>
                <th>Discount</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>{product.id}</td>
                  <td style={{ width: "18%" }}>{product.name}</td>
                  <td>{product.type}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>{product.discount}</td>

                  <td>
                    <div style={{ display: "flex" }}>
                      <Icon className="delete">
                        <AiOutlineDelete />
                      </Icon>
                      <Link
                        to={`/nursery/dashboard/manage-products/${product.id}`}
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

export default ManageProducts;

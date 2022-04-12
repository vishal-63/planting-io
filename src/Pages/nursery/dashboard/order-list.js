import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiEdit, FiEye } from "react-icons/fi";

import DashboardHeader from "../../../Components/DashboardHeader";
import DashboardMenu from "../../../Components/DashboardMenu";
import {
  DashboardCard,
  DashboardTable,
  DashboardTableStatus,
} from "../../../Components/Dashboard Items/DashboardElements";
import { NurseryMenu } from "../../../data/dashboard-menu-items";
import { Cookies } from "react-cookie";
import _ from "lodash";

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
  &.action {
    background-color: #9d9d9d;
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  display: flex;

  &:hover ul {
    visibility: visible;
  }
`;

const DropdownMenu = styled.ul`
  position: absolute;
  width: max-content;
  top: 100%;
  right: 50%;
  list-style: none;
  font-size: 1rem;
  color: #333;
  z-index: 9;
  visibility: hidden;

  & li {
    background-color: #fff;
    border-bottom: 1px solid #aaa;
    padding: 0.4rem 0.65rem;
    cursor: pointer;

    &:hover {
      background-color: #dadada;
    }

    &:last-child {
      border: none;
    }
  }
`;

const OrderList = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    window.innerWidth >= 1100 ? setMenuOpen(true) : setMenuOpen(false);
  }, [setMenuOpen]);

  useEffect(async () => {
    const res = await fetch(
      "http://localhost:8080/api/order/get-nursery-orders",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${new Cookies().get("nurseryId")}`,
        },
      }
    );
    const body = await res.json();
    console.log(body);
    setOrders(body);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <DashboardHeader toggleMenu={toggleMenu} />
      <DashboardMenu
        activePage="order-list"
        menuOpen={menuOpen}
        listItems={NurseryMenu}
      />
      <Container>
        <DashboardCard style={{ padding: "1rem" }}>
          <Title>Your Orders</Title>
          <DashboardTable className="order-list">
            <thead>
              <tr>
                <th>Order Id</th>
                <th>Order Item</th>
                <th>Type</th>
                <th>Customer</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Date</th>
                <th>Order Status</th>
                <th>Payment Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td>#{order.orderId}</td>
                  <td style={{ width: "18%" }}>
                    {order.products[0]} &nbsp;
                    {order.products.length > 1 && (
                      <>
                        <span className="extra-product">
                          +{order.products.length - 1}
                        </span>
                      </>
                    )}
                  </td>
                  <td>{order.type}</td>
                  <td>{order.customerName}</td>
                  <td>{order.totalAmt}.00</td>
                  <td>{order.totalQuantity}</td>
                  <td>{order.orderDate}</td>
                  <td>
                    <DashboardTableStatus className={order.orderStatus}>
                      {order.orderStatus}
                    </DashboardTableStatus>
                  </td>
                  <td>
                    <DashboardTableStatus
                      className={`payment ${order.paymentStatus}`}
                    >
                      {order.paymentStatus}
                    </DashboardTableStatus>
                    {order.paymentStatus === "Pending" && (
                      <span style={{ fontSize: "0.75rem", color: "#7d7d7d" }}>
                        (Due {order.paymentDue})
                      </span>
                    )}
                  </td>
                  <td>
                    <Link to={`/nursery/dashboard/order/${order.orderId}`}>
                      <Icon className="view">
                        <FiEye />
                      </Icon>
                    </Link>
                    {/* <DropdownContainer>
                      <Icon className="action">
                        <BsThreeDots />
                      </Icon>
                      <DropdownMenu>
                        <li>View</li>
                        <li>Edit Order Status</li>
                      </DropdownMenu>
                    </DropdownContainer> */}
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

export default OrderList;

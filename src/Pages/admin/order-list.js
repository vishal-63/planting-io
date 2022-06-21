import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Cookies } from "react-cookie";
import { FiEye } from "react-icons/fi";

import { AdminMenu } from "../../data/dashboard-menu-items";

import DashboardHeader from "../../Components/DashboardHeader";
import DashboardMenu from "../../Components/DashboardMenu";
import {
  DashboardCard,
  DashboardTable,
  DashboardTableStatus,
} from "../../Components/Dashboard Items/DashboardElements";

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
`;

const AdminOrderList = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [orders, setOrders] = useState([]);

  React.useEffect(() => {
    window.innerWidth >= 1100 ? setMenuOpen(true) : setMenuOpen(false);
  }, [setMenuOpen]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "http://localhost:8080/api/admin/get-all-orders",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${new Cookies().get("adminId")}`,
          },
        }
      );
      const body = await res.json();
      setOrders(body);
    }
    fetchData();
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <DashboardHeader toggleMenu={toggleMenu} />
      <DashboardMenu
        activePage="orders"
        menuOpen={menuOpen}
        listItems={AdminMenu}
        adminPage
      />
      <Container>
        <DashboardCard style={{ padding: "1rem" }}>
          <Title>Orders</Title>
          <DashboardTable className="order-list">
            <thead>
              <tr>
                <th>Order Id</th>
                <th>Item Name</th>
                <th>Item Type</th>
                <th>Nursery</th>
                <th>Customer</th>
                <th>Quantity</th>
                <th>Sub Total</th>
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
                  <td>{order.itemName}</td>
                  <td>{order.type}</td>
                  <td>{order.nurseryName}</td>
                  <td>{order.customerName}</td>
                  <td>{order.quantity}</td>
                  <td>{order.subTotal}.00</td>
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
                    <div style={{ display: "flex" }}>
                      <Link to={`/admin/order/${order.orderId}`}>
                        <Icon className="edit">
                          <FiEye />
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

export default AdminOrderList;

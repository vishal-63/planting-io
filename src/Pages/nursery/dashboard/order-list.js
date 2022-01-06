import React from "react";
import styled from "styled-components";
import { FiEdit, FiEye } from "react-icons/fi";

import DashboardHeader from "../../../Components/DashboardHeader";
import DashboardMenu from "../../../Components/DashboardMenu";
import {
  DashboardCard,
  DashboardTable,
  DashboardTableStatus,
} from "../../../Components/Dashboard Items/DashboardElements";

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
  font-size: 1rem;
  color: #444;
  font-weight: 500;
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

const OrderList = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    window.innerWidth >= 1100 ? setMenuOpen(true) : setMenuOpen(false);
  }, [setMenuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <DashboardHeader toggleMenu={toggleMenu} />
      <DashboardMenu activePage="order-list" menuOpen={menuOpen} />
      <Container>
        <DashboardCard style={{ padding: "1rem" }}>
          <Title>Your Orders</Title>
          <DashboardTable className="order-list">
            <thead>
              <tr>
                <th>Order Id</th>
                <th>Product Name</th>
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
                  <td>{order.id}</td>
                  <td style={{ width: "18%" }}>{order.name}</td>
                  <td>{order.customer}</td>
                  <td>{order.price}</td>
                  <td>{order.quantity}</td>
                  <td>{order.date}</td>
                  <td>
                    <DashboardTableStatus className={order.orderStatusClass}>
                      {order.orderStatus}
                    </DashboardTableStatus>
                  </td>
                  <td>
                    <DashboardTableStatus
                      className={`payment ${order.paymentStatusClass}`}
                    >
                      {order.paymentStatus}
                    </DashboardTableStatus>
                    {order.paymentStatusClass == "pending" && (
                      <span style={{ fontSize: "0.75rem", color: "#7d7d7d" }}>
                        (Due {order.paymentDue})
                      </span>
                    )}
                  </td>
                  <td>
                    <div style={{ display: "flex" }}>
                      <Icon className="edit">
                        <FiEdit />
                      </Icon>
                      <Icon className="view">
                        <FiEye />
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

export default OrderList;

const orders = [
  {
    id: "#60234",
    name: "Areca Palm Plant",
    customer: "Vishal Shah",
    price: "399",
    quantity: "3",
    date: "26/12/21",
    orderStatus: "Received",
    orderStatusClass: "received",
    paymentStatus: "Pending",
    paymentStatusClass: "pending",
    paymentDue: "09/01/22",
  },
  {
    id: "#60234",
    name: "Peace Lily Plant",
    customer: "Vishal Shah",
    price: "345",
    quantity: "2",
    date: "26/12/21",
    orderStatus: "Received",
    orderStatusClass: "received",
    paymentStatus: "Pending",
    paymentStatusClass: "pending",
    paymentDue: "09/01/22",
  },
  {
    id: "#60233",
    name: "Garden Setup",
    customer: "Aastha Arora",
    price: "999",
    quantity: "1",
    date: "22/12/21",
    orderStatus: "Completed",
    orderStatusClass: "completed",
    paymentStatus: "Pending",
    paymentStatusClass: "pending",
    paymentDue: "05/01/22",
  },
  {
    id: "#60232",
    name: "X826 Five Way Dial Plastic Hose Nozzle",
    customer: "Sidhraj Mori",
    price: "199",
    quantity: "1",
    date: "20/12/21",
    orderStatus: "Shipping",
    orderStatusClass: "shipping",
    paymentStatus: "Received",
    paymentStatusClass: "received",
  },
  {
    id: "#60231",
    name: "Italian Basil Seeds",
    customer: "Kavyesh Vohra",
    price: "85",
    quantity: "3",
    date: "19/12/21",
    orderStatus: "Delivered",
    orderStatusClass: "delivered",
    paymentStatus: "Received",
    paymentStatusClass: "received",
  },
  {
    id: "#60231",
    name: "Italian Basil Seeds",
    customer: "Kavyesh Vohra",
    price: "85",
    quantity: "3",
    date: "19/12/21",
    orderStatus: "Delivered",
    orderStatusClass: "delivered",
    paymentStatus: "Received",
    paymentStatusClass: "received",
  },
  {
    id: "#60231",
    name: "Italian Basil Seeds",
    customer: "Kavyesh Vohra",
    price: "85",
    quantity: "3",
    date: "19/12/21",
    orderStatus: "Delivered",
    orderStatusClass: "delivered",
    paymentStatus: "Received",
    paymentStatusClass: "received",
  },
  {
    id: "#60231",
    name: "Italian Basil Seeds",
    customer: "Kavyesh Vohra",
    price: "85",
    quantity: "3",
    date: "19/12/21",
    orderStatus: "Delivered",
    orderStatusClass: "delivered",
    paymentStatus: "Received",
    paymentStatusClass: "received",
  },
  {
    id: "#60231",
    name: "Italian Basil Seeds",
    customer: "Kavyesh Vohra",
    price: "85",
    quantity: "3",
    date: "19/12/21",
    orderStatus: "Delivered",
    orderStatusClass: "delivered",
    paymentStatus: "Received",
    paymentStatusClass: "received",
  },
  {
    id: "#60231",
    name: "Italian Basil Seeds",
    customer: "Kavyesh Vohra",
    price: "85",
    quantity: "3",
    date: "19/12/21",
    orderStatus: "Delivered",
    orderStatusClass: "delivered",
    paymentStatus: "Received",
    paymentStatusClass: "received",
  },
  {
    id: "#60231",
    name: "Italian Basil Seeds",
    customer: "Kavyesh Vohra",
    price: "85",
    quantity: "3",
    date: "19/12/21",
    orderStatus: "Delivered",
    orderStatusClass: "delivered",
    paymentStatus: "Received",
    paymentStatusClass: "received",
  },
  {
    id: "#60231",
    name: "Italian Basil Seeds",
    customer: "Kavyesh Vohra",
    price: "85",
    quantity: "3",
    date: "19/12/21",
    orderStatus: "Delivered",
    orderStatusClass: "delivered",
    paymentStatus: "Received",
    paymentStatusClass: "received",
  },
  {
    id: "#60231",
    name: "Italian Basil Seeds",
    customer: "Kavyesh Vohra",
    price: "85",
    quantity: "3",
    date: "19/12/21",
    orderStatus: "Delivered",
    orderStatusClass: "delivered",
    paymentStatus: "Received",
    paymentStatusClass: "received",
  },
  {
    id: "#60231",
    name: "Italian Basil Seeds",
    customer: "Kavyesh Vohra",
    price: "85",
    quantity: "3",
    date: "19/12/21",
    orderStatus: "Delivered",
    orderStatusClass: "delivered",
    paymentStatus: "Received",
    paymentStatusClass: "received",
  },
  {
    id: "#60231",
    name: "Italian Basil Seeds",
    customer: "Kavyesh Vohra",
    price: "85",
    quantity: "3",
    date: "19/12/21",
    orderStatus: "Delivered",
    orderStatusClass: "delivered",
    paymentStatus: "Received",
    paymentStatusClass: "received",
  },
];

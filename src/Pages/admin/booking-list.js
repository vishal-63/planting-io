import React from "react";
import styled from "styled-components";
import { FiEdit, FiEye } from "react-icons/fi";

import DashboardHeader from "../../Components/DashboardHeader";
import DashboardMenu from "../../Components/DashboardMenu";
import {
  DashboardCard,
  DashboardTable,
  DashboardTableStatus,
} from "../../Components/Dashboard Items/DashboardElements";
import { bookings } from "../../data/bookings";
import { AdminMenu } from "../../data/dashboard-menu-items";

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

const AdminBooingList = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    window.innerWidth >= 1100 ? setMenuOpen(true) : setMenuOpen(false);
  }, [setMenuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <DashboardHeader toggleMenu={toggleMenu} />
      <DashboardMenu
        activePage="bookings"
        menuOpen={menuOpen}
        listItems={AdminMenu}
      />
      <Container>
        <DashboardCard style={{ padding: "1rem" }}>
          <Title>Bookings</Title>
          <DashboardTable className="order-list">
            <thead>
              <tr>
                <th>Booking Id</th>
                <th>Service Name</th>
                <th>Nursery</th>
                <th>Customer</th>
                <th>Duration</th>
                <th>Total Amount</th>
                <th>Booking Status</th>
                <th>Payment Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={index}>
                  <td>{booking.id}</td>
                  <td style={{ width: "18%" }}>{booking.serviceName}</td>
                  <td>{booking.nurseryName}</td>
                  <td>{booking.customer}</td>
                  <td>{booking.duration}</td>
                  <td>{booking.price}</td>
                  <td>
                    <DashboardTableStatus
                      className={booking.bookingStatusClass}
                    >
                      {booking.bookingStatus}
                    </DashboardTableStatus>
                  </td>
                  <td>
                    <DashboardTableStatus
                      className={`payment ${booking.paymentStatusClass}`}
                    >
                      {booking.paymentStatus}
                    </DashboardTableStatus>
                    {booking.paymentStatusClass == "pending" && (
                      <span
                        style={{ fontSize: "0.75rem", color: "#7d7d7d" }}
                      ></span>
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

export default AdminBooingList;

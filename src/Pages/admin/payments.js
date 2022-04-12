import styled from "styled-components";
import { FiEdit, FiEye } from "react-icons/fi";
import { AiOutlineDelete, AiOutlineUserDelete } from "react-icons/ai";

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
import { Cookies } from "react-cookie";
import { Link } from "react-router-dom";
import ModalContainer from "../../Components/Backdrop";
import ProductModal from "../../Components/ProductModal";
import {
  Modalbutton,
  ModalDiv,
} from "../../Components/DashboardHeader/DashboardHeaderElements";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { BsFolderSymlinkFill } from "react-icons/bs";

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

  &.edit,
  &.send-payment {
    background-color: #2ec272;
  }
  &.delete {
    background-color: #e16565;
  }
  &.view {
    background-color: #2e7bc2;
  }
  &.send-payment {
    padding: 0.4rem 0.8rem;
    font-size: 1rem;
  }
`;

const PaymentsList = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [payments, setPayments] = useState([]);

  const [jwt, setJwt] = useState(new Cookies().get("adminId"));

  React.useEffect(() => {
    window.innerWidth >= 1100 ? setMenuOpen(true) : setMenuOpen(false);
  }, [setMenuOpen]);

  useEffect(async () => {
    const res = await fetch("http://localhost:8080/api/admin/get-payments", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    const body = await res.json();
    console.log(body);
    setPayments(body);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <DashboardHeader toggleMenu={toggleMenu} />
      <DashboardMenu
        activePage="payments"
        menuOpen={menuOpen}
        listItems={AdminMenu}
      />
      <Container>
        <DashboardCard style={{ padding: "1rem" }}>
          <Title>Payment List</Title>
          <DashboardTable className="order-list">
            <thead>
              <tr>
                <th>#</th>
                <th>Order Id</th>
                <th>Nursery Name</th>
                <th>Invoice Total</th>
                <th>Commission</th>
                <th>Amount to be Paid</th>
                <th>Status</th>
                {/* <th>Action</th> */}
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{payment.orderId}</td>
                  <td>{payment.nurseryName}</td>
                  <td>{payment.amount}.00</td>
                  <td>{payment.commission}</td>
                  <td>{payment.amtToBePaid}</td>
                  <td className={`payment-status ${payment.status}`}>
                    {payment.status}
                    <br />
                    {payment.status === "Pending" && (
                      <span style={{ fontSize: "0.75rem", color: "#7d7d7d" }}>
                        (Due {payment.paymentDue})
                      </span>
                    )}
                  </td>
                  {/* <td>
                    {payment.status === "Pending" && (
                      <div style={{ display: "flex" }}>
                        <Icon className="send-payment">
                          <BsFolderSymlinkFill />
                        </Icon>
                      </div>
                    )}
                  </td> */}
                </tr>
              ))}
            </tbody>
          </DashboardTable>
        </DashboardCard>

        {/* {productModalOpen && (
          <ProductInfo
            item={currentProduct}
            handleModalClose={handleModalClose}
          />
        )}

        {deleteModalOpen && (
          <DeleteModal
            handleClose={handleModalClose}
            productId={deactivateProductId}
          />
        )} */}
      </Container>
    </>
  );
};

// const ProductInfo = ({ item, handleModalClose }) => {
//   return (
//     <ModalContainer onClick={handleModalClose}>
//       <ProductModal item={item} />
//     </ModalContainer>
//   );
// };

// const DeleteModal = ({ handleClose, productId }) => {
//   const deactivateUser = () => {};
//   return (
//     <ModalContainer onClick={handleClose}>
//       <ModalDiv onClick={(e) => e.stopPropagation()}>
//         <div>
//           <span>
//             <IoRemoveCircleOutline />
//           </span>
//           Are you sure you want to deactivate this nursery? <br />
//         </div>
//         <div>
//           <Modalbutton className="cancel" onClick={handleClose}>
//             Cancel
//           </Modalbutton>
//           <Modalbutton className="logout" onClick={deactivateUser}>
//             Yes
//           </Modalbutton>
//         </div>
//       </ModalDiv>
//     </ModalContainer>
//   );
// };

export default PaymentsList;

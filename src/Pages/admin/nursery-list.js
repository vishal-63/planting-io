import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiEdit, FiEye } from "react-icons/fi";
import { AiOutlineDelete, AiOutlineUserDelete } from "react-icons/ai";

import { AdminMenu } from "../../data/dashboard-menu-items";

import DashboardHeader from "../../Components/DashboardHeader";
import DashboardMenu from "../../Components/DashboardMenu";
import {
  DashboardCard,
  DashboardTable,
} from "../../Components/Dashboard Items/DashboardElements";
import ModalContainer from "../../Components/Backdrop";
import {
  Modalbutton,
  ModalDiv,
} from "../../Components/DashboardHeader/DashboardHeaderElements";

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

  & a {
    display: flex;
  }
`;

const NurseryList = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [nurseries, setNurseries] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [deactivateNurseryId, setDeactivateNurseryId] = useState("");

  React.useEffect(() => {
    window.innerWidth >= 1100 ? setMenuOpen(true) : setMenuOpen(false);
  }, [setMenuOpen]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "http://localhost:8080/api/admin/get-all-nurseries",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${new Cookies().get("adminId")}`,
          },
        }
      );
      const body = await res.json();
      setNurseries(body);
    }
    fetchData();
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleClose = () => setModalOpen(false);

  return (
    <>
      <DashboardHeader toggleMenu={toggleMenu} />
      <DashboardMenu
        activePage="nurseries"
        menuOpen={menuOpen}
        listItems={AdminMenu}
        adminPage
      />
      <Container>
        <DashboardCard style={{ padding: "1rem" }}>
          <Title>Nursery List</Title>
          <DashboardTable className="order-list">
            <thead>
              <tr>
                <th>Nursery Id</th>
                <th>Nursery Name</th>
                <th>Email</th>
                <th>Mobile No.</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {nurseries.map((nursery, index) => (
                <tr key={index}>
                  <td>#{nursery.id}</td>
                  <td>{nursery.name}</td>
                  <td>{nursery.email}</td>
                  <td>{nursery.phone}</td>
                  <td>
                    <div style={{ display: "flex" }}>
                      <Icon className="view">
                        <Link to={`/admin/nursery/${nursery.id}`}>
                          <FiEye />
                        </Link>
                      </Icon>
                      <Icon className="edit">
                        <FiEdit />
                      </Icon>
                      <Icon
                        className="delete"
                        onClick={() => {
                          setDeactivateNurseryId(nursery.id);
                          setModalOpen(true);
                        }}
                      >
                        <AiOutlineDelete />
                      </Icon>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </DashboardTable>
        </DashboardCard>

        {modalOpen && (
          <DeleteModal
            handleClose={handleClose}
            nurseryId={deactivateNurseryId}
          />
        )}
      </Container>
    </>
  );
};

const DeleteModal = ({ handleClose, nurseryId }) => {
  const deactivateUser = () => {};
  return (
    <ModalContainer onClick={handleClose}>
      <ModalDiv onClick={(e) => e.stopPropagation()}>
        <div>
          <span>
            <AiOutlineUserDelete />
          </span>
          Are you sure you want to deactivate this nursery? <br />
        </div>
        <div>
          <Modalbutton className="cancel" onClick={handleClose}>
            Cancel
          </Modalbutton>
          <Modalbutton className="logout" onClick={deactivateUser}>
            Yes
          </Modalbutton>
        </div>
      </ModalDiv>
    </ModalContainer>
  );
};

export default NurseryList;

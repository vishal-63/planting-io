import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete, AiOutlineUserDelete } from "react-icons/ai";

import DashboardHeader from "../../Components/DashboardHeader";
import DashboardMenu from "../../Components/DashboardMenu";
import { AdminMenu } from "../../data/dashboard-menu-items";
import {
  DashboardCard,
  DashboardTable,
} from "../../Components/Dashboard Items/DashboardElements";
import { Cookies } from "react-cookie";
import ModalContainer from "../../Components/Backdrop";
import {
  Modalbutton,
  ModalDiv,
} from "../../Components/DashboardHeader/DashboardHeaderElements";
// import { users } from "../../data/user";

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
`;

const UserList = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [deactivateUserId, setDeactivateUserId] = useState("");

  useEffect(() => {
    window.innerWidth >= 1100 ? setMenuOpen(true) : setMenuOpen(false);
  }, [setMenuOpen]);

  useEffect(async () => {
    const res = await fetch("http://localhost:8080/api/admin/get-all-users", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${new Cookies().get("adminId")}`,
      },
    });
    const body = await res.json();
    console.log(body);
    setUsers(body);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleClose = () => setModalOpen(false);

  return (
    <>
      <DashboardHeader toggleMenu={toggleMenu} />
      <DashboardMenu
        activePage="users"
        menuOpen={menuOpen}
        listItems={AdminMenu}
      />
      <Container>
        <DashboardCard style={{ padding: "1rem" }}>
          <Title>User List</Title>
          <DashboardTable className="order-list">
            <thead>
              <tr>
                <th>User Id</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Mobile No.</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>#{user.id}</td>
                  <td>
                    {user.fname} {user.lname}
                  </td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <div style={{ display: "flex" }}>
                      {/* <Icon className="edit">
                        <FiEdit />
                      </Icon> */}
                      <Icon
                        className="delete"
                        onClick={() => {
                          setDeactivateUserId(user.id);
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
          <DeleteModal handleClose={handleClose} userId={deactivateUserId} />
        )}
      </Container>
    </>
  );
};

const DeleteModal = ({ handleClose, userId }) => {
  const deactivateUser = () => {};
  return (
    <ModalContainer onClick={handleClose}>
      <ModalDiv onClick={(e) => e.stopPropagation()}>
        <div>
          <span>
            <AiOutlineUserDelete />
          </span>
          Are you sure you want to deactivate this user? <br />
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

export default UserList;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";

import { AdminMenu } from "../../data/dashboard-menu-items";

import DashboardHeader from "../../Components/DashboardHeader";
import DashboardMenu from "../../Components/DashboardMenu";
import { DashboardCard } from "../../Components/Dashboard Items/DashboardElements";
import {
  AddProductsForm,
  Wrapper1,
  Label,
  Input,
  DashboardButton,
} from "../../Components/DashboardInputs";

const UserName = styled.p`
  font-size: 1.5rem;
  color: black;
`;
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
const ChangePassword = styled.p`
  font-size: 0.9rem;
  color: #066093;
  cursor: pointer;
`;

const Title = styled.h4`
  font-size: 1.1rem;
  color: #444;
  font-weight: 500;
  margin: 1rem;
`;
const Icons = styled.div`
  color: #666;
  font-size: 4rem;
  display: flex;
  margin-top: 1rem;
  margin-left: 1rem;

  align-items: center;

  & span {
    color: #212121;
    margin-right: 0.75rem;
    font-size: 1rem;

    @media (max-width: 540px) {
      display: none;
    }
  }

  & svg {
    margin-right: 1.5rem;
    @media (max-width: 540px) {
      font-size: 1rem;
      margin-right: 1rem;
    }
  }

  & svg:last-child {
    margin: 0;
  }
`;

const AdminProfile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.innerWidth >= 1100 ? setMenuOpen(true) : setMenuOpen(false);
  }, [setMenuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <DashboardHeader toggleMenu={toggleMenu} />
      <DashboardMenu menuOpen={menuOpen} listItems={AdminMenu} adminPage />
      <Container>
        <DashboardCard style={{ padding: "1rem" }}>
          <Title>Your Account</Title>
          <Icons>
            <BsPersonCircle />
            <UserName>Admin</UserName>
          </Icons>
          <AddProductsForm style={{ marginTop: "1.5rem" }}>
            <Wrapper1>
              <Label>First Name</Label>
              <Input spellcheck="false" type="email" name="fname" />
            </Wrapper1>
            <Wrapper1>
              <Label>Last Name</Label>
              <Input spellcheck="false" type="text" name="lname" />
            </Wrapper1>
            <Wrapper1>
              <Label>Email</Label>
              <Input spellcheck="false" type="text" name="email" />
            </Wrapper1>
            <Wrapper1>
              <Label>Phone No</Label>
              <Input spellcheck="false" type="text" name="phone" />
            </Wrapper1>
            <Wrapper1 style={{ width: "100%" }}>
              <ChangePassword>Change Password</ChangePassword>
            </Wrapper1>
            <div>
              <DashboardButton className="primary">Save</DashboardButton>
              <DashboardButton className="cancel">Cancel</DashboardButton>
            </div>
          </AddProductsForm>
        </DashboardCard>
      </Container>
    </>
  );
};

export default AdminProfile;

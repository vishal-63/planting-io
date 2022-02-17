import React, { useEffect, useState } from "react";
import DashboardHeader from "../../../Components/DashboardHeader";
import DashboardMenu from "../../../Components/DashboardMenu";
import styled from "styled-components";

import { BsPersonCircle } from "react-icons/bs";

import { DashboardCard } from "../../../Components/Dashboard Items/DashboardElements";

import {
  AddProductsForm,
  Wrapper1,
  Label,
  Input,
  DashboardButton,
} from "../../../Components/DashboardInputs";

import {
  CustomOption,
  CustomOptions,
  Select,
  SelectLabel,
  SelectTrigger,
  SelectWrapper,
} from "../../../Components/NurseryFormElements";
import { NurseryMenu } from "../../../data/dashboard-menu-items";

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
const ChangePasswaord = styled.p`
  font-size: 1.1rem;
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

const NurseryProfile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const openDropdown = (e) => {
    e.target.closest(".select").classList.toggle("open");
  };

  const changeSelection = (e) => {
    const el = e.target;

    if (selectedOption !== "") {
      const siblings = Array.from(e.target.parentNode.childNodes);
      const selectedSibling = siblings.filter((el) =>
        el.classList.contains("selected")
      );
      selectedSibling[0].classList.remove("selected");
    }
    setSelectedOption(el.innerText);
    el.classList.add("selected");
  };

  useEffect(() => {
    window.innerWidth >= 1100 ? setMenuOpen(true) : setMenuOpen(false);
  }, [setMenuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <DashboardHeader toggleMenu={toggleMenu} />
      <DashboardMenu menuOpen={menuOpen} listItems={NurseryMenu} />
      <Container>
        <DashboardCard style={{ padding: "1rem" }}>
          <Title>Your Account</Title>
          <Icons>
            <BsPersonCircle />
            <UserName>Vrundavan Nursery</UserName>
          </Icons>
          <AddProductsForm style={{ marginTop: "1.5rem" }}>
            <Wrapper1>
              <Label>Email</Label>
              <Input spellcheck="false" type="email" name="email" />
            </Wrapper1>
            <Wrapper1>
              <Label>Phone No.</Label>
              <Input spellcheck="false" type="text" name="phone" />
            </Wrapper1>
            <Wrapper1 style={{ width: "100%" }}>
              <Label>Address</Label>
              <Input spellcheck="false" name="address" type="text" />
            </Wrapper1>
            <Wrapper1>
              <Label>City</Label>
              <Input spellcheck="false" type="text" name="city" />
            </Wrapper1>
            <Wrapper1>
              <Label>Pincode</Label>
              <Input spellcheck="false" type="text" name="pincode" />
            </Wrapper1>
            <Wrapper1>
              <Label>State</Label>
              <Input spellcheck="false" type="text" name="state" />
            </Wrapper1>
            <Wrapper1>
              <Label>Country</Label>
              <Input spellcheck="false" type="text" name="country" />
            </Wrapper1>
            <Wrapper1 style={{ width: "100%" }}>
              <ChangePasswaord>Change Password</ChangePasswaord>
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

export default NurseryProfile;

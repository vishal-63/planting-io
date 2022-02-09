import React, { useEffect, useState } from "react";
import DashboardHeader from "../../../../Components/DashboardHeader";
import DashboardMenu from "../../../../Components/DashboardMenu";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { NurseryMenu } from "../../../../data/dashboard-menu-items";

import { DashboardCard } from "../../../../Components/Dashboard Items/DashboardElements";

import {
  AddProductsForm,
  Wrapper1,
  Label,
  Input,
  ProductDescription,
  DashboardButton,
} from "../../../../Components/DashboardInputs";

import {
  CustomOption,
  CustomOptions,
  Select,
  SelectLabel,
  SelectTrigger,
  SelectWrapper,
} from "../../../../Components/NurseryFormElements";
import { services } from "../../../../data/service";
import { getProduct } from "../../../../data/products";
import { useParams } from "react-router-dom";

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

const ManageServiceForm = () => {
  let params = useParams();
  let service = services.filter((service) => service.id === params.id)[0];

  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(service.type);

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
      <DashboardMenu
        activePage="manage-services"
        menuOpen={menuOpen}
        listItems={NurseryMenu}
      />
      <Container>
        <DashboardCard style={{ padding: "1rem" }}>
          <Title>Manage Service</Title>
          <AddProductsForm>
            <Wrapper1>
              <Label>Service Name</Label>
              <Input
                spellcheck="false"
                type="text"
                name="name"
                defaultValue={service.serviceName}
              />
            </Wrapper1>
            <Wrapper1>
              <SelectWrapper className="select-wrapper" onClick={openDropdown}>
                <SelectLabel style={{ top: "0" }}>Service Type</SelectLabel>
                <Select className="select">
                  <SelectTrigger style={{ height: "73px" }}>
                    <span style={{ paddingTop: "1rem" }}>{selectedOption}</span>
                    <IoIosArrowDown />
                  </SelectTrigger>
                  <CustomOptions className="custom-options">
                    <CustomOption
                      data-value="Garden Setup"
                      onClick={changeSelection}
                    >
                      Garden Setup
                    </CustomOption>
                    <CustomOption
                      data-value="Garden Maintenace"
                      onClick={changeSelection}
                    >
                      Garden Maintenace
                    </CustomOption>
                    <CustomOption
                      data-value="Garden Clearance"
                      onClick={changeSelection}
                    >
                      Garden Clearance
                    </CustomOption>
                  </CustomOptions>
                </Select>
              </SelectWrapper>
            </Wrapper1>
            <Wrapper1>
              <Label>Service Rate</Label>
              <Input
                spellcheck="false"
                type="text"
                name="price"
                defaultValue={service.price}
              />
            </Wrapper1>
            <Wrapper1>
              <Label>Service Discount</Label>
              <Input
                spellcheck="false"
                type="text"
                name="discount"
                defaultValue={service.discount}
              />
            </Wrapper1>
            <Wrapper1 style={{ width: "100%" }}>
              <Label>Service Description</Label>
              <ProductDescription
                spellcheck="false"
                row="4"
                name="description"
              />
            </Wrapper1>
            <div>
              <DashboardButton className="primary">Publish</DashboardButton>
              <DashboardButton className="cancel">Cancel</DashboardButton>
            </div>
          </AddProductsForm>
        </DashboardCard>
      </Container>
    </>
  );
};

export default ManageServiceForm;

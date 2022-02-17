import React, { useEffect, useState } from "react";
import DashboardHeader from "../../../Components/DashboardHeader";
import DashboardMenu from "../../../Components/DashboardMenu";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

import { DashboardCard } from "../../../Components/Dashboard Items/DashboardElements";

import {
  AddProductsForm,
  Wrapper1,
  Label,
  Input,
  ProductDescription,
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
import { Alert } from "../../../Components/LoginModal/LoginModalElements";

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

const AddServices = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [errorVisible, setErrorVisible] = useState(false);

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

  // validate form inputs
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const inputs = document.querySelectorAll("form[name='add-service'] input");
    const description = document.querySelector(
      "form[name='add-service'] textarea"
    );

    inputs.forEach((input) => {
      if (input.value === "") {
        input.classList.add("invalid");
        input.placeholder = "Field cannot be empty";
      } else {
        input.classList.remove("invalid");
        input.placeholder = "";
      }
    });

    if (description.value === "") {
      description.classList.add("invalid");
      description.placeholder = "Field cannot be empty";
    } else {
      description.classList.remove("invalid");
      description.placeholder = "";
    }
  };

  const handleFileUpload = (e) => {
    const acceptedFiles = ["image/png", "image/jpeg"];
    const fileType = e.target.files[0].type;
    if (!acceptedFiles.includes(fileType)) {
      setErrorVisible(true);
      e.target.value = null;
    } else {
      setErrorVisible(false);
    }
  };

  return (
    <>
      <DashboardHeader toggleMenu={toggleMenu} />
      <DashboardMenu
        activePage="add-services"
        menuOpen={menuOpen}
        listItems={NurseryMenu}
      />
      <Container>
        <DashboardCard style={{ padding: "1rem" }}>
          <Title>Add Services</Title>
          <AddProductsForm
            name="add-service"
            method="POST"
            onSubmit={handleFormSubmit}
          >
            {/* <Wrapper1>
              <Label>Services Name</Label>
              <Input spellcheck="false" type="text" name="name" />
            </Wrapper1> */}
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
                      data-value="Maintenance"
                      onClick={changeSelection}
                    >
                      Maintenance
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
              <Input spellcheck="false" type="text" name="price" />
            </Wrapper1>
            <Wrapper1>
              <Label>Service Discount</Label>
              <Input spellcheck="false" type="text" name="discount" />
            </Wrapper1>
            <Wrapper1 style={{ width: "100%" }}>
              <Label>Service Description</Label>
              <ProductDescription
                spellcheck="false"
                row="4"
                name="description"
              />
            </Wrapper1>
            <div className="photo-input">
              <Label htmlFor="product-photos" className="photo-label">
                Add Photos
              </Label>
              <input
                type="file"
                accept="image/*"
                name="product-photos"
                id="product-photos"
                onChange={handleFileUpload}
                multiple
              />
            </div>

            <Alert className="error" isVisible={errorVisible}>
              You can only upload images of jpg/png format.
            </Alert>

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

export default AddServices;

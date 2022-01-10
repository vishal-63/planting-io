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
} from "../../../Components/DashboardInputs";

import {
  CustomOption,
  CustomOptions,
  Select,
  SelectLabel,
  SelectTrigger,
  SelectWrapper,
} from "../../../Components/NurseryFormElements";

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

const ManageProduct = () => {
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
      <DashboardMenu activePage="add-products" menuOpen={menuOpen} />
      <Container>
        <DashboardCard style={{ padding: "1rem" }}>
          <Title>Add Products</Title>
          <AddProductsForm>
            <Wrapper1>
              <Label>Product Name</Label>
              <Input spellcheck="false" type="text" name="productName" />
            </Wrapper1>
            <Wrapper1>
              <SelectWrapper className="select-wrapper" onClick={openDropdown}>
                <SelectLabel style={{ top: "0" }}>Product Type</SelectLabel>
                <Select className="select">
                  <SelectTrigger style={{ height: "73px" }}>
                    <span style={{ paddingTop: "1rem" }}>{selectedOption}</span>
                    <IoIosArrowDown />
                  </SelectTrigger>
                  <CustomOptions className="custom-options">
                    <CustomOption data-value="Plant" onClick={changeSelection}>
                      Plant
                    </CustomOption>
                    <CustomOption data-value="Seed" onClick={changeSelection}>
                      Seed
                    </CustomOption>
                    <CustomOption data-value="Tool" onClick={changeSelection}>
                      Tool
                    </CustomOption>
                  </CustomOptions>
                </Select>
              </SelectWrapper>
            </Wrapper1>
            <Wrapper1>
              <Label>Product Price</Label>
              <Input spellcheck="false" type="text" name="productPrice" />
            </Wrapper1>
            <Wrapper1>
              <Label>Product Discount</Label>
              <Input spellcheck="false" type="text" name="productDiscount" />
            </Wrapper1>
            <Wrapper1>
              <Label>Quantity</Label>
              <Input spellcheck="false" type="text" name="quantity" />
            </Wrapper1>
            <Wrapper1 style={{ width: "100%" }}>
              <Label>Product Description</Label>
              <ProductDescription
                spellcheck="false"
                row="4"
                name="productDescription"
              />
            </Wrapper1>
          </AddProductsForm>
        </DashboardCard>
      </Container>
    </>
  );
};

export default ManageProduct;

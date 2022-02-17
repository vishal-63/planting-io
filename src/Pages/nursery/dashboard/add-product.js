import React, { useEffect, useState } from "react";
import DashboardHeader from "../../../Components/DashboardHeader";
import DashboardMenu from "../../../Components/DashboardMenu";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { useForm } from "react-hook-form";

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
import {
  Alert,
  ValidationError,
} from "../../../Components/LoginModal/LoginModalElements";

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

const AddProduct = () => {
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

  const handleFileUpload = (e) => {
    const acceptedFiles = ["image/png", "image/jpeg"];
    // BUG - won't check for more than one files
    console.log(e.target.files);
    const fileType = e.target.files[0].type;
    if (!acceptedFiles.includes(fileType)) {
      setErrorVisible(true);
      e.target.value = null;
    } else {
      setErrorVisible(false);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <DashboardHeader toggleMenu={toggleMenu} />
      <DashboardMenu
        activePage="add-products"
        menuOpen={menuOpen}
        listItems={NurseryMenu}
      />
      <Container>
        <DashboardCard style={{ padding: "1rem" }}>
          <Title>Add Products</Title>
          <AddProductsForm
            name="add-product"
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Wrapper1>
              <Label>Product Name</Label>
              <Input
                spellcheck="false"
                type="text"
                name="name"
                {...register("name", { required: "Name is required" })}
              />
              <ValidationError>{errors.name?.message}</ValidationError>
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
              <Input
                spellcheck="false"
                type="number"
                name="price"
                {...register("price", { required: "Price is required" })}
              />
              <ValidationError>{errors.price?.message}</ValidationError>
            </Wrapper1>
            <Wrapper1>
              <Label>Product Discount</Label>
              <Input
                spellcheck="false"
                type="number"
                name="discount"
                {...register("discount", { required: "Discount is required" })}
              />
              <ValidationError>{errors.discount?.message}</ValidationError>
            </Wrapper1>
            <Wrapper1>
              <Label>Quantity</Label>
              <Input
                spellcheck="false"
                type="number"
                name="quantity"
                {...register("quantity", { required: "Quantity is required" })}
              />
              <ValidationError>{errors.quantity?.message}</ValidationError>
            </Wrapper1>
            <Wrapper1 style={{ width: "100%" }}>
              <Label>Product Description</Label>
              <ProductDescription
                spellcheck="false"
                row="4"
                name="description"
                {...register("description", {
                  required: "Description is required",
                })}
              />
              <ValidationError>{errors.description?.message}</ValidationError>
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
              <DashboardButton type="submit" className="primary">
                Publish
              </DashboardButton>
              <DashboardButton className="cancel">Cancel</DashboardButton>
            </div>
          </AddProductsForm>
        </DashboardCard>
      </Container>
    </>
  );
};

export default AddProduct;

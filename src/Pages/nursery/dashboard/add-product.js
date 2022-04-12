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
  ProductImageContainer,
  ProductImage,
} from "../../../Components/DashboardInputs";
import {
  CustomOption,
  CustomOptions,
  Select,
  SelectLabel,
  SelectTrigger,
  SelectWrapper,
} from "../../../Components/NurseryFormElements";
import {
  Alert,
  ValidationError,
} from "../../../Components/LoginModal/LoginModalElements";

import { NurseryMenu } from "../../../data/dashboard-menu-items";
import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";

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
  const [details, setDetails] = useState("");

  const [files, setFiles] = useState([]);
  const [preview, setPreview] = useState([]);

  const [response, setResponse] = useState("");
  const [responseVisible, setResponseVisible] = useState(false);
  const [responseClass, setResponseClass] = useState("");

  const navigate = useNavigate();

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
    document.querySelector(".dropdown-error").innerHTML = "";
  };

  useEffect(() => {
    if (new Cookies().get("nurseryId") === undefined)
      navigate("/nursery/login");

    window.innerWidth >= 1100 ? setMenuOpen(true) : setMenuOpen(false);
  }, [setMenuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    data.type = selectedOption;
    delete data.photos;

    const formData = new FormData();

    files.map((file) => formData.append("files", file));
    delete data.photos;

    formData.append("product", JSON.stringify(data));

    const res = await fetch("http://localhost:8080/api/product/add", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${new Cookies().get("nurseryId")}`,
      },
    });
    const body = await res.json();

    setResponse(body.message);
    setResponseVisible(true);

    if (res.ok) {
      setResponseClass("success");
      setTimeout(() => {
        e.target.reset();
        setDetails("");
        setSelectedOption("");
        setResponse("");
        setResponseVisible(false);
        setFiles([]);
        setPreview([]);
      }, 1500);
    } else {
      setResponseClass("error");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (selectedOption === "") {
      document.querySelector(".dropdown-error").innerHTML =
        "Product type is required";
    }
    handleSubmit(onSubmit)(e);
  };

  const handleFileUpload = (e) => {
    const acceptedFiles = ["image/png", "image/jpeg"];

    const filesArray = Array.from(e.target.files);
    let tempPreview = [...preview];
    filesArray.forEach((file) => {
      if (!acceptedFiles.includes(file.type)) {
        document.querySelector(".photo-error").innerHTML =
          "You must upload images only in JPEG/PNG format";
        e.target.files = null;
        tempPreview = [];
        return;
      } else {
        document.querySelector(".photo-error").innerHTML = "";
      }
      tempPreview.push(URL.createObjectURL(file));
    });
    setFiles(filesArray);
    setPreview(tempPreview);
  };

  const removePhoto = async (index) => {
    const prev = preview.filter((item, i) => index !== i);
    setPreview(prev);
    const f = files.filter((item, i) => index !== i);
    setFiles(f);
  };

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

          <Alert className={responseClass} isVisible={responseVisible}>
            {response}
          </Alert>

          <AddProductsForm
            name="add-product"
            method="POST"
            onSubmit={handleFormSubmit}
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
              <ValidationError className="dropdown-error"></ValidationError>
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
              <Label>Product Description ({details.length}/500)</Label>
              <ProductDescription
                spellcheck="false"
                row="4"
                name="details"
                value={details}
                {...register("details", {
                  required: "Description is required",
                  minLength: {
                    value: 50,
                    message: "Description must be at least 50 characters long",
                  },
                  maxLength: {
                    value: 500,
                    message: "Description must not be more than 255 characters",
                  },
                  onChange: (e) => setDetails(e.target.value),
                })}
              />
              <ValidationError>{errors.description?.message}</ValidationError>
            </Wrapper1>
            <div className="photo-input">
              <Label htmlFor="photos" className="photo-label">
                Add Photos
              </Label>
              <input
                type="file"
                accept="image/*"
                name="photos"
                id="photos"
                multiple
                {...register("photos", {
                  required: "Product Photo is required",
                  onChange: (e) => handleFileUpload(e),
                })}
              />
            </div>

            <ValidationError className="photo-error">
              {errors.photos?.message}
            </ValidationError>

            {preview.length !== 0 && (
              <div style={{ width: "100%" }}>
                <span>Photo:</span>
                <div style={{ display: "flex" }}>
                  {preview.map((prev, index) => (
                    <ProductImageContainer key={index}>
                      <ProductImage src={prev} alt="" />
                      <span
                        onClick={() => {
                          removePhoto(index);
                        }}
                      >
                        <MdDelete />
                      </span>
                    </ProductImageContainer>
                  ))}
                </div>
              </div>
            )}

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

import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";

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
import { NurseryMenu } from "../../../data/dashboard-menu-items";
import {
  Alert,
  ValidationError,
} from "../../../Components/LoginModal/LoginModalElements";
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

const AddServices = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [details, setDetails] = useState("");

  const [file, setFile] = useState();
  const [preview, setPreview] = useState();

  const [response, setResponse] = useState("");
  const [responseVisible, setResponseVisible] = useState(false);
  const [responseClass, setResponseClass] = useState("");

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
    formData.append("service", JSON.stringify(data));
    formData.append("file", file);

    const res = await fetch("http://localhost:8080/api/service/add", {
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
        setFile();
        setPreview();
        Array.from(document.querySelectorAll(".custom-option-item")).map(
          (item) => item.classList.remove("selected")
        );
      }, 1500);
    } else {
      setResponseClass("error");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (selectedOption === "") {
      document.querySelector(".dropdown-error").innerHTML =
        "Service type is required";
    }
    handleSubmit(onSubmit)(e);
  };

  const handleFileUpload = (e) => {
    const acceptedFiles = ["image/png", "image/jpeg"];
    const file = e.target.files[0];

    if (!file) return;

    if (!acceptedFiles.includes(file.type)) {
      document.querySelector(".photo-error").innerHTML =
        "You must upload images only in JPEG/PNG format";
      e.target.files = null;
      setPreview();
      return;
    } else {
      document.querySelector(".photo-error").innerHTML = "";
    }
    // tempPreview.push(URL.createObjectURL(file));
    // });
    setFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const removePhoto = () => {
    setPreview();
    setFile();
    const fileInput = document.getElementById("photos");
    fileInput.value = "";
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

          <Alert className={responseClass} isVisible={responseVisible}>
            {response}
          </Alert>

          <AddProductsForm
            name="add-service"
            method="POST"
            onSubmit={handleFormSubmit}
          >
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
                      className="custom-option-item"
                      onClick={changeSelection}
                    >
                      Garden Setup
                    </CustomOption>
                    <CustomOption
                      data-value="Garden Maintenance"
                      className="custom-option-item"
                      onClick={changeSelection}
                    >
                      Garden Maintenance
                    </CustomOption>
                    <CustomOption
                      data-value="Garden Clearance"
                      className="custom-option-item"
                      onClick={changeSelection}
                    >
                      Garden Clearance
                    </CustomOption>
                  </CustomOptions>
                </Select>
              </SelectWrapper>
              <ValidationError className="dropdown-error"></ValidationError>
            </Wrapper1>
            <Wrapper1>
              <Label>Service Rate</Label>
              <Input
                spellcheck="false"
                type="text"
                name="price"
                {...register("price", { required: "Price is required" })}
              />
              <ValidationError>{errors.price?.message}</ValidationError>
            </Wrapper1>
            <Wrapper1>
              <Label>Service Discount</Label>
              <Input
                spellcheck="false"
                type="text"
                name="discount"
                {...register("discount", { required: "Discount is required" })}
              />
              <ValidationError>{errors.discount?.message}</ValidationError>
            </Wrapper1>
            <Wrapper1 style={{ width: "100%" }}>
              <Label>Service Description ({details.length}/255)</Label>
              <ProductDescription
                spellcheck="false"
                row="4"
                name="details"
                {...register("details", {
                  required: "Description is required",
                  onChange: (e) => setDetails(e.target.value),
                })}
              />
              <ValidationError>{errors.details?.message}</ValidationError>
            </Wrapper1>

            {file === undefined && (
              <>
                <div className="photo-input">
                  <Label htmlFor="photos" className="photo-label">
                    Add Photo
                  </Label>
                  <input
                    type="file"
                    accept="image/*"
                    name="photos"
                    id="photos"
                    {...register("photos", {
                      required: "Product Photo is required",
                      onChange: (e) => handleFileUpload(e),
                    })}
                  />
                </div>

                <ValidationError className="photo-error">
                  {errors.photos?.message}
                </ValidationError>
              </>
            )}

            {preview && (
              <div style={{ width: "100%" }}>
                <span>Photo:</span>
                {/* <div style={{ display: "flex" }}> */}
                <ProductImageContainer>
                  <ProductImage src={preview} alt="" />
                  <span
                    onClick={() => {
                      removePhoto();
                    }}
                  >
                    <MdDelete />
                  </span>
                </ProductImageContainer>
                {/* </div> */}
              </div>
            )}

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

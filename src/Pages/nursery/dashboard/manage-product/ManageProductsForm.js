import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { MdDelete } from "react-icons/md";

import { NurseryMenu } from "../../../../data/dashboard-menu-items";

import { DashboardCard } from "../../../../Components/Dashboard Items/DashboardElements";
import DashboardHeader from "../../../../Components/DashboardHeader";
import DashboardMenu from "../../../../Components/DashboardMenu";
import {
  AddProductsForm,
  Wrapper1,
  Label,
  Input,
  ProductDescription,
  DashboardButton,
  ProductImage,
  ProductImageContainer,
} from "../../../../Components/DashboardInputs";
import {
  CustomOption,
  CustomOptions,
  Select,
  SelectLabel,
  SelectTrigger,
  SelectWrapper,
} from "../../../../Components/NurseryFormElements";
import { Cookies } from "react-cookie";
import { useForm } from "react-hook-form";
import {
  Alert,
  ValidationError,
} from "../../../../Components/LoginModal/LoginModalElements";

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

const ManageProductsForm = () => {
  let params = useParams();
  let productId = params.id;

  const [menuOpen, setMenuOpen] = useState(false);
  const [product, setProduct] = useState({});
  const [selectedOption, setSelectedOption] = useState("");

  const [fileUpload, setFileUpload] = useState(true);
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
      if (selectedSibling.length !== 0) {
        selectedSibling[0].classList.remove("selected");
      }
    }
    setSelectedOption(el.innerText);
    el.classList.add("selected");
  };

  useEffect(async () => {
    window.innerWidth >= 1100 ? setMenuOpen(true) : setMenuOpen(false);
    if (new Cookies().get("nurseryId") !== undefined) {
      const res = await fetch(
        `http://localhost:8080/api/product/get-nursery/${productId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${new Cookies().get("nurseryId")}`,
          },
        }
      );
      const body = await res.json();
      if (res.ok) {
        setProduct(body);
        setSelectedOption(body.type);
        if (body.photoPath !== null) setPreview(body.photoPath);
      }
    } else {
      navigate("/nursery/login");
    }
  }, [setMenuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    data.type = selectedOption;

    const formData = new FormData();

    files.map((file) => formData.append("files", file));
    delete data.photos;

    formData.append("product", JSON.stringify(data));

    const res = await fetch(
      `http://localhost:8080/api/product/update/${productId}`,
      {
        method: "PUT",
        body: formData,
        headers: {
          Authorization: `Bearer ${new Cookies().get("nurseryId")}`,
        },
      }
    );
    const body = await res.json();
    setResponse(body.message);
    setResponseVisible(true);
    if (res.ok) setResponseClass("success");
    else setResponseClass("error");

    window.scrollTo(0, 0);
  };

  const handleFileUpload = (e) => {
    const acceptedFiles = ["image/png", "image/jpeg"];

    const filesArray = Array.from(e.target.files);
    const tempPreview = [...preview];
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
    const formData = new FormData();
    formData.append("path", preview[index]);
    const res = await fetch(
      `http://localhost:8080/api/product/update/${productId}/delete-photo`,
      {
        method: "PUT",
        body: formData,
        headers: {
          Authorization: `Bearer ${new Cookies().get("nurseryId")}`,
        },
      }
    );

    if (res.ok) {
      const prev = preview.filter((item, i) => index !== i);
      setPreview(prev);
      const f = files.filter((item, i) => index !== i);
      setFiles(f);
    }
  };

  return (
    <>
      <DashboardHeader toggleMenu={toggleMenu} />
      <DashboardMenu
        activePage="manage-products"
        menuOpen={menuOpen}
        listItems={NurseryMenu}
      />
      <Container>
        <DashboardCard style={{ padding: "1rem" }}>
          <Title>Manage Products</Title>

          <Alert className={responseClass} isVisible={responseVisible}>
            {response}
          </Alert>

          <AddProductsForm onSubmit={handleSubmit(onSubmit)}>
            <Wrapper1>
              <Label>Product Name</Label>
              <Input
                spellcheck="false"
                type="text"
                name="name"
                defaultValue={product.name}
                {...register("name", { required: "This field is required" })}
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
                type="text"
                name="price"
                defaultValue={product.price}
                {...register("price", {
                  required: "This field is required",
                })}
              />
              <ValidationError>{errors.price?.message}</ValidationError>
            </Wrapper1>
            <Wrapper1>
              <Label>Product Discount</Label>
              <Input
                spellcheck="false"
                type="text"
                name="discount"
                defaultValue={product.discount}
                {...register("discount", {
                  required: "This field is required",
                })}
              />
              <ValidationError>{errors.discount?.message}</ValidationError>
            </Wrapper1>
            <Wrapper1>
              <Label>Quantity</Label>
              <Input
                spellcheck="false"
                type="text"
                name="quantity"
                defaultValue={product.quantity}
                {...register("quantity", {
                  required: "This field is required",
                })}
              />
              <ValidationError>{errors.quantity?.message}</ValidationError>
            </Wrapper1>
            <Wrapper1 style={{ width: "100%" }}>
              <Label>Product Description</Label>
              <ProductDescription
                spellcheck="false"
                row="4"
                name="description"
                defaultValue={product.details}
                {...register("details", {
                  required: "This field is required",
                  minLength: {
                    value: 50,
                    message: "Description must be at least 50 characters long",
                  },
                  maxLength: {
                    value: 500,
                    message: "Description must not be more than 500 characters",
                  },
                })}
              />
              <ValidationError>{errors.details?.message}</ValidationError>
            </Wrapper1>

            {fileUpload && (
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
                    multiple
                    {...register("photos", {
                      onChange: (e) => handleFileUpload(e),
                    })}
                  />
                </div>

                <ValidationError className="photo-error">
                  {errors.photos?.message}
                </ValidationError>
              </>
            )}

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
              <DashboardButton className="primary" type="submit">
                Save
              </DashboardButton>
              <DashboardButton className="cancel" type="cancel">
                Cancel
              </DashboardButton>
            </div>
          </AddProductsForm>
        </DashboardCard>
      </Container>
    </>
  );
};

export default ManageProductsForm;

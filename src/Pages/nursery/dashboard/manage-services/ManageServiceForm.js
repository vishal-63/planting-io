import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { Cookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { MdDelete } from "react-icons/md";

import DashboardHeader from "../../../../Components/DashboardHeader";
import DashboardMenu from "../../../../Components/DashboardMenu";
import { NurseryMenu } from "../../../../data/dashboard-menu-items";

import { DashboardCard } from "../../../../Components/Dashboard Items/DashboardElements";

import {
  AddProductsForm,
  Wrapper1,
  Label,
  Input,
  ProductDescription,
  DashboardButton,
  ProductImageContainer,
  ProductImage,
} from "../../../../Components/DashboardInputs";

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

const ManageServiceForm = () => {
  let params = useParams();
  let serviceId = params.id;

  const [selectedOption, setSelectedOption] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [service, setService] = useState({});
  const [details, setDetails] = useState("");

  const [file, setFile] = useState();
  const [fileUpload, setFileUpload] = useState();
  const [preview, setPreview] = useState();

  const [response, setResponse] = useState("");
  const [responseVisible, setResponseVisible] = useState(false);
  const [responseClass, setResponseClass] = useState("");

  const navigate = useNavigate();

  useEffect(async () => {
    window.innerWidth >= 1100 ? setMenuOpen(true) : setMenuOpen(false);

    if (new Cookies().get("nurseryId") !== undefined) {
      const res = await fetch(
        `http://localhost:8080/api/service/get/${serviceId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${new Cookies().get("nurseryId")}`,
          },
        }
      );
      const body = await res.json();
      if (res.ok) {
        setService(body);
        setDetails(body.details);
        setSelectedOption(body.type);
        if (body.photoPath !== null) {
          setPreview(body.photoPath);
          setFileUpload(false);
        } else {
          setFileUpload(true);
        }
      }
    } else {
      navigate("/nursery/login");
    }
  }, [setMenuOpen]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    data.type = selectedOption;
    console.table(data);
    delete data.photos;

    const formData = new FormData();
    formData.append("service", JSON.stringify(data));

    formData.append("file", file);

    const res = await fetch(
      `http://localhost:8080/api/service/update/${serviceId}`,
      {
        method: "PUT",
        body: formData,
        headers: {
          Authorization: `Bearer ${new Cookies().get("nurseryId")}`,
        },
      }
    );
    const body = await res.text();
    setResponse(body);
    setResponseVisible(true);
    if (res.ok) setResponseClass("success");
    else setResponseClass("error");

    window.scrollTo(0, 0);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

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

    setFile(file);
    setPreview(URL.createObjectURL(file));
    setFileUpload(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (selectedOption === "") {
      document.querySelector(".dropdown-error").innerHTML =
        "Service type is required";
    }
    handleSubmit(onSubmit)(e);
  };

  const removePhoto = async () => {
    const res = await fetch(
      `http://localhost:8080/api/service/update/${serviceId}/delete-photo`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${new Cookies().get("nurseryId")}`,
        },
      }
    );

    if (res.ok) {
      setPreview();
      setFile();
      setFileUpload(true);
    }
  };

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

          <Alert className={responseClass} isVisible={responseVisible}>
            {response}
          </Alert>

          <AddProductsForm onSubmit={handleFormSubmit}>
            <Wrapper1>
              <Label>Service Type</Label>
              <Input
                spellcheck="false"
                type="text"
                name="type"
                defaultValue={service.type}
                disabled
              />
            </Wrapper1>

            <Wrapper1>
              <Label>Service Rate</Label>
              <Input
                spellcheck="false"
                type="number"
                name="price"
                defaultValue={service.price}
                {...register("price", { required: "This field is required" })}
              />
              <ValidationError>{errors.price?.message}</ValidationError>
            </Wrapper1>
            <Wrapper1>
              <Label>Service Discount</Label>
              <Input
                spellcheck="false"
                type="number"
                name="discount"
                defaultValue={service.discount}
                {...register("discount", {
                  required: "This field is required",
                })}
              />
              <ValidationError>{errors.discount?.message}</ValidationError>
            </Wrapper1>
            <Wrapper1 style={{ width: "100%" }}>
              <Label>Service Description ({details.length}/500)</Label>
              <ProductDescription
                spellcheck="false"
                row="4"
                name="details"
                defaultValue={service.details}
                {...register("details", {
                  required: "This field is required",
                  minLength: {
                    value: 30,
                    message: "Details must be at least 30 characters long",
                  },
                  maxLength: {
                    value: 500,
                    message: "Details cannot be more than 500 characters",
                  },
                  onChange: (e) => setDetails(e.target.value),
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
                    onChange={handleFileUpload}
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

export default ManageServiceForm;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";

import { NurseryMenu } from "../../../data/dashboard-menu-items";

import { DashboardCard } from "../../../Components/Dashboard Items/DashboardElements";
import DashboardHeader from "../../../Components/DashboardHeader";
import DashboardMenu from "../../../Components/DashboardMenu";
import {
  AddProductsForm,
  Wrapper1,
  Label,
  Input,
  DashboardButton,
} from "../../../Components/DashboardInputs";
import { Cookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { ValidationError } from "../../../Components/LoginModal/LoginModalElements";

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

const NurseryProfile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [nurseryDetails, setNurseryDetails] = useState({});

  useEffect(async () => {
    window.innerWidth >= 1100 ? setMenuOpen(true) : setMenuOpen(false);
    const res = await fetch("http://localhost:8080/api/nursery/get", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${new Cookies().get("nurseryId")}`,
      },
    });
    const body = await res.json();
    setNurseryDetails(body);
  }, [setMenuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const res = await fetch("http://localhost:8080/api/nursery/update", {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${new Cookies().get("nurseryId")}`,
      },
    });
    const body = await res.json();
  };

  return (
    <>
      <DashboardHeader toggleMenu={toggleMenu} />
      <DashboardMenu menuOpen={menuOpen} listItems={NurseryMenu} />
      <Container>
        <DashboardCard style={{ padding: "1rem" }}>
          <Title>Your Account</Title>
          <Icons>
            <BsPersonCircle />
            <UserName>{nurseryDetails.name}</UserName>
          </Icons>
          <AddProductsForm
            style={{ marginTop: "1.5rem" }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Wrapper1>
              <Label>Email</Label>
              <Input
                spellcheck="false"
                type="email"
                name="email"
                defaultValue={nurseryDetails.email}
                {...register("email", {
                  required: "Email field is required",
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              <ValidationError>{errors.email?.message}</ValidationError>
            </Wrapper1>
            <Wrapper1>
              <Label>Phone No.</Label>
              <Input
                spellcheck="false"
                type="number"
                name="phone"
                defaultValue={nurseryDetails.phone}
                {...register("phone", {
                  required: "Phone No field is required",
                  maxLength: {
                    value: 10,
                    message: "Phone No must be of 10 digits",
                  },
                  minLength: {
                    value: 10,
                    message: "Phone No must be of 10 digits",
                  },
                })}
              />
              <ValidationError>{errors.phone?.message}</ValidationError>
            </Wrapper1>
            <Wrapper1 style={{ width: "100%" }}>
              <Label>Address</Label>
              <Input
                spellcheck="false"
                name="address"
                type="text"
                defaultValue={nurseryDetails.address}
                {...register("address", {
                  required: "Address is required",
                })}
              />
              <ValidationError>{errors.address?.message}</ValidationError>
            </Wrapper1>
            <Wrapper1>
              <Label>City</Label>
              <Input
                spellcheck="false"
                type="text"
                name="city"
                defaultValue={nurseryDetails.city}
                {...register("city", {
                  required: "City is required",
                })}
              />
              <ValidationError>{errors.city?.message}</ValidationError>
            </Wrapper1>
            <Wrapper1>
              <Label>Pincode</Label>
              <Input
                spellcheck="false"
                type="number"
                name="pincode"
                defaultValue={nurseryDetails.pincode}
                {...register("pincode", {
                  required: "Pincode is required",
                  maxLength: {
                    value: 6,
                    message: "Pincode must be of 6 digits",
                  },
                  minLength: {
                    value: 6,
                    message: "Pincode must be of 6 digits",
                  },
                })}
              />
              <ValidationError>{errors.pincode?.message}</ValidationError>
            </Wrapper1>
            <Wrapper1>
              <Label>State</Label>
              <Input
                spellcheck="false"
                type="text"
                name="state"
                defaultValue={nurseryDetails.state}
                {...register("state", {
                  required: "State is required",
                })}
              />
              <ValidationError>{errors.state?.message}</ValidationError>
            </Wrapper1>
            <Wrapper1>
              <Label>Country</Label>
              <Input
                spellcheck="false"
                type="text"
                name="country"
                defaultValue={nurseryDetails.country}
                {...register("country", {
                  required: "Country is required",
                })}
              />
              <ValidationError>{errors.country?.message}</ValidationError>
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

export default NurseryProfile;

import React, { useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import { useForm } from "react-hook-form";

import Topbar from "../Components/Topbar";
import { UserNavbar } from "../Components/Navbar";
import BreadCrumb from "../Components/BreadCrumb";
import Footer from "../Components/Footer";
import {
  AccountSection,
  AccountTitle,
  AccountButton,
  ChangePasswordWrapper,
  Input,
  InputWrapper,
  Label,
  MainWrapper,
  ProfileInfo,
  SectionLinks,
  Sidebar,
  Title,
  AccountForm,
} from "../Components/AccountElements";
import RecentOrders from "../Components/RecentOrders";
import AddressSection from "../Components/AddressSection";
import ModalContainer from "../Components/Backdrop";
import { handleFormSubmit } from "../validation/passwordChangeValidation";
import { handleInfoSubmit } from "../validation/editInfoValidation";
import { ValidationError } from "../Components/LoginModal/LoginModalElements";

const Account = () => {
  const [tab, setTab] = useState("address");
  const [modalOpen, setModalOpen] = useState(false);

  const openForm = () => setModalOpen(true);
  const closeForm = () => setModalOpen(false);

  return (
    <>
      <Topbar />
      <UserNavbar />
      <BreadCrumb page="Account" />
      <AccountSection>
        <AccountTitle>Your Account</AccountTitle>
        <div style={{ display: "flex" }}>
          <Sidebar>
            <ProfileInfo>
              <MdAccountCircle />
              <div className="name">Vishal Shah</div>
              <span onClick={() => setTab("edit-info")}>Edit Info</span>
              <span onClick={() => openForm()}>Change Password</span>
            </ProfileInfo>
            <SectionLinks>
              <div
                className={tab === "orders" ? "active" : ""}
                onClick={() => setTab("orders")}
              >
                View Orders
              </div>
              <div
                className={tab === "address" ? "active" : ""}
                onClick={() => setTab("address")}
              >
                Manage Addresses
              </div>
            </SectionLinks>
          </Sidebar>
          <main style={{ width: "100%" }}>
            {tab === "orders" ? (
              <RecentOrders />
            ) : tab === "address" ? (
              <AddressSection />
            ) : (
              <EditInfo />
            )}
          </main>
        </div>
        {modalOpen && <ChangePassword handleClose={closeForm} />}
      </AccountSection>
      <Footer />
    </>
  );
};

const EditInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <MainWrapper>
      <Title>Edit your personal Info</Title>
      <AccountForm
        name="edit-info"
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputWrapper>
          <Label htmlFor="fname">First Name</Label>
          <Input
            type="text"
            name="fname"
            id="fname"
            defaultValue="Vishal"
            {...register("fname", { required: "First name is required" })}
          />
          <ValidationError>{errors.fname?.message}</ValidationError>
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="lname">Last Name</Label>
          <Input
            type="text"
            name="lname"
            id="lname"
            defaultValue="Shah"
            {...register("lname", { required: "Last name is required" })}
          />
          <ValidationError>{errors.lname?.message}</ValidationError>
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            defaultValue="shahvishal662@gmail.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "Invalid email address",
              },
            })}
          />
          <ValidationError>{errors.email?.message}</ValidationError>
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="phone">Phone No</Label>
          <Input
            type="number"
            name="phone"
            id="phone"
            defaultValue="9687312209"
            {...register("phone", {
              required: "Phone field is required",
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
        </InputWrapper>
        <div>
          <AccountButton className="primary">Save</AccountButton>
          <AccountButton className="cancel">Cancel</AccountButton>
        </div>
      </AccountForm>
    </MainWrapper>
  );
};

const ChangePassword = ({ handleClose }) => {
  return (
    <ModalContainer onClick={handleClose}>
      <ChangePasswordWrapper onClick={(e) => e.stopPropagation()}>
        <Title>Change Password</Title>
        <AccountForm
          name="change-password"
          method="POST"
          onSubmit={handleFormSubmit}
        >
          <InputWrapper style={{ width: "100%" }}>
            <Label htmlFor="old-password">Old Password</Label>
            <Input type="password" name="old-password" id="old-password" />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="old-password">New Password</Label>
            <Input type="password" name="new-password" id="new-password" />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="old-password">Confirm Password</Label>
            <Input
              type="password"
              name="confirm-password"
              id="confirm-password"
            />
          </InputWrapper>
          <div>
            <AccountButton className="primary" type="submit">
              Save
            </AccountButton>
            <AccountButton
              className="cancel"
              type="cancel"
              onClick={handleClose}
            >
              Cancel
            </AccountButton>
          </div>
        </AccountForm>
      </ChangePasswordWrapper>
    </ModalContainer>
  );
};

export default Account;

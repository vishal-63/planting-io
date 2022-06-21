import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
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
import {
  Alert,
  ValidationError,
} from "../Components/LoginModal/LoginModalElements";

const Account = () => {
  const [tab, setTab] = useState("edit-info");
  const [modalOpen, setModalOpen] = useState(false);
  const [username, setUsername] = useState("");

  const setName = (fname, lname) => {
    setUsername(fname + " " + lname);
  };

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
              <div className="name">{username}</div>
              <span onClick={() => openForm()}>Change Password</span>
            </ProfileInfo>
            <SectionLinks>
              <div
                className={tab === "edit-info" ? "active" : ""}
                onClick={() => setTab("edit-info")}
              >
                Edit Info
              </div>
              <div
                className={tab === "orders" ? "active" : ""}
                onClick={() => setTab("orders")}
              >
                View Orders
              </div>
            </SectionLinks>
          </Sidebar>
          <main style={{ width: "100%" }}>
            {tab === "orders" ? (
              <RecentOrders />
            ) : tab === "address" ? (
              <AddressSection />
            ) : (
              <EditInfo setName={setName} />
            )}
          </main>
        </div>
        {modalOpen && <ChangePassword handleClose={closeForm} />}
      </AccountSection>
      <Footer />
    </>
  );
};

const EditInfo = ({ setName }) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [response, setResponse] = useState("");
  const [responseVisible, setResponseVisible] = useState(false);
  const [responseClass, setResponseClass] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`http://localhost:8080/api/user/get-info`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${new Cookies().get("userId")}`,
        },
      });
      const body = await res.json();
      await setFname(body.fname);
      await setLname(body.lname);
      await setEmail(body.email);
      await setPhone(body.phone);
      setName(body.fname, body.lname);
    }
    fetchData();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    data.phone = parseInt(data.phone);
    const res = await fetch("http://localhost:8080/api/user/update", {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${new Cookies().get("userId")}`,
      },
    });
    const body = await res.json();
    setResponse(body.message);
    setResponseVisible(true);
    if (res.ok) setResponseClass("success");
    else setResponseClass("error");
  };

  return (
    <MainWrapper>
      <Title>Edit your personal Info</Title>

      <Alert className={responseClass} isVisible={responseVisible}>
        {response}
      </Alert>

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
            value={fname}
            defaultValue={fname}
            {...register("fname", {
              required: "First name is required",
              onChange: (e) => setFname(e.target.value),
            })}
          />
          <ValidationError>{errors.fname?.message}</ValidationError>
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="lname">Last Name</Label>
          <Input
            type="text"
            name="lname"
            id="lname"
            value={lname}
            defaultValue={lname}
            {...register("lname", {
              required: "Last name is required",
              onChange: (e) => setLname(e.target.value),
            })}
          />
          <ValidationError>{errors.lname?.message}</ValidationError>
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            value={email}
            defaultValue={email}
            {...register("email", {
              required: "Email is required",
              onChange: (e) => setEmail(e.target.value),
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
            value={phone}
            defaultValue={phone}
            {...register("phone", {
              required: "Phone field is required",
              onChange: (e) => setPhone(e.target.value),
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
  const [response, setResponse] = useState("");
  const [responseVisible, setResponseVisible] = useState(false);
  const [responseClass, setResponseClass] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const res = await fetch("http://localhost:8080/api/user/change-password", {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${new Cookies().get("userId")}`,
        "Content-Type": "application/json",
      },
    });
    const body = await res.text();
    setResponse(body);
    setResponseVisible(true);
    if (res.ok) {
      setResponseClass("success");
      setTimeout(() => handleClose(), 1000);
    } else setResponseClass("error");
  };

  return (
    <ModalContainer onClick={handleClose}>
      <ChangePasswordWrapper onClick={(e) => e.stopPropagation()}>
        <Title>Change Password</Title>

        <Alert className={responseClass} isVisible={responseVisible}>
          {response}
        </Alert>

        <AccountForm
          name="change-password"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputWrapper style={{ width: "100%" }}>
            <Label htmlFor="old-password">Old Password</Label>
            <Input
              type="password"
              name="oldPassword"
              id="oldPassword"
              {...register("oldPassword", {
                required: "This field is required",
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}$/,
                  message: "Invalid password",
                },
              })}
            />
            <ValidationError>{errors.oldPassword?.message}</ValidationError>
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="newPassword">New Password</Label>
            <Input
              type="password"
              name="newPassword"
              id="newPassword"
              {...register("newPassword", {
                required: "This field is required",
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}$/,
                  message: "Invalid password",
                },
              })}
            />
            <ValidationError>{errors.newPassword?.message}</ValidationError>
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              {...register("confirmPassword", {
                required: "This field is required",
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}$/,
                  message: "Invalid password",
                },
              })}
            />
            <ValidationError>{errors.confirmPassword?.message}</ValidationError>
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

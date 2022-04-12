import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import Topbar from "../Components/Topbar";
import { UserNavbar } from "../Components/Navbar";
import Footer from "../Components/Footer";
import {
  AccountButton,
  Input,
  InputWrapper,
  Label,
} from "../Components/AccountElements";
import { ValidationError } from "../Components/LoginModal/LoginModalElements";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [mode, setMode] = useState("email");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("email", data.email);
    const res = await fetch("http://localhost:8080/api/user/generate-otp", {
      method: "POST",
      body: formData,
    });
    const body = await res.text();
    console.log(body);
    if (res.ok) setMode("otp");
    setLoading(false);
  };

  const verifyOtp = async () => {
    setLoading(true);
    const otp = document.getElementById("otp").value;
    const formData = new FormData();
    formData.append("otp", otp);
    const res = await fetch("http://localhost:8080/api/user/verify-otp", {
      method: "POST",
      body: formData,
    });
    const body = await res.text();
    console.log(body);
    if (res.ok) setMode("password");
    setLoading(false);
  };

  const navigate = useNavigate();

  const changePassword = async () => {
    const password = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (password === confirmPassword) {
      const formData = new FormData();
      formData.append("password", password);
      formData.append("email", email);
      const res = await fetch(
        "http://localhost:8080/api/user/set-new-password",
        {
          method: "PUT",
          body: formData,
        }
      );
      console.log(res);
      if (res.ok) navigate("/");
    }
  };
  return (
    <>
      <Topbar />
      <UserNavbar />
      <ForgotPasswordSection>
        <Container>
          {mode === "email" ? (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="title">Enter your email address</div>
              <InputWrapper style={{ width: "100%" }}>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                      message: "Invalid email address",
                    },
                    onChange: (e) => setEmail(e.target.value),
                  })}
                />
                <ValidationError>{errors.email?.message}</ValidationError>
              </InputWrapper>
              <div className="subtitle">
                An OTP will be set to this email address
              </div>
              <AccountButton className="primary">
                {loading ? <span className="loader"></span> : "Submit"}
              </AccountButton>
            </form>
          ) : mode === "otp" ? (
            <>
              <div className="title">Enter OTP</div>
              <InputWrapper style={{ width: "100%" }}>
                <Label htmlFor="email">OTP</Label>
                <Input
                  type="number"
                  name="otp"
                  id="otp"
                  {...register("otp", {
                    required: "OTP is required",
                  })}
                />
                <ValidationError>{errors.otp?.message}</ValidationError>
              </InputWrapper>
              <div className="subtitle">OTP is valid for only 5 minutes.</div>
              <AccountButton className="primary" onClick={verifyOtp}>
                {loading ? <span className="loader"></span> : "Submit"}
              </AccountButton>
            </>
          ) : (
            <>
              <div className="title">Enter your new Password</div>
              <InputWrapper style={{ width: "100%" }}>
                <Label htmlFor="email">Password</Label>
                <Input type="password" name="newPassword" id="newPassword" />
              </InputWrapper>
              <InputWrapper style={{ width: "100%" }}>
                <Label htmlFor="email">Confirm password:</Label>
                <Input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                />
              </InputWrapper>
              <AccountButton className="primary" onClick={changePassword}>
                {loading ? <span className="loader"></span> : "Submit"}
              </AccountButton>
            </>
          )}
        </Container>
      </ForgotPasswordSection>
      <Footer />
    </>
  );
};

const ForgotPasswordSection = styled.section`
  width: 100vw;
  min-height: calc(100vh - 350px);
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  padding: 3rem 0;
  min-width: 400px;

  & .title {
    color: #0b3d2c;
    font-size: 1.5rem;
    font-family: Lora, "sans serif";
    font-weight: 500;
    margin-bottom: 1.5rem;
  }

  & .subtitle {
    font-size: 1rem;
    color: #3a3a3a;
    margin-bottom: 1rem;
  }
`;

export default ForgotPassword;

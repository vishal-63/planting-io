import { useState } from "react";
import { Cookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import {
  Alert,
  ValidationError,
} from "../../Components/LoginModal/LoginModalElements";

import logo from "../../Images/logo.svg";

const AdminLogin = ({ loginAdmin }) => {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/admin";

  const [response, setResponse] = useState("");
  const [responseVisible, setResponseVisible] = useState(false);
  const [responseClass, setResponseClass] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await fetch("http://localhost:8080/api/user/login-admin", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const body = await res.json();

    setResponse(body.message);
    setResponseVisible(true);

    if (res.ok) {
      setResponseClass("success");
      new Cookies().set("adminId", body.jwt);
      loginAdmin();
      navigate(from, { replace: true });
    } else {
      setResponseClass("error");
    }
  };

  return (
    <LoginSection>
      <LoginContainer>
        <div>
          <img src={logo} alt="" />
        </div>
        <form method="post" onSubmit={handleSubmit(onSubmit)}>
          <p>Admin Login</p>
          <Alert className={responseClass} isVisible={responseVisible}>
            {response}
          </Alert>
          <Input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email address"
            {...register("email", {
              required: "Email field is required",
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "Invalid email address",
              },
            })}
          />
          <ValidationError>{errors.email?.message}</ValidationError>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            {...register("password", {
              required: "Password field is required",
            })}
          />
          <ValidationError>{errors.password?.message}</ValidationError>
          <SubmitButton type="submit" text="Submit" />
        </form>
      </LoginContainer>
    </LoginSection>
  );
};

export default AdminLogin;

const LoginSection = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2fdf7;
`;

const LoginContainer = styled.div`
  background-color: #fff;
  box-shadow: 0 0 10px #28c27455;
  border: 1px solid #dadada;
  border-radius: 15px;
  width: 90vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 540px) {
    flex-direction: row;
    height: 400px;
  }
  @media (min-width: 900px) {
    width: 900px;
  }

  & div,
  & form {
    width: 100%;
    /* height: 50%; */
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 540px) {
      width: 50%;
      height: auto;
    }
  }

  & form {
    padding: 1rem;
    flex-direction: column;
    gap: 2rem;
    margin-top: 2rem;

    @media (min-width: 540px) {
      padding: 2rem;
      border-left: 1px solid #dadada;
    }
  }

  & form p {
    color: #03110a;
    font-family: Lora, "sans serif";
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 1px;
  }
`;

const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: 1px solid #7d7d7d;
  border-radius: 10px;
  outline: none;
  padding: 0.5rem 1rem;
`;

const SubmitButton = styled.input`
  font-size: 1.2rem;
  background-color: transparent;
  color: #28c274;
  padding: 0.5rem 1.2rem;
  border: 1.5px solid #28c274;
  border-radius: 20px;
  cursor: pointer;
  outline: none;
  transition: all 0.3s;

  &:focus,
  &:hover {
    background-color: #28c274;
    color: #fff;
    transition: all 0.3s;
  }
`;

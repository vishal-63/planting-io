import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Cookies } from "react-cookie";
import { AuthContext } from "../../AuthContext";

import ModalContainer from "../Backdrop";
import {
  Container,
  LoginContainer,
  TabsContainer,
  Tab,
  FormContainer,
  Wrapper,
  Input,
  Label,
  ButtonContainer,
  ForgotPass,
  SignInBtn,
  NewAccount,
  Block,
  SignUpBtn,
  AlreadyAccount,
  Alert,
  ValidationError,
} from "./LoginModalElements";

function inputChange(e) {
  if (e.target.value !== "") {
    e.target.classList.add("text");
  } else {
    e.target.classList.remove("text");
  }
}

const LoginModal = ({ mode, handleClose }) => {
  const [formMode, setFormMode] = useState(`${mode}`);
  const toggleFormMode = (mode) => setFormMode(mode);

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // handleSubmit(onSubmit)(e);
  };
  return (
    <>
      <ModalContainer onClick={handleClose}>
        {formMode === "login" ? (
          <LoginForm
            toggleFormMode={toggleFormMode}
            handleClose={handleClose}
          />
        ) : (
          <RegisterForm
            toggleFormMode={toggleFormMode}
            handleClose={handleClose}
          />
        )}
      </ModalContainer>
    </>
  );
};

const LoginForm = ({ toggleFormMode, handleClose }) => {
  const [response, setResponse] = useState("");
  const [responseVisible, setResponseVisible] = useState(false);
  const [responseClass, setResponseClass] = useState("");

  const [
    isUserAuthenticated,
    setIsUserAuthenticated,
    isAdminAuthenticated,
    setIsAdminAuthenticated,
  ] = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => loginUser(data, e);

  // call api to login user
  const loginUser = async (data, e) => {
    const res = await fetch("http://localhost:8080/api/user/login", {
      method: "POST",
      body: JSON.stringify(data),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const body = await res.json();

    setResponse(body.message);
    setResponseVisible(true);

    if (res.ok) {
      setResponseClass("success");
      new Cookies().set("userId", body.jwt, { path: "/" });
      authenticateUser();
      setTimeout(() => handleClose(), 1000);
    } else {
      setResponseClass("error");
    }
  };

  const authenticateUser = () => setIsUserAuthenticated(true);

  return (
    <LoginContainer onClick={(e) => e.stopPropagation()}>
      <TabsContainer>
        <Tab className="login">Login</Tab>
        <Tab onClick={() => toggleFormMode("register")}>Register</Tab>
      </TabsContainer>
      <p>Please login using account detail below</p>

      <Alert className={responseClass} isVisible={responseVisible}>
        {response}
      </Alert>

      <FormContainer
        name="login"
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Wrapper className="emailinput">
          <Input
            spellcheck="false"
            type="email"
            name="email"
            id="email"
            onChange={inputChange}
            {...register("email", {
              required: "Email field is required",
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "Invalid email address",
              },
              onChange: (e) => inputChange(e),
            })}
            // required
          />
          <Label className="label">Email</Label>
          {errors.email && (
            <ValidationError>{errors.email?.message}</ValidationError>
          )}
        </Wrapper>

        <Wrapper>
          <Input
            spellcheck="false"
            type="password"
            name="password"
            id="password"
            onChange={inputChange}
            {...register("password", {
              required: "Password field is required",
              onChange: (e) => inputChange(e),
            })}
            // required
          />
          <Label className="label">Password</Label>
          {errors.password && (
            <ValidationError>{errors.password?.message}</ValidationError>
          )}
        </Wrapper>

        <ButtonContainer>
          <ForgotPass to="/forgot-password">Forgot Password?</ForgotPass>
          <SignInBtn type="submit">Sign In</SignInBtn>
        </ButtonContainer>
      </FormContainer>

      <NewAccount>
        New Member?
        <span onClick={() => toggleFormMode("register")}> Create Account</span>
      </NewAccount>
    </LoginContainer>
  );
};

const RegisterForm = ({ toggleFormMode, handleClose }) => {
  const [response, setResponse] = useState("");
  const [responseVisible, setResponseVisible] = useState(false);
  const [responseClass, setResponseClass] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [
    isUserAuthenticated,
    setIsUserAuthenticated,
    isAdminAuthenticated,
    setIsAdminAuthenticated,
  ] = useContext(AuthContext);

  const onSubmit = (data) => {
    const confirmPasswordError = document.querySelector(
      ".confirm-password-error"
    );
    if (data.password !== data.confirmPassword) {
      confirmPasswordError.innerHTML = "Passwords do not match";
    } else {
      registerUser(data);
    }
  };

  const registerUser = async (data) => {
    const res = await fetch("http://localhost:8080/api/user/add", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const body = await res.json();

    setResponseVisible(true);
    setResponse(body.message);

    if (res.ok) {
      setResponseClass("success");
      new Cookies().set("userId", body.jwt, { path: "/" });
      authenticateUser();
      setTimeout(() => handleClose(), 1500);
    } else {
      setResponseClass("error");
    }
  };

  const authenticateUser = () => setIsUserAuthenticated(true);

  return (
    <LoginContainer className="register" onClick={(e) => e.stopPropagation()}>
      <TabsContainer>
        <Tab onClick={() => toggleFormMode("login")}>Login</Tab>
        <Tab className="register">Register</Tab>
      </TabsContainer>
      <p>Enter your Account Details</p>

      <Alert className={responseClass} isVisible={responseVisible}>
        {response}
      </Alert>

      <FormContainer
        className="register"
        name="register"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Block>
          <Wrapper className="register">
            <Input
              spellcheck="false"
              type="text"
              name="fname"
              id="fname"
              {...register("fname", {
                required: "First Name is required",
                onChange: (e) => inputChange(e),
              })}
            />
            <Label className="label">First Name</Label>
            {errors.fname && (
              <ValidationError>{errors.fname?.message}</ValidationError>
            )}
          </Wrapper>

          <Wrapper className="register">
            <Input
              spellcheck="false"
              type="text"
              name="lname"
              id="lname"
              {...register("lname", {
                required: "Last Name field is required",
                onChange: (e) => inputChange(e),
              })}
            />
            <Label className="label">Last Name</Label>
            {errors.lname && (
              <ValidationError>{errors.lname?.message}</ValidationError>
            )}
          </Wrapper>

          <Wrapper className="register">
            <Input
              spellcheck="false"
              type="email"
              name="email"
              id="email"
              {...register("email", {
                required: "Email field is required",
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Invalid email address",
                },
                onChange: (e) => inputChange(e),
              })}
            />
            <Label className="label">Email</Label>
            {errors.email && (
              <ValidationError>{errors.email?.message}</ValidationError>
            )}
          </Wrapper>

          <Wrapper className="register">
            <Input
              spellcheck="false"
              type="number"
              name="phone"
              id="phone"
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
                onChange: (e) => inputChange(e),
              })}
            />
            <Label className="label">Phone</Label>
            {errors.phone && (
              <ValidationError>{errors.phone?.message}</ValidationError>
            )}
          </Wrapper>

          <Wrapper className="register">
            <Input
              spellcheck="false"
              type="password"
              name="password"
              id="password"
              {...register("password", {
                required: "Password field is required",
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}$/,
                  message: "Invalid password",
                },
                onChange: (e) => inputChange(e),
              })}
            />
            <Label className="label">Password</Label>
            {errors.password && (
              <ValidationError>{errors.password?.message}</ValidationError>
            )}
          </Wrapper>

          <Wrapper className="register">
            <Input
              spellcheck="false"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              {...register("confirmPassword", {
                required: "Confirm Password field is required",
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}$/,
                  message: "Invalid password",
                },
                onChange: (e) => inputChange(e),
              })}
            />
            <Label className="label">Confirm Password</Label>
            <ValidationError className="confirm-password-error">
              {errors.confirmPassword?.message}
            </ValidationError>
          </Wrapper>
        </Block>

        <span className="password-info">
          Password must contain at least 8 characters, a digit, lowercase and
          and uppercase letters
        </span>

        <ButtonContainer className="register">
          <AlreadyAccount>
            Already a Member?
            <span onClick={() => toggleFormMode("login")}> Sign In</span>
          </AlreadyAccount>
          <SignUpBtn type="submit">Sign Up</SignUpBtn>
        </ButtonContainer>
      </FormContainer>
    </LoginContainer>
  );
};

export default LoginModal;

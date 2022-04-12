import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { useForm } from "react-hook-form";
import { Cookies } from "react-cookie";

import loginSvg from "../../Images/login.svg";
import {
  FormContainer,
  Wrapper,
  Input,
  Label,
  SignInBtn,
  NewAccount,
  Alert,
  ValidationError,
} from "../../Components/LoginModal/LoginModalElements";
import {
  MainContainer,
  Title,
  Subtitle,
  Steps,
  StepNumber,
  StepName,
  Line,
  ContentWrapper,
  NurseryLoginContainer,
  LoginSvg,
  Waves,
  SelectWrapper,
  SelectLabel,
  SelectTrigger,
  Select,
  CustomOptions,
  CustomOption,
  FileInputWrapper,
} from "../../Components/NurseryFormElements";
import { NurseryNavbar } from "../../Components/Navbar";
import { handleNurseryRegisterSubmit } from "../../validation/registrationValidation";

function inputChange(e) {
  if (e.target.value !== "") {
    e.target.classList.add("text");
  } else {
    e.target.classList.remove("text");
  }
}

const NurseryLogin = () => {
  const [activeStep, setActiveStep] = useState(false);
  const [step, setStep] = useState("registration");
  const [selectedOption, setSelectedOption] = useState("");

  const [response, setResponse] = useState("");
  const [responseVisible, setResponseVisible] = useState(false);
  const [responseClass, setResponseClass] = useState("");

  const [errorVisible, setErrorVisible] = useState(false);

  const navigate = useNavigate();

  // useEffect(() => {
  //   step === "verification" ? setActiveStep(true) : setActiveStep(false);
  // }, [step]);

  const changeStep = () => {
    setActiveStep(true);
    setStep("verfication");
  };

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
  };

  const handleFileUpload = (e) => {
    const acceptedFiles = ["image/png", "image/jpeg"];
    const fileType = e.target.files[0].type;
    if (!acceptedFiles.includes(fileType)) {
      setErrorVisible(true);
      e.target.value = null;
    } else {
      setErrorVisible(false);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const res = await fetch("http://localhost:8080/api/nursery/add", {
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
      new Cookies().set("nurseryId", body.jwt);
      navigate("/nursery/dashboard", {
        nurseryName: data.name,
      });
    } else {
      setResponseClass("error");
    }
  };

  return (
    <>
      <NurseryNavbar />
      <MainContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Title>Welcome To Planting.io</Title>
          <Subtitle>Create Your Account To Start Selling</Subtitle>
          {/* <Steps>
            <StepNumber activeStep={true}>1</StepNumber>
            <StepName>Registration</StepName>
            <Line></Line>
            <StepNumber activeStep={activeStep}>2</StepNumber>
            <StepName>Verification</StepName>
          </Steps> */}
          <ContentWrapper>
            <LoginSvg src={loginSvg} alt="illustration" />

            <NurseryLoginContainer>
              <Alert className={responseClass} isVisible={responseVisible}>
                {response}
              </Alert>

              {step === "registration" ? (
                <FormContainer
                  name="register"
                  method="POST"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                    }}
                  >
                    <Wrapper style={{ width: "100%" }}>
                      <Input
                        spellcheck="false"
                        type="text"
                        name="name"
                        id="name"
                        {...register("name", {
                          required: "Name is required",
                          onChange: (e) => inputChange(e),
                        })}
                      />
                      <Label className="label">Name</Label>
                      <ValidationError>{errors.name?.message}</ValidationError>
                    </Wrapper>
                    <Wrapper className="register">
                      <Input
                        spellcheck="false"
                        type="email"
                        name="email"
                        id="email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value:
                              /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                            message: "Invalid email address",
                          },
                          onChange: (e) => inputChange(e),
                        })}
                      />
                      <Label className="label">Email</Label>
                      <ValidationError>{errors.email?.message}</ValidationError>
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
                      <ValidationError>{errors.phone?.message}</ValidationError>
                    </Wrapper>
                    <Wrapper style={{ width: "100%" }}>
                      <Input
                        spellcheck="false"
                        type="text"
                        name="address"
                        id="address"
                        {...register("address", {
                          required: "Address is required",
                          onChange: (e) => inputChange(e),
                        })}
                      />
                      <Label className="label">Address</Label>
                      <ValidationError>
                        {errors.address?.message}
                      </ValidationError>
                    </Wrapper>
                    <Wrapper className="register">
                      <Input
                        spellcheck="false"
                        type="text"
                        name="city"
                        id="city"
                        {...register("city", {
                          required: "City is required",
                          onChange: (e) => inputChange(e),
                        })}
                      />
                      <Label className="label">City</Label>
                      <ValidationError>{errors.city?.message}</ValidationError>
                    </Wrapper>
                    <Wrapper className="register">
                      <Input
                        spellcheck="false"
                        type="number"
                        name="pincode"
                        id="pincode"
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
                          onChange: (e) => inputChange(e),
                        })}
                      />
                      <Label className="label">Pin Code</Label>
                      <ValidationError>
                        {errors.pincode?.message}
                      </ValidationError>
                    </Wrapper>
                    <Wrapper className="register">
                      <Input
                        spellcheck="false"
                        type="text"
                        name="state"
                        id="state"
                        {...register("state", {
                          required: "State is required",
                          onChange: (e) => inputChange(e),
                        })}
                      />
                      <Label className="label">State</Label>
                      <ValidationError>{errors.state?.message}</ValidationError>
                    </Wrapper>
                    <Wrapper className="register">
                      <Input
                        spellcheck="false"
                        type="text"
                        name="country"
                        id="country"
                        {...register("country", {
                          required: "Country is required",
                          onChange: (e) => inputChange(e),
                        })}
                      />
                      <Label className="label">Country</Label>
                      <ValidationError>
                        {errors.country?.message}
                      </ValidationError>
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
                      <ValidationError>
                        {errors.password?.message}
                      </ValidationError>
                    </Wrapper>
                    <Wrapper className="register">
                      <Input
                        spellcheck="false"
                        type="password"
                        name="confrimPassword"
                        id="confirmPassword"
                        {...register("confirmPassword", {
                          required: "Confrim Password field is required",
                          pattern: {
                            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}$/,
                            message: "Invalid password",
                          },
                          onChange: (e) => inputChange(e),
                        })}
                      />
                      <Label className="label">Confirm Password</Label>
                      <ValidationError>
                        {errors.confirmPassword?.message}
                      </ValidationError>
                    </Wrapper>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                      marginTop: "1rem",
                    }}
                  >
                    <SignInBtn type="submit" className="nursery-page">
                      Sign Up
                    </SignInBtn>
                    <NewAccount className="nursery-page">
                      Already a Member <Link to="/nursery/login">Sign In</Link>
                    </NewAccount>
                  </div>
                </FormContainer>
              ) : (
                <FormContainer name="verify">
                  <SelectWrapper
                    className="select-wrapper"
                    onClick={openDropdown}
                  >
                    <SelectLabel>Verification Document Type</SelectLabel>
                    <Select className="select">
                      <SelectTrigger>
                        <span>{selectedOption}</span>
                        <IoIosArrowDown />
                      </SelectTrigger>
                      <CustomOptions className="custom-options">
                        <CustomOption
                          data-value="Aadhar Card"
                          onClick={changeSelection}
                        >
                          Aadhar Card
                        </CustomOption>
                        <CustomOption
                          data-value="Pan Card"
                          onClick={changeSelection}
                        >
                          Pan Card
                        </CustomOption>
                      </CustomOptions>
                    </Select>
                  </SelectWrapper>

                  <FileInputWrapper>
                    <span>Document Photo (Front) &nbsp; &nbsp;</span>
                    <input
                      type="file"
                      accept="image/jpeg, image/png, image/jpg"
                      name="front-photo"
                      id="front-photo"
                      onChange={handleFileUpload}
                    />
                  </FileInputWrapper>
                  <FileInputWrapper>
                    <span>Document Photo (Back) &nbsp; &nbsp;</span>
                    <input
                      type="file"
                      accept="image/jpeg, image/png, image/jpg"
                      name="back-photo"
                      id="back-photo"
                    />
                  </FileInputWrapper>

                  <Alert className="error" isVisible={errorVisible}>
                    You can only upload images of jpg/png format.
                  </Alert>

                  <SignInBtn className="verify">Verify</SignInBtn>
                </FormContainer>
              )}
            </NurseryLoginContainer>
          </ContentWrapper>
        </div>
        <Waves>
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              fill: "#28c274",
              width: "110%",
              maxHeight: 80,
              transform: "rotate(180deg)",
            }}
          >
            <path
              d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
              opacity=".25"
            />
            <path
              d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
              opacity=".5"
            />
            <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
          </svg>
        </Waves>
      </MainContainer>
    </>
  );
};

export default NurseryLogin;

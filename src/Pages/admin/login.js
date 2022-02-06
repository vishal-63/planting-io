import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import logo from "../../Images/logo.svg";

const AdminLogin = ({ loginAdmin }) => {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/admin";

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id === "admin" && password === "1234") {
      loginAdmin();
      navigate(from, { replace: true });
    }
  };

  return (
    <LoginSection>
      <LoginContainer>
        <div>
          <img src={logo} alt="" />
        </div>
        <form method="post" onSubmit={handleSubmit}>
          <p>Admin Login</p>
          <Input
            type="text"
            name="id"
            id="id"
            placeholder="Enter your Id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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

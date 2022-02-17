import React from "react";
import styled from "styled-components";
import { BsTruck, BsBell, BsPersonCircle } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";

import logo from "../../src/Images/logo.svg";
import { Link } from "react-router-dom";

const Container = styled.header`
  width: 100vw;
  height: 60px;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #dadada;
  position: sticky;
  top: 0;
  z-index: 9;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: #333;
  font-size: 1.75rem;

  & svg {
    display: block;

    @media (min-width: 1100px) {
      display: none;
    }
  }

  & img {
    @media (max-width: 768px) {
      width: 150px;
    }
  }
`;

const Icons = styled.div`
  color: #666;
  font-size: 1.25rem;
  display: flex;
  justify-content: center;
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

const DashboardHeader = ({ toggleMenu, name }) => {
  const nurseryName = name;
  return (
    <Container>
      <Div>
        <BiMenu onClick={toggleMenu} />
        <img src={logo} alt="Planting.io Logo" />
      </Div>
      <Icons>
        <BsTruck />
        <BsBell />
        <span>{nurseryName}</span>
        <Link to="/nursery/profile">
          <BsPersonCircle />
        </Link>
      </Icons>
    </Container>
  );
};

export default DashboardHeader;

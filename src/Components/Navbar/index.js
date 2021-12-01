import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  NavbarContainer,
  NavlinkWrapper,
  Navlink,
  ButtonsContainer,
  Button,
  MobileMenu,
} from "./NavbarElements";
import logo from "../../Images/logo.svg";
import LoginModal from "../LoginModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formMode, setFormMode] = useState("login");

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.scrollY >= "38" ? setScrollNav(true) : setScrollNav(false)
    );
  }, []);

  const openForm = (mode) => {
    setIsOpen(false);
    setIsFormOpen(!isFormOpen);
    setFormMode(mode);
  };

  return (
    <>
      <NavbarContainer scrollNav={scrollNav}>
        <img src={logo} alt="Planting.io Logo" />
        <NavlinkWrapper className="desktop-menu">
          <Navlink>
            <Link to="/">Home</Link>
          </Navlink>
          <Navlink>
            <Link to="/">About</Link>
          </Navlink>
          <Navlink>
            <Link to="/">Shop</Link>
          </Navlink>
          <Navlink>
            <Link to="/">Services</Link>
          </Navlink>
          <Navlink>
            <Link to="/nursery/register">Become A Seller</Link>
          </Navlink>
        </NavlinkWrapper>
        <ButtonsContainer className="desktop-menu">
          <Button onClick={() => openForm("login")}>Login</Button>
          <Button onClick={() => openForm("register")} registerBtn={true}>
            Register
          </Button>
        </ButtonsContainer>
        <div
          className={isOpen ? "burger close-icon" : "burger"}
          onClick={toggle}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <MobileMenu isOpen={isOpen} scrollNav={scrollNav}>
          <NavlinkWrapper className="mobile-menu">
            <Navlink>
              <Link to="/">Home</Link>
            </Navlink>
            <Navlink>
              <Link to="/">About</Link>
            </Navlink>
            <Navlink>
              <Link to="/">Shop</Link>
            </Navlink>
            <Navlink>
              <Link to="/">Services</Link>
            </Navlink>
            <Navlink>
              <Link to="/nursery/register">Become A Seller</Link>
            </Navlink>
          </NavlinkWrapper>
          <ButtonsContainer className="mobile-menu">
            <Button className="mobile-menu" onClick={() => openForm("login")}>
              Login
            </Button>
            <Button
              className="mobile-menu"
              onClick={() => openForm("register")}
              registerBtn={true}
            >
              Register
            </Button>
          </ButtonsContainer>
        </MobileMenu>
      </NavbarContainer>
      {isFormOpen ? <LoginModal mode={formMode} /> : <></>}
    </>
  );
};

export default Navbar;

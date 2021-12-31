import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  NavbarContainer,
  NavlinkWrapper,
  Navlink,
  ButtonsContainer,
  Button,
  MobileMenu,
  NavImg,
} from "./NavbarElements";
import logo from "../../Images/logo.svg";
import LoginModal from "../LoginModal";

export const UserNavbar = () => {
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
        <NavImg src={logo} alt="Planting.io Logo" />
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
            <Link to="/nursery">Become A Seller</Link>
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
              <Link to="/nursery">Become A Seller</Link>
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

export const NurseryNavbar = ({ page }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.scrollY >= "40" ? setScrollNav(true) : setScrollNav(false)
    );
  }, []);

  return (
    <NavbarContainer scrollNav={scrollNav} className="nursery-page">
      <Link to="/nursery">
        <NavImg src={logo} alt="Planting.io Logo" />
      </Link>
      {page == "home" ? (
        <>
          <NavlinkWrapper className="desktop-menu">
            <Navlink>
              <a href="#">How it works?</a>
            </Navlink>
            <Navlink>
              <a href="#">Pricing & Commission</a>
            </Navlink>
            <Navlink>
              <a href="#">Shipping & Returns</a>
            </Navlink>
          </NavlinkWrapper>
          <ButtonsContainer className="desktop-menu">
            <Button className="nursery-page">
              <Link to="/nursery/login">Login</Link>
            </Button>
            <Button className="nursery-page" registerBtn={true}>
              <Link to="/nursery/register">Start Selling</Link>
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
          <MobileMenu
            isOpen={isOpen}
            scrollNav={scrollNav}
            className="nursery-page"
          >
            <NavlinkWrapper className="mobile-menu">
              <Navlink className="nursery-page">
                <a href="#">How it works?</a>
              </Navlink>
              <Navlink className="nursery-page">
                <a href="#">Pricing & Commission</a>
              </Navlink>
              <Navlink className="nursery-page">
                <a href="#">Shipping & Returns</a>
              </Navlink>
            </NavlinkWrapper>
            <ButtonsContainer className="mobile-menu">
              <Button className="nursery-page">
                <Link to="/nursery/login">Login</Link>
              </Button>
              <Button className="nursery-page" registerBtn={true}>
                <Link to="/nursery/register">Start Selling</Link>
              </Button>
            </ButtonsContainer>
          </MobileMenu>
        </>
      ) : (
        page == "login" && (
          <ButtonsContainer>
            <Button className="nursery-page" registerBtn={true}>
              <Link to="/nursery/register">Start Selling</Link>
            </Button>
          </ButtonsContainer>
        )
      )}
    </NavbarContainer>
  );
};

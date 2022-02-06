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
  HoverMenu,
  DropdownContainer,
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

    // set --scroll-y property when the page is scrolled
    window.addEventListener("scroll", () => {
      document.documentElement.style.setProperty(
        "--scroll-y",
        `${window.scrollY}px`
      );
    });
    const scrollY =
      document.documentElement.style.getPropertyValue("--scroll-y");

    // prevent the body from scrolling when the modal is opened
    if (isFormOpen) {
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [isFormOpen]);

  const openForm = (mode) => {
    setIsOpen(false);
    setIsFormOpen(!isFormOpen);
    setFormMode(mode);
  };
  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      <NavbarContainer scrollNav={scrollNav}>
        <Link to="/">
          <NavImg src={logo} alt="Planting.io Logo" />
        </Link>
        <NavlinkWrapper className="desktop-menu">
          <Navlink>
            <Link to="/">Home</Link>
          </Navlink>
          <Navlink>
            <Link to="/about">About</Link>
          </Navlink>
          <DropdownContainer>
            <div>Shop</div>
            <HoverMenu className="hover-menu">
              <Navlink>
                <Link to="/shop-plants">Plants</Link>
              </Navlink>
              <Navlink>
                <Link to="/shop-seeds">Seeds</Link>
              </Navlink>
              <Navlink>
                <Link to="/shop-tools">Tools</Link>
              </Navlink>
            </HoverMenu>
          </DropdownContainer>
          <Navlink>
            <Link to="/services">Services</Link>
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
      {isFormOpen ? (
        <LoginModal
          mode={formMode}
          isFormOpen={isFormOpen}
          closeForm={closeForm}
        />
      ) : (
        <></>
      )}
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
      {page === "home" ? (
        <>
          <NavlinkWrapper className="desktop-menu">
            <Navlink>
              <a href="/nursery">How it works?</a>
            </Navlink>
            <Navlink>
              <a href="/nursery">Pricing & Commission</a>
            </Navlink>
            <Navlink>
              <a href="/nursery">Shipping & Returns</a>
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
                <a href="nursery">How it works?</a>
              </Navlink>
              <Navlink className="nursery-page">
                <a href="nursery">Pricing & Commission</a>
              </Navlink>
              <Navlink className="nursery-page">
                <a href="nursery">Shipping & Returns</a>
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
        page === "login" && (
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

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";
import { BsTruck, BsBell, BsPersonCircle } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { IoLogOutOutline } from "react-icons/io5";

import logo from "../../../src/Images/logo.svg";
import ModalContainer from "../Backdrop";
import {
  Container,
  Div,
  DropDownContainer,
  DropDownMenu,
  Icons,
  Modalbutton,
  ModalDiv,
} from "./DashboardHeaderElements";

const DashboardHeader = ({ toggleMenu }) => {
  const cookie = new Cookies();
  const nurseryName = cookie.get("nurseryName");

  const [menuOpen, setmenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => setModalOpen(false);
  return (
    <Container>
      <Div>
        <BiMenu onClick={toggleMenu} />
        <img src={logo} alt="Planting.io Logo" />
      </Div>
      <Icons>
        <BsTruck />
        <div>
          <BsBell />
        </div>
        <span className="nursery-name">{nurseryName}</span>
        <DropDownContainer onClick={() => setmenuOpen(!menuOpen)}>
          <BsPersonCircle />

          <DropDownMenu menuOpen={menuOpen}>
            <li>
              <Link to="/nursery/profile">Profile</Link>
            </li>
            <li onClick={() => setModalOpen(true)}>
              <a href="#">Logout</a>
            </li>
          </DropDownMenu>
        </DropDownContainer>
      </Icons>

      {modalOpen && <LogoutModal handleClose={closeModal} />}
    </Container>
  );
};

const LogoutModal = ({ handleClose }) => {
  const navigate = useNavigate();
  const logoutNursery = () => {
    new Cookies().remove("nurseryId");
    new Cookies().remove("nurseryName");
    navigate("/nursery/login");
  };
  return (
    <ModalContainer onClick={handleClose}>
      <ModalDiv onClick={(e) => e.stopPropagation()}>
        <div>
          <span>
            <IoLogOutOutline />
          </span>
          Are you sure you want to logout? <br />
        </div>
        <div>
          <Modalbutton className="cancel" onClick={handleClose}>
            Cancel
          </Modalbutton>
          <Modalbutton className="logout" onClick={logoutNursery}>
            Log out
          </Modalbutton>
        </div>
      </ModalDiv>
    </ModalContainer>
  );
};

export default DashboardHeader;

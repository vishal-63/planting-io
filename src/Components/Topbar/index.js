import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";

import {
  TopbarContainer,
  FollowLinksWrapper,
  FollowText,
  UserIconsWrapper,
} from "./TopbarElements";

import { AuthContext } from "../../AuthContext";

const Topbar = () => {
  const [
    isUserAuthenticated,
    setIsUserAuthenticated,
    isAdminAuthenticated,
    setIsAdminAuthenticated,
  ] = useContext(AuthContext);
  return (
    <TopbarContainer>
      <FollowLinksWrapper>
        <FollowText>Follow Us:</FollowText>
        <a href="/" style={{ display: "flex" }}>
          <FaInstagram />
        </a>
        <a href="/" style={{ display: "flex" }}>
          <FaFacebookF />
        </a>
        <a href="/" style={{ display: "flex" }}>
          <FaTwitter />
        </a>
      </FollowLinksWrapper>
      <UserIconsWrapper>
        {isUserAuthenticated && (
          <>
            <Link to="/cart">
              <FiShoppingCart />
            </Link>

            <Link to="/account">
              <CgProfile />
            </Link>
          </>
        )}
      </UserIconsWrapper>
    </TopbarContainer>
  );
};

export default Topbar;

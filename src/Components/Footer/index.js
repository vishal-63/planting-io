import logo from "../../Images/logo.png";

import {
  FooterWrapper,
  CopyRights,
  FooterLink,
  FooterLinkTitle,
  FooterLinks,
} from "./FooterElements";
import { Button } from "../InfoSection/InfoElements";

const Footer = () => {
  return (
    <footer>
      <FooterWrapper>
        <div>
          <img src={logo} alt="" />
        </div>
        <FooterLinks>
          <FooterLinkTitle>Useful Links</FooterLinkTitle>
          <FooterLink>Home</FooterLink>
          <FooterLink>About</FooterLink>
          <FooterLink>Shop</FooterLink>
          <FooterLink>Services</FooterLink>
        </FooterLinks>
        <FooterLinks>
          <FooterLinkTitle>Our Services</FooterLinkTitle>
          <FooterLink>Garden Setup</FooterLink>
          <FooterLink>Garden Maintenance</FooterLink>
          <FooterLink>Garden Clearance</FooterLink>
        </FooterLinks>
        <Button className="primary-btn">Become a Seller</Button>
      </FooterWrapper>
      <CopyRights>Planting.io @ 2021. All rights reserved.</CopyRights>
    </footer>
  );
};

export default Footer;

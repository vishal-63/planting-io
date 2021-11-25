import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  background-color: #fff;
  z-index: 10;
  transition: all 0.3s ease;
  position: ${({ scrollNav }) => (scrollNav ? "fixed" : "")};
  top: ${({ scrollNav }) => (scrollNav ? "0px" : "")};
  box-shadow: ${({ scrollNav }) =>
    scrollNav ? "0 5px 20px rgba(0,0,0,0.2)" : ""};

  @media (min-width: 768px) {
    padding: 0 6.5vw;
  }

  & .burger {
    display: block;
    cursor: pointer;

    @media (min-width: 769px) {
      display: none;
    }
  }

  & .burger div {
    width: 20px;
    height: 3px;
    margin: 5px 0;
    background-color: #000;
    transition: all 0.3s ease;

    &.line1 {
      width: 15px;
      margin-left: 10px;
    }
    &.line2 {
      width: 25px;
    }
    &.line3 {
      margin-left: 5px;
    }
  }

  & .burger.close-icon div {
    &.line1 {
      width: 25px;
      transform: translateY(8px);
      margin: 5px 0;
    }
    &.line3 {
      margin: 5px 0;
      width: 25px;
      transform: translateY(-8px);
    }
  }
`;

export const NavlinkWrapper = styled.ul`
  list-style: none;
  transition: all 0.3s ease;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (min-width: 1100px) {
    gap: 2rem;
  }

  @media (max-width: 768px) {
    &.desktop-menu {
      display: none;
    }
  }

  &.mobile-menu {
    height: 40%;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;

    & li {
      font-size: 1rem;
      padding-bottom: 0.75rem;
      padding-left: 0.5rem;
      border-bottom: 1px solid #7d7d7d;

      @media (min-width: 375px) {
        font-size: 1.25rem;
        padding-bottom: 1rem;
      }
    }
  }
`;

export const Navlink = styled.li`
  font-size: 1rem;
  line-height: 1.2rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 769px) {
    &.desktop-menu {
      margin-left: 10rem;
    }
  }

  @media (max-width: 540px) {
    &.desktop-menu {
      display: none;
    }
  }

  &.mobile-menu {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  font-size: 1.2rem;
  padding: 0.3rem 0.8rem;
  color: ${({ registerBtn }) => (registerBtn ? "#fff" : "#7d9775")};
  background-color: ${({ registerBtn }) => (registerBtn ? "#7d9775" : "#fff")};
  border: 1.5px solid #7d9775;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    color: ${({ registerBtn }) => (registerBtn ? "#7d9775" : "#fff")};
    background-color: ${({ registerBtn }) =>
      registerBtn ? "#fff" : "#7d9775"};
  }

  &.mobile-menu {
    padding: 0.5rem 2rem;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: ${({ scrollNav }) => (scrollNav ? "7vh" : "11vh")};
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  width: 60vw;
  height: ${({ scrollNav }) => (scrollNav ? "93vh" : "89vh")};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  transition: right 0.3s ease;
  box-shadow: -2px 18px 15px rgba(0, 0, 0, 0.55);
  z-index: 10;
  transition: all 0.2s;
`;

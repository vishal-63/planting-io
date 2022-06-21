import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";

const Container = styled.section`
  width: 50vw;
  min-height: calc(100vh - 60px);
  padding-top: 2rem;
  transform: ${({ menuOpen }) =>
    menuOpen ? "translate(0,0)" : "translate(-100%,0)"};
  transition: all 0.4s;
  border-right: 1px solid #dadada;
  position: fixed;
  top: 60px;
  left: 0;
  background-color: #fff;
  z-index: 1;
  overflow-y: auto;

  @media (min-width: 768px) {
    width: 275px;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

const ListItem = styled.li`
  font-size: 1rem;
  color: #000;
  padding: 0.5rem 0.5rem 0.5rem 2rem;
  transition: all 0.2s;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 5px;
    background-color: #28c274;
    opacity: 0;
    transition: all 0.2s;
  }

  &.active {
    color: #28c274;
    &::before {
      opacity: 1;
    }
  }

  &:hover {
    color: #28c274;
  }

  &:hover::before {
    opacity: 1;
  }

  & > svg.icon {
    font-size: 1.3rem;
    transform: ${({ isDropdownOpen }) =>
      isDropdownOpen ? "rotate(180deg)" : "rotate(360deg)"};
    transition: transform 0.3s;
    transform-origin: center center;
  }
`;

const DropdownContainer = styled.ul`
  position: absolute;
  top: 100%;
  left: 5%;
  display: ${({ isDropdownOpen }) => (isDropdownOpen ? "block" : "none")};
`;

const DashboardMenu = ({ activePage, menuOpen, listItems, adminPage }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <Container menuOpen={menuOpen}>
      <List>
        {listItems.map((item, index) => (
          <ListItem
            className={activePage === item.page ? "active" : ""}
            key={index}
          >
            <Link to={item.path}>{item.name}</Link>
          </ListItem>
        ))}
        {adminPage && (
          <ListItem
            className={activePage === "reports" ? "active" : ""}
            isDropdownOpen={isDropdownOpen}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Reports
            <BiChevronDown className="icon" />
            <DropdownContainer isDropdownOpen={isDropdownOpen}>
              <ListItem>
                <Link to="/admin/users-report">Users Report</Link>
              </ListItem>
              <ListItem>
                <Link to="/admin/nurseries-report">Nurseries Report</Link>
              </ListItem>
              <ListItem>
                <Link to="/admin/products-report">Products Report</Link>
              </ListItem>
              <ListItem>
                <Link to="/admin/services-report">Services Report</Link>
              </ListItem>
              <ListItem>
                <Link to="/admin/orders-report">Orders Report</Link>
              </ListItem>
            </DropdownContainer>
          </ListItem>
        )}
      </List>
    </Container>
  );
};

export default DashboardMenu;

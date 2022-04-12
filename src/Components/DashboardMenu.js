import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.section`
  width: 50vw;
  height: calc(100vh - 60px);
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
  padding: 0.5rem 0 0.5rem 2rem;
  transition: all 0.2s;
  cursor: pointer;
  position: relative;

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
`;

const DashboardMenu = ({ activePage, menuOpen, listItems }) => {
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
      </List>
    </Container>
  );
};

export default DashboardMenu;

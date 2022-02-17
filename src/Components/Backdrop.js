import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";

const Backdrop = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #000000e1;
  z-index: 99;

  & .close-button {
    position: absolute;
    top: 25px;
    right: 25px;
    height: 1.75rem;
    width: 1.75rem;
    cursor: pointer;
  }
`;

const ModalContainer = ({ children, onClick }) => {
  return <Backdrop onClick={onClick}>{children}</Backdrop>;
};

export default ModalContainer;

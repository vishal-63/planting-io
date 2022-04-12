import React from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

const AlertContainer = styled.div`
  position: fixed;
  top: 1.5%;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  align-items: center;
  column-gap: 1rem;
  padding: 0.5rem 1.2rem;

  background-color: #fff;
  border: 1px solid;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);

  &.success {
    background-color: #108f54;
    color: #fff;
  }

  &.error {
    background-color: #cb4754;
    color: #fff;
  }

  & > span {
    cursor: pointer;
    display: flex;
    color: inherit;
  }
`;

const Alert = ({ children, onClick, className }) => {
  return (
    <AlertContainer className={className}>
      {children}
      <span>
        <AiOutlineClose onClick={onClick} />
      </span>
    </AlertContainer>
  );
};

export default Alert;

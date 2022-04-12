import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  height: 60px;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #dadada;
  position: sticky;
  top: 0;
  z-index: 9;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: #333;
  font-size: 1.75rem;

  & svg {
    display: block;

    @media (min-width: 1100px) {
      display: none;
    }
  }

  & img {
    @media (max-width: 768px) {
      width: 150px;
    }
  }
`;

export const Icons = styled.div`
  color: #666;
  font-size: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;

  & span {
    color: #212121;
    margin-right: 0.75rem;
    font-size: 1rem;

    @media (max-width: 540px) {
      display: none;
    }
  }

  & svg {
    margin-right: 1.5rem;
    @media (max-width: 540px) {
      font-size: 1rem;
      margin-right: 1rem;
    }
  }

  & svg:last-child {
    margin: 0;
  }

  & > div {
    display: flex;
    position: relative;
    margin-right: 1.5rem;

    & > span.notification-dot {
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(-30%, -50%);
      display: inline-block;
      height: 0.65rem;
      width: 0.65rem;
      background-color: #265bff;
      border-radius: 1rem;
    }
  }
`;

export const DropDownContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

export const DropDownMenu = styled.ul`
  position: absolute;
  top: 45px;
  left: 50%;
  transform: translateX(-90%);
  list-style: none;
  font-size: 1rem;
  color: #3a3a3a;
  background-color: #fbfbfb;
  visibility: ${({ menuOpen }) => (menuOpen ? "visible" : "hidden")};

  & li:hover {
    background-color: #e5e5e5;
  }

  & a {
    display: inline-block;
    padding: 0.5rem 2rem;
  }
`;

export const ModalDiv = styled.div`
  background-color: #fff;
  padding: 1.5rem 2.5rem;
  border-radius: 12px;
  /* width: 0vw; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;

  & > div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;

    & span {
      font-size: 2.5rem;
      color: #e16565;
      margin-right: 1rem;
      display: flex;
    }
  }
`;

export const Modalbutton = styled.button`
  font-size: 1rem;
  padding: 0.3rem 0.8rem;
  border-radius: 5px;
  margin-top: 1rem;
  cursor: pointer;
  margin-left: 1rem;

  &.logout {
    color: #e16565;
    background-color: #fff;
    border: 1px solid #e16565;
  }

  &.cancel {
    color: #3f3f3f;
    background-color: #fff;
    border: 1px solid #666;
  }
`;

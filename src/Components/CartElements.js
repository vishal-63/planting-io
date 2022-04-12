import styled, { keyframes } from "styled-components";

export const CartContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  min-height: calc(100vh - 390px);

  @media (min-width: 1100px) {
    width: 87vw;
  }
`;

export const CartTitle = styled.h2`
  font-size: 2rem;
  font-family: Lora, "sans serif";
  font-weight: 500;
  margin: 2rem 0;
`;

export const CartTable = styled.table`
  width: inherit;
  border-bottom: 1px solid #dadada;

  & th {
    font-size: 0.875rem;
    color: #666;
    padding-bottom: 1rem;
    text-align: left;
    font-weight: 400;
    border-bottom: 1px solid #dadada;
  }
  & th.price {
    text-align: right;
  }

  & td {
    font-size: 1rem;
    padding: 1.5rem 0;
  }
  & td.product {
    color: #000;
  }
  & td.units {
    color: #7d7d7d;
    font-size: 1.25rem;
    & svg {
      cursor: pointer;
    }
  }
  & td.price {
    font-family: Lora, "sans serif";
    text-align: right;
    font-weight: 500;
  }
  & td > div {
    display: flex;
    align-items: center;
  }
  & td img {
    width: 100px;
    height: 125px;
    margin-right: 1rem;
  }

  & th:first-child,
  & td:first-child {
    width: 70%;
  }
`;

export const CartFooter = styled.div`
  width: inherit;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-family: Lora, "sans serif";

  & div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: max-content;
    padding: 0.5rem 0;
  }

  & div.tax {
    border-bottom: 1px solid #dadada;
  }
  & div.grand-total {
    margin-top: 0.5rem;
  }
`;

export const Label = styled.span`
  color: #666;
  font-size: 0.85rem;
`;

export const Amount = styled.span`
  color: #000;
  font-size: 1rem;
  margin-left: 0.75rem;
`;

const loadingAnimation = keyframes`
from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const CheckoutButton = styled.button`
  color: #fff;
  background-color: #000;
  font-size: 1.2rem;
  padding: 0.6rem 1.5rem;
  cursor: pointer;
  margin-top: 1rem;
  border: none;
  outline: none;
  display: flex;

  & span.loader {
    display: inline-block;
    width: 25px;
    height: 25px;
    background: none;
    border: 3px solid #dfdfdf;
    border-top-color: #999;
    border-radius: 20px;
    animation: ${loadingAnimation} 1s linear infinite;
  }
`;

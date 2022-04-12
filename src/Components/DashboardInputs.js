import styled from "styled-components";

export const AddProductsForm = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 1rem;

  & .photo-input {
    width: 100%;
    margin: 1rem 0;
  }

  & input[type="file"] {
    margin-left: 1rem;
  }
`;

export const Label = styled.label`
  position: relative;
  pointer-events: none;
  font-size: 0.9rem;
`;

export const Wrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  margin: 1rem 0;

  & img {
    width: 125px;
    height: 150px;
    margin-top: 1rem;
    border-radius: 4px;
  }
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #000000;
  width: 100%;
  height: 50px;
  outline: none;

  &.invalid {
    border-color: #dc3545;
    background-color: rgb(220 53 69 / 25%);
  }
  &:disabled {
    background: none;
    color: inherit;
  }
`;

export const ProductDescription = styled.textarea`
  margin: 1.1rem 0 0;
  height: 75px;
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 1px solid #000000;
  resize: none;

  &.invalid {
    border-color: #dc3545;
  }

  &::placeholder {
    color: #dc3545;
  }
`;

export const ProductImage = styled.img`
  height: 150px;
  object-fit: contain;
  border-radius: 8px;
`;

export const ProductImageContainer = styled.div`
  height: 100%;
  width: max-content;
  border-radius: 8px;
  position: relative;
  margin-right: 1rem;

  & span {
    position: absolute;
    top: 5%;
    right: 5%;
    background-color: #888;
    color: #fff;
    padding: 0.25rem;
    border-radius: 4px;
    display: flex;
    cursor: pointer;
    opacity: 0;
    transition: all 0.2s ease;
  }

  &:hover span {
    opacity: 1;
  }
`;

export const DashboardButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem 2rem;
  border-radius: 5px;
  margin-top: 1rem;
  cursor: pointer;

  &.primary {
    color: #fff;
    background-color: #17a42e;
    border: 1px solid #17a42e;
    margin-right: 1.5rem;
  }

  &.cancel {
    color: #e16565;
    background-color: #fff;
    border: 1px solid #e16565;
  }

  &.tertiary {
    color: #666;
    background-color: #fff;
    border: 1px solid #666;
  }

  &:hover {
    filter: saturate(1.2);
  }
`;

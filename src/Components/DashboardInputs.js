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
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #000000;
  width: 100%;
  height: 50px;
  outline: none;
  padding: 0 0.5rem;

  &.invalid {
    border-color: #dc3545;
    background-color: rgb(220 53 69 / 25%);
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

  &:hover {
    filter: saturate(1.2);
  }
`;

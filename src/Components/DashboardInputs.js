import styled from "styled-components";
import { Link } from "react-router-dom";

export const AddProductsForm = styled.div`
  width: 100%;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  padding:0 1rem;
`;

export const Label = styled.label`
  position: relative;
  pointer-events: none;
  font-size:0.9rem;
  
`;
export const Wrapper1 = styled.div`
  display:flex;
  flex-direction:column;
  width:45%;
  margin: 2rem 0;
`;
export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #000000;
  width:100%;
  height:50px;

  &:focus{
    border:none;
  }
`;

export const ProductDescription = styled.textarea`
  margin: 1.1rem 0 0;
  height: 75px;
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 1px solid #000000;
  resize:none;
`;

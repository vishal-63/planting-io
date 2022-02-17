import styled from "styled-components";

export const AccountSection = styled.section`
  width: 100%;
  padding: 0 1rem;
  margin: 0 auto 3rem;

  @media (min-width: 1100px) {
    padding: 0 6.5vw;
  }
`;

export const AccountTitle = styled.div`
  font-size: 2rem;
  font-family: Lora, "sans serif";
  font-weight: 500;
  margin: 2rem 0;
`;

export const Sidebar = styled.aside`
  width: 225px;
  padding: 1rem 2rem 1rem 1rem;
  border-right: 1px solid #dfdfdf;
  flex-shrink: 0;
`;
export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #666;
  font-size: 2.5rem;

  & .name {
    margin-top: 0.5rem;
    font-size: 1rem;
    color: #0b3d2c;
  }

  & span {
    font-size: 0.8rem;
    cursor: pointer;
  }
`;

export const SectionLinks = styled.div`
  margin-top: 4rem;
  font-size: 1rem;
  font-family: Lora, "sans serif";
  cursor: pointer;

  & div {
    padding-left: 0.4rem;
    border-left: 3px solid transparent;
    margin-bottom: 0.5rem;
  }

  & .active {
    color: #28c274;
    border-color: #28c274;
  }
`;

export const MainWrapper = styled.div`
  padding: 1rem 0 1rem 2rem;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  font-family: Lora, "sans serif";
  font-weight: 500;
  color: #0b3d2c;
`;

export const OrderCard = styled.div`
  padding: 1.5rem;
  margin-top: 1.5rem;
  width: 100%;
  border: 1px solid #9f9f9f;
  border-radius: 15px;
  font-size: 0.8rem;

  &:hover {
    background-color: #fafafa;
  }

  & .order-id {
    color: #0b32dc;
    font-size: 1rem;
  }
`;

export const OrderInfo = styled.div`
  width: inherit;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 1rem;
  z-index: 1;

  & img {
    height: 100px;
  }
`;

export const ProductDetails = styled.div`
  display: flex;

  & > div {
    width: 200px;
  }

  & .product-name {
    margin-left: 1rem;
    font-size: 1rem;
  }
  & .vendor {
    color: #666;
    margin-left: 1rem;
  }
  & .view-details {
    color: #669aff;
    text-decoration: underline;
    margin-top: 0.5rem;
    margin-left: 1rem;
    cursor: pointer;
  }
`;

export const OrderAmount = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
`;

export const ShippingInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 220px;

  & .shipping {
    font-size: 1rem;
    color: #ff5400;
  }

  & .delivered {
    font-size: 1rem;
    color: #29db2d;
  }
`;

export const OrderDetails = styled.div`
  font-size: 0.85rem;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  display: none;

  &.visible {
    display: flex;
  }

  & div {
    max-width: 225px;

    & td.tax {
      padding-bottom: 0.5rem;
      border-bottom: 1px solid #dfdfdf;
    }
    & td.total {
      padding-top: 0.5rem;
    }

    & td {
      color: #2f2f2f;
    }

    & td:nth-child(2) {
      padding-left: 0.5rem;
      font-weight: 500;
    }
  }
`;

export const DetailTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  color: #2f2f2f;
  margin-bottom: 0.55rem;
`;

export const ReviewContainer = styled.div`
  margin-right: 2rem;

  & .stars {
    display: flex;
    gap: 1rem;
    font-size: 1.5rem;

    & svg {
      cursor: pointer;
    }
  }

  & textarea {
    resize: none;
    width: 250px;
    margin-top: 1rem;
    padding: 0.25rem;
    background-color: transparent;
    border-color: #7d7d7d;
    border-radius: 4px;
    outline: none;

    &:focus {
      border-color: #333;
    }
  }
`;

export const SubmitButton = styled.button`
  color: #fff;
  background-color: #28c274;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  margin-top: 0.75rem;
  border: none;
  cursor: pointer;
`;

export const AddressWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 4rem;
  margin-top: 1.5rem;
`;

export const AddNew = styled.div`
  color: #0b32dc;
  width: max-content;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid #0b32dc;
  border-radius: 8px;
  cursor: pointer;
`;

export const Address = styled.div`
  width: 250px;
  font-size: 1rem;
  position: relative;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);

  & .address-name {
    font-size: 1.15rem;
    color: #0b3d2c;
    margin-bottom: 1rem;
  }
`;

export const EditAddress = styled.span`
  font-size: 1rem;
  color: #2f2f2f;
  background-color: #f8f8f8;
  border-radius: 4px;
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
`;

export const AddressModalContainer = styled.div`
  background-color: #fff;
  padding: 1.5rem 3rem;
  border-radius: 12px;
  width: 50vw;
`;

export const AccountForm = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  row-gap: 1rem;
  column-gap: 10%;
  margin-top: 2rem;
`;

export const InputWrapper = styled.div`
  width: 45%;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  color: #3f3f3f;
  padding-bottom: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #7d7d7d;
  font-size: 1rem;
  padding: 0.5rem 0;
  outline: none;

  &.invalid {
    background-color: rgb(220 53 69 / 25%);
  }
  &::placeholder,
  &:-ms-input-placeholder,
  &::-ms-input-placeholder {
    color: #dc3545;
    font-size: 0.75rem;
  }
`;

export const AccountButton = styled.button`
  font-size: 1rem;
  padding: 0.4rem 1rem;
  border: 1px solid transparent;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 1rem;
  margin-top: 1rem;

  &.primary {
    color: #fff;
    background-color: #28c274;
    font-weight: 500;
  }
  &.cancel {
    color: #666;
    border-color: #666;
    background-color: transparent;
  }
`;

export const ChangePasswordWrapper = styled.div`
  background-color: #fff;
  padding: 1.5rem 2rem;
  border-radius: 12px;
  width: 600px;
`;

import styled from "styled-components";

export const ItemPageContainer = styled.section`
  width: 100%;
  padding: 3rem 0;
  background-color: #f1fff7;
  background-color: #ffffff;
  background-color: #ffffff;
  background-color: #ffffff;
  background-color: #ffffff;
  opacity: 1;
  background-image: radial-gradient(
      rgba(59, 120, 90, 0.69) 0.9500000000000001px,
      transparent 0.9500000000000001px
    ),
    radial-gradient(
      rgba(59, 120, 90, 0.69) 0.9500000000000001px,
      #ffffff 0.9500000000000001px
    );
  background-size: 38px 38px;
  background-position: 0 0, 19px 19px;

  /* @media (min-width: 1100px) {
	} */
`;

export const ItemName = styled.h1`
  color: #2a7d2e;
  font-size: 2.5rem;
  font-family: Lora, "sans serif";
`;

export const ItemContent = styled.div`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    border-radius: 15px;
  }
  & .product-image {
    display: flex;
    justify-content: center;
    margin: 0;
    width: 40%;
  }
  & .info {
    width: 45%;
    margin-left: 3rem;
  }
`;
export const Price = styled.div`
  display: flex;
  align-items: center;
  font-family: Lora, "sans serif";
  color: #0b3d2c;
  font-weight: 500;
  font-size: 1.5rem;
  margin-top: 1.5rem;

  & div.actual-price {
    color: #7d7d7d;
    font-size: 1.2rem;
    font-weight: 500;
    text-decoration: line-through;
    margin-left: 0.5rem;
  }
`;

export const Description = styled.div`
  color: #2f2f2f;
  font-size: 1rem;
  margin: 1rem 0 1.5rem;
  letter-spacing: 0.8px;

  & div {
    font-size: 1.4rem;
    font-weight: 500;
    color: #0b3d2c;
    margin-bottom: 0.5rem;
    letter-spacing: 0px;
  }
`;

export const AddtoCartWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e5e5e5;
`;

export const NoOfUnits = styled.div`
  font-size: 1rem;
  color: #444;
  border: 1px solid #dfdfdf;
  padding: 0.5rem;
  margin-right: 1rem;
  background-color: #fff;

  & span {
    padding: 0.5rem;
    cursor: pointer;
  }
  & span.units {
    cursor: auto;
  }
`;

export const AddtoCartButton = styled.button`
  background-color: #2a7d2e;
  color: #fff;
  font-size: 1rem;
  padding: 0.6rem 1.2rem;
  border-radius: 30px;
  border: none;
  outline: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: auto;
  }
`;

export const Category = styled.div`
  margin-top: 1.5rem;
  color: #2f2f2f;
  font-size: 1rem;
  display: flex;
  align-items: center;

  & div {
    color: #2a7d2e;
    background-color: #fff;
    border: 1px solid #dfdfdf;
    margin-left: 1rem;
    border-radius: 30px;
    padding: 0.3rem 1rem;
    cursor: pointer;
  }
`;

export const ReviewsContainer = styled.div`
  width: 87vw;
  margin: 3rem auto 0;
  color: #343434;
`;

export const ReviewTitle = styled.div`
  width: 100%;
  font-size: 1.25rem;
  color: #2a7d2e;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #dfdfdf;
  margin-bottom: 1rem;

  & p {
    width: max-content;
    border-bottom: 2px solid #2a7d2e;
    padding-bottom: 0.5rem;
  }
`;

export const Review = styled.div`
  font-size: 1rem;
  color: #2d2a32;
  padding-bottom: 1rem;
  border-bottom: 1px solid #dfdfdf;
  margin-bottom: 1rem;

  &:last-child {
    border: none;
    padding: 0;
    margin: 0;
  }

  & .customer-name {
    font-size: 1.1rem;
    font-weight: 500;
    color: #000;
  }
`;

export const RelatedProducts = styled.div`
  width: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;

  & .title {
    color: #2a7d2e;
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
  }
`;

import styled from "styled-components";

export const ServiceSection = styled.section`
  width: 100%;
  margin: 2rem auto 3rem;

  @media (min-width: 900px) {
    width: 87vw;
  }
`;

export const ServiceTitle = styled.h1`
  font-size: 2rem;
  font-family: Lora, "sans serif";
  color: #2a7d2e;
  font-weight: 600;
`;

export const ServiceCard = styled.div`
  width: 100%;
  padding: 1.5rem;
  margin-top: 2rem;
  border: 1px solid #dadada;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  height: ${({ reviewVisible }) => (reviewVisible ? "auto" : "450px")};

  & > div.service-info {
    display: flex;
    align-items: center;
    height: 400px;

    & .select-wrapper {
      width: 250px;

      & .select-trigger {
        height: 3.75rem;
      }
    }
  }

  & img {
    height: 100%;
    border-radius: 12px 0 0 12px;
    margin-right: 2rem;
    width: 375px;

    @media (min-width: 1100px) {
      width: 500px;
    }
  }
`;

export const ServiceContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: inherit;

  & h3 {
    font-size: 1.5rem;
    font-family: Lora, "sans serif";
    font-weight: 500;
  }

  & p {
    color: #2d2a32;
    font-size: 1rem;
  }
`;

export const ServicePrice = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  gap: 0.5rem;
  color: #115533;
`;

export const ServiceStars = styled.div`
  font-size: 1.25rem;
  display: flex;

  & span,
  & div {
    font-size: 0.85rem;
  }
  & div {
    margin-left: 1rem;
  }
`;

export const AddtoCart = styled.div`
  color: #fff;
  background-color: #28c274;
  font-size: 1.2rem;
  padding: 0.5rem 1.25rem;
  border: 1px solid #28c274;
  border-radius: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;

  & svg {
    margin-right: 1rem;
  }

  &:hover {
    color: #28c274;
    background-color: #fff;
  }
`;

export const ReviewsContainer = styled.div`
  width: inherit;
  margin: 3rem auto 0;
  color: #343434;
  transform: translateY(-100%);
  opacity: 0;
  transition: all 0.3s;
  z-index: -1;

  &.visible {
    transform: translateY(0);
    opacity: 1;
    transition: all 0.3s;
  }
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

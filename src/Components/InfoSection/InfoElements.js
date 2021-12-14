import styled from "styled-components";

export const Title = styled.h3`
  font-family: Lora, "sans serif";
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.75px;
  color: #000;
`;

export const Button = styled.button`
  font-size: 1rem;
  font-family: Lora, "sans serif";
  padding: 0.6rem 1.2rem;
  border: 1.5px solid #28c274;
  border-radius: 10px;
  margin-top: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 0.5rem #28c27488;
    transition: all 0.3s ease;
  }

  &.secondary-btn {
    color: #28c274;
    background-color: transparent;
  }
`;

export const FeaturedProducts = styled.div`
  width: 100%;
  margin: 3rem auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    max-width: 90vw;
  }

  @media (min-width: 1100px) {
    max-width: 1100px;
  }
`;

export const PlantCardWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  max-width: 100%;

  @media (min-width: 768px) {
    gap: 1.5rem;
  }

  @media (min-width: 900px) {
    gap: 2rem;
  }
`;

export const PlantCard = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 0.25rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 0.75rem rgba(0, 0, 0, 0.4);
    transition: all 0.2s ease-in-out;
  }

  @media (min-width: 768px) {
    width: 175px;
  }

  @media (min-width: 1100px) {
    width: 200px;
  }
`;

export const PlantImg = styled.img`
  width: 100%;
  border-radius: 15px;
`;

export const PlantName = styled.p`
  display: inline;
  font-size: 0.875rem;
`;

export const PlantStarsWrapper = styled.div`
  color: #ffbf34;
  display: flex;

  & svg {
    height: 0.75rem;
    width: 0.75rem;
  }
`;

export const PlantPrice = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0.5rem;
`;

export const DiscountedPrice = styled.div`
  color: #000;
  font-size: 1rem;
  display: flex;
  align-items: center;
  margin-right: 0.25rem;

  @media (min-width: 900px) {
    font-size: 1.1rem;
  }
`;

export const ActualPrice = styled.span`
  color: #7d7d7d;
  font-size: 0.75rem;
  text-decoration: line-through;
  transform: translateY(12%);
`;

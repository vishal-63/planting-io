import styled from "styled-components";

export const TopbarContainer = styled.div`
  max-width: 85vw;
  margin: 0 auto;
  width: 100%;
  height: 4vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-bottom: 2px solid #dddddd88;

  @media (min-width: 768px) {
    height: 5vh;
  }
`;

export const FollowLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 768px) {
    gap: 0.75rem;
  }

  & svg {
    color: #a4a4a4;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
    }

    @media (max-width: 768px) {
      height: 0.75rem;
      width: 0.75rem;
    }
  }
`;

export const FollowText = styled.span`
  color: #a4a4a4;
  font-size: 12px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const UserIconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  height: 100%;

  @media (min-width: 768px) {
    gap: 0.5rem;
  }

  & svg {
    color: #7d7d7d;
    padding: 0;
    height: 100%;
    width: 100%;
    padding: 8%;
    cursor: pointer;
  }
`;

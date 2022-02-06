import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: calc(100vh - 60px);
  overflow-y: scroll;
  background-color: #fbfbfb;
  padding: 1.5rem 1rem;
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 1100px) {
    width: calc(100vw - 275px);
    left: 275px;
  }

  @media (min-width: 768px) {
    padding: 2.5rem 1.5rem;
  }
`;

export const StatsCardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 1rem;
`;

export const StatsCard = styled.div`
  width: 185px;
  height: 100px;
  padding: 0.5rem 1rem;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 540px) {
    width: 225px;
    height: 125px;
    padding: 1rem 1.5rem;
  }
`;

export const StatsContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const StatsCardNumber = styled.div`
  color: #000;
  font-size: 1.25rem;
`;

export const Icon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;

  &.person {
    background-color: #e0f9fc;
    color: #00cfe8;
  }

  &.leaf {
    background-color: #e5f8ed;
    color: #28c76f;
  }

  &.box {
    background-color: #fceaea;
    color: #ea5455;
  }

  &.can {
    background-color: #e0f9fc;
    color: #7367f0;
  }
`;

export const CardTitle = styled.div`
  color: #7d7d7d;
  font-size: 1rem;
  max-width: 60%;
`;

export const Card = styled.div`
  width: 100%;
  padding: 1rem 1.5rem;
  margin-top: 2rem;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  border-radius: 8px;

  & canvas {
    max-height: 300px;
  }
`;

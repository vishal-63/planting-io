import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: calc(100vh - 60px);
  overflow-y: scroll;
  background-color: #fbfbfb;
  padding: 2.5rem 1.5rem;
  display: grid;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  grid-template-columns: auto;
  grid-template-rows: repeat(5, 1fr);
  position: relative;

  @media (min-width: 540px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(2, 175px) auto;
    grid-template-rows: repeat(5, 1fr);
  }

  @media (min-width: 1100px) {
    width: calc(100vw - 275px);
    left: 275px;
  }
`;

export const DashboardCard = styled.div`
  padding: 0.5rem 0.75rem 0.75rem;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px #23232340;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: min-content;

  @media (max-width: 768px) {
    overflow-x: scroll;
    width: 100%;
  }

  &.statistics {
    padding: 0.5rem 1.25rem 0.75rem;
    overflow: initial;

    @media (min-width: 768px) {
      height: auto;
    }
  }

  & canvas {
    height: 100px !important;
    margin: auto 0 auto -0.25rem;
  }

  & canvas.earnings {
    height: 200px !important;
    /* width: 100% !important; */
    margin: 1rem auto auto;
  }

  &:nth-child(1) {
    @media (min-width: 540px) {
      grid-area: 1 / 1 / 2 / 2;
    }
    @media (min-width: 900px) {
      grid-area: 1 / 1 / 2 / 2;
    }
  }
  &:nth-child(2) {
    @media (min-width: 540px) {
      grid-area: 1 / 2 / 2 / 3;
    }
    @media (min-width: 900px) {
      grid-area: 1 / 2 / 2 / 3;
    }
  }
  &:nth-child(3) {
    @media (min-width: 540px) {
      grid-area: 2 / 1 / 3 / 3;
    }
    @media (min-width: 900px) {
      grid-area: 1 / 3 / 2 / 4;
    }
  }
  &:nth-child(4) {
    @media (min-width: 540px) {
      grid-area: 3 / 1 / 4 / 3;
    }
    @media (min-width: 900px) {
      grid-area: 2 / 1 / 4 / 3;
    }
  }
  &:nth-child(5) {
    @media (min-width: 540px) {
      grid-area: 4 / 1 / 5 / 3;
    }
    @media (min-width: 900px) {
      grid-area: 2 / 3 / 4 / 4;
    }
  }
  &:nth-child(6) {
    @media (min-width: 540px) {
      grid-area: 5 / 1 / 6 / 3;
    }
    @media (min-width: 900px) {
      grid-area: 4 / 1 / 6 / 4;
    }
  }
`;

export const DashboardCardTitle = styled.div`
  font-size: 0.85rem;
  color: #7d7d7d;

  & span {
    font-size: 0.6rem;
  }
`;

export const DashboardCardNumber = styled.div`
  font-size: 1.2rem;
  color: #000;
  display: flex;
  flex-direction: column;

  & span {
    color: #21d854;
    font-size: 0.8rem;
  }
`;

export const DashboardStatistics = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin: 1rem 0 auto;
  row-gap: 1rem;

  @media (min-width: 768px) {
    margin: auto 0;
  }
`;

export const StatisticsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  & .icon {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    font-size: 1.25rem;
    display: grid;
    place-items: center;

    @media (min-width: 768px) {
      width: 50px;
      height: 50px;
      font-size: 1.75rem;
    }
  }

  &:nth-child(1) {
    & .icon {
      background-color: #eeedfd;
      color: #7367f0;
    }
  }

  &:nth-child(2) {
    & .icon {
      background-color: #e0f9fc;
      color: #00cfe8;
    }
  }

  &:nth-child(3) {
    & .icon {
      background-color: #fceaea;
      color: #ea5455;
    }
  }

  &:nth-child(4) {
    & .icon {
      background-color: #e5f8ed;
      color: #28c76f;
    }
  }
`;

export const StatisticsData = styled.div`
  font-size: 1.25rem;
  color: #5e5873;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & span {
    font-size: 01rem;
    color: #6e6b7b;
  }
`;

export const DashboardTable = styled.table`
  font-size: 0.875rem;
  width: 100%;
  margin-top: 0.25rem;
  border-spacing: 0;
  overflow: scroll;

  @media (max-width: 900px) {
    width: max-content;
  }

  & th,
  td {
    border-bottom: 1px solid #dadada;
    padding: 0.75rem 0.5rem;
  }

  & th {
    text-align: left;
    color: #000;
  }
`;

export const DashboardTableStatus = styled.div`
  font-size: 0.75rem;
  color: #fff;
  width: max-content;
  padding: 0.2rem 0.5rem;
  border-radius: 10px;

  &.received {
    background-color: #ff9666;
  }

  &.completed,
  &.delivered,
  &.payment.received {
    background-color: #29db2d;
  }

  &.shipping,
  &.payment.pending {
    background-color: #669aff;
  }
`;

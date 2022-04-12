import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: calc(100vh - 60px);
  overflow-y: scroll;
  background-color: #fbfbfb;
  padding: 2.5rem 1.5rem;
  position: relative;

  @media (min-width: 1100px) {
    width: calc(100vw - 275px);
    left: 275px;
  }
`;

export const HeaderInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;

  & img {
    height: fit-content;
  }
`;

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  & .title {
    color: #3f3f3f;
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export const OrderDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #4f4f4f;
  margin: 0.5rem 0;
  font-size: 1rem;

  & .key {
    font-weight: 600;
  }
`;

export const ShippingAddressDiv = styled.div`
  color: #4f4f4f;
  font-size: 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;

  & > div.shipping-info {
    text-align: right;
  }

  & .address {
    max-width: 300px;
  }

  & .title {
    color: #3f3f3f;
    font-size: 1rem;
    font-weight: 700;
    margin: 10px 0;
  }
`;

export const ItemsTable = styled.table`
  width: 100%;
  overflow: scroll;
  color: #3f3f3f;
  margin: 1.5rem 0;
  font-size: 1rem;

  & th,
  & td {
    border-bottom: 1px solid #dadada;
    padding: 1rem;
  }

  & th.item,
  & td.item {
    width: 40%;
  }

  & td > div {
    display: flex;
    align-items: center;
  }
  & th {
    color: #3f3f3f;
    font-size: 500;
    text-align: left;
  }

  & td img {
    height: 75px;
    margin-right: 0.5rem;
  }

  & td > p.details {
    max-width: 400px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: inherit;
  }
`;
export const InvoiceTotalInfo = styled.div`
  margin: 1rem 0;

  & > div {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;

    & .key {
      font-weight: 600;
    }
  }

  & .grand-total {
    font-size: 1.5rem;
    font-weight: 700;
    color: #3f3f3f;
  }
`;

import ReactPaginate from "react-paginate";
import styled from "styled-components";

export const ShopContainer = styled.section`
  width: 100%;
  margin: 3rem auto;
  display: flex;

  @media (min-width: 1100px) {
    width: 87vw;
  }
`;

export const Sidebar = styled.aside`
  width: 225px;
  padding: 2rem 1rem;
  margin-right: 2rem;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  height: fit-content;

  & > div {
    width: 100%;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  }

  & > div:not(:last-child) {
    border-bottom: 1px solid #dcdcdc;
  }
`;

export const SidebarSearch = styled.div`
  width: 100%;
  height: 40px;
  background-color: #fff;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & input {
    border: none;
    outline: none;
    width: inherit;
    font-size: 0.75rem;
  }
`;

export const SidebarTitle = styled.p`
  color: #333;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
`;

export const SidebarLabel = styled.p`
  color: #333;
  font-size: 14px;
  margin-bottom: 0.5rem;
  cursor: pointer;

  &:last-child {
    margin-bottom: 1rem;
  }
`;

export const CheckboxLabel = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  cursor: pointer;

  & input {
    margin-right: 0.5rem;
  }
`;

export const PageInfoDiv = styled.div`
  width: 100%;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #dadada;
  color: #666;
  font-size: 0.875rem;
  margin-bottom: 1rem;

  &.second {
    margin-top: 1rem;
  }
`;

export const Pagination = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;

  & li {
    margin: 0 0.5rem;
    cursor: pointer;
  }

  & li.previous {
    margin: 0 0.5rem 0 0;
  }

  & li.next {
    margin: 0 0 0 0.5rem;
  }

  & li.active a {
    color: #28c374;
    font-weight: 500;
  }
`;

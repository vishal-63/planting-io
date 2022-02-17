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

export const Title = styled.h4`
  font-size: 1.1rem;
  color: #444;
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const Icon = styled.span`
  color: #fff;
  font-size: 0.85rem;
  width: fit-content;
  margin-right: 0.5rem;
  padding: 0.25rem;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &.edit {
    background-color: #2ec272;
  }
  &.view {
    background-color: #2e7bc2;
  }
  &.delete {
    background-color: #e16565;
  }
`;

export const ComplaintDescription = styled.p`
  color: #5c5b5b;
  font-size: 0.8rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: inherit;
`;

export const ComplaintModalWrapper = styled.div`
  width: 50vw;
  padding: 1.5rem 2rem;
  background-color: #fff;
  border-radius: 15px;

  & .id {
    color: #0b32dc;
    margin-bottom: 1rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 1rem;
  row-gap: 1rem;
  font-size: 1rem;

  & .heading {
    color: #666;
    font-weight: 500;
  }
`;

export const ComplaintStatus = styled.div`
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 1rem;

  &.unresolved {
    color: #e05e35;
  }

  &.resolved {
    color: #355ae0;
  }
`;

export const ComplaintReply = styled.textarea`
  resize: none;
  width: 100%;
  margin-top: 1.5rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  background-color: transparent;
  border-color: #7d7d7d;
  outline: none;

  &:focus {
    border-color: #333;
  }
`;

import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100vw;
  background-color: #28c27433;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem 0;

  & div {
    display: flex;
    justify-content: center;

    @media (max-width: 540px) {
      width: 100%;
      margin-bottom: 1rem;
    }
  }
`;

export const FooterLinks = styled.ul`
  align-self: flex-start;
  list-style-type: none;
`;

export const FooterLinkTitle = styled.h4`
  font-size: 1.2rem;
  font-family: Lora, "sans serif";
  font-weight: 400;
  color: #000;
  margin-bottom: 1rem;
`;

export const FooterLink = styled.li`
  font-size: 1rem;
  /* margin: 0.5rem 0; */
`;

export const CopyRights = styled.div`
  font-size: 0.85rem;
  color: #fff;
  background-color: #176e42;
  text-align: center;
  width: 100%;
  padding: 0.25rem 0;
`;

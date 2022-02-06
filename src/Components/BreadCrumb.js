import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CrumbContainer = styled.div`
  width: 100%;
  height: 40px;
  margin-top: ${({ scrollNav }) => (scrollNav ? "80px" : "0")};

  & div {
    height: inherit;
    border-bottom: 1px solid #dadada;
    font-family: Lora, "sans serif";
    font-size: 1rem;
    font-weight: 500;
    color: #000;

    & a {
      color: #19946b;
    }
  }

  @media (min-width: 768px) {
    padding: 0 6.5vw;
  }
`;

const BreadCrumb = ({ page }) => {
  const [scrollNav, setScrollNav] = useState(false);

  useEffect(() => {
    // set scrollNav value based on the scroll position
    window.addEventListener("scroll", () =>
      window.scrollY >= 38 ? setScrollNav(true) : setScrollNav(false)
    );
  }, [setScrollNav]);

  return (
    <CrumbContainer scrollNav={scrollNav}>
      <div>
        <Link to="/">Home</Link>
        &nbsp; &gt; {page}
      </div>
    </CrumbContainer>
  );
};

export default BreadCrumb;

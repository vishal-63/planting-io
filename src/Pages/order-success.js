import React, { useState, useEffect } from "react";
import { Cookies } from "react-cookie";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

import { UserNavbar } from "../Components/Navbar";
import Topbar from "../Components/Topbar";
import orderSuccess from "../Images/order-success.gif";

const SuccessContainer = styled.section`
  min-height: calc(100vh - 120px);
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & h2 {
    font-family: Lora, "sans serif";
    font-size: 2.5rem;
    font-weight: 500;

    & span {
      font-family: inherit;
      color: #08a88a;
    }
  }
`;

const OrderSuccess = () => {
  const [searchParams, setSeachParams] = useSearchParams();
  const id = searchParams.get("session_id");
  const [sessionId, setSessionId] = useState(id);

  useEffect(async () => {
    setSessionId(id);
    console.log(sessionId);

    const data = { sessionId: sessionId };
    const res = await fetch(
      `http://localhost:8080/api/order/save/${sessionId}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${new Cookies().get("userId")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const body = await res.text();
    console.log(body);
    console.log(res.ok);
  }, []);

  return (
    <>
      <Topbar />
      <UserNavbar />
      <SuccessContainer>
        <img src={orderSuccess} alt="" />
        <h2>
          <span>Yayy!</span> Your order was successful!
        </h2>
      </SuccessContainer>
    </>
  );
};

export default OrderSuccess;

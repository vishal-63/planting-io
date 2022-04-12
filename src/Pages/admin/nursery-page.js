import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { DashboardCard } from "../../Components/Dashboard Items/DashboardElements";
import DashboardHeader from "../../Components/DashboardHeader";
import DashboardMenu from "../../Components/DashboardMenu";
import { AdminMenu } from "../../data/dashboard-menu-items";
import {
  StatisticsData,
  StatisticsWrapper,
} from "../../Components/Dashboard Items/DashboardElements";
import { ItemsTable } from "../../Components/OrderPageElements";

import { AiOutlinePhone } from "react-icons/ai";
import { BsBox } from "react-icons/bs";
import { BiRupee } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";

const NurseryPage = () => {
  let params = useParams();
  const nurseryId = params.id;

  const [menuOpen, setMenuOpen] = React.useState(false);
  const [nursery, setNursery] = useState({});

  useEffect(() => {
    window.innerWidth >= 1100 ? setMenuOpen(true) : setMenuOpen(false);
  }, [setMenuOpen]);

  useEffect(async () => {
    const res = await fetch(
      `http://localhost:8080/api/admin/get-nursery/${nurseryId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${new Cookies().get("adminId")}`,
        },
      }
    );
    const body = await res.json();
    console.log(body);
    setNursery(body);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <DashboardHeader toggleMenu={toggleMenu} />
      <DashboardMenu
        activePage="order-list"
        menuOpen={menuOpen}
        listItems={AdminMenu}
      />
      <Container>
        <DashboardCard style={{ padding: "1rem 1.5rem" }}>
          <Title>{nursery.name}</Title>

          <InfoContainer>
            <div className="title">Nursery Information</div>
            <InfoWrapper>
              <div>
                <StatisticsWrapper>
                  <div className="icon">
                    <IoLocationOutline />
                  </div>
                  <div className="data">
                    {nursery.address}, {nursery.city} - {nursery.pincode}
                  </div>
                </StatisticsWrapper>

                <StatisticsWrapper>
                  <div className="icon">
                    <AiOutlinePhone />
                  </div>
                  <div className="data">
                    {nursery.email}
                    <br />
                    {nursery.phone}
                  </div>
                </StatisticsWrapper>
              </div>

              <div>
                <StatisticsWrapper>
                  <div
                    className="icon"
                    style={{ backgroundColor: "#fceaea", color: "#ea5455" }}
                  >
                    <BsBox />
                  </div>
                  <StatisticsData>
                    {nursery.noOfOrders}
                    <span>Orders</span>
                  </StatisticsData>
                </StatisticsWrapper>

                <StatisticsWrapper>
                  <div
                    className="icon"
                    style={{ backgroundColor: "#e5f8ed", color: "#28c76f" }}
                  >
                    <BiRupee />
                  </div>
                  <StatisticsData>
                    {nursery.revenue}
                    <span>Revenue</span>
                  </StatisticsData>
                </StatisticsWrapper>
              </div>
            </InfoWrapper>
          </InfoContainer>

          {/* Products Table */}
          <TableTitle>Products</TableTitle>
          <ItemsTable style={{ marginTop: 0 }}>
            <thead>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Discount</th>
            </thead>
            <tbody>
              {Array.from(nursery.products).map((product, index) => (
                <tr key={index}>
                  <td> {index + 1}</td>
                  <td>{product.name}</td>
                  <td style={{ maxWidth: "420px" }}>
                    <p className="details"> {product.details}</p>
                  </td>
                  <td>{product.quantity}</td>
                  <td>{product.price}.00</td>
                  <td>{product.discount}.00</td>
                </tr>
              ))}
            </tbody>
          </ItemsTable>

          {/* Services Table */}
          <TableTitle>Services</TableTitle>
          <ItemsTable style={{ marginTop: 0 }}>
            <thead>
              <th>#</th>
              <th>Type</th>
              <th>Description</th>
              <th>Price</th>
              <th>Discount</th>
            </thead>
            <tbody>
              {Array.from(nursery.services).map((service, index) => (
                <tr key={index}>
                  <td> {index + 1}</td>
                  <td>{service.type}</td>
                  <td style={{ maxWidth: "420px" }}>
                    <p className="details"> {service.details}</p>
                  </td>
                  <td>{service.price}.00</td>
                  <td>{service.discount}.00</td>
                </tr>
              ))}
            </tbody>
          </ItemsTable>
        </DashboardCard>
      </Container>
    </>
  );
};

const Container = styled.section`
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

const Title = styled.h4`
  font-size: 1.5rem;
  color: #3f3f3f;
  font-weight: 700;
  margin: 1rem 1rem 1rem 0;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  & .title {
    width: 100%;
    font-size: 1.2rem;
    color: #4f4f4f;
    font-weight: 500;
    margin: 1rem 0;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;

  & > div > div {
    margin-bottom: 1rem;
  }

  & .data {
    color: #4f4f4f;
    max-width: 500px;

    & span {
      font-size: 01rem;
      color: #6e6b7b;
    }
  }
`;

export const TableTitle = styled.h3`
  font-size: 1.2rem;
  color: #4f4f4f;
  font-weight: 500;
  margin-top: 2rem;
`;

export default NurseryPage;

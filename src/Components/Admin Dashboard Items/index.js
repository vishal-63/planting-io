import React from "react";
import { Line } from "react-chartjs-2";
import { BsBox, BsPerson } from "react-icons/bs";
import { GiWateringCan } from "react-icons/gi";
import { IoLeafOutline } from "react-icons/io5";
import { orders } from "../../data/orders";
import {
  DashboardTable,
  DashboardTableStatus,
} from "../Dashboard Items/DashboardElements";
import {
  Container,
  Icon,
  StatsCard,
  StatsCardNumber,
  StatsCardWrapper,
  StatsContent,
  CardTitle,
  Card,
} from "./AdminDashboardElements";

const AdminDashboardItems = () => {
  return (
    <>
      <Container>
        <StatsCardWrapper>
          <StatsCard>
            <StatsContent>
              <CardTitle>Registered Users</CardTitle>
              <StatsCardNumber>230</StatsCardNumber>
            </StatsContent>
            <Icon className="person">
              <BsPerson />
            </Icon>
          </StatsCard>
          <StatsCard>
            <StatsContent>
              <CardTitle>Registered Nurseries</CardTitle>
              <StatsCardNumber>18</StatsCardNumber>
            </StatsContent>
            <Icon className="leaf">
              <IoLeafOutline />
            </Icon>
          </StatsCard>
          <StatsCard>
            <StatsContent>
              <CardTitle>Orders Placed</CardTitle>
              <StatsCardNumber>1200</StatsCardNumber>
            </StatsContent>
            <Icon className="box">
              <BsBox />
            </Icon>
          </StatsCard>
          <StatsCard>
            <StatsContent>
              <CardTitle>Services Booked</CardTitle>
              <StatsCardNumber>75</StatsCardNumber>
            </StatsContent>
            <Icon className="can">
              <GiWateringCan />
            </Icon>
          </StatsCard>
        </StatsCardWrapper>
        <Card>
          <CardTitle>Sales</CardTitle>
          <Line
            data={{
              labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
              datasets: [
                {
                  data: [
                    115000, 110000, 125000, 150000, 165000, 160000, 195000,
                    210000, 240000, 250000, 280000, 285000,
                  ],
                  fill: true,
                  backgroundColor: "#0E9CFF50",
                  borderColor: "#0E9CFF",
                  tension: 0.25,
                },
              ],
            }}
            options={{
              hitRadius: 40,
              responsive: true,
              plugins: {
                legend: { display: false },
                title: { display: true, text: "Sales for last 12 months" },
              },
              scales: {
                xAxis: { grid: { color: "rgba(0,0,0,0" } },
                y: { ticks: { stepSize: 40000 } },
              },
            }}
          />
        </Card>
        <Card>
          <CardTitle>Recent Orders</CardTitle>
          <DashboardTable>
            <thead>
              <tr>
                <th>Order Id</th>
                <th>Product Name</th>
                <th>Buyer</th>
                <th>Nursery</th>
                <th>Total Amount</th>
                <th>Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.slice(0, 5).map((order, index) => (
                <tr key={index}>
                  <td>{order.id}</td>
                  <td style={{ width: "20%" }}>{order.name}</td>
                  <td>{order.customer}</td>
                  <td>{order.nursery}</td>
                  <td>{order.totalAmt}</td>
                  <td>
                    <DashboardTableStatus
                      className={`payment ${order.paymentStatusClass}`}
                    >
                      {order.paymentStatus}
                    </DashboardTableStatus>
                  </td>
                </tr>
              ))}
            </tbody>
          </DashboardTable>
        </Card>
      </Container>
    </>
  );
};

export default AdminDashboardItems;

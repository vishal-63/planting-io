import "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { BiTrendingUp, BiRupee } from "react-icons/bi";
import { BsPerson, BsBox } from "react-icons/bs";

import {
  Container,
  DashboardCard,
  DashboardCardNumber,
  DashboardCardTitle,
  DashboardStatistics,
  DashboardTable,
  DashboardTableStatus,
  StatisticsData,
  StatisticsWrapper,
} from "./DashboardElements";

const DashboardItems = () => {
  return (
    <Container>
      {/* Orders - Card 1 */}
      <DashboardCard>
        <div>
          <DashboardCardTitle>
            Orders <span>(today)</span>
          </DashboardCardTitle>
          <DashboardCardNumber>15</DashboardCardNumber>
        </div>
        <Bar
          width={100}
          height={100}
          data={{
            labels: ["26 Dec", "27 Dec", "28 Dec", "29 Dec", "30 Dec"],
            datasets: [
              {
                data: [12, 13, 10, 11, 15],
                backgroundColor: [
                  "#0263FF",
                  "#FF7723",
                  "#8E30FF",
                  "#19946B",
                  "#0F74E7",
                ],
                barThickness: 15,
                borderRadius: 5,
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            responsive: true,
            plugins: { legend: { display: false } },
            scales: {
              xAxis: { display: false },
              y: {
                ticks: { display: false },
              },
            },
            layout: { padding: 0 },
          }}
        />
      </DashboardCard>

      {/* Profit - Card 2 */}
      <DashboardCard>
        <div>
          <DashboardCardTitle>
            Profit <span>(today)</span>
          </DashboardCardTitle>
          <DashboardCardNumber>1900</DashboardCardNumber>
        </div>
        <Line
          width={100}
          height={100}
          data={{
            labels: ["26 Dec", "27 Dec", "28 Dec", "29 Dec", "30 Dec"],
            datasets: [
              {
                data: [1550, 1700, 1680, 1800, 1900],
                fill: true,
                borderColor: "#28c274",
                backgroundColor: "#28c27440",
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            responsive: true,
            plugins: { legend: { display: false } },
            scales: {
              x: {
                ticks: {
                  display: false,
                },
              },
              yAxis: { display: false },
            },
            layout: { padding: 0 },
          }}
        />
      </DashboardCard>

      {/* Statistics - Card 3 */}
      <DashboardCard className="statistics">
        <DashboardCardTitle className="statistics">
          Statistics <span>(all time)</span>
        </DashboardCardTitle>
        <DashboardStatistics>
          <StatisticsWrapper>
            <div className="icon">
              <BiTrendingUp />
            </div>
            <StatisticsData>
              400
              <span>Sales</span>
            </StatisticsData>
          </StatisticsWrapper>

          <StatisticsWrapper>
            <div className="icon">
              <BsPerson />
            </div>
            <StatisticsData>
              45
              <span>Customers</span>
            </StatisticsData>
          </StatisticsWrapper>

          <StatisticsWrapper>
            <div className="icon">
              <BsBox />
            </div>
            <StatisticsData>
              60
              <span>Products</span>
            </StatisticsData>
          </StatisticsWrapper>

          <StatisticsWrapper>
            <div className="icon">
              <BiRupee />
            </div>
            <StatisticsData>
              Rs. 1,12,000
              <span>Revenue</span>
            </StatisticsData>
          </StatisticsWrapper>
        </DashboardStatistics>
      </DashboardCard>

      {/* Earnings - Card 4 */}
      <DashboardCard className="earnings">
        <div>
          <DashboardCardTitle>
            Earnings <span>(this month)</span>
          </DashboardCardTitle>
          <DashboardCardNumber>
            Rs. 75000 <span>53.4% more than last month</span>
          </DashboardCardNumber>
        </div>
        <Doughnut
          className="earnings"
          data={{
            labels: ["Services", "Plants", "Seeds", "Tools"],
            datasets: [
              {
                label: "Earning Distribution",
                data: [40, 35, 10, 15],
                backgroundColor: ["#05B6FC", "#0263FF", "#FF7723", "#8E30FF"],
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            responsive: true,
            plugins: {
              legend: { display: false },
              title: {
                display: true,
                text: "Earnings Distribution",
                position: "bottom",
                font: { family: "Poppins", weight: "400", size: "16" },
              },
            },
            scales: {
              XAxis: { display: false },
              yAxis: { display: false },
            },
            layout: { padding: 0 },
          }}
        />
      </DashboardCard>

      {/* Most Purchased Items - Card 5 */}
      <DashboardCard className="most-purchased">
        <DashboardCardTitle>Most Purchased Items</DashboardCardTitle>
        <DashboardTable>
          <thead>
            <tr>
              <th>Product</th>
              <th>ID</th>
              <th>Category</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jade Plant Mini</td>
              <td>#11013</td>
              <td>Plants</td>
              <td>22</td>
            </tr>
            <tr>
              <td>Monstera Deliciosa Plant</td>
              <td>#11017</td>
              <td>Plants</td>
              <td>13</td>
            </tr>
            <tr>
              <td>Italian Basil Seeds</td>
              <td>#21045</td>
              <td>Seeds</td>
              <td>43</td>
            </tr>
            <tr>
              <td>Garden Maintenance</td>
              <td>#40156</td>
              <td>Services</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Double Prong Weeder</td>
              <td>#32078</td>
              <td>Tools</td>
              <td>07</td>
            </tr>
          </tbody>
        </DashboardTable>
      </DashboardCard>

      {/* Recent Orders - Card 6 */}
      <DashboardCard className="recent-orders">
        <DashboardCardTitle>Recent Orders</DashboardCardTitle>
        <DashboardTable className="recent-orders">
          <thead>
            <tr>
              <th>Product</th>
              <th>Order ID</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Total Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Areca Palm Plant</td>
              <td>#60234</td>
              <td>Plants</td>
              <td>3</td>
              <td>1197</td>
              <td>
                <DashboardTableStatus className="received">
                  Recieved
                </DashboardTableStatus>
              </td>
            </tr>
            <tr>
              <td>Peace Lily Plant</td>
              <td>#60232</td>
              <td>Plants</td>
              <td>2</td>
              <td>690</td>
              <td>
                <DashboardTableStatus className="received">
                  Recieved
                </DashboardTableStatus>
              </td>
            </tr>
            <tr>
              <td>Garden Setup</td>
              <td>#60231</td>
              <td>Services</td>
              <td>1</td>
              <td>999</td>
              <td>
                <DashboardTableStatus className="completed">
                  Completed
                </DashboardTableStatus>
              </td>
            </tr>
            <tr>
              <td>X826 Five Way Dial Plastic Hose Nozzle</td>
              <td>#60235</td>
              <td>Tools</td>
              <td>1</td>
              <td>199</td>
              <td>
                <DashboardTableStatus className="shipping">
                  Shipping
                </DashboardTableStatus>
              </td>
            </tr>
            <tr>
              <td>Italian Basil Seeds</td>
              <td>#60237</td>
              <td>Seeds</td>
              <td>3</td>
              <td>246</td>
              <td>
                <DashboardTableStatus className="delivered">
                  Delivered
                </DashboardTableStatus>
              </td>
            </tr>
          </tbody>
        </DashboardTable>
      </DashboardCard>
    </Container>
  );
};

export default DashboardItems;

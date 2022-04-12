import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { useParams } from "react-router-dom";

import {
  DashboardCard,
  DashboardTableStatus,
} from "../../Components/Dashboard Items/DashboardElements";
import DashboardHeader from "../../Components/DashboardHeader";
import DashboardMenu from "../../Components/DashboardMenu";
import {
  Container,
  HeaderInfo,
  ItemsTable,
  OrderDetails,
  OrderInfo,
  ShippingAddressDiv,
  InvoiceTotalInfo,
} from "../../Components/OrderPageElements";
import { AdminMenu, NurseryMenu } from "../../data/dashboard-menu-items";

import logo from "../../Images/logo.svg";

const AdminOrderPage = () => {
  let params = useParams();
  let orderId = params.id;

  const [menuOpen, setMenuOpen] = React.useState(false);
  const [order, setOrder] = useState({});

  useEffect(() => {
    window.innerWidth >= 1100 ? setMenuOpen(true) : setMenuOpen(false);
  }, [setMenuOpen]);

  useEffect(async () => {
    const res = await fetch(
      `http://localhost:8080/api/admin/get-order/${orderId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${new Cookies().get("adminId")}`,
        },
      }
    );
    const body = await res.json();
    console.log(body);
    setOrder(body);
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
        <DashboardCard
          style={{ padding: "1rem 1.5rem", alignItems: "flex-end" }}
        >
          <HeaderInfo>
            <img src={logo} alt="Logo" />
            <OrderInfo>
              <div className="title">Invoice</div>
              <OrderDetails>
                <div className="key">Order Id: </div>
                <div className="value">#{order.orderId}</div>
              </OrderDetails>
              <OrderDetails>
                <div className="key">Order Date: </div>
                <div>{order.orderDate}</div>
              </OrderDetails>
              <OrderDetails>
                <div className="key">Order Status: </div>
                &nbsp;&nbsp;
                <DashboardTableStatus className={order.orderStatus}>
                  {order.orderStatus}
                </DashboardTableStatus>
              </OrderDetails>
              <OrderDetails>
                <div className="key">Payment Status:</div>
                &nbsp;&nbsp;
                <DashboardTableStatus
                  className={`payment ${order.paymentStatus}`}
                >
                  {order.paymentStatus}
                </DashboardTableStatus>
              </OrderDetails>
            </OrderInfo>
          </HeaderInfo>
          <ShippingAddressDiv>
            <div>
              <div className="title">User Details</div>
              <div>
                <strong>Id: </strong>
                {order.userId}
              </div>
              <div>
                <strong>Name: </strong>
                {order.userName}
              </div>
              {order.email && (
                <div>
                  <strong>Email: </strong>
                  {order.email}
                </div>
              )}
              {order.phoneNo && (
                <div>
                  <strong>Phone: </strong>
                  {order.phoneNo}
                </div>
              )}
            </div>
            <div className="shipping-info">
              <div className="title">Shipping Address</div>
              <div>{order.shippingName}</div>
              <div className="address">{order.shippingAddress}</div>
            </div>
          </ShippingAddressDiv>
          <ItemsTable>
            <thead>
              <th>#</th>
              <th>Item</th>
              <th>Nursery</th>
              <th>Quantity</th>
              <th>Unit Cost</th>
              <th>Total</th>
            </thead>
            <tbody>
              {Array.from(order.products).map((product, index) => (
                <tr key={index}>
                  <td> {index + 1}</td>
                  <td>
                    <div>
                      <img src={product.imageUrl} alt="" />
                      <span>{product.itemName}</span>
                    </div>
                  </td>
                  <td>{product.nurseryName}</td>
                  <td>{product.quantity}</td>
                  <td>{product.pricePerUnit}.00</td>
                  <td>{product.totalAmt}.00</td>
                </tr>
              ))}
            </tbody>
          </ItemsTable>
          <InvoiceTotalInfo>
            <div>
              <div className="key">Sub-Total: &nbsp;</div>
              <div className="value">Rs. {order.subTotal}.00</div>
            </div>
            <div>
              <div className="key">Tax (5%): &nbsp;</div>
              <div className="value">Rs. {order.tax}</div>
            </div>
            <div className="grand-total">Rs. {order.grandTotal}</div>
          </InvoiceTotalInfo>
        </DashboardCard>
      </Container>
    </>
  );
};

export default AdminOrderPage;

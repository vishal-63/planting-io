import React, { useState } from "react";
import { BiRupee } from "react-icons/bi";

import img1 from "../Images/plant-1.jpg";
import img2 from "../Images/plant-2.jpg";

import {
  DetailTitle,
  MainWrapper,
  OrderAmount,
  OrderCard,
  OrderDetails,
  OrderInfo,
  ProductDetails,
  ShippingInfo,
} from "./AccountElements";

const orders = [
  {
    id: "#50873",
    img: img1,
    productName: "Areca Palm Plant",
    vendor: "Mother Natue",
    totalAmt: "412.25",
    productAmt: "345",
    shippingAmt: "40",
    tax: "17.25",
    shippingStatus: "Shipped",
    shippingStatusClass: "shipping",
    expectedDelivery: "Feb 05, 2022",
    shippingAddress:
      "202, Kanak Residency, Pritamnagar, Paldi, Ahmedabad, Gujarat, India",
  },
  {
    id: "#50872",
    img: img2,
    productName: "Snake Plant",
    vendor: "Vrundavan Nursery",
    totalAmt: "460",
    productAmt: "400",
    shippingAmt: "40",
    tax: "20",
    shippingStatus: "Delivered",
    shippingStatusClass: "delivered",
    shippingAddress:
      "202, Kanak Residency, Pritamnagar, Paldi, Ahmedabad, Gujarat, India",
  },
];

const RecentOrders = () => {
  return (
    <MainWrapper>
      <div className="title">Recent Orders</div>
      {orders.map((order, index) => (
        <OrderSection key={index} order={order} />
      ))}
    </MainWrapper>
  );
};

const OrderSection = ({ order }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <OrderCard reviewVisible={showDetails}>
      <div>
        <div className="order-id">{order.id}</div>
        <OrderInfo>
          <ProductDetails>
            <img src={order.img} alt="" />
            <div>
              <div className="product-name">{order.productName}</div>
              <div className="vendor">Vendor: {order.vendor}</div>
              <div
                className="view-details"
                onClick={() => setShowDetails(!showDetails)}
              >
                View Details
              </div>
            </div>
          </ProductDetails>
          <OrderAmount>
            <BiRupee /> {order.totalAmt}
          </OrderAmount>
          <ShippingInfo>
            <div className={order.shippingStatusClass}>
              {order.shippingStatus}
            </div>
            {order.shippingStatus === "Shipped" && (
              <div className="expected-delivery">
                Expected delivery on Feb 05, 2022
              </div>
            )}
          </ShippingInfo>
        </OrderInfo>
      </div>
      <OrderDetails className={showDetails ? "visible" : ""}>
        <div>
          <DetailTitle>Billing Info:</DetailTitle>
          <table>
            <tbody>
              <tr>
                <td>Product Amount</td>
                <td>Rs. {order.productAmt}</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>Rs. {order.shippingAmt}</td>
              </tr>
              <tr>
                <td className="tax">Tax (5% GST)</td>
                <td className="tax">Rs. {order.tax}</td>
              </tr>
              <tr>
                <td className="total">Grand Total</td>
                <td className="total">Rs. {order.totalAmt}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <DetailTitle>Shipping Address:</DetailTitle>
          <p>{order.shippingAddress}</p>
        </div>
      </OrderDetails>
    </OrderCard>
  );
};

export default RecentOrders;

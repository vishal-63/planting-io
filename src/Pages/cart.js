import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

import Topbar from "../Components/Topbar";
import { UserNavbar } from "../Components/Navbar";
import BreadCrumb from "../Components/BreadCrumb";
import Footer from "../Components/Footer";
import { NoOfUnits } from "../Components/ItemPage/ItemPageElements";
import {
  Amount,
  CartContainer,
  CartFooter,
  CartTable,
  CartTitle,
  CheckoutButton,
  Label,
} from "../Components/CartElements";

import productImg1 from "../Images/plant-1.jpg";

const Cart = () => {
  const [noOfUnits, setNoOfUnits] = useState(1);
  return (
    <>
      <Topbar />
      <UserNavbar />
      <BreadCrumb />
      <CartContainer>
        <CartTitle>Your Cart</CartTitle>
        <CartTable>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th className="price">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="product">
                <div>
                  <img src={productImg1} alt="" />
                  Areca Palm Plant
                </div>
              </td>

              <td className="units">
                <div>
                  <NoOfUnits style={{ padding: "0 .5rem" }}>
                    <span
                      onClick={() => {
                        noOfUnits !== 0 && setNoOfUnits(noOfUnits - 1);
                      }}
                    >
                      -
                    </span>
                    <span className="units">{noOfUnits}</span>
                    <span onClick={() => setNoOfUnits(noOfUnits + 1)}>+</span>
                  </NoOfUnits>
                  <AiOutlineDelete />
                </div>
              </td>
              <td className="price">Rs. 1035</td>
            </tr>
          </tbody>
        </CartTable>
        <CartFooter>
          <div>
            <Label>Shipping</Label>
            <Amount>Rs. 50.00</Amount>
          </div>
          <div className="tax">
            <Label>Tax (5% GST)</Label>
            <Amount>Rs. 51.75</Amount>
          </div>
          <div className="grand-total">
            <Label>Grand Total</Label>
            <Amount>Rs 1136.75</Amount>
          </div>
          <CheckoutButton>Check Out</CheckoutButton>
        </CartFooter>
      </CartContainer>
      <Footer />
    </>
  );
};

export default Cart;

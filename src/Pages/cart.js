import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
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

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [grandTotal, setGrandTotal] = useState(
    cartTotal + (cartTotal * 5) / 100
  );

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const userId = new Cookies().get("userId");
      if (userId !== undefined) {
        const res = await fetch("http://localhost:8080/api/cart/get", {
          method: "GET",
          headers: { Authorization: `Bearer ${userId}` },
        });
        if (res.ok) {
          const body = await res.json();
          setCartItems(body);
        }
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    let total = 0;
    cartItems.map((item) => (total += item.price * item.quantity));
    setCartTotal(total);
    const grand = cartTotal + (cartTotal * 5) / 100;
    setGrandTotal(grand);
  }, [cartItems]);

  const changeQuantity = (id, no) => {
    const tempItems = cartItems;
    tempItems.map((item) => {
      if (item.id === id) {
        item.quantity = no;
      }
    });

    setCartItems([...tempItems]);
  };

  const removeItem = (id) => {
    const newItems = cartItems.filter((item) => item.id !== id);
    setCartItems([...newItems]);
  };

  const checkOut = async () => {
    setLoading(true);
    const data = [];
    cartItems.map((item) => {
      const i = { itemId: item.id, type: item.type, noOfItems: item.quantity };
      data.push(i);
    });
    console.log(data);
    const res = await fetch(
      "http://localhost:8080/api/payment/create-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${new Cookies().get("userId")}`,
        },
        body: JSON.stringify(data),
      }
    );

    if (res.ok) {
      const body = await res.json();
      console.log(body);
      openSession(body.url, "_self");
    }
  };

  const openSession = (url) => {
    const newWindow = window.open(url);
    if (newWindow) newWindow.opener = null;
    setLoading(false);
  };

  return (
    <>
      <Topbar />
      <UserNavbar />
      <BreadCrumb page="Cart" />
      <CartContainer>
        {cartItems.length !== 0 ? (
          <>
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
                {cartItems.map((item, index) => (
                  <CartRow
                    item={item}
                    key={index}
                    changeQuantity={changeQuantity}
                    removeItem={removeItem}
                  />
                ))}
              </tbody>
            </CartTable>
            <CartFooter>
              <div>
                <Label>Cart Total</Label>
                <Amount>Rs. {cartTotal}.00</Amount>
              </div>
              <div>
                <Label>Shipping</Label>
                <Amount>Free</Amount>
              </div>
              <div className="tax">
                <Label>Tax (5% GST)</Label>
                <Amount>Rs. {(cartTotal * 5) / 100}</Amount>
              </div>
              <div className="grand-total">
                <Label>Grand Total</Label>
                <Amount>Rs. {cartTotal + (cartTotal * 5) / 100}</Amount>
              </div>
              <CheckoutButton onClick={checkOut}>
                {loading ? (
                  <span className="loader"> </span>
                ) : (
                  <span>Check Out</span>
                )}
              </CheckoutButton>
            </CartFooter>
          </>
        ) : (
          <CartTitle>Your Cart is empty! </CartTitle>
        )}
      </CartContainer>
      <Footer />
    </>
  );
};

const CartRow = (props) => {
  const [total, setTotal] = useState();
  const [item, setItem] = useState(props.item);

  useEffect(() => {
    setItem(props.item);
    setTotal(item.price * item.quantity);
  });

  const imgSrc = Array.isArray(item.photoPath)
    ? item.photoPath[0]
    : item.photoPath;

  const deleteFromCart = async () => {
    const res = await fetch(
      `http://localhost:8080/api/cart/delete/${item.id}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${new Cookies().get("userId")}`,
        },
      }
    );
    if (res.ok) props.removeItem(item.id);
  };
  return (
    <tr>
      <td className="product">
        <div>
          <img src={imgSrc} alt={item.name} />
          <div>
            <p>{item.name || item.type}</p>
            <p style={{ fontSize: ".8rem", color: "#3f3f3f" }}>
              {item.nurseryName}
            </p>
          </div>
        </div>
      </td>

      <td className="units">
        <div>
          <NoOfUnits style={{ padding: "0 .5rem" }}>
            <span
              onClick={() => {
                item.quantity !== 0 &&
                  props.changeQuantity(item.id, item.quantity - 1);
              }}
            >
              -
            </span>
            <span className="units">{item.quantity}</span>
            <span
              onClick={() => props.changeQuantity(item.id, item.quantity + 1)}
            >
              +
            </span>
          </NoOfUnits>
          <span onClick={deleteFromCart}>
            <AiOutlineDelete />
          </span>
        </div>
      </td>
      <td className="price">Rs. {total}</td>
    </tr>
  );
};

export default Cart;

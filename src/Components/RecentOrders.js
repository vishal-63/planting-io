import React, { useState } from "react";
import { useEffect } from "react";
import { Cookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";

import {
  AccountButton,
  DetailTitle,
  Input,
  InputWrapper,
  Label,
  MainWrapper,
  OrderAmount,
  OrderCard,
  OrderDate,
  OrderDetails,
  OrderInfo,
  ProductDetails,
  ReviewContainer,
  ShippingInfo,
  SubmitButton,
  Title,
} from "./AccountElements";
import ModalContainer from "./Backdrop";
import { Alert, ValidationError } from "./LoginModal/LoginModalElements";

const RecentOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:8080/api/order/get", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${new Cookies().get("userId")}`,
        },
      });
      const body = await res.json();
      setOrders(body);
    }
    fetchData();
  }, []);

  return (
    <MainWrapper>
      <Title>Recent Orders</Title>
      {orders.map((order, index) => (
        <OrderSection key={index} order={order} />
      ))}
    </MainWrapper>
  );
};

const OrderSection = ({ order }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [firstProduct, setFirstProduct] = useState({});
  const [otherProducts, setOtherProducts] = useState([]);

  useEffect(() => {
    setAllProducts([...order.products]);
    setFirstProduct(order.products[0]);
    setOtherProducts(order.products.filter((val, index) => index !== 0));
  }, [order]);

  const [rateProductModalOpen, setRateProductModalOpen] = useState(false);
  const [complaintModalOpen, setComplaintModalOpen] = useState(false);

  const [productId, setProductId] = useState("");
  const [orderId, setOrderId] = useState("");

  const handleClose = () => {
    setRateProductModalOpen(false);
    setComplaintModalOpen(false);
  };

  return (
    <>
      <OrderCard reviewVisible={showDetails}>
        <div>
          <div className="order-id">#{order.orderId}</div>
          <OrderInfo>
            <ProductDetails>
              <img src={firstProduct.productImg} alt="" />
              <div>
                <div className="product-name">
                  {firstProduct.quantity} x {firstProduct.productName}
                </div>
                <div className="vendor">Vendor: {firstProduct.nurseryName}</div>
                {firstProduct.reviewStars ? (
                  <div style={{ marginLeft: "1rem" }}>
                    {[...Array(firstProduct.reviewStars)].map((val, index) => (
                      <AiFillStar key={index} style={{ color: "#FFBF34" }} />
                    ))}
                    {[...Array(5 - firstProduct.reviewStars)].map(
                      (val, index) => (
                        <AiOutlineStar
                          key={index}
                          style={{ color: "#dadada" }}
                        />
                      )
                    )}
                  </div>
                ) : (
                  <div
                    className="rate-product"
                    onClick={() => {
                      setProductId(firstProduct.id);
                      setRateProductModalOpen(true);
                    }}
                  >
                    Rate this product
                  </div>
                )}
                {allProducts.length > 1 && (
                  <div
                    className="vendor"
                    style={{ cursor: "pointer" }}
                    onClick={() => setShowDetails(!showDetails)}
                  >
                    <br />
                    {allProducts.length - 1} more product(s)
                  </div>
                )}
              </div>
            </ProductDetails>

            <OrderDate>
              <span>Date:</span> <br />
              {order.orderDate}
            </OrderDate>

            <OrderAmount>
              <BiRupee /> {order.grandTotal}
            </OrderAmount>

            <ShippingInfo>
              <div className={order.orderStatus}>{order.orderStatus}</div>
              {order.orderStatus === "Shipped" && (
                <div className="expected-delivery">
                  Expected delivery on Feb 05, 2022
                </div>
              )}
              <div
                className="view-details"
                onClick={() => setShowDetails(!showDetails)}
              >
                View Details
              </div>
            </ShippingInfo>
          </OrderInfo>
        </div>

        <OrderDetails className={showDetails ? "visible" : ""}>
          {otherProducts.map((product, index) => (
            <ProductDetails
              style={{ width: "100%", maxWidth: "100%", marginBottom: "1rem" }}
            >
              <img src={product.productImg} alt="" />
              <div>
                <div className="product-name" key={index}>
                  {product.quantity} x {product.productName}
                </div>
                <div className="vendor">Vendor: {product.nurseryName}</div>
                {product.reviewStars ? (
                  <div style={{ marginLeft: "1rem" }}>
                    {[...Array(product.reviewStars)].map((val, index) => (
                      <AiFillStar key={index} style={{ color: "#FFBF34" }} />
                    ))}
                    {[...Array(5 - product.reviewStars)].map((val, index) => (
                      <AiOutlineStar key={index} style={{ color: "#dadada" }} />
                    ))}
                  </div>
                ) : (
                  <div
                    className="rate-product"
                    onClick={() => {
                      setProductId(product.id);
                      setRateProductModalOpen(true);
                    }}
                  >
                    Rate this product
                  </div>
                )}
              </div>
            </ProductDetails>
          ))}
          <div>
            <DetailTitle>Billing Info:</DetailTitle>
            <table>
              <tbody>
                <tr>
                  <td>Product Amount</td>
                  <td>Rs. {order.subTotal}</td>
                </tr>
                <tr>
                  <td className="tax">Tax (5% GST)</td>
                  <td className="tax">Rs. {order.tax}</td>
                </tr>
                <tr>
                  <td className="total">Grand Total</td>
                  <td className="total">Rs. {order.grandTotal}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <DetailTitle>Shipping Address:</DetailTitle>
            <p>{order.shippingName}</p>
            <p>{order.shippingAddress}</p>
          </div>
          <div>
            <p
              className="complaint-link"
              onClick={() => {
                setOrderId(order.orderId);
                setComplaintModalOpen(true);
                console.log(order.orderId, orderId);
              }}
            >
              Have a complaint?
            </p>
          </div>
        </OrderDetails>
      </OrderCard>
      {rateProductModalOpen && (
        <RateProductComponent handleClose={handleClose} productId={productId} />
      )}
      {complaintModalOpen && (
        <ComplaintComponent orderId={orderId} handleClose={handleClose} />
      )}
    </>
  );
};

const RateProductComponent = ({ productId, handleClose }) => {
  const [reviewStars, setReviewStars] = useState(0);
  const [response, setResponse] = useState("");
  const [responseVisible, setResponseVisible] = useState(false);
  const [responseClass, setResponseClass] = useState("");

  const submitFeedback = async () => {
    if (reviewStars !== 0) {
      const data = {
        productId: productId,
        rating: reviewStars,
        feedbackDescription: document.querySelector("textarea.review").value,
      };

      const res = await fetch("http://localhost:8080/api/feedback/add", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${new Cookies().get("userId")}`,
        },
      });

      setResponseVisible(true);
      if (res.ok) {
        const body = await res.text();
        setResponse(body);
        setResponseClass("success");
        setTimeout(() => handleClose(), 1000);
      } else {
        setResponse("An error occurred while saving feedback.");
        setResponseClass("error");
      }
    }
  };

  return (
    <ModalContainer onClick={handleClose}>
      <ReviewContainer onClick={(e) => e.stopPropagation()}>
        <Alert className={responseClass} isVisible={responseVisible}>
          {response}
        </Alert>

        <DetailTitle>Rate your product:</DetailTitle>
        <div className="stars">
          {[...Array(reviewStars)].map((val, index) => (
            <AiFillStar
              key={index}
              style={{ color: "#FFBF34" }}
              onClick={() => setReviewStars(index + 1)}
            />
          ))}
          {[...Array(5 - reviewStars)].map((val, index) => (
            <AiOutlineStar
              key={index}
              onClick={() => setReviewStars(index + 1 + reviewStars)}
            />
          ))}
        </div>
        <textarea
          className="review"
          placeholder="Write a review"
          rows={5}
        ></textarea>
        <SubmitButton onClick={submitFeedback}>Submit</SubmitButton>
      </ReviewContainer>
    </ModalContainer>
  );
};

const ComplaintComponent = ({ orderId, handleClose }) => {
  const [response, setResponse] = useState("");
  const [responseVisible, setResponseVisible] = useState(false);
  const [responseClass, setResponseClass] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    data.orderId = orderId;
    const res = await fetch("http://localhost:8080/api/complaint/add", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${new Cookies().get("userId")}`,
        "Content-Type": "application/json",
      },
    });

    setResponseVisible(true);

    if (res.ok) {
      const body = await res.text();
      setResponse(body);
      setResponseClass("success");
      setTimeout(() => handleClose(), 1000);
    } else {
      const body = await res.json();
      setResponse(body.message);
      setResponseClass("error");
    }
  };
  return (
    <ModalContainer onClick={handleClose}>
      <ReviewContainer onClick={(e) => e.stopPropagation()}>
        <Alert className={responseClass} isVisible={responseVisible}>
          {response}
        </Alert>

        <div className="order-id">
          <strong>Order Id:</strong> {orderId}
        </div>
        <form method="POST" onSubmit={handleSubmit(onSubmit)}>
          <InputWrapper style={{ width: "100%" }}>
            <Label htmlFor="Subject">Subject: </Label>
            <Input
              type="text"
              name="complaintSubject"
              id="complaintSubject"
              {...register("complaintSubject", {
                required: "Field is required",
              })}
            />
            <ValidationError>
              {errors.complaintSubject?.message}
            </ValidationError>
          </InputWrapper>
          <InputWrapper
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              marginTop: "1.5rem",
            }}
          >
            <Label htmlFor="description">Description: </Label>
            <textarea
              rows="5"
              name="complaintDescription"
              id="complaintDescription"
              {...register("complaintDescription", {
                required: "Field is required",
              })}
              style={{ width: "500px" }}
            ></textarea>
          </InputWrapper>
          <ValidationError>
            {errors.complaintDescription?.message}
          </ValidationError>
          <div>
            <AccountButton className="primary">Save</AccountButton>
            <AccountButton className="cancel" onClick={handleClose}>
              Cancel
            </AccountButton>
          </div>
        </form>
      </ReviewContainer>
    </ModalContainer>
  );
};

export default RecentOrders;

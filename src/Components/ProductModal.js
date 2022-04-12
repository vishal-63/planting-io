import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ProductModal = ({ item }) => {
  return (
    <ProductContainer onClick={(e) => e.stopPropagation()}>
      <div className="header">
        <Title>{item.name || "Service"}</Title>
        <span
          className={item.active || item.is_active ? "active" : "in-active"}
        >
          {item.active || item.is_active ? "Active" : "Inactive"}
        </span>
      </div>
      <div className="content">
        <ProductInfo>
          <div className="title">Product Info: </div>
          <table>
            <tbody>
              <tr className="wrapper">
                <td className="key">Nursery: </td>
                <td>{item.nurseryName}</td>
              </tr>
              <tr className="wrapper">
                <td className="key">Type: </td>
                <td>{item.type}</td>
              </tr>
              <tr className="wrapper">
                <td className="key">Description: </td>
                <td>{item.details}</td>
              </tr>
              <tr className="wrapper">
                <td className="key">Price: </td>
                <td>Rs. {item.price}.00</td>
              </tr>
              <tr className="wrapper">
                <td className="key">Discount: </td>
                <td>Rs. {item.discount}.00</td>
              </tr>
              {item.quantity && (
                <tr className="wrapper">
                  <td className="key">Quantity: </td>
                  <td>{item.quantity}</td>
                </tr>
              )}
            </tbody>
          </table>
        </ProductInfo>
        <Images>
          <div className="title">Product Images: </div>
          <div className="images-wrapper">
            {item.photoPath.map((photo, index) => (
              <img src={photo} alt={item.name} key={index} />
            ))}
          </div>
        </Images>
      </div>
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  width: 70vw;
  border-radius: 12px;
  padding: 2rem;
  background-color: #fff;

  & .title {
    color: #2a2a2a;
    font-size: 1.1rem;
    font-weight: 600;
  }

  & > div.content {
    display: flex;
    margin-top: 1.5rem;
  }

  & .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    & span {
      padding: 0.3rem 1rem;
      border-radius: 4px;
      color: #fff;
      font-weight: 500;
      height: min-content;

      &.active {
        background-color: #27a727;
      }
      &.in-active {
        background-color: #9d9d9d;
      }
    }
  }
`;

const Title = styled.h4`
  font-size: 1.5rem;
  color: #2a2a2a;
  font-weight: 600;
  font-family: Lora, "sans serif";
  margin-bottom: 1rem;
`;

const ProductInfo = styled.div`
  color: #3f3f3f;
  font-size: 1rem;
  letter-spacing: 1px;

  & td {
    max-width: 500px;
    padding: 0.5rem 1rem 0.5rem 0;
  }

  & td.key {
    color: #2a2a2a;
    font-weight: 500;
    margin-right: 0.5rem;
  }
`;

const Images = styled.div`
  margin-left: 2rem;

  & > .images-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    & img {
      height: 150px;
      object-fit: contain;
      border-radius: 5px;
    }
  }
`;

export default ProductModal;

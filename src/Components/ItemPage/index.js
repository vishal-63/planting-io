import React, { useState } from "react";
import { BiRupee } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";

import {
  ItemName,
  ItemPageContainer,
  ItemContent,
  Price,
  Description,
  NoOfUnits,
  AddtoCartButton,
  AddtoCartWrapper,
  Category,
  ReviewsContainer,
  ReviewTitle,
  RelatedProducts,
} from "./ItemPageElements";
import {
  ActualPrice,
  DiscountedPrice,
  PlantCard,
  PlantCardWrapper,
  PlantImg,
  PlantName,
  PlantPrice,
  PlantStarsWrapper,
} from "../InfoSection/InfoElements";
import { plants } from "../../data/plants";
import { Link } from "react-router-dom";
import { seeds } from "../../data/seeds";
import { tools } from "../../data/tools";

const ItemPage = ({ item }) => {
  const [noOfUnits, setNoOfUnits] = useState(0);

  let relatedProducts;

  const setRelatedProducts = () => {
    if (item.category === "Plants") {
      relatedProducts = [...plants].filter((plant) => plant.id !== item.id);
    } else if (item.category === "Seeds") {
      relatedProducts = [...seeds].filter((seed) => seed.id !== item.id);
    } else {
      relatedProducts = [...tools].filter((tool) => tool.id !== item.id);
    }
    relatedProducts.length = 4;
  };

  setRelatedProducts();

  return (
    <ItemPageContainer>
      <ItemContent>
        <div className="product-image">
          <img src={item.img} alt={item.name} />
        </div>
        <div className="info">
          <ItemName>{item.name}</ItemName>
          <Price>
            <BiRupee />
            <div className="discounted-price">{item.discountedPrice}</div>
            <div className="actual-price">{item.actualPrice}</div>
          </Price>
          <Description>
            <div>Description:</div>
            {item.description}
          </Description>
          <div style={{ marginBottom: "1rem", fontSize: "1.15rem" }}>
            {[...Array(item.stars)].map((index) => (
              <AiFillStar key={index} style={{ color: "#FFBF34" }} />
            ))}
            {[...Array(5 - item.stars)].map((index) => (
              <AiFillStar key={index} style={{ color: "#dadada" }} />
            ))}
          </div>
          <AddtoCartWrapper>
            <NoOfUnits>
              <span
                onClick={() => {
                  noOfUnits !== 0 && setNoOfUnits(noOfUnits - 1);
                }}
              >
                -
              </span>
              <span>{noOfUnits}</span>
              <span onClick={() => setNoOfUnits(noOfUnits + 1)}>+</span>
            </NoOfUnits>
            <AddtoCartButton disabled={noOfUnits ? false : true}>
              Add to Cart
            </AddtoCartButton>
          </AddtoCartWrapper>
          <Category>
            Category:{" "}
            <Link to={item.categoryLink}>
              <div>{item.category}</div>
            </Link>
          </Category>
        </div>
      </ItemContent>
      <ReviewsContainer>
        <ReviewTitle>
          <p>Reviews (0)</p>
        </ReviewTitle>
        <div>There are no Reviews yet!</div>
      </ReviewsContainer>
      <RelatedProducts>
        <div className="title">Related Products</div>
        <PlantCardWrapper
          style={{ width: "inherit", justifyContent: "space-between" }}
        >
          {relatedProducts.map((item, index) => (
            <PlantCard key={index}>
              <Link to={`${item.link}/${item.id}`}>
                <PlantImg src={item.img} alt={item.name} />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: "1rem .5rem 0",
                  }}
                >
                  <PlantName>{item.name}</PlantName>
                  <PlantStarsWrapper>
                    {[...Array(item.stars)].map((index) => (
                      <AiFillStar key={index} />
                    ))}
                    {[...Array(5 - item.stars)].map((index) => (
                      <AiFillStar key={index} style={{ color: "#dadada" }} />
                    ))}
                  </PlantStarsWrapper>
                </div>
                <PlantPrice>
                  <DiscountedPrice>
                    <BiRupee />
                    <span>{item.discountedPrice}</span>
                  </DiscountedPrice>
                  <ActualPrice>{item.actualPrice}</ActualPrice>
                </PlantPrice>
              </Link>
            </PlantCard>
          ))}
        </PlantCardWrapper>
      </RelatedProducts>
    </ItemPageContainer>
  );
};

export default ItemPage;

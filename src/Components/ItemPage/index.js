import React, { useState, useEffect, useContext } from "react";
import { Cookies } from "react-cookie";
import Slider from "react-slick";
import { BiRupee } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineErrorOutline } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

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
  ProductImage,
  StarsWrapper,
  Review,
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
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthContext";
import Alert from "../Alert";

const ItemPage = ({ item }) => {
  const [noOfUnits, setNoOfUnits] = useState(0);

  const [mainItem, setMainItem] = useState(item);
  const [relatedProducts, setRelatedProducts] = useState();

  const [alertOpen, setAlertOpen] = useState(false);
  const [alertClass, setAlertClass] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    setMainItem(item);
    setNoOfUnits(0);
  }, [item]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `http://localhost:8080/api/product/get-related/${item.type}/${item.id}`,
        {
          method: "GET",
        }
      );
      const body = await res.json();
      setRelatedProducts(body);
    }
    fetchData();
  }, [mainItem]);

  const [
    isUserAuthenticated,
    setIsUserAuthenticated,
    isAdminAuthenticated,
    setIsAdminAuthenticated,
  ] = useContext(AuthContext);

  const handleClose = () => setAlertOpen(false);

  const addToCart = async () => {
    const data = {
      itemId: mainItem.id,
      type: "Product",
      noOfItems: noOfUnits,
    };
    const res = await fetch(`http://localhost:8080/api/cart/add`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${new Cookies().get("userId")}`,
      },
    });
    const body = await res.text();
    setAlertMessage(body);
    if (res.ok) setAlertClass("success");
    else setAlertClass("error");
    setAlertOpen(true);
  };

  const settings = {
    dots: true,
    infinite: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  console.log(item.reviews);

  return (
    <ItemPageContainer>
      {alertOpen && (
        <Alert onClick={handleClose} className={alertClass}>
          <span style={{ fontSize: "1.6rem" }}>
            {alertClass === "success" ? (
              <IoMdCheckmarkCircleOutline />
            ) : (
              <MdOutlineErrorOutline />
            )}
          </span>
          {alertMessage}
        </Alert>
      )}

      <ItemContent>
        <ProductImage>
          <Slider {...settings}>
            {mainItem.photoPath.map((imgSrc) => (
              <div className="image">
                <img src={imgSrc} alt={mainItem.name} />
              </div>
            ))}
          </Slider>
        </ProductImage>
        <div className="info">
          <ItemName>{mainItem.name}</ItemName>
          <div className="nursery-name">Vendor - {mainItem.nurseryName}</div>
          <Price>
            <BiRupee />
            <div className="discounted-price">
              {mainItem.price - mainItem.discount}.00
            </div>
            <div className="actual-price">{mainItem.price}.00</div>
          </Price>
          <Description>
            <div>Description:</div>
            {mainItem.details}
          </Description>
          <StarsWrapper>
            {[...Array(mainItem.stars)].map((val, index) => (
              <AiFillStar key={index} style={{ color: "#FFBF34" }} />
            ))}
            {[...Array(5 - mainItem.stars)].map((val, index) => (
              <AiFillStar key={index} style={{ color: "#dadada" }} />
            ))}
            <span> &nbsp;({item.starsCount})</span>
          </StarsWrapper>
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
            <AddtoCartButton
              disabled={isUserAuthenticated && noOfUnits ? false : true}
              onClick={addToCart}
            >
              Add to Cart
            </AddtoCartButton>
          </AddtoCartWrapper>
          <Category>
            Category:{" "}
            <Link to={mainItem.categoryLink}>
              <div>{mainItem.type}</div>
            </Link>
          </Category>
        </div>
      </ItemContent>
      <ReviewsContainer>
        <ReviewTitle>
          <p>Reviews ({item.reviewCount})</p>
        </ReviewTitle>
        {item.reviews ? (
          <Review>
            {item.reviews.map((review, index) => (
              <div key={index}>
                <div className="customer-name">{review.userName}</div>

                <div>{review.description}</div>
              </div>
            ))}
          </Review>
        ) : (
          <div>There are no reviews yet!</div>
        )}
      </ReviewsContainer>
      <RelatedProducts>
        <div className="title">Related Products</div>
        <PlantCardWrapper
          style={{ width: "inherit", justifyContent: "space-between" }}
        >
          {relatedProducts &&
            relatedProducts.map((product, index) => {
              product.stars === undefined && (product["stars"] = 0);
              return (
                <PlantCard key={index}>
                  <Link to={`${mainItem.categoryLink}/${product.id}`}>
                    <PlantImg src={product.photoPath[0]} alt={product.name} />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        margin: "1rem .5rem 0",
                      }}
                    >
                      <PlantName>{product.name}</PlantName>
                      <PlantStarsWrapper>
                        {[...Array(product.stars)].map((val, i) => (
                          <AiFillStar key={i} />
                        ))}
                        {[...Array(5 - product.stars)].map((val, i) => (
                          <AiFillStar key={i} style={{ color: "#dadada" }} />
                        ))}
                      </PlantStarsWrapper>
                    </div>
                    <PlantPrice>
                      <DiscountedPrice>
                        <BiRupee />
                        <span>{product.price - product.discount}</span>
                      </DiscountedPrice>
                      <ActualPrice>{product.price}</ActualPrice>
                    </PlantPrice>
                  </Link>
                </PlantCard>
              );
            })}
        </PlantCardWrapper>
      </RelatedProducts>
    </ItemPageContainer>
  );
};

export default ItemPage;

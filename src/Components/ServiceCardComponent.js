import React, { useState, useEffect } from "react";
import { BsCartFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

import {
  CustomOption,
  CustomOptions,
  Select,
  SelectLabel,
  SelectTrigger,
  SelectWrapper,
} from "./NurseryFormElements";
import {
  AddtoCart,
  Review,
  ReviewsContainer,
  ReviewTitle,
  ServiceCard,
  ServiceContent,
  ServicePrice,
  ServiceStars,
} from "./ServiceElements";

const SericeCardComponent = ({ service }) => {
  const [reviewVisible, setReviewVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const setupPrice = service.setupPrice;
  const maintenancePrice = service.maintenancePrice;
  const clearancePrice = service.clearancePrice;

  const [price, setPrice] = useState(setupPrice);

  const openDropdown = (e) => {
    e.target.closest(".select").classList.toggle("open");
  };

  const changeSelection = (e) => {
    const el = e.target;

    if (selectedOption !== "") {
      const siblings = Array.from(e.target.parentNode.childNodes);
      const selectedSibling = siblings.filter((el) =>
        el.classList.contains("selected")
      );
      selectedSibling[0].classList.remove("selected");
    }
    setSelectedOption(el.innerText);
    el.classList.add("selected");
  };

  useEffect(() => {
    if (selectedOption === "Garden Setup") {
      setPrice(setupPrice);
    } else if (selectedOption === "Garden Maintenance") {
      setPrice(maintenancePrice);
    } else if (selectedOption === "Garden Clearance") {
      setPrice(clearancePrice);
    }
  }, [selectedOption, setPrice, setupPrice, maintenancePrice, clearancePrice]);

  return (
    <ServiceCard reviewVisible={reviewVisible}>
      <div className="service-info">
        <img src={service.img} alt="" />
        <ServiceContent>
          <h3>{service.nursery}</h3>
          <p>{service.description}</p>
          <div>
            <ServicePrice>Rs .&nbsp; {price}</ServicePrice>
            <ServiceStars>
              {[...Array(service.stars)].map((index) => (
                <AiFillStar key={index} style={{ color: "#FFBF34" }} />
              ))}
              {[...Array(5 - service.stars)].map((index) => (
                <AiFillStar key={index} style={{ color: "#dadada" }} />
              ))}
              <span>{`(${service.feedback})`}</span>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => setReviewVisible(!reviewVisible)}
              >
                {service.reviewCount ? service.reviewCount : "0"} Reviews
              </div>
            </ServiceStars>
          </div>

          {/* Service Type Dropdown */}
          <SelectWrapper className="select-wrapper" onClick={openDropdown}>
            <SelectLabel style={{ top: "0" }}>Service Type</SelectLabel>
            <Select className="select">
              <SelectTrigger className="select-trigger">
                <span style={{ paddingTop: "1rem" }}>{selectedOption}</span>
                <IoIosArrowDown />
              </SelectTrigger>
              <CustomOptions className="custom-options">
                <CustomOption
                  data-value="Garden Setup"
                  onClick={changeSelection}
                >
                  Garden Setup
                </CustomOption>
                <CustomOption
                  data-value="Garden Maintenance"
                  onClick={changeSelection}
                >
                  Garden Maintenance
                </CustomOption>
                <CustomOption
                  data-value="Garden Clearance"
                  onClick={changeSelection}
                >
                  Garden Clearance
                </CustomOption>
              </CustomOptions>
            </Select>
          </SelectWrapper>

          <AddtoCart>
            <BsCartFill />
            Add to Cart
          </AddtoCart>
        </ServiceContent>
      </div>
      <ReviewsContainer className={reviewVisible ? "visible" : ""}>
        <ReviewTitle>
          <p>Reviews</p>
        </ReviewTitle>
        {service.reviewCount ? (
          service.reviews.map((review, index) => (
            <Review key={index}>
              <div className="customer-name">{review.customerName}</div>
              <p>{review.comment}</p>
            </Review>
          ))
        ) : (
          <div>There are no reviews yet!</div>
        )}
      </ReviewsContainer>
    </ServiceCard>
  );
};

export default SericeCardComponent;

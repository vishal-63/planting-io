import React, { useState } from "react";
import { BsCartFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

import { services } from "../data/services";

import { UserNavbar } from "../Components/Navbar";
import Topbar from "../Components/Topbar";
import BreadCrumb from "../Components/BreadCrumb";
import Footer from "../Components/Footer";
import {
  AddtoCart,
  ServiceCard,
  ServiceContent,
  ServicePrice,
  ServiceSection,
  ServiceTitle,
  Review,
  ReviewsContainer,
  ReviewTitle,
  ServiceStars,
} from "../Components/ServiceElements";

const GardenMaintenance = () => {
  return (
    <>
      <Topbar />
      <UserNavbar />
      <BreadCrumb />
      <ServiceSection>
        <ServiceTitle>Garden Maintenace</ServiceTitle>
        {services.map((service, index) => (
          <SericeCardComponent service={service} key={index} />
        ))}
      </ServiceSection>
      <Footer />
    </>
  );
};

const SericeCardComponent = ({ service }) => {
  const [reviewVisible, setReviewVisible] = useState(false);
  return (
    <ServiceCard reviewVisible={reviewVisible}>
      <div className="service-info">
        <img src={service.img} alt="" />
        <ServiceContent>
          <h3>{service.nursery}</h3>
          <p>{service.description}</p>
          <ServicePrice>
            <div className="discounted-price">
              Rs.&nbsp;<span>{service.discountedPrice}</span>
            </div>
            <div className="actual-price">
              Rs.&nbsp;<span>{service.actualPrice}</span>
            </div>
          </ServicePrice>
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

export default GardenMaintenance;

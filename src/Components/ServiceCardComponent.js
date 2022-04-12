import React, { useState, useEffect } from "react";
import { BsCartFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { IoIosArrowDown, IoMdCheckmarkCircleOutline } from "react-icons/io";

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
import Alert from "./Alert";
import { Cookies } from "react-cookie";
import { MdOutlineErrorOutline } from "react-icons/md";

const SericeCardComponent = ({ nurseryName, service }) => {
  const [selectedService, setSelectedService] = useState(service[0]);

  const [reviewVisible, setReviewVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(selectedService.type);

  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertClass, setAlertClass] = useState("");

  // const setupPrice = service.setupPrice;
  // const maintenancePrice = service.maintenancePrice;
  // const clearancePrice = service.clearancePrice;

  // const [price, setPrice] = useState(setupPrice);

  const openDropdown = (e) => {
    e.target.closest(".select").classList.toggle("open");
  };

  const changeSelection = (e, index) => {
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
    setSelectedService(service[index]);
  };

  // useEffect(() => {
  //   if (selectedOption === "Garden Setup") {
  //     setPrice(setupPrice);
  //   } else if (selectedOption === "Garden Maintenance") {
  //     setPrice(maintenancePrice);
  //   } else if (selectedOption === "Garden Clearance") {
  //     setPrice(clearancePrice);
  //   }
  // }, [selectedOption, setPrice, setupPrice, maintenancePrice, clearancePrice]);

  // console.log(service);

  const addToCart = async () => {
    const data = {
      itemId: selectedService.id,
      type: "Service",
      noOfItems: 1,
    };
    console.log(data);
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

  const handleClose = () => setAlertOpen(false);

  return (
    <ServiceCard reviewVisible={reviewVisible}>
      {alertOpen && (
        <Alert onClick={handleClose} className={alertClass}>
          <span style={{ fontSize: "1.6rem" }}>
            {alertClass == "success" ? (
              <IoMdCheckmarkCircleOutline />
            ) : (
              <MdOutlineErrorOutline />
            )}
          </span>
          {alertMessage}
        </Alert>
      )}

      <div className="service-info">
        <img src={selectedService.photoPath} alt="" />
        <ServiceContent>
          <h3>{nurseryName}</h3>
          <p>{selectedService.details}</p>
          <div>
            <ServicePrice>
              Rs .&nbsp; {selectedService.price - selectedService.discount}
              .00
            </ServicePrice>
            <ServiceStars>
              {[...Array(selectedService.stars)].map((index) => (
                <AiFillStar key={index} style={{ color: "#FFBF34" }} />
              ))}
              {[...Array(5 - selectedService.stars)].map((index) => (
                <AiFillStar key={index} style={{ color: "#dadada" }} />
              ))}
              <span>{`(${selectedService.feedback})`}</span>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => setReviewVisible(!reviewVisible)}
              >
                {selectedService.reviewCount
                  ? selectedService.reviewCount
                  : "0"}{" "}
                Reviews
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
                {service.map((s, index) => (
                  <CustomOption
                    data-value={s.type}
                    onClick={(e) => changeSelection(e, index)}
                    key={index}
                    className={s.type === selectedOption && "selected"}
                  >
                    {s.type}
                  </CustomOption>
                ))}
              </CustomOptions>
            </Select>
          </SelectWrapper>

          <AddtoCart onClick={addToCart}>
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

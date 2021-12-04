import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";

import img1 from "../../Images/plant-1.jpg";
import img2 from "../../Images/plant-2.jpg";
import img3 from "../../Images/plant-3.jpg";
import img4 from "../../Images/plant-4.jpg";
import img5 from "../../Images/plant-5.jpg";
import img6 from "../../Images/plant-6.jpg";
import img7 from "../../Images/plant-7.png";
import img8 from "../../Images/plant-8.png";
import {
  FeaturedProducts,
  Title,
  PlantCardWrapper,
  PlantCard,
  PlantImg,
  PlantName,
  PlantStarsWrapper,
  PlantPrice,
  DiscountedPrice,
  ActualPrice,
  Button,
} from "./InfoElements.js";

const InfoSection = () => {
  const plants = [
    {
      id: 1,
      img: img1,
      name: "Amaryllis",
      stars: 4,
      discountedPrice: "399.00",
      actualPrice: "599.00",
    },
    {
      id: 2,
      img: img2,
      name: "African Violet",
      stars: 5,
      discountedPrice: "599.00",
      actualPrice: "999.00",
    },
    {
      id: 3,
      img: img3,
      name: "Snake Plant",
      stars: 4,
      discountedPrice: "499.00",
      actualPrice: "599.00",
    },
    {
      id: 4,
      img: img4,
      name: "Calla Lily",
      stars: 4,
      discountedPrice: "399.00",
      actualPrice: "599.00",
    },
    {
      id: 5,
      img: img5,
      name: "Amaryllis",
      stars: 3,
      discountedPrice: "399.00",
      actualPrice: "599.00",
    },
    {
      id: 6,
      img: img6,
      name: "Amaryllis",
      stars: 4,
      discountedPrice: "399.00",
      actualPrice: "599.00",
    },
    {
      id: 7,
      img: img7,
      name: "Amaryllis",
      stars: 4,
      discountedPrice: "399.00",
      actualPrice: "599.00",
    },
    {
      id: 8,
      img: img8,
      name: "Amaryllis",
      stars: 4,
      discountedPrice: "399.00",
      actualPrice: "599.00",
    },
  ];

  return (
    <section>
      <FeaturedProducts>
        <Title>Featured Products</Title>
        <PlantCardWrapper>
          {plants.map((plant, index) => (
            <PlantCard key={index}>
              <PlantImg src={plant.img} alt={plant.name} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: "1rem .5rem 0",
                }}
              >
                <PlantName>{plant.name}</PlantName>
                <PlantStarsWrapper>
                  {[...Array(plant.stars)].map((index) => (
                    <AiFillStar key={index} />
                  ))}
                  {[...Array(5 - plant.stars)].map((index) => (
                    <AiFillStar key={index} style={{ color: "#dadada" }} />
                  ))}
                </PlantStarsWrapper>
              </div>
              <PlantPrice>
                <DiscountedPrice>
                  <BiRupee />
                  <span>{plant.discountedPrice}</span>
                </DiscountedPrice>
                <ActualPrice>{plant.actualPrice}</ActualPrice>
              </PlantPrice>
            </PlantCard>
          ))}
        </PlantCardWrapper>
        <Button className="secondary-btn">View All</Button>
      </FeaturedProducts>
    </section>
  );
};

export default InfoSection;

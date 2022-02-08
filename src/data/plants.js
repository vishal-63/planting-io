import img1 from "../Images/plant-1.jpg";
import img2 from "../Images/plant-2.jpg";
import img3 from "../Images/plant-3.jpg";
import img4 from "../Images/plant-4.jpg";
import img5 from "../Images/plant-5.jpg";
import img6 from "../Images/plant-6.jpg";
import img7 from "../Images/plant-7.png";
import img8 from "../Images/plant-8.png";

export const plants = [
  {
    id: "20341",
    link: "/shop-plants",
    img: img1,
    name: "Amaryllis",
    stars: 4,
    discountedPrice: "399.00",
    actualPrice: "599.00",
    category: "Plants",
    categoryLink: "/shop-plants",
    vendor: "Shri Ramesh Nursery",
    description:
      "The Victorians associated amaryllis with strength and determination because of their height and sturdiness.The shape of the flower represents the head and upper torso, signifying how Huntington’s disease affects mental and physical functions. The growing flower also represents hope and celebrates the achievements that have been made in Huntington’s disease treatment and research.",
  },
  {
    id: "20342",
    link: "/shop-plants",
    img: img2,
    name: "African Violet",
    stars: 5,
    discountedPrice: "599.00",
    actualPrice: "999.00",
    category: "Plants",
    categoryLink: "/shop-plants",
    vendor: "Shri Ramesh Nursery",
    description:
      "Simply looking at the purple of African Violets has been shown to benefit one's health. Gazing at it helps stimulate the release of a small amount of adrenaline, which raises energy levels, and increases the flow of oxygen to your brain, which helps you relax.",
  },
  {
    id: "20343",
    link: "/shop-plants",
    img: img3,
    name: "Snake Plant",
    stars: 4,
    discountedPrice: "499.00",
    actualPrice: "599.00",
    category: "Plants",
    categoryLink: "/shop-plants",
    vendor: "Mother Nature",
    description:
      "Snake plants are considered to be relatively safe, but they’re mildly toxic if consumed. Their leaves contain a poison that can cause swelling and numbness on the tongue if eaten in large doses. It’s wise to keep this plant away from children and animals who are prone to nibbling",
  },
  {
    id: "20344",
    link: "/shop-plants",
    img: img4,
    name: "Calla Lily",
    stars: 4,
    discountedPrice: "399.00",
    actualPrice: "599.00",
    category: "Plants",
    categoryLink: "/shop-plants",
    vendor: "Mother Nature",
    description:
      "Calla lilies purify the air around it and absorb carbon dioxide and release oxygen as part of the photosynthesis process. Also lilies absorb airborne pollutants such as benzene, formaldehyde and trichloroethylene.",
  },
  {
    id: "20345",
    link: "/shop-plants",
    img: img5,
    name: "Amaryllis",
    stars: 3,
    discountedPrice: "399.00",
    actualPrice: "599.00",
    category: "Plants",
    categoryLink: "/shop-plants",
    vendor: "Mother Nature",
    description:
      "The Victorians associated amaryllis with strength and determination because of their height and sturdiness.The shape of the flower represents the head and upper torso, signifying how Huntington’s disease affects mental and physical functions. The growing flower also represents hope and celebrates the achievements that have been made in Huntington’s disease treatment and research.",
  },
  {
    id: "20346",
    link: "/shop-plants",
    img: img6,
    name: "Amaryllis",
    stars: 4,
    discountedPrice: "399.00",
    actualPrice: "599.00",
    category: "Plants",
    categoryLink: "/shop-plants",
    vendor: "Mother Nature",
    description:
      "The Victorians associated amaryllis with strength and determination because of their height and sturdiness.The shape of the flower represents the head and upper torso, signifying how Huntington’s disease affects mental and physical functions. The growing flower also represents hope and celebrates the achievements that have been made in Huntington’s disease treatment and research.",
  },
  {
    id: "20347",
    link: "/shop-plants",
    img: img7,
    name: "Amaryllis",
    stars: 4,
    discountedPrice: "399.00",
    actualPrice: "599.00",
    category: "Plants",
    categoryLink: "/shop-plants",
    vendor: "Bajrang Nursery",
    description:
      "The Victorians associated amaryllis with strength and determination because of their height and sturdiness.The shape of the flower represents the head and upper torso, signifying how Huntington’s disease affects mental and physical functions. The growing flower also represents hope and celebrates the achievements that have been made in Huntington’s disease treatment and research.",
  },
  {
    id: "20348",
    link: "/shop-plants",
    img: img8,
    name: "Amaryllis",
    stars: 4,
    discountedPrice: "399.00",
    actualPrice: "599.00",
    category: "Plants",
    categoryLink: "/shop-plants",
    vendor: "Bajrang Nursery",
    description:
      "The Victorians associated amaryllis with strength and determination because of their height and sturdiness.The shape of the flower represents the head and upper torso, signifying how Huntington’s disease affects mental and physical functions. The growing flower also represents hope and celebrates the achievements that have been made in Huntington’s disease treatment and research.",
  },
];

export function getPlant(id) {
  return plants.find((plant) => plant.id === id);
}

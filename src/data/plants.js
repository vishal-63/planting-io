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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a maximus ex, sit amet vestibulum enim. Maecenas semper tortor ligula, at aliquet nisi porta vitae. Mauris vitae elementum urna. In vitae pharetra purus. Curabitur rutrum erat ut purus dapibus pellentesque. Vestibulum porttitor feugiat arcu, ut tincidunt sapien ullamcorper eget.",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a maximus ex, sit amet vestibulum enim. Maecenas semper tortor ligula, at aliquet nisi porta vitae. Mauris vitae elementum urna. In vitae pharetra purus. Curabitur rutrum erat ut purus dapibus pellentesque. Vestibulum porttitor feugiat arcu, ut tincidunt sapien ullamcorper eget.",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a maximus ex, sit amet vestibulum enim. Maecenas semper tortor ligula, at aliquet nisi porta vitae. Mauris vitae elementum urna. In vitae pharetra purus. Curabitur rutrum erat ut purus dapibus pellentesque. Vestibulum porttitor feugiat arcu, ut tincidunt sapien ullamcorper eget.",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a maximus ex, sit amet vestibulum enim. Maecenas semper tortor ligula, at aliquet nisi porta vitae. Mauris vitae elementum urna. In vitae pharetra purus. Curabitur rutrum erat ut purus dapibus pellentesque. Vestibulum porttitor feugiat arcu, ut tincidunt sapien ullamcorper eget.",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a maximus ex, sit amet vestibulum enim. Maecenas semper tortor ligula, at aliquet nisi porta vitae. Mauris vitae elementum urna. In vitae pharetra purus. Curabitur rutrum erat ut purus dapibus pellentesque. Vestibulum porttitor feugiat arcu, ut tincidunt sapien ullamcorper eget.",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a maximus ex, sit amet vestibulum enim. Maecenas semper tortor ligula, at aliquet nisi porta vitae. Mauris vitae elementum urna. In vitae pharetra purus. Curabitur rutrum erat ut purus dapibus pellentesque. Vestibulum porttitor feugiat arcu, ut tincidunt sapien ullamcorper eget.",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a maximus ex, sit amet vestibulum enim. Maecenas semper tortor ligula, at aliquet nisi porta vitae. Mauris vitae elementum urna. In vitae pharetra purus. Curabitur rutrum erat ut purus dapibus pellentesque. Vestibulum porttitor feugiat arcu, ut tincidunt sapien ullamcorper eget.",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a maximus ex, sit amet vestibulum enim. Maecenas semper tortor ligula, at aliquet nisi porta vitae. Mauris vitae elementum urna. In vitae pharetra purus. Curabitur rutrum erat ut purus dapibus pellentesque. Vestibulum porttitor feugiat arcu, ut tincidunt sapien ullamcorper eget.",
  },
];

export function getPlant(id) {
  return plants.find((plant) => plant.id === id);
}

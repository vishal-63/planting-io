import img1 from "../Images/seed1.jpg";
import img2 from "../Images/seed2.jpg";
import img3 from "../Images/seed3.jpg";
import img4 from "../Images/seed4.jpg";
import img5 from "../Images/seed5.jpg";
import img6 from "../Images/seed6.jpg";
import img7 from "../Images/seed7.jpg";
import img8 from "../Images/seed8.jpg";

export const seeds = [
  {
    id: "30341",
    link: "/shop-seeds",
    img: img1,
    name: "Palak seeds",
    stars: 4,
    discountedPrice: "40.00",
    actualPrice: "50.00",
    category: "Seeds",
    categoryLink: "/shop-seeds",
    vendor: "Shri Ramesh Nursery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a maximus ex, sit amet vestibulum enim. Maecenas semper tortor ligula, at aliquet nisi porta vitae. Mauris vitae elementum urna. In vitae pharetra purus. Curabitur rutrum erat ut purus dapibus pellentesque. Vestibulum porttitor feugiat arcu, ut tincidunt sapien ullamcorper eget.",
  },
  {
    id: "30342",
    link: "/shop-seeds",
    img: img2,
    name: "Amaranthus white",
    stars: 5,
    discountedPrice: "40.00",
    actualPrice: "50.00",
    category: "Seeds",
    categoryLink: "/shop-seeds",
    vendor: "Shri Ramesh Nursery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a maximus ex, sit amet vestibulum enim. Maecenas semper tortor ligula, at aliquet nisi porta vitae. Mauris vitae elementum urna. In vitae pharetra purus. Curabitur rutrum erat ut purus dapibus pellentesque. Vestibulum porttitor feugiat arcu, ut tincidunt sapien ullamcorper eget.",
  },
  {
    id: "30343",
    link: "/shop-seeds",
    img: img3,
    name: "Drumstick seeds",
    stars: 4,
    discountedPrice: "40.00",
    actualPrice: "50.00",
    category: "Seeds",
    categoryLink: "/shop-seeds",
    vendor: "Shri Ramesh Nursery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a maximus ex, sit amet vestibulum enim. Maecenas semper tortor ligula, at aliquet nisi porta vitae. Mauris vitae elementum urna. In vitae pharetra purus. Curabitur rutrum erat ut purus dapibus pellentesque. Vestibulum porttitor feugiat arcu, ut tincidunt sapien ullamcorper eget.",
  },
  {
    id: "30344",
    link: "/shop-seeds",
    img: img4,
    name: "Carrot seeds",
    stars: 4,
    discountedPrice: "50.00",
    actualPrice: "",
    category: "Seeds",
    categoryLink: "/shop-seeds",
    vendor: "Mother Nature",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a maximus ex, sit amet vestibulum enim. Maecenas semper tortor ligula, at aliquet nisi porta vitae. Mauris vitae elementum urna. In vitae pharetra purus. Curabitur rutrum erat ut purus dapibus pellentesque. Vestibulum porttitor feugiat arcu, ut tincidunt sapien ullamcorper eget.",
  },
  {
    id: "30345",
    link: "/shop-seeds",
    img: img5,
    name: "Coriander seeds",
    stars: 3,
    discountedPrice: "30.00",
    actualPrice: "35",
    category: "Seeds",
    categoryLink: "/shop-seeds",
    vendor: "Bajrang Nursery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a maximus ex, sit amet vestibulum enim. Maecenas semper tortor ligula, at aliquet nisi porta vitae. Mauris vitae elementum urna. In vitae pharetra purus. Curabitur rutrum erat ut purus dapibus pellentesque. Vestibulum porttitor feugiat arcu, ut tincidunt sapien ullamcorper eget.",
  },
  {
    id: "30346",
    link: "/shop-seeds",
    img: img6,
    name: "Cucumber seeds",
    stars: 4,
    discountedPrice: "40.00",
    actualPrice: "",
    category: "Seeds",
    categoryLink: "/shop-seeds",
    vendor: "Bajrang Nursery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a maximus ex, sit amet vestibulum enim. Maecenas semper tortor ligula, at aliquet nisi porta vitae. Mauris vitae elementum urna. In vitae pharetra purus. Curabitur rutrum erat ut purus dapibus pellentesque. Vestibulum porttitor feugiat arcu, ut tincidunt sapien ullamcorper eget.",
  },
  {
    id: "30347",
    link: "/shop-seeds",
    img: img7,
    name: "Radish seeds",
    stars: 4,
    discountedPrice: "45.00",
    actualPrice: "50.00",
    category: "Seeds",
    categoryLink: "/shop-seeds",
    vendor: "Mother Nature",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a maximus ex, sit amet vestibulum enim. Maecenas semper tortor ligula, at aliquet nisi porta vitae. Mauris vitae elementum urna. In vitae pharetra purus. Curabitur rutrum erat ut purus dapibus pellentesque. Vestibulum porttitor feugiat arcu, ut tincidunt sapien ullamcorper eget.",
  },
  {
    id: "30348",
    link: "/shop-seeds",
    img: img8,
    name: "Methi",
    stars: 4,
    discountedPrice: "40.00",
    actualPrice: "55.00",
    category: "Seeds",
    categoryLink: "/shop-seeds",
    vendor: "Mother Nature",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a maximus ex, sit amet vestibulum enim. Maecenas semper tortor ligula, at aliquet nisi porta vitae. Mauris vitae elementum urna. In vitae pharetra purus. Curabitur rutrum erat ut purus dapibus pellentesque. Vestibulum porttitor feugiat arcu, ut tincidunt sapien ullamcorper eget.",
  },
];

export function getSeed(id) {
  return seeds.find((seed) => seed.id === id);
}

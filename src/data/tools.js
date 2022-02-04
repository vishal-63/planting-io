import img1 from "../Images/tool1.webp";
import img2 from "../Images/tool2.webp";
import img3 from "../Images/tool3.webp";
import img4 from "../Images/tool4.webp";
import img5 from "../Images/tool5.webp";
import img6 from "../Images/tool6.webp";
import img7 from "../Images/tool7.webp";
import img8 from "../Images/tool8.webp";

export const tools = [
  {
    id: "40341",
    link: "/shop-tools",
    img: img1,
    name: "Double Prong Weeder",
    stars: 4,
    discountedPrice: "165.00",
    actualPrice: "255.00",
    category: "Tools",
    categoryLink: "/shop-tools",
    vendor: "Shri Ramesh Nursery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a maximus ex, sit amet vestibulum enim. Maecenas semper tortor ligula, at aliquet nisi porta vitae. Mauris vitae elementum urna. In vitae pharetra purus. Curabitur rutrum erat ut purus dapibus pellentesque. Vestibulum porttitor feugiat arcu, ut tincidunt sapien ullamcorper eget.",
  },
  {
    id: "40342",
    link: "/shop-tools",
    img: img2,
    name: "Single Prong Weeder",
    stars: 5,
    discountedPrice: "165.00",
    actualPrice: "255.00",
    category: "Tools",
    categoryLink: "/shop-tools",
    vendor: "Shri Ramesh Nursery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a maximus ex, sit amet vestibulum enim. Maecenas semper tortor ligula, at aliquet nisi porta vitae. Mauris vitae elementum urna. In vitae pharetra purus. Curabitur rutrum erat ut purus dapibus pellentesque. Vestibulum porttitor feugiat arcu, ut tincidunt sapien ullamcorper eget.",
  },
  {
    id: "40343",
    link: "/shop-tools",
    img: img3,
    name: "Five Prong Weeder",
    stars: 4,
    discountedPrice: "225.00",
    actualPrice: "320.00",
    category: "Tools",
    categoryLink: "/shop-tools",
    vendor: "Shri Ramesh Nursery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a maximus ex, sit amet vestibulum enim. Maecenas semper tortor ligula, at aliquet nisi porta vitae. Mauris vitae elementum urna. In vitae pharetra purus. Curabitur rutrum erat ut purus dapibus pellentesque. Vestibulum porttitor feugiat arcu, ut tincidunt sapien ullamcorper eget.",
  },
  {
    id: "40344",
    link: "/shop-tools",
    img: img4,
    name: "Cultivator with Wooden Handle",
    stars: 4,
    discountedPrice: "225.00",
    actualPrice: "380.00",
    category: "Tools",
    categoryLink: "/shop-tools",
    vendor: "Mother Nature",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a maximus ex, sit amet vestibulum enim. Maecenas semper tortor ligula, at aliquet nisi porta vitae. Mauris vitae elementum urna. In vitae pharetra purus. Curabitur rutrum erat ut purus dapibus pellentesque. Vestibulum porttitor feugiat arcu, ut tincidunt sapien ullamcorper eget.",
  },
  {
    id: "40345",
    link: "/shop-tools",
    img: img5,
    name: "5 Dial Sprinkler With Quick",
    stars: 3,
    discountedPrice: "245.00",
    actualPrice: "",
    category: "Tools",
    categoryLink: "/shop-tools",
    vendor: "Bajrang Nursery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a maximus ex, sit amet vestibulum enim. Maecenas semper tortor ligula, at aliquet nisi porta vitae. Mauris vitae elementum urna. In vitae pharetra purus. Curabitur rutrum erat ut purus dapibus pellentesque. Vestibulum porttitor feugiat arcu, ut tincidunt sapien ullamcorper eget.",
  },
  {
    id: "40346",
    link: "/shop-tools",
    img: img6,
    name: "Single-Edge Sickle",
    stars: 4,
    discountedPrice: "245.00",
    actualPrice: "365.00",
    category: "Tools",
    categoryLink: "/shop-tools",
    vendor: "Bajrang Nursery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a maximus ex, sit amet vestibulum enim. Maecenas semper tortor ligula, at aliquet nisi porta vitae. Mauris vitae elementum urna. In vitae pharetra purus. Curabitur rutrum erat ut purus dapibus pellentesque. Vestibulum porttitor feugiat arcu, ut tincidunt sapien ullamcorper eget.",
  },
  {
    id: "40347",
    link: "/shop-tools",
    img: img7,
    name: "X828 Plastic Sprinkler Nozzle",
    stars: 4,
    discountedPrice: "245.00",
    actualPrice: "",
    category: "Tools",
    categoryLink: "/shop-tools",
    vendor: "Mother Nature",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a maximus ex, sit amet vestibulum enim. Maecenas semper tortor ligula, at aliquet nisi porta vitae. Mauris vitae elementum urna. In vitae pharetra purus. Curabitur rutrum erat ut purus dapibus pellentesque. Vestibulum porttitor feugiat arcu, ut tincidunt sapien ullamcorper eget.",
  },
  {
    id: "40348",
    link: "/shop-tools",
    img: img8,
    name: "Double Side Rake & Trowel",
    stars: 4,
    discountedPrice: "295.00",
    actualPrice: "",
    category: "Tools",
    categoryLink: "/shop-tools",
    vendor: "Mother Nature",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a maximus ex, sit amet vestibulum enim. Maecenas semper tortor ligula, at aliquet nisi porta vitae. Mauris vitae elementum urna. In vitae pharetra purus. Curabitur rutrum erat ut purus dapibus pellentesque. Vestibulum porttitor feugiat arcu, ut tincidunt sapien ullamcorper eget.",
  },
];

export function getTool(id) {
  return tools.find((tool) => tool.id === id);
}

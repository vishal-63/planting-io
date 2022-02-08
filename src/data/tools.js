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
      "Double Prong Weeder is an upgrade to the Single Prong and is used for weeding, small root removal, loosening the soil efficiently and digging holes to sow seeds. It comes with a wooden handle for a powerful and firm grip and is perfectly sized for flower beds and small vegetable gardens.",
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
      "Single Prong Weeder is an essential tool that is required in every gardener's inventory for weeding and small root removal as well also dig in holes to sow seeds. It comes with a wooden handle for a powerful and firm grip and is perfectly sized for flower beds and small vegetable gardens.",
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
      "The Five Prong Weeder comes with 5 metal prongs and wooden handles for comfortably turning soil and cleaning leaves from the garden.",
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
      " Cultivator with Wooden Handle is a gardening tool that is used to turn the soil where you plan on planting and for removing weeds. In small flower or vegetable gardens, it can also be used like a small plow to dig the planting rows.",
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
      "The 5 Dial Sprinkler with Quick is operated via a revolving shower head with 5 different patterns for irrigating the garden. It can cover a radius of 3 to 5 ft and it waters the garden in a semi-circle formation.",
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
      "The Single-Edge Sickle is one of the most ancient of harvesting tools. It is a superior quality tool used to cut grass or harvest crops very easily. It features a wooden handle which is provided for a firm grip and allows the user to complete their task with speed and efficiency.",
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
      "The X828 Plastic Sprinkler Nozzle is perfect for cleaning or general watering purposes and has clips for its opening. It features an adaptable nozzle that can fit any garden hose. The nozzle smooth on-off lever handle allows for continuous spraying.",
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
      "A multi-purpose tool that is highly beneficial for your garden, the Pyramid double side rake and trowel should be a constant fixture amongst your garden tools. It clears leaves, grass and other debris with the rake on one side and digs, scoops and moves dirt with the trowel the other side.",
  },
];

export function getTool(id) {
  return tools.find((tool) => tool.id === id);
}

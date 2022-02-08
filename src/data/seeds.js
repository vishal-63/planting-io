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
      "Spinach is easy to grow in any type of vegetable garden. Mix of soil requires Red soil, Vermicompost and Coco peat in respective ratios (40: 40: 20). Also add handful of Neem cake to each pot to keep the soil pest free.Spinach need at least 1 to 2 hours Sunlight. Add handful of compost for every 10-15 days for each pot to make sure soil has enough nutrition’s to grow plants.",
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
      "Amaranth is a nutritious, gluten-free grain that provides plenty of fiber, protein and micronutrients.It has also been associated with a number of health benefits, including reduced inflammation, lower cholesterol levels and increased weight loss.Best of all, this grain is easy to prepare and can be added to a variety of dishes, making it an excellent addition to your diet.",
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
      "Drumstick seeds are a boon to those suffering from joint pains and arthritis. It helps strengthening bones, and reduces soreness around joints with its anti- inflammatory benefits and rich source of calcium. Because of its high content of vitamin C, it's an ideal food to boost immune system ",
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
      "Carrot seeds are used in aromatherapy applications, Carrot Seed Oil stimulates circulation as well as brain and nerve functions. Its warm, earthy, woody, and herbaceous scent has a soothing, refreshing, and grounding effect that is known to diminish feelings of fatigue, weakness, anxiety, and stress.",
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
      "Coriander seed helps in reducing bad cholesterol and promotes good cholesterol in the body. These are rich in copper, zinc, iron and other essential minerals that increases RBC and improves heart health. Coriander seeds also help in increasing metabolism.",
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
      "Cucumber one of the most popular and most used vegetable in summer can be consumed raw as well as cooked. They are called as kamala kakdi (Hindi), sowthekay (kannada) and has a lot more local names. Consuming cucumbers fights against inflammation manages stress, reduces cholesterol etc. Cucumbers are climber/creeper plants can be grown in containers as well as in your garden patch which requires good care in the process of growth.",
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
      "Radish seeds have a pungent and slightly bitter flavor. Their culinary uses are not as numerous as their medicinal ones. They are usually added to salads, herbal vinegars, and seasonings. They go well with brown mustard seeds in condiments and spice mixes.",
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
      "Based on the available evidence, fenugreek has benefits for lowering blood sugar levels, boosting testosterone, and increasing milk production in breastfeeding mothers. Fenugreek may also reduce cholesterol levels, lower inflammation, and help with appetite control, but more research is needed in these areas.",
  },
];

export function getSeed(id) {
  return seeds.find((seed) => seed.id === id);
}

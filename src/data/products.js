const products = [
  {
    id: "60234",
    name: "Areca Palm Plant",
    type: "Plant",
    price: 499,
    discount: 100,
    quantity: 15,
  },
  {
    id: "60233",
    name: "Peace Lily Plant",
    type: "Plant",
    price: 450,
    discount: 105,
    quantity: 10,
  },
  {
    id: "20089",
    name: "X826 Five Way Dial Plastic Hose Nozzle",
    type: "Tool",
    price: 249,
    discount: 50,
    quantity: 5,
  },
  {
    id: "30069",
    name: "Italian Basil Seeds",
    type: "Seed",
    price: 99,
    discount: 14,
    quantity: 150,
  },
];

export function getProducts() {
  return products;
}

export function getProduct(id) {
  return products.find((product) => product.id === id);
}

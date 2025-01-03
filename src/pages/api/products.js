export default function handler(req, res) {
  const products = [
    {
      id: 1,
      name: "Chocolate Cake",
      price: "200.00",
      image: "/images/vecteezy_juicy-brownies-homemade-brownies-cake-cookies-with_28823695.jpeg",
    },
    {
      id: 2,
      name: "Red Velvet",
      price: "250.00",
      image: "/download (1).jpg",
    },
    {
      id: 3,
      name: "White Choco Cake",
      price: "200.00",
      image:
        "/images/ai-generated-cake-with-vanilla-buttercream-isolated-on-transparent-background-free-png.webp",
    },
    {
      id: 4,
      name: "Chocolate Strawbery",
      price: "250.00",
      image:
        "/images/strawberry cake.jpg"},
    {
      id: 5,
      name: "Chocolate White Cream",
      price: "450.00",
      image:
        "/images/delicious-cake-with-white-brown-chocolate-swirly-with-flowers-blackberries-table_198067-126780.jpg"
      },
    {
      id: 6,
      name: "Red Velvet Cheese Cake",
      price: "350.00",
      image:
        "/download (2).jpg",
    },
  ];
  res.status(200).json(products);
}

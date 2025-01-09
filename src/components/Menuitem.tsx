"use client";
import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
import Productcard from "./Productcard";
import { Product } from "@/pages/types";
import Image from "next/image";

const Menuitem = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [showcart, setShowcart] = useState(false);
  const [ischeckout, setIscheckout] = useState(false);
  // const router = useRouter();

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();

    const savedcart = localStorage.getItem("cart");
    if (savedcart) {
      setCart(JSON.parse(savedcart));
    }
  }, []);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const togglecart = () => {
    setShowcart((prev) => !prev);
  };

  const goTocheckout = () => {
    setIscheckout(true);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <div className="relative min-h-screen bg-zinc-400 py-6">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 animate-background"
        style={{
          backgroundImage: "url('/images/cake-7749792_640.jpg')",
        }}
      ></div>

      <div className="relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold text-pink-800 mb-4">
            Delicious, Fresh, and Yummy Cakes
          </h1>
          <p className="text-xl text-violet-800">
            Explore Our Section of Mouth-Watering Cake Flavors to Order Now!
          </p>
        </div>

        {/* Products Section */}
        <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-pink-800">
          {products.map((product) => (
            <Productcard
              key={product.id}
              {...product}
              onAddToCart={addToCart}
            />
          ))}
        </div>

        {/* Cart Section */}
        <div className="max-w-6xl mx-auto mt-8">
          <button
            onClick={togglecart}
            className="bg-pink-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-pink-900 transition duration-300 ease-out transform"
          >
            {showcart ? "Hide Cart" : "View Cart"} ({cart.length} items)
          </button>
          {showcart && (
            <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-4xl font-bold mb-4 text-pink-800">
                Your Cart Items
              </h2>
              {cart.length > 0 ? (
                <div>
                  <ul>
                    {cart.map((product, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-center mb-6 transition-all duration-300 ease-in-out"
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={100}
                          height={80}
                          className="w-20 h-40 sm:w-24 inline-block transition-transform duration-300 ease-out transform text-black"
                        />
                        <span className="ml-4 text-lg font-medium text-slate-600">
                          {product.name} - ${product.price}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-between items-center mt-6 text-violet-800">
                    <span className="font-semibold text-xl">
                      Total: $
                      {cart
                      .reduce(
                        (total, product) => total + Number(product.price || 0),
                        0
                      )
                      .toFixed(2)}


                     
                    </span>

                    <div>
                      <button
                        onClick={goTocheckout}
                        className="bg-pink-800 py-3 px-8 rounded-lg text-lg shadow-lg hover:bg-violet-600 transition duration-300 ease-in-out text-white transform scale-105"
                      >
                        Proceed to Checkout
                      </button>

                      <button
                        onClick={clearCart}
                        className="bg-slate-500 py-3 px-8 rounded-lg ml-4 text-lg shadow-lg hover:bg-violet-600 transition duration-300 ease-in-out text-white transform scale-105"
                      >
                        Clear Cart
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-lg text-pink-800">Your Cart is Empty</p>
              )}
            </div>
          )}
        </div>

        {/* Checkout Section */}
        {ischeckout && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 text-black">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
              <h2 className="text-4xl font-bold text-pink-800 ">Checkout</h2>
              <p className="text-violet-800">
                Please Confirm Your Order Before Proceeding
              </p>

              <div className="mt-4">
                <ul>
                  {cart.map((product, index) => (
                    <li
                      key={index}
                      className="flex justify-between text-slate-500 mb-4"
                    >
                      <span>{product.name}</span>
                      <span>${Number(product.price || 0).toFixed(2)}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex justify-between mt-4">
                  <span className="semi-bold">Total:</span>
                  <span className="font-semibold">
                    $
                    {cart
                      .reduce(
                        (total, product) => total + Number(product.price || 0),
                        0
                      )
                      .toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => setIscheckout(false)}
                  className="bg-pink-800 text-white py-2 px-6 rounded-lg text-lg shadow-md"
                >
                  Close
                </button>

                <button
                  onClick={() =>
                    alert("Order Confirmed! Will Deliver At Your Doorstep!")
                  }
                  className="bg-slate-600 text-white py-2 px-6 rounded-lg text-lg shadow-md"
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menuitem;


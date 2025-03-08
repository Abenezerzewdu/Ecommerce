import React, { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";
import productsData from "./products.json";
import "./styles/productsCategory.css";
import { Link } from "react-router-dom";

function ShopByCategory() {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const updatedProducts = productsData.map((product) => ({
      ...product,
      image: require(`./images/${product.imageName}`),
    }));
    setProducts(updatedProducts);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSliding(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
        setIsSliding(false); // Reset sliding
      }, 1000); // Match this duration with your CSS transition duration
    }, 4000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [products]);

  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  // Calculate indices for the 3 displayed products
  const displayProducts = [
    products[currentIndex % products.length],
    products[(currentIndex + 1) % products.length],
    products[(currentIndex + 2) % products.length],
  ];

  return (
    <div className="shopbycategory">
      <h2>Shop By Category</h2>
      <span>
        <Link to="./ProductList" className="viewAll">
          View All &#8594;
        </Link>
      </span>
      <div className="product-carousel">
        {displayProducts.map((product, index) => (
          <div
            key={product.id}
            className={`productscard ${
              isSliding && index === 0 ? "slide-out" : ""
            } ${isSliding && index === 2 ? "slide-in-new" : "slide-in"}`}
          >
            <ProductsCard
              image={product.image}
              name={product.name}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopByCategory;

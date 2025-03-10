import React, { useState, useEffect } from "react";
import "./styles/productList.css";
import ProductsCard from "./ProductsCard.js";
import productsData from "./products.json";

const importImage = async (imageName) => {
  const module = await import(`./images/${imageName}`);
  return module.default || module; // Ensure it gets the string URL
};
function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isInputVisible, setInputVisiblity] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      const updatedProducts = await Promise.all(
        productsData.map(async (product) => ({
          ...product,
          image: await importImage(product.imageName),
        }))
      );
      setProducts(updatedProducts);
      setFilteredProducts(updatedProducts); // Initialize filtered products
    };

    fetchImages();
  }, []);

  useEffect(() => {
    // Filter products based on search term
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchTerm, products]);

  if (filteredProducts.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-list">
      <h2>Products List</h2>
      <div className="search-filter-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`search-input ${isInputVisible ? "visible" : ""}`}
        />
        <i
          className="search-icon fa fa-search"
          onClick={() => setInputVisiblity(!isInputVisible)}
        ></i>

        {/* Replace with your icon */}
        {/* Add more filters here as needed */}
      </div>
      <div className="filter-container"></div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductsCard
            key={product.id}
            className="product-item"
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;

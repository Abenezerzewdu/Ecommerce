import React from "react";
import "./styles/productsCard.css";
function ProductsCard(product) {
  return (
    <div className="productCard">
      <img src={product.image} alt="card1" className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">{product.price} Br </p>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
}

export default ProductsCard;

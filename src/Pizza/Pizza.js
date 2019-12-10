import React from "react";

const Pizza = ({product}) => {
  return (
    <div className="product-tile">
    <img className="product-image" src={product.image} alt={product.name} />
    <div>
      <span className="product-name">{product.name}</span>
      <span className="product-description">{product.description}</span>
      <p className="product-price">
        Price:
        <span>
          {product.price}$
        </span>
      </p>
    </div>
  </div>
  );
};

export default Pizza;

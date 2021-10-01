import React from "react";
import "./Product.css";

const Product = (props) => {
  // console.log(props.handleCart);
  // console.log(props.product);

  const { img, name, seller, price, stock } = props.product;

  return (
    <div className="products">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <p>by: {seller}</p>
        <h3>
          <small>$ {price}</small>
        </h3>
        <p>
          <small>only {stock} left in stock - order soon</small>
        </p>
        <button
          onClick={() => props.handleCart(props.product)}
          className="cart-btn"
        >
          <i className="fas fa-cart-plus"></i> Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;

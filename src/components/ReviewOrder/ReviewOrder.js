import React from "react";

const ReviewOrder = (props) => {
  // console.log(props.product);
  const { img, name, seller, price, quantity, key } = props.product;
  const { handleRemove } = props;

  return (
    <div className="products product-container">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <h3>
          <small>$ {price}</small>
        </h3>
        <p>by: {seller}</p>
        <h3>
          <small>Quantity: {quantity}</small>
        </h3>
        <button onClick={() => handleRemove(key)} className="cart-btn">
          <i className="fa fa-trash-alt"></i> Remove
        </button>
      </div>
    </div>
  );
};

export default ReviewOrder;

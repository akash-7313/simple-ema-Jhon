import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(props.cart);
    const { cart } = props;

    let totalQuantity = 0;
    let price = 0;
    for (const product of cart) {
        // console.log(product.quantity);
      if (!product.quantity) {
        product.quantity = 1;
      }
      price = price + product.price * product.quantity;
      totalQuantity = totalQuantity + product.quantity;
    }

    const shipping = price > 0 ? 15 : 0;
    const totalBeforeTax = price + shipping;
    const tax = (price + shipping) * 0.10;
    const total = price + shipping + tax;

    return (
      <div className="cart">
        <h3>Order Summary</h3>
        <p>Items ordered: {totalQuantity}</p>
        <div className="cart-info">
          <div>
            <p>Price: </p>
            <p>Shipping & Handling: </p>
            <p>Total before tax: </p>
            <p>Estimated Tax: </p>
            <h3 className="total">Order Total:</h3>
          </div>
          <div>
            <p>$ {price.toFixed(2)}</p>
            <p>$ {shipping.toFixed(2)}</p>
            <p>$ {totalBeforeTax.toFixed(2)}</p>
            <p>$ {tax.toFixed(2)}</p>
            <h3 className="total">$ {total.toFixed(2)}</h3>
          </div>
        </div>
        {props.children}
      </div>
    );
};

export default Cart;









/*

import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;

    // const totalReducer = (previous, product) => previous + product.price;
    // const total = cart.reduce(totalReducer, 0);
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 10;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Ordered: {totalQuantity}</h5>
            <br />
            <p>Total: {total.toFixed(2)}</p>
            <p>Shipping: {shipping}</p>
            <p>tax: {tax.toFixed(2)}</p>
            <p>Grand Total: {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;

*/
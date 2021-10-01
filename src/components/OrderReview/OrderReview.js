import React from "react";
import { useHistory } from "react-router";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { clearTheCart, deleteFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewOrder from "../ReviewOrder/ReviewOrder";

const OrderReview = () => {
  // array de-structuring
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);
  //   console.log(cart);
  const history = useHistory();

  const handleRemove = key => {
    const newCart = cart.filter(product => product.key !== key);
    setCart(newCart);
    deleteFromDb(key);
  }

  const handlePlaceOrder = () => {
    history.push("/placeorder");
    clearTheCart();
  }

  return (
    <div className="shop">
      <div>
        {cart.map((product) => (
          <ReviewOrder key={product.key} product={product} handleRemove={handleRemove}></ReviewOrder>
        ))}
      </div>
      <div>
        <Cart cart={cart}>
          <button onClick={handlePlaceOrder} className="review-btn cart-btn">Place your Order</button>
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;

//   let quantity = 0;
//   for (const pd of cart) {
//     quantity += pd.quantity;
//   }

// <h2>total products: {products.length}</h2>
// <h2>total ordered products: {cart.length}</h2>
// <h2>total quantity: {quantity}</h2>

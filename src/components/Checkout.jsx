import React, { useContext } from "react";
import { contextCreate } from "../context/Context";
import "./checkout.css";

const Checkout = () => {
  const { cartData } = useContext(contextCreate);

  console.log(cartData);

  let itemQuantity = 0;
  let totalPrice = 0;
  const totalQuantity = cartData.map((item) => {
    return (itemQuantity += item.qty);
  });

  const calculatePrice = cartData.map((item) => {
    return (totalPrice += item.price * item.qty);
  });

  return (
    <>
      {itemQuantity > 0 ? (
        <div className="checkout-container">
          <div className="item">
            <div className="items">Item Quantity :</div>
            <div className="quantity">{itemQuantity}</div>
          </div>
          <div className="checkout-price">
            <div className="amt">Total Amount :</div>
            <div className="product-price">{totalPrice}</div>
          </div>
        </div>
      ) : (
        <div>There is no item in the cart</div>
      )}
    </>
  );
};

export default Checkout;

import React from "react";
import CartItems from "./CartItems";
import Checkout from "./Checkout";

const Cart = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div>
        <CartItems />
      </div>
      <div>
        <h4 style={{ textAlign: "center", marginTop: "10px" }}>Checkout</h4>
        <Checkout />
      </div>
    </div>
  );
};

export default Cart;

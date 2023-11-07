import React, { useContext } from "react";
import { contextCreate } from "../context/Context";
import "./cartItems.css";

const CartItems = () => {
  const { cartData, removeProduct, increment, decrement } =
    useContext(contextCreate);

  const removeItem = (id) => {
    removeProduct(id);
  };

  // const increaseItem = (id) => {
  //   increment(id);
  // };

  // const decreaseItem = (id) => {
  //   decrement(id);
  // };

  // console.log(cartData);
  return (
    <div className="cart-container">
      <div>
        {cartData.map((item) => {
          return (
            <div className="cart-items" key={item.id}>
              <div className="image">
                <img src={item.image} />
              </div>
              <div className="text">{item.name}</div>
              <div className="price-tag">{item.price}</div>
              <div className="buttons">
                <button className="plus" onClick={() => increment(item.id)}>
                  +
                </button>
                <div className="quantity">{item.qty}</div>

                <button
                  className="minus"
                  onClick={() => (item.qty > 1 ? decrement(item.id) : item)}
                >
                  -
                </button>
                <button className="remove" onClick={() => removeItem(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartItems;

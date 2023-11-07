import React from "react";

const Reducer = (state, action) => {
  if (action.type === "ADD") {
    const existingItem = state.cartData.some(
      (item) => item.id === action.payload.id
    );
    console.log(existingItem);
    if (existingItem) {
      const updateCartData = state.cartData.map((item) => {
        return item ? (item.qty += 1) : item;
      });
      localStorage.setItem("cart", JSON.stringify(updateCartData));
      return {
        ...state,
        cartData: updateCartData,
      };
    } else {
      const newItem = [...state.cartData, { ...action.payload, qty: 1 }];
      localStorage.setItem("cart", JSON.stringify(newItem));

      return {
        ...state,
        cartData: newItem,
      };
    }
  }

  if (action.type === "REMOVE") {
    return {
      ...state,
      cartData: state.cartData.filter((item) => {
        return item.id !== action.payload;
      }),
    };
  }

  if (action.type === "INCREMENT") {
    return {
      ...state,
      cartData: state.cartData.filter((item) => {
        return item.id === action.payload ? (item.qty += 1) : item;
      }),
    };
  }

  if (action.type === "DECREMENT") {
    return {
      ...state,
      cartData: state.cartData.filter((item) => {
        return item.id === action.payload ? (item.qty -= 1) : item;
      }),
    };
  }

  if (action.type === "INITIALIZED_CART") {
    return {
      ...state,
      cartData: action.payload,
    };
  }
};

export default Reducer;

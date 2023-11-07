import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

export const contextCreate = createContext();

const initialState = {
  cartData: [],
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const addProduct = (index) => {
    dispatch({ type: "ADD", payload: index });
  };

  const removeProduct = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const increment = (id) => {
    dispatch({ type: "INCREMENT", payload: id });
  };

  const decrement = (id) => {
    dispatch({ type: "DECREMENT", payload: id });
  };

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const cartDataFromStorage = JSON.parse(storedCart);
      dispatch({ type: "INITIALIZED_CART", payload: cartDataFromStorage });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cartData));
  }, [state.cartData]);

  return (
    <contextCreate.Provider
      value={{ ...state, addProduct, removeProduct, increment, decrement }}
    >
      {children}
    </contextCreate.Provider>
  );
};

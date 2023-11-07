import React, { useContext } from "react";
import { productDetails } from "../database/data";
import "./home.css";
import { contextCreate } from "../context/Context";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { addProduct, cartData } = useContext(contextCreate);
  const redirect = useNavigate();
  // console.log(cartData);

  const add = (index) => {
    addProduct(productDetails[index]);
    redirect("/cart");
  };

  return (
    <div>
      <div className="home-container">
        {productDetails.map((item, index) => {
          return (
            <div className="cart" key={item.id}>
              <div className="image">
                <img src={item.image} />
              </div>
              <p className="name">{item.name}</p>
              <p className="price">₹ {item.price}</p>
              <button className="btn" onClick={() => add(index)}>
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

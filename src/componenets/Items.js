import React from "react";
import { useContext } from "react";
import { CartContext } from "./Cart";
import "./cart.css";
function Items({ id, description, title, price, img, quantity }) {
  const { removeItem, increment, decrement } = useContext(CartContext);

  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="img" />
        </div>
        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="add-minus-quantity">
          <i class="fa-solid fa-minus" onClick={()=>decrement(id)}></i>
          <input type="text" placeholder={quantity} />
          <i class="fa-solid fa-plus add" onClick={() => increment(id)}></i>
        </div>
        <div className="price">
          <h3>{price}</h3>
        </div>
        <div className="remove-item">
          <i class="fa fa-trash-alt remove" onClick={() => removeItem(id)}></i>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Items;

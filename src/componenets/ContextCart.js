import React, { useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import { CartContext } from "./Cart";

export default function ContextCart() {
  const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);
  if (item.length === 0) {
    return (
      <>
        <header>
          <div className="continue-shopping">
            <img
              src="./images/leftarrow.png"
              alt="arrow"
              srcset=""
              className="arrow-icon"
            />
            <h3>Continue Shopping</h3>
          </div>
          <div className="cart-icon">
            <img src="./images/cart.png" alt="cart" />
            <p>0</p>
          </div>
        </header>
        <section className="main-cart-section">
          <h1>Shopping Cart</h1>
          <p className="total-items">
            you have <span className="total-items-count">{totalItem}</span> items
          </p>
        </section>
      </>
    );
  }
  return (
    <>
      <header>
        <div className="continue-shopping">
          <img
            src="./images/leftarrow.png"
            alt="arrow"
            srcset=""
            className="arrow-icon"
          />
          <h3>Continue Shopping</h3>
        </div>
        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart" />
          <p>{totalItem}</p>
        </div>
      </header>
      <section className="main-cart-section">
        <h1>Shopping Cart</h1>
        <p className="total-items">
          you have <span className="total-items-count">{totalItem}</span> items
        </p>
        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map((curItems) => {
                return <Items key={curItems.id} {...curItems} />;
              })}
            </Scrollbars>
          </div>
        </div>
        <div className="card-total">
          <h3>
            Cart Total : <spna>{totalAmount} RS.</spna>
          </h3>
          <button>checkout</button>
          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </section>
    </>
  );
}

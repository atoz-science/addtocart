import React, { createContext, useReducer } from "react";
import "./cart.css";
import { products } from "./Products";
import ContextCart from "./ContextCart";
import { reducer } from "./Reducer";
import { useEffect } from "react";
export const CartContext = createContext();

const initialState = {
  item: products,
  totalAmount: 0,
  totalItem: 0
};

function Cart() {
  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id
    });
  };

  //clear the cart
  const clearCart = () => {
    return dispatch({ type: "CLEAR_CART" });
  };

  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id
    });
  };

  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id
    });
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: "GET_TOTAL"
    });
  }, [state.item]);
  return (
    <>
      <CartContext.Provider
        value={{ ...state, removeItem, clearCart, increment, decrement }}
      >
        <ContextCart />
      </CartContext.Provider>
    </>
  );
}

export default Cart;

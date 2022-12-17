export const reducer = (state, action) => {
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      item: state.item.filter((curElm) => {
        return curElm.id !== action.payload;
      })
    };
  }
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      item: []
    };
  }
  if (action.type === "INCREMENT") {
    let updatedCart = state.item.map((curElm) => {
      if (curElm.id === action.payload) {
        return { ...curElm, quantity: curElm.quantity + 1 };
      }
      return curElm;
    });

    return { ...state, item: updatedCart };
  }

  if (action.type === "DECREMENT") {
    let dec = state.item.map((curElm) => {
      if (curElm.id === action.payload) {
        return { ...curElm, quantity: curElm.quantity - 1 };
      }
      return curElm;
    }).filter((curElm) => 
    curElm.quantity !== 0);
    return { ...state, item: dec };
  }

  if (action.type === "GET_TOTAL") {
    let { totalItem, totalAmount } = state.item.reduce(
      (accum, curVal) => {
        let { price, quantity } = curVal;

        let updatedtotalAmount = price * quantity;
        accum.totalAmount += updatedtotalAmount;
        
        accum.totalItem += quantity;
        return accum;
      },
      {
        totalItem: 0,
        totalAmount: 0
      }
    );
    return { ...state, totalItem, totalAmount };
  }
  return state;
};

import React, { createContext, useContext, useReducer } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

//now in this add to cart and delete to cart are our actions
//actual logic of add to cart and delete to cart is present in the following reducer function

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      //this below action. content is comes due to dispatch from cart component
      //click krne ke bad currently bheji huyi id(dispatch ke vakt beji huyi id ) is called action id
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          qty: action.qty,
          price: action.price,
          size: action.size,
          img: action.img,
        },
      ];

    case "REMOVE":
      return state.filter((_, index) => index !== action.index);

    case "DROP":
      let empArray = [];
      return empArray;

    case "UPDATE":
      return state.map((item) =>
        item.id === action.id && item.size === action.size
          ? { ...item, qty: parseInt(action.qty), price: action.price }
          : item
      );

    default:
      console.log("Error in Reducer");
      return state;
  }
};

export const CartProvider = ({ children }) => {
  //second parameter of this useReducer is empty because initially our cart is empty
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);

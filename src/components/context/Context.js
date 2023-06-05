import React, { createContext, useReducer, useContext } from "react";

import faker from 'faker';
import { cartReducer } from "./Reducer";


const Cart = createContext();

const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    rating: faker.random.arrayElement([1, 2, 3, 4, 5])
  }));
  const [state,dispatch ]=useReducer(cartReducer,{
    products:products,
    cart:[]
  })

  return <Cart.Provider value={{state,dispatch}} >{children}</Cart.Provider>;
};

// export const cartReducer = (state,action)=>{
//   switch(action.type){
//     default:
//       return state;
//   }
// };
export default Context;

export const CartState=()=>{
  return useContext(Cart)
};

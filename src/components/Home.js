import React from 'react';
//import { CartState } from "../components/context/Context";

import { CartState } from "../components/context/Context"; // Adjust the path accordingly
import SingleProduct from './SingleProduct';
import "./Styles.css";
import Filter from './Filter';
const Home = () => {
  const { state: {products} } = CartState();
  console.log(products); // Log the state object to the console

  return <div className='home'>
    <Filter/>
    <div className='productContainer'>
      {
        products.map((prod)=>{
          return <SingleProduct prod={prod} key={prod.id}/>;
        })
      }
    </div>
  </div>;
};

export default Home;

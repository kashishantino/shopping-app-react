import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route,Switch } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const App =()=>{
  return(
    <>
    <Header/> 
    <Switch>
       
      {/* <Route exact path="/" component={Header}/> */}
      <Route path="/" component={Home}/>
      <Route path="/cart" component={Cart}/>
    </Switch>  
    </>
  );
};
 


export default App;

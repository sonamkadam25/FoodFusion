import "./App.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./SCREENS/Home";
import Login from "./SCREENS/Login";

import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'  //npm i bootstrap-dark-5 boostrap
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import 'bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Signup from "./SCREENS/Signup.js";
import { CartProvider } from "./components/ContextReducer.js";
import MyOrder from "./SCREENS/MyOrder.js";

function App() {
  return (
    <CartProvider>
      <Router>
      <div className="main">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/createuser" element={<Signup/>} />
          <Route exact path="/myOrder" element={<MyOrder/>} />
        </Routes>
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Checkout from './Components/Checkout/Checkout';
import { useState } from 'react';
import Products from './Components/Products/Products';

function App() {

  const handelFun = (i) => {
    console.log(i);
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" handelFun={handelFun} element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

    </div>
  );
}

export default App;

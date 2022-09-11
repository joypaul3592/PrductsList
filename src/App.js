import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Checkout from './Components/Checkout/Checkout';
import { useState } from 'react';
import Products from './Components/Products/Products';

function App() {

  const navigate = useNavigate()
  const [datapass, setpass] = useState([])
  const [countpass, setCountpass] = useState([])
  const handelCart = (data, proCount) => {
    console.log(data)
    console.log(proCount)
    if (data) {
      setpass(data)
      setCountpass(proCount)
      navigate('/checkout')
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Products handelCart={handelCart} ></Products>} />
        <Route path="/checkout" element={<Checkout datapass={datapass} countpass={countpass} ></Checkout>} />
      </Routes>

    </div>
  );
}

export default App;

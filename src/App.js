import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Checkout from './Components/Checkout/Checkout';
import { useState } from 'react';
import Products from './Components/Products/Products';
import Thank from './Components/Checkout/Thank';

function App() {

  const navigate = useNavigate()
  const [datapass, setpass] = useState([])
  const handelCart = (data) => {
    console.log(data)
    if (data) {
      setpass(data)
      navigate('/checkout')
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Products handelCart={handelCart} ></Products>} />
        <Route path="/checkout" element={<Checkout datapass={datapass} ></Checkout>} />
        <Route path="/thanks" element={<Thank ></Thank>} />
      </Routes>

    </div>
  );
}

export default App;

import './App.css';
import React from "react";
import {Routes, Route} from "react-router-dom";
import {Home, Products, Occasions, About, Order, Cakes, Cupcakes, Packages} from "./pages.js";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route path="/cakes" element={<Cakes />} />
          <Route path="/cupcakes" element={<Cupcakes />} />
          <Route path="/packages" element={<Packages />} />
        </Route>
        <Route path="/occasions" element={<Occasions />} />
        <Route path="/about" element={<About />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import React from "react";
import {Routes, Route} from "react-router-dom";
import {Home, Cakes, Cupcakes, About, Contact} from "./pages.js";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cakes" element={<Cakes />} />
        <Route path="/cupcakes" element={<Cupcakes />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

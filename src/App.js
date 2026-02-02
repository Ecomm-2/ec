import React from "react";

import { HashRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar.js";
import Header  from "./components/header.js";
import Fashionboys from "./pages/FashionBoys.js";
import Footer from "./components/footer.js";

function App() {

  return(
  <HashRouter>
    <Header />
    <Sidebar />
    <Routes>
      <Route path="/" element={<Fashionboys/>} />
      <Route path="/products" element={<h1>Products Page</h1>} />
      <Route path="/categories" element={<h1>Categories Page</h1>} />
      <Route path="/contact" element={<h1>Contact Page</h1>} />
      <Route path="/help" element={<h1>Help Page</h1>} />
      
    </Routes>
      <Footer/>

  </HashRouter>
  )
}
export default App;

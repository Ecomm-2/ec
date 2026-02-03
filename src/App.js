import React from "react";

import { HashRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar.js";
import Header  from "./components/header.js";
import Fashionboys from "./pages/FashionBoys.js";
import Footer from "./components/footer.js";
import FashionGirls from "./pages/FashionGirls.js";
import Jewels from "./pages/Jewels.js";
import Watches from "./pages/Watches.js";
import AboutUs from "./pages/AboutUs.js";

function App() {

  return(
  <HashRouter>
    <Header />
    <Sidebar />
    <Routes>
      <Route path="/Fashion/Girls" element={<FashionGirls/>} />
      <Route path="/Fashion/Boys" element={<Fashionboys/>} />
      <Route path="/Jewels" element={<Jewels/>} />
      <Route path="/Watches" element={<Watches/>} />
      <Route path="/About/US" element={<AboutUs/>} />
      
    </Routes>
      <Footer/>

  </HashRouter>
  )
}
export default App;

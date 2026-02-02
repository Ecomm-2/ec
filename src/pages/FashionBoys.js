import React from "react";
import "./FashionBoys.css";
function Fashionboys(){
    return(
        <div className="page-container">
  <h2 className="page-title">Recommended Products</h2>

  <div className="product-grid">
    <div className="product-card">
      <img src="/product1.jpg" alt="product" />
      <h3>Product Name</h3>
      <p className="price">₹1,299</p>
      {/* <a href="#" className="buy-btn">View on Flipkart</a> */}
    </div>

    <div className="product-card">
      <img src="/product2.jpg" alt="product" />
      <h3>Product Name</h3>
      <p className="price">₹899</p>
      {/* <a href="#" className="buy-btn">View on Flipkart</a> */}
    </div>
  </div>
</div>

    )
}
export default Fashionboys;
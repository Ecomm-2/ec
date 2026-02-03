import React from "react";
import "./FashionBoys.css";
function Watches(){
    return(
        <div className="page-container">
  <h2 className="page-title">Recommended Products</h2>

  <div className="product-grid">
    <div className="product-card">
      <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" alt="product" />
      <h3>for approval</h3>
      <p className="price">₹1,299</p>
      {/* <a href="#" className="buy-btn">View on Flipkart</a> */}
    </div>

    <div className="product-card">
      <img src="https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1" alt="product" />
      <h3>for approval</h3>
      <p className="price">₹899</p>
      {/* <a href="#" className="buy-btn">View on Flipkart</a> */}
    </div>
  </div>
</div>

    )
}
export default Watches;
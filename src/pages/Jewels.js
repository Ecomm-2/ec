import React from "react";
import "./FashionBoys.css";
function Jewels(){
    return(
        <div className="page-container">
  <h2 className="page-title">Recommended Products</h2>

  <div className="product-grid">
    <div className="product-card">
      <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908" alt="product" />
      <h3>Product Name</h3>
      <p className="price">₹1,299</p>
      {/* <a href="#" className="buy-btn">View on Flipkart</a> */}
    </div>

    <div className="product-card">
      <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f" alt="product" />
      <h3>Product Name</h3>
      <p className="price">₹899</p>
      {/* <a href="#" className="buy-btn">View on Flipkart</a> */}
    </div>
  </div>
</div>

    )
}
export default Jewels;
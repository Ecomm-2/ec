import React from "react";
import "./FashionBoys.css";
function FashionGirls(){
    return(
        <div className="page-container">
  <h2 className="page-title">Recommended Products</h2>

  <div className="product-grid">
    <div className="product-card">
      <img src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446" alt="product" />
      <h3>Product Name</h3>
      <p className="price">₹1,299</p>
      {/* <a href="#" className="buy-btn">View on Flipkart</a> */}
    </div>

    <div className="product-card">
      <img src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246" alt="product" />
      <h3>Product Name</h3>
      <p className="price">₹899</p>
      {/* <a href="#" className="buy-btn">View on Flipkart</a> */}
    </div>

    

  </div>
</div>

    )
}
export default FashionGirls;
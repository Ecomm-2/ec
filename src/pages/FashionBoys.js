import React from "react";
import "./FashionBoys.css";
function Fashionboys(){
    return(
        <div className="page-container">
  <h2 className="page-title">Recommended Products</h2>

 
 
  <div className="product-grid">
    <div className="product-card">
      <img src="https://images.unsplash.com/photo-1520975916090-3105956dac38" alt="product" />
      <h3>Product Name</h3>
      <p className="price">₹1,299</p>
      {/* <a href="#" className="buy-btn">View on Flipkart</a> */}
    </div>

    

    <div className="product-card">
      <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"alt="product" />
      <h3>Product Name</h3>
      <p className="price">₹899</p>
    </div>
  
  </div>


</div>

    )
}
export default Fashionboys;
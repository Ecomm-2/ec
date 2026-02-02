import React from "react";
import "./footer.css";

function Footer(){
  return(
      <footer className="site-footer">
  <div className="footer-container">

    <div className="footer-col">
      <h4>About</h4>
      <p>
        We curate the best products available on Flipkart to help you
        make smart buying decisions.
      </p>
    </div>

    <div className="footer-col">
      <h4>Quick Links</h4>
      <a href="/">Home</a>
      <a href="/products">Products</a>
      <a href="/contact">Contact</a>
    </div>

    <div className="footer-col">
      <h4>Support</h4>
      {/* <a href="#">Help Center</a>
      <a href="#">Affiliate Disclosure</a>
      <a href="#">Privacy Policy</a> */}
    </div>

    {/* <div className="footer-col">
      <h4>Follow Us</h4>
      <a href="#">Instagram</a>
      <a href="#">Twitter</a>
      <a href="#">YouTube</a>
    </div> */}

  </div>

  <div className="footer-bottom">
    © {new Date().getFullYear()} Best Product • Powered by Flipkart Affiliate
  </div>
</footer>

  )
}

export default Footer
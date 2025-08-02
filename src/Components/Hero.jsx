import React from "react";

const Hero = () => {
  return (
    <div className="herosection">
      <div className="herocontent">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondarybtn">Category</button>
        </div>
        <div className="shopon">
          <p>Available on</p>
          <div className="shopnow_logo">
            <img src="amazon.png" alt="Amazon" />
            <img src="flipkart.png" alt="Flipkart" />
          </div>
        </div>
      </div>
      <div className="heroimage">
        <img src="shoe_image.png" alt="Hero_Image" />
      </div>
    </div>
  );
};

export default Hero;

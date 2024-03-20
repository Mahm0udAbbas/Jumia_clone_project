import React from "react";

const Product = ({ imageURL, imageAlt }) => {
  return (
    <div>
      <div className="w-[150px] md:w-[200px]">
        <img
          src={imageURL} 
          alt={imageAlt}
        />
      </div>
    </div>
  );
};

export default Product;



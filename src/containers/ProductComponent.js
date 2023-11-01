import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, price, image } = product;
    return (
      <Link to={`/product/${id}`}>
        <div
          style={{
            width: "350px",
            margin: "auto",
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "10px",
            margin: "20px auto"
          }}
          key={id}
        >
          
          <div style={{ display: "flex" }}>
          <img style={{ width: "75px" }} src={image} />
            <h4 style={{ padding: "10px" }} >{title}</h4>
          </div>
        </div>
      </Link>
    );
  });
  return <div>{renderList}</div>;
};

export default ProductComponent;

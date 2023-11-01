import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import {
  selectedProducts,
  removeSelectedProducts
} from "../redux/actions/productAction";

import Skeleton from "react-loading-skeleton";

const ProductDetail = () => {
  const products = useSelector((state) => state.products);
  const { image, title, price, description } = products;
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(products);
  const fetchProductDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((error) => {
        console.log(error);
      });
    dispatch(selectedProducts(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetails();
    return () => {
      dispatch(removeSelectedProducts());
    };
  }, [productId]);

  return (
    <>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
      <div style={{ marginTop: "20px" }}>
        {Object.keys(products).length === 0 ? (
          <div>
            <Skeleton width={350} height={350} />
          </div>
        ) : (
          <div
            style={{
              width: "350px",
              margin: "auto",
              border: "1px solid black",
              padding: "20px",
              borderRadius: "10px"
            }}
          >
            <img style={{ width: "200px" }} src={image} />
            <p>{title}</p>
            <p>${price}</p>
            <p>{description}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetail;

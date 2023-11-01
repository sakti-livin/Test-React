import React, { useEffect } from "react";
import ProductComponent from "./ProductComponent";

import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productAction";

import axios from "axios";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(products);

  const fetchProduct = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => {
        console.log(error, "error");
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  console.log("products", products);
  return (
    <div>
      <div>
        <ProductComponent />
      </div>
    </div>
  );
};

export default ProductListing;

import React from "react";
import useSWR from "swr";
import { getProducts } from "../../../API/productApi";

const GetProduct = () => {
  const { data } = useSWR("products", getProducts);

  console.log(data);
  return <div>Product</div>;
};

export default GetProduct;

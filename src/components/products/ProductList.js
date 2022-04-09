import React from "react";
import "./ProductList.css";
import { useProviderValue } from "../../context";
import Product from "./Product";
import Loading from "../loading/Loading";

const ProductList = () => {
  const { showProduct, loading } = useProviderValue();
  console.log("showproduct", showProduct);
  return (
    <div className="product-page-container">
      {loading ? (
        <>
          <div className="product-container">
            {showProduct.length >= 1 ? (
              showProduct?.map((item) => {
                return <Product key={item.id} {...item} />;
              })
            ) : (
              <h2>Product not found</h2>
            )}
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ProductList;

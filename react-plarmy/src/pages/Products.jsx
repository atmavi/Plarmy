import React, { useEffect, useState } from "react";

import { getAllProducts } from "../services/products";

import Product from "../components/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((data) => setProducts(data));
  }, []);

  return products && products.length > 0 ? (
    <div className="products">
      {products.map((product) => (
        <Product product={product} key={product._id} />
      ))}
    </div>
  ) : <h2>There's no product to show</h2>;
};

export default Products;

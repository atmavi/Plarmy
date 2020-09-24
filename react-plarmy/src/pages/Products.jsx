import React, { useEffect, useState } from "react";

import { getAllProducts } from "../services/products";

import Product from "../components/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div className="products">
      {products.map((product) => (
        <Product product={product} key={product._id} />
      ))}
    </div>
  );
};

export default Products;

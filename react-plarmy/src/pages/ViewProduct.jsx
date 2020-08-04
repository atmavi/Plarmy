import React, { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';

import { getProduct } from '../services/products';
import QuantityBtns from '../components/QuatityBtns';
import NotFound from './NotFound';
// import NotFound from './NotFound';


const ViewProduct = () => {
   let { id } = useParams();

   const [product, setProduct] = useState({});

   useEffect(() => {
      getProduct(id)
         .then(data => {
            setProduct(data);
         })
         .catch(err => console.log(err))
   }, [id]);

   console.log('>>', product)

   const { name, price, sellVolume, image } = product;

   return product.data === null ? <NotFound /> : (
      <div className="view-product">
         <div className="view-product__img-wrapper">
            <img
               alt={name}
               src={image}
               className="view-product__img"
            />
         </div>
         <div className="view-product__details">
            <h2 className="view-product__name">{name}</h2>
            <span className="view-product__per-volume">{sellVolume}</span>
            <p className="view-product__description">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia praesentium quia soluta atque? Vitae facere placeat maxime, odit quasi, tenetur laborum debitis commodi ut fugit quod, aperiam nam fugiat illum. Laudantium in consectetur quis odio nisi totam vel voluptas molestias!
            </p>
            <h3 className="view-product__price">Php {price}</h3>
            <div className="view-product__quantity-box">
               <span className="view-product__label">quantity:</span>
               <QuantityBtns />
            </div>
            <span className="view-product__warning">
               * Picture/s may vary from actual product.
            </span>

            <button className="btn btn--primary mt-2">Add to Cart</button>
         </div>
      </div>
   )
}

export default ViewProduct;   
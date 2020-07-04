import React from 'react';
import { useParams } from 'react-router-dom';
import QuantityBtns from '../components/QuatityBtns';

const ViewProduct = () => {
   // let { id } = useParams();
   return (
      <div className="view-product">
         <div className="view-product__img-wrapper">
            <img
               src="https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&h=350"
               alt="Potato"
               className="view-product__img"
            />
         </div>
         <div className="view-product__details">
            <h2 className="view-product__name">Potatoes</h2>
            <span className="view-product__per-volume">Per kilo</span>
            <p className="view-product__description">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia praesentium quia soluta atque? Vitae facere placeat maxime, odit quasi, tenetur laborum debitis commodi ut fugit quod, aperiam nam fugiat illum. Laudantium in consectetur quis odio nisi totam vel voluptas molestias!
            </p>
            <h3 className="view-product__price">Php 300.00</h3>
            <div className="view-product__quantity-box">
               <span className="view-product__label">quantity:</span>
               <QuantityBtns />
            </div>
            <span className="view-product__warning">
               * Picture/s may vary from actual product.
            </span>
         </div>
      </div>
   );
}

export default ViewProduct;   
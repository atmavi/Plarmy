import React from 'react';

const Product = () => {
   return (
      <div className="product">
         <img
            className="product__img"
            src="https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
         />
         <div className="product__details">
            <h3 className="product__name">Name</h3>
            <p className="product__price">PHP 30.00</p>
            <div className="quantity-wrapper">
               <span className="quantity-wrapper__btn">-</span>
               <input className="quantity-wrapper__input" type="text" />
               <span className="quantity-wrapper__btn">+</span>
            </div>
            <button className="product__btn btn btn--primary d-block w-100 m-1">Add to Cart</button>
         </div>
      </div>
   );
}

export default Product;   
import React from 'react';

const QuantityBtns = () => {

   return (
      <div className="quantity__wrapper">
         <span className="quantity__btn quantity__btn--minus">-</span>
         <input className="quantity__input" type="text" />
         <span className="quantity__btn quantity__btn--plus">+</span>
      </div>
   )
}

export default QuantityBtns;
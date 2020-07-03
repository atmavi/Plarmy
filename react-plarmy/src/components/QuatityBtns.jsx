import React, { useState } from 'react';

const QuantityBtns = () => {
   const [value, setValue] = useState(0);

   const onChangeValue = e => {
      setValue(e.target.value);
   }

   const incrementValue = () => {
      setValue(value >= 0 ? parseInt(value) + 1 : 1);
   }

   const decrementValue = () => {
      setValue(value <= 0 ? 0 : parseInt(value) - 1);
   }

   return (
      <div className="quantity__wrapper">
         <button
            className="quantity__btn quantity__btn--minus"
            onClick={decrementValue}>
            -
         </button>
         <input
            className="quantity__input"
            type="text"
            value={value}
            onChange={onChangeValue} />
         <button
            className="quantity__btn quantity__btn--plus"
            onClick={incrementValue}>
            +
         </button>
      </div>
   )
}

export default QuantityBtns;
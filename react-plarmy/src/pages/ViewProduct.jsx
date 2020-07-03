import React from 'react';
import { useParams } from 'react-router-dom';

const ViewProduct = () => {
   let { id } = useParams();
   console.log(id)
   return (
      <div className="ViewProduct">
         <h1>Product ID: {id}</h1>
         This is view product page
      </div>
   );
}

export default ViewProduct;   
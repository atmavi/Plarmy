import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
   return (
      <div className='not-found'>
         <h1 className="not-found__header">Oops...</h1>
         <div className="mt-1">We're truely sorry but the page is not found</div>

         <Link to="/" className="btn btn--primary mt-3" >Go back to Home page </Link>
      </div>
   )
}

export default NotFound;
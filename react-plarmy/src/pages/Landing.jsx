import React from 'react';
import { Link } from 'react-router-dom';
const Landing = () => {
   return (
      <header className="header">
         <div className="header__text-box">
            <h1 className="heading-text">
               We got these
               <span className="heading-text--main">fresh</span>
               <span className="heading-text--sub">fruits and vegetables</span>
               laid for you
            </h1>

            <Link to="/products" className="btn btn--primary header__btn">Shop Now!</Link>
         </div>
      </header>
   );
}

export default Landing;
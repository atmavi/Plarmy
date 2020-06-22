import React from 'react';

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
            <a href="/" className="btn btn--primary header__btn">Shop Now!</a>
         </div>
      </header>
   );
}

export default Landing;
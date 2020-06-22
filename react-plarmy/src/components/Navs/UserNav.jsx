import React from 'react';

function NavUser() {
   return (
      <nav className="user-nav">
         <ul className="user-nav__list">
            <li className="user-nav__item"><a href="/login">Login</a></li>
            <li className="user-nav__item"><a href="/signup">Sign Up</a></li>
         </ul>
      </nav>
   )
}

export default NavUser;
import React from 'react';
import { Link } from 'react-router-dom';

function NavUser() {
   return (
      <nav className="user-nav">
         <ul className="user-nav__list">
            <li className="user-nav__item"><Link to="/login">Login</Link></li>
            <li className="user-nav__item"><Link to="/signup">Signup</Link></li>
         </ul>
      </nav>
   )
}

export default NavUser;
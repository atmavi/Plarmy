import React from 'react';
import { Link } from 'react-router-dom';

import UserNav from './UserNav';

function NavBar() {
   return (
      <nav className="nav">
         <Link to="/" className="nav__logo">Plarmy</Link>
         {/* <a href="/" className="nav__logo">Plarmy</a> */}
         <input type="text" name="nav__search-box" id="nav__search-box" className="nav__search-box" />
         <UserNav />
      </nav>
   )
}

export default NavBar;
import React from 'react';

import UserNav from './UserNav';

function NavBar() {
   return (
      <nav className="nav">
         <a href="/" className="nav__logo">Plarmy</a>
         <input type="text" name="nav__search-box" id="nav__search-box" className="nav__search-box" />
         <UserNav />
      </nav>
   )
}

export default NavBar;
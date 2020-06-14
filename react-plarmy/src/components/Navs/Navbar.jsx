import React from 'react';

import UserNav from './UserNav';

function NavBar() {
   return (
      <nav class="nav">
         <a href="/" class="nav__logo">Gulaid</a>
         <input type="text" name="nav__search-box" id="nav__search-box" class="nav__search-box" />
         <UserNav />
      </nav>
   )
}

export default NavBar;
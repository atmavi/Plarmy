import React from 'react';

import UserNav from './UserNav';

function NavBar() {
   return (
      <nav class="nav">
         <a href="/" class="nav__logo">Gulaid</a>
         <UserNav />
      </nav>
   )
}

export default NavBar;
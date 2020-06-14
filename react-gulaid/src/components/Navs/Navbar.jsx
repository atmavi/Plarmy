import React from 'react';

import UserNav from './UserNav';

function NavBar() {
   return (
      <nav class="nav">
         <a href="/" class="nav__logo">Gulaid</a>
         <UserNav />
         <img src="./img/header.jpg" alt="" />
      </nav>
   )
}

export default NavBar;
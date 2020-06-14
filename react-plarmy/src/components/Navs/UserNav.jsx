import React from 'react';

function NavUser() {
   return (
      <nav class="user-nav">
         <ul class="user-nav__list">
            <li class="user-nav__item"><a href="/login">Login</a></li>
            <li class="user-nav__item"><a href="/signup">Sign Up</a></li>
         </ul>
      </nav>
   )
}

export default NavUser;
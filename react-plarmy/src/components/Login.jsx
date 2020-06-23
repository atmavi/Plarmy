import React from 'react';

function NavBar() {
   return (
      <div className="login__container">
         <div className="login__box">
            <div className="input-group">
               <label htmlFor="login[username]" className="login__label">Username</label>
               <input type="text" name="login[username]" id="login-username" />
            </div>
            <div className="input-group">
               <label htmlFor="login[password]" className="login__label">Password</label>
               <input type="text" name="login[username]" id="login-password" />
            </div>
         </div>
      </div>
   )
}

export default NavBar;
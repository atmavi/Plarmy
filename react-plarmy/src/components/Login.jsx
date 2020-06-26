import React from 'react';

function NavBar() {
   return (
      <div className="login__container">
         <form className="login__box">
            <h1 className="">Welcome Back!</h1>
            <div className="input-group">
               <label htmlFor="login[username]" className="login__label">Username</label>
               <input type="text" name="login[username]" id="login-username" />
            </div>
            <div className="input-group">
               <label htmlFor="login[password]" className="login__label">Password</label>
               <input type="text" name="login[password]" id="login-password" />
            </div>
            <button className="btn btn--primary login__btn d-block w-100">Login</button>
         </form>
      </div>
   )
}

export default NavBar;
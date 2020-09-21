import React, { useState } from 'react';

import { userLogin } from '../services/auth';

function Login() {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');

   const handleUsernameChange = e => {
      setUsername(e.target.value);
   }

   const handlePasswordChange = e => {
      setPassword(e.target.value);
   }

   const handleSubmit = e => {
      e.preventDefault();
      const data = { username, password };

      userLogin(data)
         .then(token => {
            window.localStorage.setItem('accessToken', token.accessToken);
            window.localStorage.setItem('refreshToken', token.refreshToken);
         })
   }
   return (
      <div className="login__container">
         <form
            className="login__box"
            onSubmit={handleSubmit}>
            <h1 className="">Welcome Back!</h1>
            <div className="input-group">
               <label htmlFor="login[username]" className="login__label">Username</label>
               <input
                  type="text"
                  name="login[username]"
                  id="login-username"
                  onChange={handleUsernameChange} />
            </div>
            <div className="input-group">
               <label htmlFor="login[password]" className="login__label">Password</label>
               <input
                  type="password"
                  name="login[password]"
                  id="login-password"
                  onChange={handlePasswordChange}
               />
            </div>
            <button className="btn btn--primary login__btn d-block w-100">Login</button>
         </form>
      </div>
   )
}

export default Login;
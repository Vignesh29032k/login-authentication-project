import React from 'react';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
const LoginPage = () => {
  let {loginUser} = useContext(AuthContext)
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={loginUser}>
        <div>
          <input type='text' name='username' placeholder='Enter Username' />
        </div>

        <div>
          <input type='password' name='password' placeholder='Enter Password' />
        </div>

        <div>
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;


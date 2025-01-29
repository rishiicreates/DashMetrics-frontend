import React from 'react';

const Login = () => {
  return (
    <div className="login">
      <h1>Login</h1>
      <button onClick={() => window.location.href = '/auth/twitter'}>Login with Twitter</button>
      <button onClick={() => window.location.href = '/auth/instagram'}>Login with Instagram</button>
    </div>
  );
};

export default Login;
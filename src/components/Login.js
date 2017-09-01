import React from 'react';

function Login(props) {

  const { onChange, onClick, isDisabled } = props;

  return (
    <form className="login-form">
      <h3>Welcome to TinyChat!</h3>
      <fieldset>
        <input
          className="login-name"
          type="text"
          placeholder="Enter your name"
          onChange={onChange}
        />
        <br />
        <button className="login-button" onClick={onClick} disabled={isDisabled}>
          Login to chat
        </button>
      </fieldset>
    </form>
  );
}

export default Login;

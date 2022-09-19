import React, { useState } from "react";
import { Link, redirect } from "react-router-dom";
import "../../styles/login.scss";

const Login = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<any>("");

  return (
    <div className="loginContainer">
      <p>Please enter your Username:</p>
      <input
        value={name}
        placeholder="Username"
        type="text"
        autoComplete="off"
        onChange={(e) => setName(e.target.value)}
      />
      <p>Please enter your Passcode:</p>
      <input
        value={password}
        type="password"
        placeholder="Passcode"
        autoComplete="off"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Link to="/">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default Login;

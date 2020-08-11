import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", {
        username: username,
        password: password
      })
      .then(res => {
        console.log(history);
        localStorage.setItem("token", res.data.payload);
        history.push("/friends"); // routed to friends page
      })
      .catch(error => console.log(error.response));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;

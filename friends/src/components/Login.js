import React, { useState } from "react";
import { axiosWithAuth } from "../axiosWithAuth";

const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");


    return(
        <div>
          <form>
            <input 
              type="text"
              name="username"
            />
            <input 
              type="password"
              name="password"
            />
            <button type="submit">Log In</button>
          </form>
        </div>
    );
};

export default Login;


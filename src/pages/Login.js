import React, { useState } from "react";
import axios from "axios";
import { useStore } from "../context/storeContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const { setIsLoggedIn, setUser, user } = useStore()
  console.log(user)

  const [message, setMessage] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/user/login",
        userLogin,
        { withCredentials: true }
      );
      console.log(response);
      setUser(response.data.userWithoutPassword)
      setMessage(response.data.message);
      setIsLoggedIn(true);
      if (response) {
        return navigate("/");
      }
      // localStorage.setItem("token", data.data.token);
    } catch (error) {
      console.log(error);
    }
  };




  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={(e) =>
            setUserLogin({ ...userLogin, email: e.target.value })
          }
        />
        <input
          type="password"
          name="password"
          placeholder="Passwort"
          onChange={(e) =>
            setUserLogin({ ...userLogin, password: e.target.value })
          }
        />
        <input className="login-button" type="submit" value="Login" />
        <p>{message}</p>
      </form>
    </div>
  );
};

export default Login;

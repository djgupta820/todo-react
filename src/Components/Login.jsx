import React, { useEffect, useState } from "react";
import UserAPI from "../APIs/UserAPIs";
import { useUserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {user, setUser} = useUserContext()
  const navigate = useNavigate()

  useEffect(() => {
    if(user){
      navigate('/')
    }
  }, [user, navigate])

  const handleSubmit = (e) => {
    e.preventDefault();
    UserAPI.loginUser(username, password)
      .then((res) => {
        setUser(username)
        navigate('/')
      })
      .catch((err) => console.log("Error: ", err));
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h1>Login</h1>
      <hr />
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        name="username"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button>Login</button>
    </form>
  );
}

export default Login;

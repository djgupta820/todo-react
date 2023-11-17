import React, { useState } from "react";
import UserAPI from "../APIs/UserAPIs";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== cPassword) {
      alert("password and confirm password did not matched");
      return;
    }
    UserAPI.registerUser(username, password)
      .then((res) => alert("Registration Successfull"))
      .catch((err) => alert("Registration Error ", err));
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h1>Register</h1>
      <hr />
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <input
        type="password"
        value={cPassword}
        onChange={(e) => setCPassword(e.target.value)}
        placeholder="Confirm Password"
        required
      />
      <button>Register</button>
    </form>
  );
}

export default Register;

import React, { useEffect } from "react";
import { useUserContext } from "../Context/UserContext";
import { Link } from "react-router-dom";

function Logout() {
  const { setUser } = useUserContext();

  useEffect(() => {
    setUser('');
  });
  
  return (
    <div>
      <h1>Logout Successfull</h1>
      <p>Click <Link to={'/login'}>here</Link> to login back</p>
    </div>
  )
}

export default Logout;

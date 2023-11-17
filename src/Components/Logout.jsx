import React, { useEffect } from "react";
import { useUserContext } from "../Context/UserContext";

function Logout() {
  const { setUser } = useUserContext();

  useEffect(() => {
    setUser('');
  });
  
  return <h1>Logout Successfull</h1>;
}

export default Logout;

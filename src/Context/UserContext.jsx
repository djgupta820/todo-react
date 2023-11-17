import { createContext, useContext, useState } from "react";
import React from "react";

export const UserContext = createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState("");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);
export default UserContextProvider;

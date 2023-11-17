import { createContext, useContext, useState } from "react";
import React from "react";

export const ThemeContext = createContext('');

function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("light");
  
  const toggleTheme = ()=>{
    if(theme === "light"){
        setTheme("dark")
    }else{
        setTheme("light")
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
export default ThemeContextProvider;

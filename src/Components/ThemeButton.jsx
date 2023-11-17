import React, {useState} from "react";
import { useThemeContext } from "../Context/ThemeContextProvider";

const ThemeButton = () => {
  const { theme, toggleTheme } = useThemeContext();
  const [check, setCheck] = useState(false);

  function handleChange() {
    toggleTheme();
    setCheck(!check);
  }

  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckChecked"
        checked={check}
        onChange={handleChange}
      />
      <label
        className="form-check-label"
        htmlFor="flexSwitchCheckChecked"
        style={{ color: "lightgray" }}
      >
        {theme}
      </label>
    </div>
  );
};

export default ThemeButton;

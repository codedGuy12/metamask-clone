import React from "react";
import { ThemeObject } from "../../context/themeContext";
import "./ToggleSwitch.css";
const ToggleSwitch = ({ label }) => {
  const { toggleTheme, theme } = ThemeObject();

  return (
    <div className="container">
      {/*{label}*/}
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="checkbox"
          name={"why"}
          id={label}
          onChange={toggleTheme}
          checked={theme === true}
        />
        {
          <label className="label" htmlFor={label}>
            <span className="inner" />
            <span className="switch" />
          </label>
        }
      </div>
    </div>
  );
};

export default ToggleSwitch;

import React from "react";
import { RiSunFill, RiMoonLine } from "react-icons/ri";
import './index.scss';

const Switch = ({ isToggled, onToggle }) => {
  return (
    <div className="toggle-button">
      <label className="switch">
        <input
          type="checkbox"
          checked={isToggled}
          onChange={onToggle}
          name="toggle"
          id="toggle"
        />
        <span className="slider"></span>
        <div className="icons">
          <RiSunFill />
          <RiMoonLine />
        </div>
      </label>
    </div>
  );
};

export default Switch;

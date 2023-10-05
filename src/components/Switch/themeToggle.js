import React, { useState } from "react";
import Switch from ".";
import "./themeToggle.scss";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode((prev) => !prev);
    // Update your theme here based on isDarkMode state
    // You can toggle CSS classes or update a CSS-in-JS theme object
  };

  return (
    <div className={`theme-toggle ${isDarkMode ? "dark" : "light"}`}>
      <Switch isToggled={isDarkMode} onToggle={handleToggle} />
      <p>{isDarkMode ? "Dark Mode" : "Light Mode"}</p>
    </div>
  );
};

export default ThemeToggle;

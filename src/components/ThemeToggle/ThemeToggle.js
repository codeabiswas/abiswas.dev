import React, { useState } from "react";
import { Form } from "react-bootstrap";

const ThemeToggle = ({ collapseFriendly, label }) => {
  const [themeOption, setThemeOption] = useState(
    document.querySelector("html").getAttribute("data-bs-theme") === "dark"
      ? "light"
      : "dark"
  );

  // For user toggling the theme manually
  const changeTheme = () => {
    // Set new theme
    document.querySelector("html").getAttribute("data-bs-theme") === "dark"
      ? document.querySelector("html").setAttribute("data-bs-theme", "light")
      : document.querySelector("html").setAttribute("data-bs-theme", "dark");
    //  Set toggle label
    setThemeOption(
      document.querySelector("html").getAttribute("data-bs-theme") === "dark"
        ? "light"
        : "dark"
    );
  };

  return (
    <div className={collapseFriendly ? "d-lg-none" : "d-none d-lg-block"}>
      <Form.Switch
        id="theme-toggle"
        onClick={changeTheme}
        aria-label="Dark or light mode toggle"
        label={`Switch to ${themeOption} mode`}
      />
    </div>
  );
};

export default ThemeToggle;

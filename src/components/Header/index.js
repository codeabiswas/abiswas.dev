import React from "react";
import Logo from "../Logo";
import ThemeToggle from "../ThemeToggle";

const Header = ({ theme, handleThemeChange }) => {
  return (
    <>
      <span
        className="d-flex align-items-center"
        style={{ marginTop: "58px", marginBottom: "58px" }}
      >
        <Logo />
        <ThemeToggle theme={theme} handleThemeChange={handleThemeChange} />
      </span>
    </>
  );
};

export default Header;

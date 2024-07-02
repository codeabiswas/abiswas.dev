import React from "react";
import Logo from "../Logo";
import ThemeToggle from "../ThemeToggle";
import Span from "../../ui/Span";

const Header = ({ theme, handleThemeChange }) => {
  return (
    <Span
      children={
        <>
          <Logo />
          <ThemeToggle theme={theme} handleThemeChange={handleThemeChange} />
        </>
      }
    />
  );
};

export default Header;

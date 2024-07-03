import React from "react";
import Logo from "../Logo";
import ThemeToggleButton from "../ThemeToggleButton";
import Span from "../../ui/Span";

const Header = ({ theme, handleThemeChange }) => {
  return (
    <Span
      children={
        <>
          <Logo />
          <ThemeToggleButton
            theme={theme}
            handleThemeChange={handleThemeChange}
          />
        </>
      }
    />
  );
};

export default Header;

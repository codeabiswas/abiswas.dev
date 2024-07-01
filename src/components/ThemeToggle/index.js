import React from "react";
import { Row } from "react-bootstrap";
import ThemeButton from "../ThemeButton";

const ThemeToggle = ({ theme, handleThemeChange }) => {
  return (
    <>
      <Row className="ms-auto float-end">
        <ThemeButton
          handleThemeChange={
            theme === "dark-mode"
              ? () => handleThemeChange("light-mode")
              : () => handleThemeChange("dark-mode")
          }
          checked={theme === "light-mode"}
        />
      </Row>
    </>
  );
};

export default ThemeToggle;

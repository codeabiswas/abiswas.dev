import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import {
  BsLightbulbFill,
  BsLightbulbOffFill,
  BsMoonStarsFill,
  BsSunriseFill,
} from "react-icons/bs";
import ThemeButton from "../ThemeButton";

const ThemeToggle = ({ theme, handleThemeChange }) => {
  return (
    <>
      <Row className="ms-auto float-end">
        <ThemeButton
          theme="dark"
          handleThemeChange={() => handleThemeChange("dark-mode")}
          checked={theme === "dark-mode"}
        />
        <ThemeButton
          theme="light"
          handleThemeChange={() => handleThemeChange("light-mode")}
          checked={theme === "light-mode"}
        />
      </Row>
    </>
  );
};

export default ThemeToggle;

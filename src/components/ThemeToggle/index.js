import React from "react";
import { Container } from "react-bootstrap";

const ThemeToggle = ({ theme, handleThemeChange }) => {
  return (
    <Container className="d-flex flex-row justify-content-center m-0 p-0">
      <small className="m-0 p-0">
        Theme:{" "}
        <span
          onClick={() => handleThemeChange("light-mode")}
          style={{
            cursor: "pointer",
            textDecoration: "underline",
            fontWeight: theme === "light-mode" ? "bold" : "normal",
          }}
        >
          Light
        </span>{" "}
        |{" "}
        <span
          onClick={() => handleThemeChange("dark-mode")}
          style={{
            cursor: "pointer",
            textDecoration: "underline",
            fontWeight: theme === "dark-mode" ? "bold" : "normal",
          }}
        >
          Dark
        </span>
      </small>
    </Container>
  );
};

export default ThemeToggle;

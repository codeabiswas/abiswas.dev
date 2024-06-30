import React from "react";
import { Container } from "react-bootstrap";

const ThemeToggle = ({ theme, handleThemeChange }) => {
  return (
    <Container className="d-flex flex-row justify-content-end m-0 p-0">
      <p className="m-0 p-0" style={{ fontSize: "medium" }}>
        Theme:{" "}
        {/* <span
          className="themeToggle"
          onClick={() => handleThemeChange("light-mode")}
          style={{
            cursor: "pointer",
            // textDecoration: "underline",
            textDecoration: theme === "light-mode" ? "underline" : "none",
          }}
        > */}
        <button
          onClick={() => handleThemeChange("light-mode")}
          style={{
            textDecoration: theme === "light-mode" ? "underline" : "none",
            padding: "0px",
            margin: "0px",
          }}
        >
          Light
        </button>
        {/* </span>{" "} */} |{" "}
        {/* <span
          className="themeToggle"
          onClick={() => handleThemeChange("dark-mode")}
          style={{
            cursor: "pointer",
            textDecoration: theme === "dark-mode" ? "underline" : "none",
          }}
        > */}
        <button
          onClick={() => handleThemeChange("dark-mode")}
          style={{
            textDecoration: theme === "dark-mode" ? "underline" : "none",
            padding: "0px",
            margin: "0px",
          }}
        >
          Dark
        </button>
        {/* </span> */}
      </p>
    </Container>
  );
};

export default ThemeToggle;

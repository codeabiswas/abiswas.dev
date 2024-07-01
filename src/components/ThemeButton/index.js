import React from "react";
import { Col } from "react-bootstrap";
import { BsLightbulbFill, BsLightbulbOffFill } from "react-icons/bs";

const ThemeButton = ({ theme, handleThemeChange, checked }) => {
  return (
    <>
      <Col className="d-flex flex-column justify-content-center">
        <input
          type="radio"
          className="btn-check"
          id={theme === "dark" ? "dark-outlined" : "light-outlined"}
          onChange={handleThemeChange}
          checked={checked}
        />
        <label
          className="btn btn-outline-primary"
          htmlFor={theme === "dark" ? "dark-outlined" : "light-outlined"}
        >
          <div className="d-flex align-items-center">
            <div className="d-none d-sm-block">
              <h5 className="d-flex align-items-center logo">
                {theme === "dark" ? (
                  <BsLightbulbOffFill />
                ) : (
                  <BsLightbulbFill />
                )}
              </h5>
            </div>
            <small>{theme === "dark" ? <>Dark</> : <>Light</>}</small>
          </div>
        </label>
      </Col>
    </>
  );
};

export default ThemeButton;

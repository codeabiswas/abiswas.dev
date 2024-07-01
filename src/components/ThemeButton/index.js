import React from "react";
import { Col } from "react-bootstrap";
import { BsLightbulbFill, BsLightbulbOffFill } from "react-icons/bs";

const ThemeButton = ({ theme, handleThemeChange, checked }) => {
  return (
    <>
      <Col className="d-flex flex-column justify-content-center">
        <button onClick={handleThemeChange} type="button">
          <div className="d-flex align-items-center">
            <div className="d-none d-sm-block">
              <h5 className="d-flex align-items-center logo">
                {checked ? <BsLightbulbOffFill /> : <BsLightbulbFill />}
              </h5>
            </div>
            <small>{checked ? <>Turn light off</> : <>Turn light on</>}</small>
          </div>
        </button>
      </Col>
    </>
  );
};

export default ThemeButton;

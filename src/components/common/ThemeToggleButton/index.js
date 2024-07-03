import React from "react";
import { Row, Col } from "react-bootstrap";
import Button from "../../ui/Button";
import { BsLightbulbOffFill, BsLightbulbFill } from "react-icons/bs";
import { useThemeContext } from "../../../providers/ThemeProvider";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <Row className="ms-auto float-end">
      <Col className="d-flex flex-column justify-content-center">
        <Button
          onClick={toggleTheme}
          children={
            <div className="d-flex align-items-center">
              {/* Do not show the lightbulb when on a phone */}
              <div className="d-none d-sm-block">
                <h5 className="d-flex align-items-center logo">
                  {theme === "light-mode" ? (
                    <BsLightbulbOffFill />
                  ) : (
                    <BsLightbulbFill />
                  )}
                </h5>
              </div>
              <small>
                {theme === "light-mode" ? (
                  <>Turn light off</>
                ) : (
                  <>Turn light on</>
                )}
              </small>
            </div>
          }
        />
      </Col>
    </Row>
  );
};

export default ThemeToggleButton;

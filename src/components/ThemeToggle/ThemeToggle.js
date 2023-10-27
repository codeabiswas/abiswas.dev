import React, { useState } from "react";
import { DropdownButton, Form, Stack } from "react-bootstrap";
import { Dropdown, Row, Col } from "react-bootstrap";
import { BsMoonStars, BsSun } from "react-icons/bs";

const ThemeToggle = ({ collapseFriendly, label }) => {
  const [themeOption, setThemeOption] = useState(
    document.querySelector("html").getAttribute("data-bs-theme") === "dark" ? (
      <span>
        <BsMoonStars /> Dark
      </span>
    ) : (
      <span>
        <BsSun /> Light
      </span>
    )
  );

  // For user toggling the theme manually
  // const changeTheme = ({}) => {
  //   // Set new theme
  //   document.querySelector("html").getAttribute("data-bs-theme") === "dark"
  //     ? document.querySelector("html").setAttribute("data-bs-theme", "light")
  //     : document.querySelector("html").setAttribute("data-bs-theme", "dark");
  //   //  Set toggle label
  //   setThemeOption(
  //     document.querySelector("html").getAttribute("data-bs-theme") === "dark"
  //       ? "light"
  //       : "dark"
  //   );
  // };

  const changeTheme = (theme) => {
    // Set new theme
    document.querySelector("html").setAttribute("data-bs-theme", theme);
    //  Set toggle label
    setThemeOption(
      theme === "dark" ? (
        <span>
          <BsMoonStars /> Dark
        </span>
      ) : (
        <span>
          <BsSun /> Light
        </span>
      )
    );
  };

  return (
    // <div className={collapseFriendly ? "d-lg-none" : "d-none d-lg-block"}>
    //   <Form.Switch
    //     // id="theme-toggle-switch"
    //     onClick={changeTheme}
    //     aria-label="Dark or light mode toggle"
    //     label={`Switch to ${themeOption} mode`}
    //   />
    // </div>

    <div className={collapseFriendly ? "d-lg-none" : "d-none d-lg-block"}>
      <div className="d-inline-flex flex-row align-items-md-center align-items-start">
        <div className="pe-2">Theme:</div>
        <DropdownButton
          id="theme-toggle-block"
          size="sm"
          title={themeOption}
          variant="outline-primary"
        >
          <Dropdown.Item onClick={() => changeTheme("light")}>
            <span>
              <BsSun /> Light
            </span>
          </Dropdown.Item>
          <Dropdown.Item onClick={() => changeTheme("dark")}>
            <span>
              <BsMoonStars /> Dark
            </span>
          </Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
};

export default ThemeToggle;

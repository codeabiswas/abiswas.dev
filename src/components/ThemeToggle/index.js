import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { BsMoonStars, BsSun } from "react-icons/bs";

const ThemeToggle = ({ collapseFriendly, label }) => {
  const [themeOption, setThemeOption] = useState(
    document.querySelector("html").getAttribute("data-bs-theme") === "dark" ? (
      <BsMoonStars />
    ) : (
      <BsSun />
    )
  );

  const changeTheme = (theme) => {
    // Set new theme
    document.querySelector("html").setAttribute("data-bs-theme", theme);
    //  Set toggle label
    setThemeOption(theme === "dark" ? <BsMoonStars /> : <BsSun />);
  };

  return (
    <div
      className={collapseFriendly ? "d-lg-none py-2" : "d-none d-lg-block py-2"}
    >
      <Button
        aria-label="Theme toggle"
        variant="outline-tertiary"
        onClick={() =>
          changeTheme(
            document.querySelector("html").getAttribute("data-bs-theme") ===
              "dark"
              ? "light"
              : "dark"
          )
        }
      >
        <h5>{themeOption}</h5>
      </Button>
    </div>
  );
};

export default ThemeToggle;

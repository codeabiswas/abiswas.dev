import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { BsMoonStars, BsSun } from "react-icons/bs";

const ThemeToggle = ({ collapseFriendly, label }) => {
  const [themeOption, setThemeOption] = useState(
    typeof window !== "undefined" ? (
      document.querySelector("html").getAttribute("data-bs-theme") ===
      "dark" ? (
        <BsMoonStars />
      ) : (
        <BsSun />
      )
    ) : (
      <BsSun />
    )
  );

  const changeTheme = (theme) => {
    // Set theme to the user's preferred color scheme
    // Check if window is defined (so if in the browser and not on the server/node)
    if (typeof window !== "undefined") {
      // Set new theme
      document.querySelector("html").setAttribute("data-bs-theme", theme);
      //  Set toggle label
      setThemeOption(theme === "dark" ? <BsMoonStars /> : <BsSun />);
    } else {
      <BsSun />;
    }
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
            typeof window !== "undefined"
              ? document.querySelector("html").getAttribute("data-bs-theme") ===
                "dark"
                ? "light"
                : "dark"
              : "light"
          )
        }
      >
        <h5>{themeOption}</h5>
      </Button>
    </div>
  );
};

export default ThemeToggle;

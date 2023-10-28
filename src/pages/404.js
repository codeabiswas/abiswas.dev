import * as React from "react";
import Section from "../components/Section";
import Menu from "../components/Menu";

const NotFoundPage = () => {
  // Set theme to the user's preferred color scheme
  function updateTheme() {
    const colorMode = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    document.querySelector("html").setAttribute("data-bs-theme", colorMode);
  }

  // Set theme on load
  updateTheme();

  return (
    <body>
      <main>
        <Menu />
        <Section
          title={"This page does not exist...yet? 🤔"}
          id={""}
          content={
            <>
              Until then, check out my{" "}
              <a href="https://www.abiswas.dev">site</a>!
            </>
          }
        />
      </main>
    </body>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;

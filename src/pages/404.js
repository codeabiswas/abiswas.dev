import * as React from "react";
import { Container } from "react-bootstrap";

const NotFoundPage = () => {
  // Set theme to the user's preferred color scheme
  function updateTheme() {
    // Check if window is defined (so if in the browser and not on the server/node)
    if (typeof window !== "undefined") {
      const colorMode = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      document.querySelector("html").setAttribute("data-bs-theme", colorMode);
    }
  }

  // Set theme on load
  updateTheme();

  return (
    <body>
      <main>
        <Container>
          <h1>This page does not exist...yet? 🤔</h1>
          <p>
            Until then, check out my <a href="https://www.abiswas.dev">site</a>!
          </p>
        </Container>
      </main>
    </body>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;

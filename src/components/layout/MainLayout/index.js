import * as React from "react";

// Import styling
import "../../../scss/main.scss";

import { Container } from "react-bootstrap";
import { ThemeProvider } from "../../../providers/ThemeProvider";
import Section from "../../ui/Section";

import AppleTouchIcon from "../../../assets/icons/apple-touch-icon.png";
import Favicon16x16 from "../../../assets/icons/favicon-16x16.png";
import Favicon32x32 from "../../../assets/icons/favicon-32x32.png";
import Favicon from "../../../assets/icons/favicon.ico";

const MainLayout = ({ children }) => {
  return (
    <ThemeProvider>
      <body>
        <main>
          <Container>
            <Section content={children} />
          </Container>
        </main>
      </body>
    </ThemeProvider>
  );
};

export default MainLayout;

export const Head = () => {
  return (
    <>
      <html lang="en-US" />
      <title>Andrei Biswas</title>
      <link rel="apple-touch-icon" sizes="180x180" href={AppleTouchIcon} />
      <link rel="icon" type="image/png" sizes="32x32" href={Favicon32x32} />
      <link rel="icon" type="image/png" sizes="16x16" href={Favicon16x16} />
      <link rel="icon" type="image/x-icon" href={Favicon} />
      <link rel="shortcut icon" type="image/x-icon" href={Favicon} />
    </>
  );
};

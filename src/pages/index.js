import * as React from "react";
import { useState, useEffect } from "react";

// Import styling
import "../scss/index.scss";

import AppleTouchIcon from "../assets/favicons/apple-touch-icon.png";
import Favicon16x16 from "../assets/favicons/favicon-16x16.png";
import Favicon32x32 from "../assets/favicons/favicon-32x32.png";

import { Container } from "react-bootstrap";

// Import sections
import About from "../sections/about";
import Loading from "../components/Loading";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Header from "../components/Header";
import LinksPicContainer from "../components/LinksPicContainer";

const IndexPage = () => {
  // Retrieve the Personal Resume Information (PRI) Gist API
  const pri_gist_api = process.env.GATSBY_PUBLIC_PRI_GIST_API;

  // Set theme to the user's preferred color scheme
  const [theme, setTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark-mode"
      : "light-mode"
  );

  const toggleTheme = (selectedTheme) => {
    // Check if window is defined (so if in the browser and not on the server/node)
    // setTheme(theme === "light-mode" ? "dark-mode" : "light-mode");
    setTheme(selectedTheme);
  };

  // When fetching data from API, there are several states:
  // 1. Loading
  // 2. Success
  // 3. Error
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    document.body.className = theme;
    setLoading(true);
    fetch(pri_gist_api)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [theme, pri_gist_api]);

  if (loading) return <Loading />;
  if (error) return <pre>{JSON.stringify(error)}</pre>;
  if (!data) return null;

  const rawAboutContent = JSON.parse(data.files["about.json"].content);
  const rawContactContent = JSON.parse(data.files["contact.json"].content);

  // TODO: Use GraphQL to load data from GitHub Gist
  // The following resources should help with this:
  // * https://www.gatsbyjs.com/docs/why-gatsby-uses-graphql/
  // * https://stackoverflow.com/questions/49299309/gatsbyjs-getting-data-from-restful-api
  const children = (
    <main>
      <Container>
        <Header theme={theme} handleThemeChange={toggleTheme} />
        <About
          rawAboutContent={rawAboutContent}
          rawContactContent={rawContactContent}
          theme={theme}
          handleThemeChange={toggleTheme}
        />
        <LinksPicContainer
          rawContactContent={rawContactContent}
          profilePictureUrl={rawAboutContent.profilePictureUrl}
          firstName={rawAboutContent.firstName}
          lastName={rawAboutContent.lastName}
        />
        <Footer />
      </Container>
    </main>
  );

  return (
    <body className={theme}>
      <Section content={children} />
    </body>
  );
};

export default IndexPage;

export const Head = () => {
  return (
    <>
      <html lang="en-US" />
      <title>Andrei Biswas</title>
      <link rel="apple-touch-icon" sizes="180x180" href={AppleTouchIcon} />
      <link rel="icon" type="image/png" sizes="32x32" href={Favicon32x32} />
      <link rel="icon" type="image/png" sizes="16x16" href={Favicon16x16} />
    </>
  );
};

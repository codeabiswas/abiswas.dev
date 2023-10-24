import * as React from "react";
import { useState, useEffect } from "react";

// Import styling
import "../assets/index.sass";

// Import sections
import About from "../sections/about";
import Contact from "../sections/contact";
import Education from "../sections/education";
import Experience from "../sections/experience";
import Music from "../sections/musicfolio";
import Skills from "../sections/skills";
import Tech from "../sections/techfolio";
import Menu from "../components/Menu/Menu";
import Footer from "../components/Footer/Footer";
import Loading from "../components/Loading/Loading";

const IndexPage = () => {
  // Retrieve the Personal Resume Information (PRI) Gist API
  const pri_gist_api = process.env.GATSBY_NEXT_PUBLIC_PRI_GIST_API;

  // Set theme to the user's preferred color scheme
  function updateTheme() {
    const colorMode = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    document.querySelector("html").setAttribute("data-bs-theme", colorMode);
  }

  // Set theme on load
  updateTheme();

  // Update theme when the preferred scheme changes
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", updateTheme);

  // When fetching data from API, there are several states:
  // 1. Loading
  // 2. Success
  // 3. Error
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(pri_gist_api)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [pri_gist_api]);

  console.log(pri_gist_api);

  if (loading) return <Loading />;
  if (error) return <pre>{JSON.stringify(error)}</pre>;
  if (!data) return null;

  // TODO: Use GraphQL to load data from GitHub Gist
  // The following resources should help with this:
  // * https://www.gatsbyjs.com/docs/why-gatsby-uses-graphql/
  // * https://stackoverflow.com/questions/49299309/gatsbyjs-getting-data-from-restful-api
  const children = (
    <main>
      <About
        rawAboutContent={JSON.parse(data.files["about.json"].content)}
        rawContactContent={JSON.parse(data.files["contact.json"].content)}
      />
      <Experience
        rawContent={JSON.parse(data.files["experience.json"].content)}
      />
      <Education
        rawContent={JSON.parse(data.files["education.json"].content)}
      />
      <Skills rawContent={JSON.parse(data.files["skills.json"].content)} />
      <Tech rawContent={JSON.parse(data.files["projects.json"].content)} />
      <Music rawContent={JSON.parse(data.files["music.json"].content)} />
    </main>
  );

  return (
    <body>
      <Menu />
      {children}
      <Footer />
    </body>
  );
};

export default IndexPage;

export const Head = () => {
  return (
    <>
      <html lang="en-US" />
      <title>abiswas.dev</title>
    </>
  );
};

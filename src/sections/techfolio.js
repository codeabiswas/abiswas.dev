import React from "react";
import { Fragment, useEffect, useState } from "react";
import Section from "../components/Section/section";
import RepoLanguages from "../components/RepoLanguages/RepoLanguages";

const Tech = ({ rawContent }) => {
  const GITHUB_REPO_URL = `https://api.github.com/users/${rawContent.githubUsername}/repos`;

  // When fetching data from API, there are several states:
  // 1. Loading
  // 2. Success
  // 3. Error
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(GITHUB_REPO_URL)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [GITHUB_REPO_URL]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error)}</pre>;
  if (!data) return null;

  const content = (
    <>
      {data.map((repo, index) => (
        <Fragment key={index}>
          <p>Name: {repo.name}</p>
          <p>Description: {repo.description}</p>
          <RepoLanguages languageUrl={repo.languages_url} />
        </Fragment>
      ))}
    </>
  );

  return (
    <>
      <Section id="tech" title="/tech" content={content} />
    </>
  );
};

export default Tech;

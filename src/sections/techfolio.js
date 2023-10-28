import React from "react";
import { useEffect, useState } from "react";
import Section from "../components/Section";
import Loading from "../components/Loading";
import Masonry from "react-responsive-masonry";
import StyledResponsiveMasonry from "../components/StyledResponsiveMasonry";
import RepoCard from "../components/RepoCard";

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

  if (loading) return <Loading />;
  if (error) return <pre>{JSON.stringify(error)}</pre>;
  if (!data) return null;

  const content = (
    <>
      <StyledResponsiveMasonry>
        <Masonry>
          {data.map((repo, index) => (
            <RepoCard key={index} repo={repo} />
          ))}
        </Masonry>
      </StyledResponsiveMasonry>
    </>
  );

  return (
    <>
      <Section id="tech" title="/tech" content={content} />
    </>
  );
};

export default Tech;

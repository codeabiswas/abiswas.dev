import React from "react";
import { Fragment, useEffect, useState } from "react";
import Section from "../components/Section/section";
import RepoLanguages from "../components/RepoLanguages/RepoLanguages";
import Loading from "../components/Loading/Loading";
import { Card, Stack } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

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
      <ResponsiveMasonry columnsCountBreakPoints={{ 576: 1, 768: 2, 1200: 3 }}>
        <Masonry>
          {data.map((repo, index) => (
            <Card key={index} className="m-2" style={{ minWidth: "20rem" }}>
              <Card.Body>
                <Card.Title>
                  <Stack
                    className="d-flex justify-content-between"
                    direction="horizontal"
                    gap={3}
                  >
                    <div>{repo.name}</div>
                    <a href={repo.html_url} target="_blank" rel="noreferrer">
                      <BsGithub />
                    </a>
                  </Stack>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <RepoLanguages languageUrl={repo.languages_url} />
                </Card.Subtitle>
                <Card.Text>{repo.description}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </>
  );

  return (
    <>
      <Section id="tech" title="/tech" content={content} />
    </>
  );
};

export default Tech;

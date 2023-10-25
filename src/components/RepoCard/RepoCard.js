import React from "react";
import { Card, Stack } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import RepoLanguages from "../RepoLanguages/RepoLanguages";

const RepoCard = ({ repo }) => {
  return (
    <Card className="m-2" style={{ minWidth: "20rem" }}>
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
  );
};

export default RepoCard;

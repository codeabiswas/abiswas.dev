import React from "react";
import { Button, Card, Stack } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import RepoLanguages from "../RepoLanguages/RepoLanguages";

const RepoCard = ({ repo }) => {
  return (
    // <Card className="m-2" style={{ minWidth: "20rem" }}>
    <Card className="m-2">
      <Card.Body>
        <Card.Title as={"h6"}>{repo.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <small>
            <RepoLanguages languageUrl={repo.languages_url} />
          </small>
        </Card.Subtitle>
        <Card.Text>
          <small>{repo.description}</small>
        </Card.Text>
        <div className="d-grid">
          <Button
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            variant="outline-primary"
            size="sm"
          >
            <BsGithub /> Go to repo
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default RepoCard;

import React from "react";
import { useState, useEffect, Fragment } from "react";
import Loading from "../Loading/Loading";
import { Placeholder, Card } from "react-bootstrap";

const RepoLanguages = ({ languageUrl }) => {
  // When fetching data from API, there are several states:
  // 1. Loading
  // 2. Success
  // 3. Error
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(languageUrl)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [languageUrl]);

  if (loading)
    return (
      <Placeholder as={Card.Subtitle} animation="wave">
        <Placeholder xs={6} />
      </Placeholder>
    );
  if (error) return <pre>{JSON.stringify(error)}</pre>;
  if (!data) return null;

  return (
    <>
      {Object.keys(data).length === 0 ? (
        <></>
      ) : (
        <>
          {Object.keys(data).map((language, index) => (
            <Fragment key={index}>
              {language}
              <>{index === Object.keys(data).length - 1 ? <></> : <>, </>}</>
            </Fragment>
          ))}
        </>
      )}
    </>
  );
};

export default RepoLanguages;

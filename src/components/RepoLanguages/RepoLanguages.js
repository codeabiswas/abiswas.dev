import React from "react";
import { useState, useEffect } from "react";
import Loading from "../Loading/Loading";

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

  if (loading) return <Loading />;
  if (error) return <pre>{JSON.stringify(error)}</pre>;
  if (!data) return null;

  return (
    <>
      {Object.keys(data).length === 0 ? (
        <></>
      ) : (
        <>
          <h6>Language(s)</h6>
          <ul>
            {Object.keys(data).map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default RepoLanguages;

import React from "react";
import { Fragment } from "react";

const ExpeduSection = ({ id, title, rawContentArray }) => {
  return (
    <>
      {rawContentArray.map((data, index) => (
        <Fragment key={index}>
          {
            // Display unique experience data (i.e.: company, role)
            // Display unique education data (i.e.: school, degree, major, minor)
            id === "experience" ? (
              <>
                <p>
                  <b>Company: </b>
                  {data.company}
                </p>
                <p>
                  <b>Role: </b>
                  {data.role}
                </p>
              </>
            ) : (
              <>
                <p>
                  <b>School: </b>
                  {data.school}
                </p>
                <p>
                  <b>Degree: </b>
                  {data.degree}
                </p>
                <p>
                  <b>Major: </b>
                  {data.major}
                </p>
                <p>
                  <b>Minor: </b>
                  {data.minor}
                </p>
              </>
            )
          }{" "}
          {
            // Display shared data (i.e.: start month + year, end month + year, location, highlights)
            <>
              <p>
                <b>Start month and year: </b>
                {data.startMonth}, {data.startYear}
              </p>
              <p>
                <b>End month and year: </b>
                {data.endMonth}, {data.endYear}
              </p>
              <p>
                <b>Location: </b>
                {data.location}
              </p>
              <p>
                <b>Highlights: </b>
              </p>
              <ul>
                {data.description.map((bulletPoint, index) => (
                  <li key={index}>{bulletPoint}</li>
                ))}
              </ul>
              {index === rawContentArray.length - 1 ? <></> : <hr />}
            </>
          }
        </Fragment>
      ))}
    </>
  );
};

export default ExpeduSection;

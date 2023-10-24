import React from "react";
import { Fragment } from "react";
import { Card, Tab, Row, Col, Nav, Table } from "react-bootstrap";
import styled from "styled-components";

// const ExpeduSection = ({ id, title, rawContentArray }) => {
//   return (
//     <>
//       {rawContentArray.map((data, index) => (
//         <Fragment key={index}>
//           {
//             // Display unique experience data (i.e.: company, role)
//             // Display unique education data (i.e.: school, degree, major, minor)
//             id === "experience" ? (
//               <>
//                 <p>
//                   <b>Company: </b>
//                   {data.company}
//                 </p>
//                 <p>
//                   <b>Role: </b>
//                   {data.role}
//                 </p>
//               </>
//             ) : (
//               <>
//                 <p>
//                   <b>School: </b>
//                   {data.school}
//                 </p>
//                 <p>
//                   <b>Degree: </b>
//                   {data.degree}
//                 </p>
//                 <p>
//                   <b>Major: </b>
//                   {data.major}
//                 </p>
//                 <p>
//                   <b>Minor: </b>
//                   {data.minor}
//                 </p>
//               </>
//             )
//           }{" "}
//           {
//             // Display shared data (i.e.: start month + year, end month + year, location, highlights)
//             <>
//               <p>
//                 <b>Start month and year: </b>
//                 {data.startMonth}, {data.startYear}
//               </p>
//               <p>
//                 <b>End month and year: </b>
//                 {data.endMonth}, {data.endYear}
//               </p>
//               <p>
//                 <b>Location: </b>
//                 {data.location}
//               </p>
//               <p>
//                 <b>Highlights: </b>
//               </p>
//               <ul>
//                 {data.description.map((bulletPoint, index) => (
//                   <li key={index}>{bulletPoint}</li>
//                 ))}
//               </ul>
//               {index === rawContentArray.length - 1 ? <></> : <hr />}
//             </>
//           }
//         </Fragment>
//       ))}
//     </>
//   );
// };

const ExpeduSection = ({ id, title, rawContentArray }) => {
  // Data for the tabs
  let categorizedData = {};

  rawContentArray.forEach((data) => {
    if (id === "experience") {
      if (!categorizedData[data.role]) {
        categorizedData[data.role] = [];
      }
      categorizedData[data.role].push(data);
    } else {
      if (!categorizedData[data.degree]) {
        categorizedData[data.degree] = [];
      }
      categorizedData[data.degree].push(data);
    }
  });

  // console.log("Keys:" + Object.keys(categorizedData));
  // console.log(Object.values(categorizedData));

  return (
    <>
      <Tab.Container defaultActiveKey={0} transition={false}>
        {/* <Row className="m-0 p-0 d-flex flex-row align-items-center"> */}
        <Row className="m-0 p-0 d-flex flex-row align-items-start">
          <Col md={2}>
            <h6>Role</h6>
            <hr />
            {/* <Nav variant="pills" className="flex-column"> */}
            <Nav variant="underline" className="flex-column">
              {Object.keys(categorizedData).map((key, index) => (
                <Fragment key={index}>
                  {
                    <Nav.Item>
                      <Nav.Link eventKey={index}>{key}</Nav.Link>
                    </Nav.Item>
                  }
                </Fragment>
              ))}
            </Nav>
          </Col>
          <Col md={10}>
            <h6>Specifics</h6>
            <hr />
            <Tab.Content>
              {Object.keys(categorizedData).map((key, index) => (
                <Tab.Pane eventKey={index} key={index}>
                  {
                    // Separate logic for experience vs. education
                    categorizedData[key].map((data, itemNumber) => (
                      <Fragment key={itemNumber}>
                        {id === "experience" ? (
                          <>
                            <p>
                              <b>Company: </b>
                              {data.company}
                            </p>
                          </>
                        ) : (
                          <>
                            <p>
                              <b>School: </b>
                              {data.school}
                            </p>
                            <p>
                              {data.major !== "" ? (
                                <>
                                  <b>Major: </b>
                                  {data.major}
                                </>
                              ) : (
                                <></>
                              )}
                            </p>
                            <p>
                              {data.minor !== "" ? (
                                <>
                                  <b>Minor: </b>
                                  {data.minor}
                                </>
                              ) : (
                                <></>
                              )}
                            </p>
                          </>
                        )}
                        <>
                          <p>
                            <b>Duration: </b>
                            {data.startMonth !== "" ? (
                              <>
                                {data.startMonth}, {data.startYear} -{" "}
                              </>
                            ) : (
                              <>{data.startYear} - </>
                            )}
                            {data.endMonth !== "" ? (
                              <>
                                {data.endMonth}, {data.endYear}
                              </>
                            ) : (
                              <>{data.endYear}</>
                            )}
                          </p>
                          <p>
                            <b>Location: </b>
                            {data.location}
                          </p>
                          <ul>
                            {Array.isArray(data.description) &&
                            data.description.length ? (
                              <>
                                {data.description.map(
                                  (bulletPoint, bulletPointIndex) => (
                                    <li key={bulletPointIndex}>
                                      {bulletPoint}
                                    </li>
                                  )
                                )}
                              </>
                            ) : (
                              <></>
                            )}
                          </ul>
                        </>
                      </Fragment>
                    ))
                  }
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};

export default ExpeduSection;

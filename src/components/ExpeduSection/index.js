import React from "react";
import { Fragment } from "react";
import { Tab, Row, Col, Nav } from "react-bootstrap";

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
      // if (!categorizedData[data.degree]) {
      //   categorizedData[data.degree] = [];
      // }
      // categorizedData[data.degree].push(data);
      if (!categorizedData[data.educationLevel]) {
        categorizedData[data.educationLevel] = [];
      }
      categorizedData[data.educationLevel].push(data);
    }
  });

  // console.log("Keys:" + Object.keys(categorizedData));
  // console.log(Object.values(categorizedData));

  return (
    <>
      <Tab.Container defaultActiveKey={0} transition={false}>
        <Row className="m-0 p-0 d-flex flex-row align-items-start ">
          <Col md={2}>
            <h6>{id === "experience" ? <>Role</> : <>Level of education</>}</h6>
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
          <Col md={10} className="pt-4 pt-md-0">
            <h6>Details</h6>
            <hr />
            <Tab.Content>
              {Object.keys(categorizedData).map((key, index) => (
                <Tab.Pane eventKey={index} key={index}>
                  {
                    // Separate logic for experience vs. education
                    categorizedData[key].map((data, itemNumber) => (
                      <Fragment key={itemNumber}>
                        {id === "education" ? (
                          <>
                            <h4>
                              {data.educationLevel !== "High School" ? (
                                <>
                                  {/* Add degree and major */}
                                  {data.major !== "" ? (
                                    <>
                                      {data.degree} in {data.major}
                                    </>
                                  ) : (
                                    <></>
                                  )}{" "}
                                  {/* If you have a minor */}
                                  {data.minor !== "" ? (
                                    <> with minor in {data.minor}</>
                                  ) : (
                                    <></>
                                  )}
                                </>
                              ) : (
                                <>{data.degree}</>
                              )}
                            </h4>
                          </>
                        ) : (
                          <></>
                        )}
                        <>
                          <h5>
                            {id === "experience" ? (
                              <>{data.company}</>
                            ) : (
                              <>{data.school}</>
                            )}{" "}
                            |{" "}
                            {data.startMonth !== "" ? (
                              <>
                                {data.startMonth} {data.startYear} -{" "}
                                {data.endMonth !== "" ? (
                                  <>
                                    {data.endMonth} {data.endYear}
                                  </>
                                ) : (
                                  <>{data.endYear}</>
                                )}
                              </>
                            ) : (
                              <>
                                {data.startYear} - {data.endYear}
                              </>
                            )}
                          </h5>
                          <h6>{data.location}</h6>

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

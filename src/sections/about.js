import React, { Fragment } from "react";
import Section from "../components/Section";
import ContactsHolder from "../components/ContactsHolder";
import ContactCard from "../components/ContactCard";
import { Container, Row, Col } from "react-bootstrap";
import ThemeToggle from "../components/ThemeToggle";
import {
  BsGithub,
  BsLinkedin,
  BsEnvelope,
  BsFileEarmarkText,
  BsMusicNoteList,
} from "react-icons/bs";

const About = ({
  rawAboutContent,
  rawContactContent,
  theme,
  handleThemeChange,
}) => {
  // Set up the heading to have the right colors for emphasis
  const heading = rawAboutContent.heading;
  const keyword = rawAboutContent.keyword;
  const index = heading.indexOf(keyword);

  const beforeKeyword = heading.substring(0, index);
  const afterKeyword = heading.substring(index);

  const content = (
    <>
      {/* Only show in lg and above size screens */}
      {/* <div className="d-flex flex-row align-items-center"> */}
      {/* <div className="d-none d-lg-block pe-lg-4">
          <ContactCard
            imgSrc={rawAboutContent.profilePictureUrl}
            rawContactContent={rawContactContent}
          />
        </div> */}
      {/* <div className="d-flex flex-column flex-grow-1 ps-lg-4"> */}
      <Container>
        <h5 className="m-0 p-0">
          My name is{" "}
          <span className="highlight">{rawAboutContent.firstName}</span> and my
          passion is
        </h5>
        <h1 className="display-4 m-0 p-0">
          {beforeKeyword}
          <span className="highlight">{afterKeyword}</span>
        </h1>
        {rawAboutContent.description.map((paragraphContent, index) => (
          <p key={index} className="m-0 p-0">
            {paragraphContent}
          </p>
        ))}
        <h6>Learn more through</h6>
        <Row>
          <Col className="d-flex flex-column justify-content-center">
            <ul>
              <li>
                <BsFileEarmarkText /> Resume
              </li>
              <li>
                <BsLinkedin /> Professional and education experiences
              </li>
              <li>
                <BsGithub /> Programming projects
              </li>
              <li>
                <BsMusicNoteList /> Original music
              </li>
              <li>
                <BsEnvelope /> Email
              </li>
            </ul>
          </Col>
          <Col className="d-none d-sm-block">
            <img
              src={rawAboutContent.profilePictureUrl}
              className="float-end"
              alt="..."
            />
          </Col>
        </Row>
        <ThemeToggle theme={theme} handleThemeChange={handleThemeChange} />
      </Container>
      {/* Only show in md and below size screen */}
      {/* <div className="d-lg-none">
            <ContactsHolder rawContactContent={rawContactContent} />
          </div> */}
      {/* </div> */}
      {/* </div> */}
    </>
  );

  return (
    <>
      <Section id="about" title={null} content={content} />
    </>
  );
};

export default About;

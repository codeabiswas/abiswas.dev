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
  BsCircleFill,
  BsSunFill,
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
      <span
        className="d-flex align-items-center"
        style={{ marginTop: "58px", marginBottom: "58px" }}
      >
        <h4 className="d-flex align-items-center">
          {/* <BsCircleFill /> */}
          <BsSunFill />
        </h4>
        <span className="textLogo">ANDREI</span>
        <ThemeToggle theme={theme} handleThemeChange={handleThemeChange} />
      </span>
      <h5 className="m-0 p-0" style={{ paddingBottom: "7px" }}>
        My name is{" "}
        <span className="highlight">{rawAboutContent.firstName}</span> and my
        passion is
      </h5>
      <h1 className="display-4 m-0 p-0">
        {beforeKeyword}
        <span className="highlight">{afterKeyword}</span>
      </h1>
      <div style={{ paddingTop: "21px", paddingBottom: "42px" }}>
        {rawAboutContent.description.map((paragraphContent, index) => (
          <p
            key={index}
            style={{
              marginBottom:
                index === rawAboutContent.description.length - 1 ? "0" : "16px",
            }}
          >
            {paragraphContent}
          </p>
        ))}
      </div>
      <Row>
        <Col className="d-flex flex-column justify-content-center">
          <h6 style={{ marginBottom: "14px" }}>Learn more through my</h6>
          <ul>
            <li
              className="d-flex align-items-center"
              style={{ marginBottom: "12px" }}
            >
              <h5 className="d-flex align-items-center logo">
                <BsFileEarmarkText />
              </h5>
              <a
                href={
                  "https://github.com/codeabiswas/abiswas.dev/blob/main/src/assets/Andrei_Biswas_Resume.pdf"
                }
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </li>
            <li
              className="d-flex align-items-center"
              style={{ marginBottom: "12px" }}
            >
              <h5 className="d-flex align-items-center logo">
                <BsLinkedin />
              </h5>
              <a
                href={"https://www.linkedin.com/in/andreibiswas/"}
                target="_blank"
                rel="noreferrer"
              >
                Professional and education experiences
              </a>
            </li>
            <li
              className="d-flex align-items-center"
              style={{ marginBottom: "12px" }}
            >
              <h5 className="d-flex align-items-center logo">
                <BsGithub />
              </h5>
              <a
                href={"https://github.com/codeabiswas"}
                target="_blank"
                rel="noreferrer"
              >
                Programming projects
              </a>
            </li>
            <li
              className="d-flex align-items-center"
              style={{ marginBottom: "12px" }}
            >
              <h5 className="d-flex align-items-center logo">
                <BsMusicNoteList />
              </h5>
              <a
                href={"https://soundcloud.com/music-andrei/sets/tracks-i-made"}
                target="_blank"
                rel="noreferrer"
              >
                Original music
              </a>
            </li>
            <li className="d-flex align-items-center">
              <h5 className="d-flex align-items-center logo">
                <BsEnvelope />
              </h5>
              <a
                href={"mailto:andrei.biswas@gmail.com"}
                target="_blank"
                rel="noreferrer"
              >
                Email
              </a>
            </li>
          </ul>
        </Col>
        <Col className="d-none d-sm-block">
          <img
            src={rawAboutContent.profilePictureUrl}
            className="float-end"
            alt={
              "Profile picture of " +
              rawAboutContent.firstName +
              " " +
              rawAboutContent.lastName
            }
          />
        </Col>
      </Row>
      <footer
        className="d-flex justify-content-center"
        style={{ marginTop: "58px", marginBottom: "58px" }}
      >
        Made with ❤️ by Andrei Biswas | {`${new Date().getFullYear()}`}
      </footer>
    </>
  );

  return (
    <>
      <Section id="about" title={null} content={content} />
    </>
  );
};

export default About;

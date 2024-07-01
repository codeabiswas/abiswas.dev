import React from "react";
import { BsSunFill } from "react-icons/bs";
import ThemeToggle from "../components/ThemeToggle";
import LinksPicContainer from "../components/LinksPicContainer";

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
                index === rawAboutContent.description.length - 1
                  ? "0px"
                  : "16px",
            }}
          >
            {paragraphContent}
          </p>
        ))}
      </div>
      <LinksPicContainer
        rawContactContent={rawContactContent}
        profilePictureUrl={rawAboutContent.profilePictureUrl}
        firstName={rawAboutContent.firstName}
        lastName={rawAboutContent.lastName}
      />
    </>
  );

  return <>{content}</>;
};

export default About;

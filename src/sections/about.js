import React from "react";

const About = ({ rawAboutContent }) => {
  // Set up the heading to have the right colors for emphasis
  const heading = rawAboutContent.heading;
  const keyword = rawAboutContent.keyword;
  const index = heading.indexOf(keyword);

  const beforeKeyword = heading.substring(0, index);
  const afterKeyword = heading.substring(index);

  const content = (
    <>
      <h5>
        My name is{" "}
        <span className="highlight">{rawAboutContent.firstName}</span> and my
        passion is
      </h5>
      <h1 className="display-4">
        {beforeKeyword}
        <span className="highlight">{afterKeyword}</span>
      </h1>
      <div className="text-blurb">
        {rawAboutContent.description.map((paragraphContent, index) => (
          <p
            key={index}
            className={
              index === rawAboutContent.description.length - 1
                ? "last-text"
                : ""
            }
          >
            {paragraphContent}
          </p>
        ))}
      </div>
    </>
  );

  return <>{content}</>;
};

export default About;

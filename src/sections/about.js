import React from "react";
import Section from "../components/Section/section";
import { Image } from "react-bootstrap";

const About = ({ rawContent }) => {
  const content = (
    <>
      <Image src={rawContent.profilePictureUrl} />
      <div>
        <h1>
          Hi! I'm {rawContent.firstName} {rawContent.lastName}.
        </h1>
        {rawContent.description.map((paragraphContent, index) =>
          index !== rawContent.description.length - 1 ? (
            <p key={index}>{paragraphContent}</p>
          ) : (
            <p key={index} className="m-0">
              {paragraphContent}
            </p>
          )
        )}
      </div>
    </>
  );

  return (
    <>
      <Section id="about" title={null} content={content} />
    </>
  );
};

export default About;

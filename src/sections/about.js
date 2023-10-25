import React, { Fragment } from "react";
import Section from "../components/Section/section";
import { Image } from "react-bootstrap";
import ContactsHolder from "../components/ContactsHolder/ContactsHolder";
import ContactCard from "../components/ContactCard/ContactCard";

const About = ({ rawAboutContent, rawContactContent }) => {
  const content = (
    <>
      {/* Only show in lg and above size screens */}
      <div className="d-flex flex-row align-items-center">
        <div className="d-none d-lg-block pe-lg-4">
          {console.log(rawAboutContent.profilePictureUrl)}
          <ContactCard
            imgSrc={rawAboutContent.profilePictureUrl}
            rawContactContent={rawContactContent}
          />
        </div>
        <div className="d-flex flex-column flex-grow-1 ps-lg-4">
          <h1>
            Hi! I'm {rawAboutContent.firstName} {rawAboutContent.lastName}.
          </h1>
          {rawAboutContent.description.map((paragraphContent, index) => (
            <p key={index}>{paragraphContent}</p>
          ))}
          {/* Only show in md and below size screen */}
          <div className="d-lg-none">
            <ContactsHolder rawContactContent={rawContactContent} />
          </div>
        </div>
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

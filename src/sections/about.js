import React, { Fragment } from "react";
import Section from "../components/Section/section";
import { Image, Stack, Row, Col } from "react-bootstrap";
import {
  BsLinkedin,
  BsGithub,
  BsStackOverflow,
  BsEnvelopeAt,
} from "react-icons/bs";
import ContactIcon from "../components/ContactIcon/ContactIcon";

const About = ({ rawAboutContent, rawContactContent }) => {
  const content = (
    <>
      {/* Only show in lg and above screens */}
      <div className="d-none d-lg-block">
        <Image src={rawAboutContent.profilePictureUrl} />
      </div>
      <div>
        <h1>
          Hi! I'm {rawAboutContent.firstName} {rawAboutContent.lastName}.
        </h1>
        {rawAboutContent.description.map((paragraphContent, index) => (
          <p key={index}>{paragraphContent}</p>
        ))}
        <Stack direction="horizontal" gap={4}>
          {rawContactContent.contacts.map((contact, index) => (
            <Fragment key={index}>
              {contact.accountType === "linkedin" ? (
                <ContactIcon
                  iconObject={<BsLinkedin />}
                  contactUrl={contact.url}
                  contactHandle={contact.handle}
                />
              ) : contact.accountType === "github" ? (
                <ContactIcon
                  iconObject={<BsGithub />}
                  contactUrl={contact.url}
                  contactHandle={contact.handle}
                />
              ) : contact.accountType === "stackoverflow" ? (
                <ContactIcon
                  iconObject={<BsStackOverflow />}
                  contactUrl={contact.url}
                  contactHandle={contact.handle}
                />
              ) : contact.accountType === "email" ? (
                <ContactIcon
                  iconObject={<BsEnvelopeAt />}
                  contactUrl={contact.url}
                  contactHandle={contact.handle}
                />
              ) : (
                <></>
              )}
            </Fragment>
          ))}
        </Stack>
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

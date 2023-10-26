import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { Stack } from "react-bootstrap";
import {
  BsLinkedin,
  BsGithub,
  BsStackOverflow,
  BsEnvelopeAt,
} from "react-icons/bs";
import ContactIcon from "../ContactIcon/ContactIcon";

const ContactsHolder = ({ inCard, rawContactContent }) => {
  return (
    <>
      <Stack
        className={inCard ? "d-flex justify-content-between" : ""}
        direction="horizontal"
        gap={4}
      >
        {rawContactContent.contacts.map((contact, index) => (
          <Fragment key={index}>
            {contact.accountType === "linkedin" ? (
              <ContactIcon
                iconObject={<BsLinkedin />}
                className="linkedin"
                contactUrl={contact.url}
                contactHandle={contact.handle}
              />
            ) : contact.accountType === "github" ? (
              <ContactIcon
                iconObject={<BsGithub />}
                className="github"
                contactUrl={contact.url}
                contactHandle={contact.handle}
              />
            ) : contact.accountType === "stackoverflow" ? (
              <ContactIcon
                iconObject={<BsStackOverflow />}
                className="stackoverflow"
                contactUrl={contact.url}
                contactHandle={contact.handle}
              />
            ) : contact.accountType === "email" ? (
              <ContactIcon
                iconObject={<BsEnvelopeAt />}
                className="gmail"
                contactUrl={contact.url}
                contactHandle={contact.handle}
              />
            ) : (
              <></>
            )}
          </Fragment>
        ))}
      </Stack>
    </>
  );
};

export default ContactsHolder;

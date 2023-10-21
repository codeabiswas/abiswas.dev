import React from "react";
import Section from "../components/Section/section";
import { Fragment } from "react";

const Contact = ({ rawContent }) => {
  const content = (
    <>
      {rawContent.contacts.map((contact, index) => (
        <Fragment key={index}>
          <p>
            <b>Account type: </b>
            {contact.accountType}
          </p>
          <p>
            <b>Handle: </b>
            {contact.handle}
          </p>
          <p>
            <b>URL: </b>
            {contact.url}
          </p>
          {index === rawContent.contacts.length - 1 ? <></> : <hr />}
        </Fragment>
      ))}
    </>
  );

  return (
    <>
      <Section id="contact" title="/contact" content={content} />
    </>
  );
};

export default Contact;

import React from "react";
import { Image } from "react-bootstrap";
import ContactsHolder from "../ContactsHolder/ContactsHolder";

const ContactCard = ({ imgSrc, rawContactContent }) => {
  return (
    <>
      <Image src={imgSrc} />
      <ContactsHolder rawContactContent={rawContactContent} />
    </>
  );
};

export default ContactCard;

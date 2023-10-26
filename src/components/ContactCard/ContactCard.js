import React from "react";
import { Card } from "react-bootstrap";
import ContactsHolder from "../ContactsHolder/ContactsHolder";

const ContactCard = ({ imgSrc, rawContactContent }) => {
  // return (
  //   <>
  //     <Image src={imgSrc} />
  //     <ContactsHolder rawContactContent={rawContactContent} />
  //   </>
  // );

  return (
    <>
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={imgSrc} />
        <Card.Footer className="bg-transparent">
          <ContactsHolder inCard={true} rawContactContent={rawContactContent} />
        </Card.Footer>
      </Card>
    </>
  );
};

export default ContactCard;

import React from "react";
import { Card, Image } from "react-bootstrap";
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
        {/* <Card.Body>
          <Card.Title>Card Title</Card.Title>

          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body> */}
        <Card.Footer>
          <ContactsHolder inCard={true} rawContactContent={rawContactContent} />
        </Card.Footer>
      </Card>
    </>
  );
};

export default ContactCard;

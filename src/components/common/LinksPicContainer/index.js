import React from "react";
import { Row, Col } from "react-bootstrap";
import LinkContainer from "../LinkContainer";

const LinksPicContainer = ({
  rawContactContent,
  profilePictureUrl,
  firstName,
  lastName,
}) => {
  return (
    <Row>
      <Col className="d-flex flex-column justify-content-center">
        <h6>Learn more through my</h6>
        <ul>
          {rawContactContent.contacts.map((contact, index) => (
            <LinkContainer
              key={index}
              accountType={contact.accountType}
              url={contact.url}
              description={contact.description}
              last={
                index === rawContactContent.contacts.length - 1 ? true : false
              }
            />
          ))}
        </ul>
      </Col>
      {/* Do not show profile picture on phone screens */}
      <Col className="d-none d-sm-block">
        <img
          src={profilePictureUrl}
          className="float-end"
          alt={"Profile picture of " + firstName + " " + lastName}
        />
      </Col>
    </Row>
  );
};

export default LinksPicContainer;

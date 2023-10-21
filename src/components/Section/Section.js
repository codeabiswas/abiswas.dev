import React from "react";
import { Container } from "react-bootstrap";

const Section = ({ id, title, content }) => {
  return (
    <section id={id}>
      <Container fluid>
        <h1>{title}</h1>
        <>{content}</>
      </Container>
    </section>
  );
};

export default Section;

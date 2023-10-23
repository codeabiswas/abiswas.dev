import React from "react";
import { Container } from "react-bootstrap";
import Title from "../Title/Title";
import ExpeduSection from "../ExpeduSection/ExpeduSection";

const Section = ({ id, title, content }) => {
  return (
    <section
      id={id}
      className="min-vh-100 py-5 d-flex flex-column justify-content-center"
    >
      <Container fluid="lg">
        {title ? <Title title={title} /> : <></>}
        {id === "experience" || id === "education" ? (
          <ExpeduSection id={id} title={title} rawContentArray={content} />
        ) : (
          <>{content}</>
        )}
      </Container>
    </section>
  );
};

export default Section;

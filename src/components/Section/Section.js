import React from "react";
import { Container } from "react-bootstrap";
import Title from "../Title/Title";
import ExpeduSection from "../ExpeduSection/ExpeduSection";
import StyledSection from "./Section.styled";

const Section = ({ id, title, content }) => {
  return (
    <StyledSection id={id}>
      <Container fluid="lg">
        {title ? <Title title={title} /> : <></>}
        {id === "experience" || id === "education" ? (
          <ExpeduSection id={id} title={title} rawContentArray={content} />
        ) : (
          <>{content}</>
        )}
      </Container>
    </StyledSection>
  );
};

export default Section;

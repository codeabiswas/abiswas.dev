import React from "react";
import { Container } from "react-bootstrap";
import Title from "../Title";
import ExpeduSection from "../ExpeduSection";
import StyledSection from "./styled";

const Section = ({ id, title, content }) => {
  return (
    <StyledSection id={id}>
      <Container fluid="lg" className="py-5">
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

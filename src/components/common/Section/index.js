import React from "react";
import StyledSection from "./styled";

const Section = ({ id, content }) => {
  return (
    <StyledSection id={id}>
      <>{content}</>
    </StyledSection>
  );
};

export default Section;

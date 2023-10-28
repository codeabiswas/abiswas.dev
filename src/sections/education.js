import React from "react";
import Section from "../components/Section";

const Education = ({ rawContent }) => {
  return (
    <Section
      id="education"
      title="/education"
      content={rawContent.educations}
    />
  );
};

export default Education;

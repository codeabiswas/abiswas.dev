import React from "react";
import Section from "../components/Section";

const Experience = ({ rawContent }) => {
  return (
    <Section id="experience" title="/experience" content={rawContent.jobs} />
  );
};

export default Experience;

import React from "react";
import Section from "../components/Section/section";

const Experience = ({ rawContent }) => {
  return (
    <Section id="experience" title="/experience" content={rawContent.jobs} />
  );
};

export default Experience;

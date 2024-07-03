import React from "react";
import { v4 as uuidv4 } from "uuid";

const Section = ({ id = uuidv4(), content }) => {
  return (
    <section
      id={id}
      className="min-vh-100 d-flex flex-column justify-content-center"
    >
      <>{content}</>
    </section>
  );
};

export default Section;

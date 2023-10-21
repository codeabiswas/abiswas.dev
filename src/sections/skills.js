import React from "react";
import { Fragment } from "react";
import Section from "../components/Section/section";

const Skills = ({ rawContent }) => {
  const content = (
    <>
      {rawContent.skills.map((skill, index) => (
        <Fragment key={index}>
          {Object.keys(skill).map((category) => (
            <Fragment key={category}>
              <h6>{category}</h6>
              <ul>
                {Object.values(skill).map((category) =>
                  category.map((item) => <li key={item}>{item}</li>)
                )}
              </ul>
            </Fragment>
          ))}
        </Fragment>
      ))}
    </>
  );

  return <Section id="skills" title="/skills" content={content} />;
};

export default Skills;

import React from "react";
import { Fragment } from "react";
import Section from "../components/Section";
import { Card, ListGroup } from "react-bootstrap";
import StyledResponsiveMasonry from "../components/StyledResponsiveMasonry";
import Masonry from "react-responsive-masonry";
import {
  BsCode,
  BsBagCheck,
  BsLaptop,
  BsKanban,
  BsLayoutTextWindowReverse,
  BsFileMusic,
  BsDiagram3,
} from "react-icons/bs";

const Skills = ({ rawContent }) => {
  const content = (
    <>
      <StyledResponsiveMasonry>
        <Masonry>
          {rawContent.skills.map((skill, index) => (
            <Fragment key={index}>
              {Object.keys(skill).map((category) => (
                <Card className="m-2" key={category}>
                  <ListGroup variant="flush">
                    <Card.Header as={"h6"} className="bg-transparent">
                      {category === "Product management" ? (
                        <>
                          <BsBagCheck />{" "}
                        </>
                      ) : category === "Leadership and analysis" ? (
                        <>
                          <BsDiagram3 />{" "}
                        </>
                      ) : category === "Programming languages" ? (
                        <>
                          <BsCode />{" "}
                        </>
                      ) : category === "Music production software" ? (
                        <>
                          <BsFileMusic />{" "}
                        </>
                      ) : category === "Project management" ? (
                        <>
                          <BsKanban />{" "}
                        </>
                      ) : category === "Software engineering" ? (
                        <>
                          <BsLaptop />{" "}
                        </>
                      ) : category === "Web development" ? (
                        <>
                          <BsLayoutTextWindowReverse />{" "}
                        </>
                      ) : (
                        <></>
                      )}

                      {category}
                    </Card.Header>
                    {Object.values(skill).map((category) =>
                      category.map((item) => (
                        <ListGroup.Item key={item}>
                          <small>{item}</small>
                        </ListGroup.Item>
                      ))
                    )}
                  </ListGroup>
                </Card>
              ))}
            </Fragment>
          ))}
        </Masonry>
      </StyledResponsiveMasonry>
    </>
  );

  return <Section id="skills" title="/skills" content={content} />;
};

export default Skills;

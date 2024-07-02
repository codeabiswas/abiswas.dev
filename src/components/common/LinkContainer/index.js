import React from "react";
import {
  BsEnvelopeAt,
  BsFileEarmarkText,
  BsGithub,
  BsLinkedin,
  BsMusicNoteList,
} from "react-icons/bs";

const LinkContainer = ({ accountType, url, description, last }) => {
  return (
    <li
      className="d-flex align-items-center"
      style={{ marginBottom: last ? "0px" : "12px" }}
    >
      <h5 className="d-flex align-items-center logo">
        {accountType === "resume" ? (
          <BsFileEarmarkText />
        ) : accountType === "linkedin" ? (
          <BsLinkedin />
        ) : accountType === "github" ? (
          <BsGithub />
        ) : accountType === "music" ? (
          <BsMusicNoteList />
        ) : accountType === "email" ? (
          <BsEnvelopeAt />
        ) : (
          <></>
        )}
      </h5>
      <a href={url} target="_blank" rel="noreferrer">
        {description}
      </a>
    </li>
  );
};

export default LinkContainer;

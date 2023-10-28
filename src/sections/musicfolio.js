import React from "react";
import ReactPlayer from "react-player/lazy";
import Section from "../components/Section";

const Music = ({ rawContent }) => {
  const content = <ReactPlayer width="100%" url={rawContent.url} />;

  return <Section id="music" title="/music" content={content} />;
};

export default Music;

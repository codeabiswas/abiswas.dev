import React from "react";

const ContactIcon = ({ iconObject, contactUrl }) => {
  return (
    <a href={contactUrl} target="_blank" rel="noopener noreferrer">
      <h4>{iconObject}</h4>
    </a>
  );
};
export default ContactIcon;

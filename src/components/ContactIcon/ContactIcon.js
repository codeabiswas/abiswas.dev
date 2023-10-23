import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const ContactIcon = ({ iconObject, contactUrl, contactHandle }) => {
  return (
    <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip>{contactHandle}</Tooltip>}
    >
      {/* rel=noreferrer implies noopener */}
      <a href={contactUrl} target="_blank" rel="noreferrer">
        <h4>{iconObject}</h4>
      </a>
    </OverlayTrigger>
  );
};
export default ContactIcon;

import React from "react";
import StyledFooter from "./styled";

const Footer = () => {
  return (
    <StyledFooter>
      <small>
        {`${new Date().getFullYear()}`} | Made with 💜 by Andrei Biswas
      </small>
    </StyledFooter>
  );
};

export default Footer;

import React from "react";
import StyledFooter from "./Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <small>{`${new Date().getFullYear()} | Made with love by Andrei Biswas`}</small>
    </StyledFooter>
  );
};

export default Footer;

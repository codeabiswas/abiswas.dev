import React from "react";
import { BsHeart } from "react-icons/bs";
import StyledFooter from "./Footer.styled";

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

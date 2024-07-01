import React from "react";
import StyledFooter from "./styled";

const Footer = () => {
  return (
    <StyledFooter>
      Made with ❤️ by Andrei Biswas | {`${new Date().getFullYear()}`}
    </StyledFooter>
  );
};

export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer className="d-flex justify-content-center">
      Made with ❤️ by Andrei Biswas | {`${new Date().getFullYear()}`}
    </footer>
  );
};

export default Footer;

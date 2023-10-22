import React from "react";
import { Container } from "react-bootstrap";

const Layout = ({ children }) => {
  // Bootstrap Breakpoints info: https://react-bootstrap.github.io/docs/layout/breakpoints/
  return <Container fluid="md">{children}</Container>;
};

export default Layout;
